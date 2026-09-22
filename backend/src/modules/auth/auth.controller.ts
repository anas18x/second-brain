import type { NextFunction, Request, Response } from "express";
import  StatusCodes from "http-status-codes";
import { SuccessResponse } from "../../utils/common/responseHandler.js";
import * as authService from "./auth.service.js";



export const getMeController = async (
    req : Request,
    res : Response,
    next : NextFunction
) => {
        const user = await authService.getCurrentUser(req.user!.userId)
        SuccessResponse(res, user, "User details fetched successfully", StatusCodes.OK)
}


export const registerController = async (
    req : Request,
    res : Response,
    next : NextFunction
) => {
        const user = await authService.register(req.body)
        SuccessResponse(res, user, "User registered successfully", StatusCodes.CREATED)
}


export const loginController = async (
    req : Request,
    res : Response,
    next : NextFunction
) => {
        const result = await authService.login(req.body)

        res.cookie(
            "accessToken",
            result.accessToken,
            {
                httpOnly: true,         // JavaScript cannot access it. document.cookie cannot read token
                secure: true,           // only sent over HTTPS
                sameSite: "none",         // sent in cross-site requests
                maxAge: 15 * 60 * 1000  // 15 minutes
            })

        res.cookie(
            "refreshToken",
            result.refreshToken,
            {
                httpOnly: true, 
                secure: true,
                sameSite: "none",         // sent in cross-site requests
                maxAge: 7 * 24 * 60 * 60 * 1000  // 7 days
            })
    
        SuccessResponse(res, {user: result.user}, "Login successful", StatusCodes.OK)
}


export const logoutController = async (
    req : Request,
    res : Response, 
    next : NextFunction
) => {
        await authService.logout(req.user!.userId)
        res.clearCookie("accessToken")
        res.clearCookie("refreshToken")
        SuccessResponse(res, null, "Logout successful", StatusCodes.OK)
}


export const changePasswordController = async (
    req : Request,
    res : Response, 
    next : NextFunction
) => {
        await authService.changePassword(req.user!.userId, req.body)
        res.clearCookie("accessToken")
        res.clearCookie("refreshToken")
        SuccessResponse(res, null, "Password changed successfully. Please log in again.", StatusCodes.OK)
}


export const forgotPasswordController = async (
    req: Request,
    res: Response
) => {
    await authService.forgotPassword(req.body)

    SuccessResponse(
        res,
        null,
        "If the account exists, a password reset OTP has been sent",
        StatusCodes.OK
    )
}


export const resetPasswordController = async (
    req: Request,
    res: Response
) => {
    await authService.resetPassword(req.body)
    SuccessResponse(
        res,
        null,
        "Password reset successfully",
        StatusCodes.OK
    )
}


export const updateUsernameController = async (
    req: Request,
    res: Response
) => {
    const updatedUser = await authService.updateUsername(req.user!.userId, req.body)
    SuccessResponse(
        res,
        updatedUser,
        "Username updated successfully",
        StatusCodes.OK
    )
}


export const changeEmailController = async (
    req: Request,
    res: Response
) => {
    await authService.changeEmail(req.user!.userId, req.body)
    SuccessResponse(
        res,
        null,
        "OTP sent to the new email address.",
        StatusCodes.OK
    )
}

export const verifyEmailChangeController = async (
    req: Request,
    res: Response
) => {
    await authService.verifyEmailChange(req.user!.userId, req.body)
    SuccessResponse(
        res,
        null,
        "Email updated successfully.",
        StatusCodes.OK
    )
}

export const refreshTokenController = async (
    req : Request,
    res : Response,
    next : NextFunction
) => {

        const result = await authService.refreshToken(req.cookies.refreshToken)

        res.cookie(
            "accessToken",
            result.accessToken,
            {
                httpOnly: true, 
                secure: true,        
                sameSite: "none",         // sent in cross-site requests
                maxAge: 15 * 60 * 1000  
            })
        
        SuccessResponse(res, null, "Token refreshed successfully", StatusCodes.OK)    
    
}