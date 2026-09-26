import { Router } from "express";
import  { validate}  from "../../middleware/validate.middleware.js";
import { registerSchema, loginSchema, changePasswordSchema ,forgotPasswordSchema, updateUsernameSchema, changeEmailSchema, verifyEmailChangeSchema, resetPasswordSchema} from "./auth.schema.js";
import { loginController, logoutController, registerController, changePasswordController, refreshTokenController, getMeController,forgotPasswordController,resetPasswordController, updateUsernameController, changeEmailController, verifyEmailChangeController, googleAuthController,googleAuthCallbackController } from "./auth.controller.js";
import {authMiddleware} from "../../middleware/auth.middleware.js";
import { catchAsyncError } from "../../middleware/catchAsyncError.js";



const router = Router()

router.get("/me", authMiddleware, catchAsyncError(getMeController) )

router.post("/register",
          validate(registerSchema),
          catchAsyncError(registerController)); 

router.post("/login",
          validate(loginSchema),
          catchAsyncError(loginController)); 

router.post("/logout",
          authMiddleware,
          catchAsyncError(logoutController));

router.post("/change-password",
          authMiddleware,
          validate(changePasswordSchema),
          catchAsyncError(changePasswordController))

router.post("/forgot-password",
          validate(forgotPasswordSchema),
          catchAsyncError(forgotPasswordController))  
          
router.post("/reset-password",
          validate(resetPasswordSchema),  
          catchAsyncError(resetPasswordController))  
          
router.patch("/profile/username",
          authMiddleware,
          validate(updateUsernameSchema),
          catchAsyncError(updateUsernameController))     
          
router.post("/profile/email",
          authMiddleware,
          validate(changeEmailSchema),
          catchAsyncError(changeEmailController))    
          
router.post("/profile/email/verify",
          authMiddleware,
          validate(verifyEmailChangeSchema),
          catchAsyncError(verifyEmailChangeController))          

router.post("/refresh-token",
           catchAsyncError(refreshTokenController))


router.get("/google",
              catchAsyncError(googleAuthController))

router.get("/google/callback", 
           catchAsyncError(googleAuthCallbackController));              


export default router;