import axios from "axios"
const API_URL = import.meta.env.VITE_API_URL


export const apiClient = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
})


const refreshClient = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
})


apiClient.interceptors.response.use(

  (response) => response,

  async(error) => {
    const originalRequest = error.config

    const skipRefresh =
    originalRequest.url?.includes("/auth/login") ||
    originalRequest.url?.includes("/auth/register") ||
    originalRequest.url?.includes("/auth/change-password") ||
    originalRequest.url?.includes("/auth/logout")

    if(error.response?.status === 401 && !originalRequest._retry && !skipRefresh){
      originalRequest._retry = true;
      
      try{
        await refreshClient.post("/auth/refresh-token")
        return apiClient(originalRequest)
      } catch{
        window.location.href = "/login"
        return Promise.reject(error)
      }
    }

      return Promise.reject(error)
  }
)


