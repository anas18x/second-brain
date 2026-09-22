import {z} from 'zod'

export const registerSchema = z.object({
  email: z.email({ error: "Invalid email address" })
    .transform((email) => email.trim().toLowerCase()),

  password: z.string().min(6, {
    error: "Password must be at least 6 characters long",
  }),
})


export const loginSchema = z.object({
  email: z.email({ error: "Invalid email address" })
    .transform((email) => email.trim().toLowerCase()),

  password: z.string().min(1, {
    error: "Password is required",
  }),
})


export const changePasswordSchema = z.object({
    oldPassword : z.string().min(1, "Old Password is required"),
    newPassword : z.string().min(6,"New password must be at least 6 characters long")
})


export const forgotPasswordSchema = z.object({
  email: z.email({ error: "Invalid email address" })
    .transform((email) => email.trim().toLowerCase()),
})

export const resetPasswordSchema = z.object({
  email: z.email({ error: "Invalid email address" })
    .transform((email) => email.trim().toLowerCase()),  
  otp: z.string().regex(/^\d{6}$/, "OTP must be a 6-digit number"),
  newPassword: z.string().min(6, "New password must be at least 6 characters long"),
})

export const updateUsernameSchema = z.object({
  username: z
    .string()
    .trim()
    .min(3, {
      error: "Username must be at least 3 characters long",
    })
    .max(20, {
      error: "Username must be at most 20 characters long",
    }),
});


export const changeEmailSchema = z.object({
  email: z.email({ error: "Invalid email address" })
    .transform((email) => email.trim().toLowerCase()),
});

export const verifyEmailChangeSchema = z.object({
  otp: z.string().regex(/^\d{6}$/, {
    error: "OTP must be exactly 6 digits",
  }),
});



export type VerifyEmailChangeInput = z.infer<typeof verifyEmailChangeSchema>;
export type ChangeEmailInput = z.infer<typeof changeEmailSchema>;
export type RegisterInput = z.infer<typeof registerSchema>
export type LoginInput = z.infer<typeof loginSchema>
export type ChangePasswordInput = z.infer<typeof changePasswordSchema>
export type ForgotPasswordInput = z.infer<typeof forgotPasswordSchema>
export type ResetPasswordInput = z.infer<typeof resetPasswordSchema>
export type UpdateUsernameInput = z.infer<typeof updateUsernameSchema>;