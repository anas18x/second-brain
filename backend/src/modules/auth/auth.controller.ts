import type { NextFunction, Request, Response } from "express";
import  StatusCodes from "http-status-codes";
import { SuccessResponse } from "../../utils/common/responseHandler.js";
import * as authService from "./auth.service.js";
import AppError from "../../utils/error/AppError.js";
import { generateAccessToken, generateRefreshToken } from "../../utils/common/tokens.js";
import bcrypt from "bcrypt";
import {ENV} from "../../config/ENV.config.js";


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

        res.cookie(
            "refreshToken",
            result.refreshToken,
            {
                httpOnly: true, 
                secure: true,        
                sameSite: "none",         // sent in cross-site requests
                maxAge: 7 * 24 * 60 * 60 * 1000  
            })    
        
        SuccessResponse(res, null, "Token refreshed successfully", StatusCodes.OK)    
    
}


export const googleAuthController = async (
    req: Request,
    res: Response
) => {
    const { state, codeVerifier, codeChallenge } =
        authService.generateGoogleOAuthParams();

    const from = req.query.from === "register" ? "register" : "login";
    res.cookie("oauth_origin", from, {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        maxAge: 10 * 60 * 1000,
    });    

    res.cookie("oauth_state", state, {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        maxAge: 10 * 60 * 1000,
    });

    res.cookie("oauth_code_verifier", codeVerifier, {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        maxAge: 10 * 60 * 1000,
    });

    const googleUrl = authService.buildGoogleAuthorizationUrl(state, codeChallenge);
    res.redirect(googleUrl);

};


export const googleAuthCallbackController = async (
    req: Request,
    res: Response
) => {
    const { code, state, error } = req.query;

    const oauthOrigin = req.cookies.oauth_origin;

    const redirectPath =
        oauthOrigin === "register"
            ? "/register"
            : "/login";

    // Google returned an OAuth error
    if (typeof error === "string") {
        res.clearCookie("oauth_state");
        res.clearCookie("oauth_code_verifier");
        res.clearCookie("oauth_origin");

        const errorCode =
            error === "access_denied"
                ? "oauth_cancelled"
                : "oauth_failed";

        return res.redirect(
            `${ENV.FRONTEND_URL}${redirectPath}?error=${errorCode}`
        );
    }

    const oauthState = req.cookies.oauth_state;
    const codeVerifier = req.cookies.oauth_code_verifier;

    // Validate callback data
    if (
        typeof code !== "string" ||
        typeof state !== "string" ||
        typeof oauthState !== "string" ||
        typeof codeVerifier !== "string" ||
        typeof oauthOrigin !== "string"
    ) {
        res.clearCookie("oauth_state");
        res.clearCookie("oauth_code_verifier");
        res.clearCookie("oauth_origin");

        return res.redirect(
            `${ENV.FRONTEND_URL}${redirectPath}?error=oauth_failed`
        );
    }

    // Validate state
    if (state !== oauthState) {
        res.clearCookie("oauth_state");
        res.clearCookie("oauth_code_verifier");
        res.clearCookie("oauth_origin");

        return res.redirect(
            `${ENV.FRONTEND_URL}${redirectPath}?error=oauth_failed`
        );
    }

    // OAuth transaction is validated.
    // Temporary OAuth cookies are no longer needed.
    res.clearCookie("oauth_state");
    res.clearCookie("oauth_code_verifier");
    res.clearCookie("oauth_origin");

    try {
        // Exchange authorization code for Google tokens
        const tokens = await authService.exchangeGoogleCode(
            code,
            codeVerifier
        );

        // Verify Google's ID token
        const payload = await authService.verifyGoogleIdToken(
            tokens.id_token as string
        );

        if (
            !payload.sub ||
            !payload.email ||
            !payload.email_verified
        ) {
            return res.redirect(
                `${ENV.FRONTEND_URL}${redirectPath}?error=oauth_failed`
            );
        }

        // Check whether this Google identity is already connected
        const user = await authService.findUserByGoogleIdentity(
            payload.sub
        );

        // Existing Google user
        if (user) {
            const accessToken = generateAccessToken(
                user._id.toString()
            );

            const refreshToken = generateRefreshToken(
                user._id.toString()
            );

            const hashedRefreshToken = await bcrypt.hash(
                refreshToken,
                10
            );

            user.refreshToken = hashedRefreshToken;
            await user.save();

            res.cookie("accessToken", accessToken, {
                httpOnly: true,
                secure: true,
                sameSite: "none",
                maxAge: 15 * 60 * 1000,
            });

            res.cookie("refreshToken", refreshToken, {
                httpOnly: true,
                secure: true,
                sameSite: "none",
                maxAge: 7 * 24 * 60 * 60 * 1000,
            });

            return res.redirect(
                `${ENV.FRONTEND_URL}/dashboard`
            );
        }

        // Google identity doesn't exist.
        // Check whether a normal Brainly account already
        // exists with this email.
        const existingUser = await authService.findUserByEmail(
            payload.email
        );

        if (existingUser) {
            return res.redirect(
                `${ENV.FRONTEND_URL}/login?error=oauth_account_exists`
            );
        }

        // Create new Brainly user + Google identity
        const newUser =
            await authService.createGoogleUserWithIdentity(
                payload.email,
                payload.sub
            );

        const accessToken = generateAccessToken(
            newUser._id.toString()
        );

        const refreshToken = generateRefreshToken(
            newUser._id.toString()
        );

        const hashedRefreshToken = await bcrypt.hash(
            refreshToken,
            10
        );

        newUser.refreshToken = hashedRefreshToken;

        await newUser.save();

        res.cookie("accessToken", accessToken, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            maxAge: 15 * 60 * 1000,
        });

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        return res.redirect(
            `${ENV.FRONTEND_URL}/dashboard`
        );

    } catch (error) {
        console.error(
            "Google OAuth callback failed:",
            error
        );

        return res.redirect(
            `${ENV.FRONTEND_URL}${redirectPath}?error=oauth_failed`
        );
    }
};