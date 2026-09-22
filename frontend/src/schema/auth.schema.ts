import { z } from "zod"

export const registerSchema = z.object({
  email: z
    .email({ error: "Invalid email address" })
    .transform((email) => email.trim().toLowerCase()),

  password: z
    .string()
    .min(6, "Password must be at least 6 characters long"),
})


export const loginSchema = z.object({
  email: z
    .email({ error: "Invalid email address" })
    .transform((email) => email.trim().toLowerCase()),

  password: z
    .string()
    .min(1, {
      error: "Password is required",
    }),
})


export const changePasswordSchema = z.object({
  oldPassword: z.string().min(1, "Old Password is required"),
  newPassword: z.string().min(6, "New password must be at least 6 characters long"),
})


export const changePasswordFormSchema = changePasswordSchema.extend({
  confirmPassword: z.string(),
}).refine(
  (data) => data.newPassword === data.confirmPassword,
  {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  }
)


export const resetPasswordSchema = z.object({
  email: z.email({
    error: "Invalid email address",
  }).transform((email) => email.trim().toLowerCase()),

  otp: z.string().regex(/^\d{6}$/, {
    error: "OTP must be exactly 6 digits",
  }),

  newPassword: z.string().min(6, {
    error: "New password must be at least 6 characters long",
  }),
})


export const forgotPasswordSchema = z.object({
  email: z
    .email({ error: "Invalid email address" })
    .transform((email) => email.trim().toLowerCase()),
})

export type ResetPasswordInput = z.infer<typeof resetPasswordSchema>
export type ForgotPasswordInput = z.infer<typeof forgotPasswordSchema>
export type RegisterInput = z.infer<typeof registerSchema>
export type LoginInput = z.infer<typeof loginSchema>
export type ChangePasswordInput = z.infer<typeof changePasswordSchema>
export type ChangePasswordFormInput = z.infer<typeof changePasswordFormSchema>