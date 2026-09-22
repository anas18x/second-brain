import type { RegisterInput, LoginInput , ChangePasswordInput,ForgotPasswordInput, ResetPasswordInput, UpdateUsernameInput, ChangeEmailInput, VerifyEmailChangeInput   } from "./auth.schema.js";
import bcrypt from 'bcrypt';
import User from "../users/user.model.js";
import AppError from "../../utils/error/AppError.js";
import { StatusCodes } from "http-status-codes";
import { generateAccessToken, generateRefreshToken } from "../../utils/common/tokens.js";
import jwt from "jsonwebtoken";
import {ENV} from "../../config/ENV.config.js"
import VerificationToken from "../users/verificationToken.model.js";
import crypto from "crypto";
import { sendOtp } from "../../utils/email/email.service.js";


export const getCurrentUser = async (
    userId : string
) => {
    const user = await User.findById(userId).select("email username shareSlug isBrainPublic")
    if(!user) throw new AppError("User not found", StatusCodes.NOT_FOUND)

    return {
        id: user._id,
        email: user.email,
        username: user.username,
        shareSlug: user.shareSlug,
        isBrainPublic: user.isBrainPublic
    }
}



export const register = async (
    payload : RegisterInput
) => {
   
    const existingUser = await User.findOne({email: payload.email})
    if(existingUser){
        throw new AppError("User already exists", StatusCodes.CONFLICT)
    }

    const hashedPassword = await bcrypt.hash(payload.password, 10);
    const user = new User({
        email: payload.email,
        password: hashedPassword
    })
    await user.save();

    return {
        id: user._id,
        email: user.email,
    }
}   



export const login = async (
    payload : LoginInput
) => {

    const user = await User.findOne({
        email : payload.email
    })

    if(!user || !user.password) throw new AppError("invalid credentials", StatusCodes.UNAUTHORIZED)

    const isPasswordMatched = await bcrypt.compare(payload.password, user.password) 

    if(isPasswordMatched){
        const accessToken = generateAccessToken(user._id.toString())
        const refreshToken = generateRefreshToken(user._id.toString())
        const hashedRefreshToken = await bcrypt.hash(refreshToken, 10)

        user.refreshToken = hashedRefreshToken
        await user.save()

        return {
            accessToken,
            refreshToken,
            user : {
                id: user._id,
                email: user.email,
            }
        }


    } else {
        throw new AppError("invalid credentials", StatusCodes.UNAUTHORIZED)
    }
}



export const logout = async (
    userId : string
) => {
    const user = await User.findById(userId)
    if(!user) throw new AppError("User not found", StatusCodes.NOT_FOUND)

    user.refreshToken = null
    await user.save()    
}



export const changePassword = async (
    userId : string,
    payload : ChangePasswordInput
) => {

    const user = await User.findById(userId)
    if(!user) throw new AppError("User not found", StatusCodes.NOT_FOUND)
    if(!user.password) throw new AppError("Password is not set for this account", StatusCodes.BAD_REQUEST)    

    if(!await bcrypt.compare(payload.oldPassword, user.password)) {
        throw new AppError("Old password is incorrect", StatusCodes.UNAUTHORIZED)
    }
    const hashedNewPassword = await bcrypt.hash(payload.newPassword, 10)
    user.password = hashedNewPassword
    user.refreshToken = null // Invalidate existing refresh tokens on password change
    await user.save()

}

export const forgotPassword = async (
    payload : ForgotPasswordInput
) => {
    const user = await User.findOne({
        email : payload.email
    });
    if(!user) return;

    // invalidate any prev password-reset otp
    await VerificationToken.deleteOne({
        userId : user._id,
        type : "PASSWORD_RESET"
    })

    const otp = crypto.randomInt(100000, 1000000).toString()
    const tokenHash = await bcrypt.hash(otp, 10)
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000) // 10 minutes from now

    const verificationToken = await VerificationToken.create({
        userId : user._id,
        type : "PASSWORD_RESET",
        tokenHash,
        attempts : 0,
        expiresAt
    })

    try{
        await sendOtp(user.email, otp)
    } catch (error) {
        // otp didnt successfully send, delete the token from db
        await VerificationToken.deleteOne({
            _id: verificationToken._id
        })

        throw new AppError("Failed to send password reset OTP. Please try again later.", StatusCodes.INTERNAL_SERVER_ERROR)
    }
}


export const resetPassword = async (
    payload : ResetPasswordInput 
) => {
    const user = await User.findOne({
        email : payload.email
    })
    if(!user) {
        throw new AppError("Invalid email or OTP", StatusCodes.BAD_REQUEST)
    }

    const verificationToken = await VerificationToken.findOne({
        userId : user._id,
        type : "PASSWORD_RESET"
    })
    if(!verificationToken){
        throw new AppError("Invalid email or OTP", StatusCodes.BAD_REQUEST)
    };

    if(verificationToken.expiresAt <= new Date()){
        await VerificationToken.deleteOne({
            _id: verificationToken._id
        })
        throw new AppError("OTP has expired. Please request a new one.", StatusCodes.BAD_REQUEST)
    }

    if(verificationToken.attempts >= 5){
        await VerificationToken.deleteOne({
            _id: verificationToken._id
        })
        throw new AppError("Maximum OTP attempts exceeded. Please request a new one.", StatusCodes.BAD_REQUEST)
    }

    const isOtpValid = await bcrypt.compare(payload.otp, verificationToken.tokenHash)

    if(!isOtpValid){
        verificationToken.attempts += 1
        if(verificationToken.attempts >= 5){
            await VerificationToken.deleteOne({
                _id: verificationToken._id
            })
        } else {
            await verificationToken.save()
        }
        throw new AppError("Invalid email or OTP", StatusCodes.BAD_REQUEST)
    }

    const hashedNewPassword = await bcrypt.hash(payload.newPassword, 10)
    user.password = hashedNewPassword
    user.refreshToken = null // Invalidate existing refresh tokens on password reset
    await user.save()

    // OTP can no longer be reused
    await VerificationToken.deleteOne({
        _id: verificationToken._id
    })
}


export const updateUsername = async (
    userId : string,
    payload : UpdateUsernameInput
) => {
    const user = await User.findById(userId)
    if(!user) throw new AppError("User not found", StatusCodes.NOT_FOUND)

    user.username = payload.username
    await user.save()

    return {
        id: user._id,
        username: user.username
    }
}

export const changeEmail = async (
    userId : string,
    payload : ChangeEmailInput
) => {
    const user = await User.findById(userId)
    if(!user) throw new AppError("User not found", StatusCodes.NOT_FOUND)

    if(user.email === payload.email) throw new AppError("New email cannot be the same as the current email", StatusCodes.BAD_REQUEST)

    const existingUser = await User.findOne({email: payload.email})
    if(existingUser) throw new AppError("Email already in use", StatusCodes.BAD_REQUEST)

    await VerificationToken.deleteOne({
        userId : user._id,
        type : "EMAIL_CHANGE"
    })
    
    const otp = crypto.randomInt(100000, 1000000).toString()
    const tokenHash = await bcrypt.hash(otp, 10)
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000) // 10 minutes from now

    const verificationToken = await VerificationToken.create({
        userId : user._id,
        type : "EMAIL_CHANGE",
        newEmail : payload.email,
        tokenHash,
        attempts : 0,
        expiresAt
    })

    try{
        await sendOtp(payload.email, otp)
    } catch (error) {
        // otp didnt successfully send, delete the token from db
        await VerificationToken.deleteOne({
            _id: verificationToken._id
        })
        throw new AppError("Failed to send OTP", StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

export const verifyEmailChange = async (
    userId : string,
    payload : VerifyEmailChangeInput
) => {
    const user = await User.findById(userId)
    if(!user) throw new AppError("User not found", StatusCodes.NOT_FOUND)

    const verificationToken = await VerificationToken.findOne({
        userId : user._id,
        type : "EMAIL_CHANGE"
    })
    
    if(!verificationToken){
        throw new AppError("Invalid or expired OTP", StatusCodes.BAD_REQUEST)
    }

    if(verificationToken.expiresAt <= new Date()){
        await VerificationToken.deleteOne({
            _id: verificationToken._id
        })
        throw new AppError("OTP has expired. Please request a new one.", StatusCodes.BAD_REQUEST)
    }

    if(verificationToken.attempts >= 5){
        await VerificationToken.deleteOne({
            _id: verificationToken._id
        })
        throw new AppError("Maximum OTP attempts exceeded. Please request a new one.", StatusCodes.BAD_REQUEST)
    }

    const isOtpValid = await bcrypt.compare(payload.otp, verificationToken.tokenHash)

    if(!isOtpValid){
        verificationToken.attempts += 1
        if(verificationToken.attempts >= 5){
            await VerificationToken.deleteOne({
                _id: verificationToken._id
            })
        } else {
            await verificationToken.save()
        }
        throw new AppError("Invalid OTP. Please try again.", StatusCodes.BAD_REQUEST)
    }

    user.email = verificationToken.newEmail!
    await user.save()

    await VerificationToken.deleteOne({
        _id: verificationToken._id
    })
}

export const refreshToken = async (
    refreshToken : string
) => {
    if(!refreshToken) throw new AppError("Refresh token is missing", StatusCodes.UNAUTHORIZED)

    const decoded = jwt.verify(refreshToken, ENV.JWT_SECRET) as {userId : string}

    const user = await User.findById(decoded.userId)
    if(!user || !user.refreshToken) throw new AppError("Invalid refresh token", StatusCodes.UNAUTHORIZED)   
        
    if(!await bcrypt.compare(refreshToken, user.refreshToken)) {
        throw new AppError("Invalid refresh token", StatusCodes.UNAUTHORIZED)
    }
    
    const accessToken = generateAccessToken(user._id.toString())
    const newRefreshToken = generateRefreshToken(user._id.toString())
    const hashedNewRefreshToken = await bcrypt.hash(newRefreshToken, 10)
    user.refreshToken = hashedNewRefreshToken
    await user.save()
    return {accessToken, refreshToken: newRefreshToken}

}