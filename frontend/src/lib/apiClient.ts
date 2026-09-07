import axios from "axios"

export const apiClient = axios.create({
  baseURL: "http://127.0.0.1:3000/api/v1",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
})