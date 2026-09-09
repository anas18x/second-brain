import { apiClient } from "@/lib/apiClient";
import type {
  RegisterInput,
  LoginInput,
  ChangePasswordInput,
} from "@/schema/auth.schema"


export type User = {
    id : string,
    username : string,
    shareSlug : string,
    isBrainPublic : boolean
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
  return response.data
}


export const changePassword = async (
  data: ChangePasswordInput,
) => {
  const response = await apiClient.post(
    "/auth/change-password",
    data,
  )

  return response.data
}


export const logout = async () => {
  const response = await apiClient.post("/auth/logout")
  return response.data
}