import { Router } from "express";
import  {validate}  from "../../middleware/validate.middleware.js";
import { registerSchema, loginSchema, changePasswordSchema } from "./auth.schema.js";
import { loginController, logoutController, registerController, changePasswordController, refreshTokenController, getMeController } from "./auth.controller.js";
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

router.post("/refresh-token",
           catchAsyncError(refreshTokenController))

export default router;