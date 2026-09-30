import { apiClient } from "@/lib/apiClient";
import type {
  RegisterInput,
  LoginInput,
  ChangePasswordInput,
  ForgotPasswordInput,
  ResetPasswordInput,
  UpdateUsernameInput,
  ChangeEmailInput,
  VerifyEmailChangeInput,
} from "@/schema/auth.schema"


export type User = {
    id : string,
    email: string,
    username? : string,
    shareSlug? : string,
    isBrainPublic : boolean,
    canChangeEmail : boolean
}


export const register = async (data: RegisterInput) => {
  const response = await apiClient.post("/auth/register", data)
  return response.data
}


export const login = async (data: LoginInput) => {
  const response = await apiClient.post("/auth/login", data)
  return response.data
}


export const getCurrentUser = async (): Promise<User> => {
  const response = await apiClient.get("/auth/me")
  return response.data.data
}


export const changePassword = async (
  data: ChangePasswordInput,
) => {
  const response = await apiClient.post("/auth/change-password",data)
  return response.data
}

export const forgotPassword = async (
  data : ForgotPasswordInput
) => {
  const response = await apiClient.post("/auth/forgot-password", data)
  return response.data
}

export const resetPassword = async (
  data : ResetPasswordInput
) => {
  const response = await apiClient.post("/auth/reset-password", data)
  return response.data
}

export const logout = async () => {
  const response = await apiClient.post("/auth/logout")
  return response.data
}

export const updateUsername = async (data : UpdateUsernameInput) => {
  const response = await apiClient.patch("/auth/profile/username", data)
  return response.data
}

export const changeEmail = async (data : ChangeEmailInput) => {
  const response = await apiClient.post("/auth/profile/email", data)
  return response.data
}

export const verifyEmailChange = async (data : VerifyEmailChangeInput) => {
  const response = await apiClient.post("/auth/profile/email/verify", data)
  return response.data
}