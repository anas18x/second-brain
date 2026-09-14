import { apiClient } from "@/lib/apiClient"
import type {GetBrainsQueryInput,UpdateBrainInput,CreateBrainInput} from "@/schema/brain.schema"

import type {
  Brain, BrainPagination, SharedBrain, BrainShareView,
} from "@/types/brain.types"



export const createBrain = async (data : CreateBrainInput) : Promise<Brain> => {
    const response = await apiClient.post("/brain",data)
    return response.data.data.brain
}


export const getBrains = async (params : GetBrainsQueryInput) : Promise<{data : Brain[], pagination:BrainPagination}> => {
     const response = await apiClient.get("/brain", {params})
     return response.data.data
}


export const getBrainById = async (id: string): Promise<Brain> => {
  const response = await apiClient.get(`/brain/${id}`)
  return response.data.data.brain
}


export const updateBrain = async ( id: string, data: UpdateBrainInput): Promise<Brain> => {
  const response = await apiClient.patch(`/brain/${id}`, data)
  return response.data.data.brain
}


export const deleteBrain = async (id: string): Promise<null> => {
  const response = await apiClient.delete(`/brain/${id}`)
  return response.data.data
}


export const getTags = async () : Promise<string[]> => {
    const response = await apiClient.get("/brain/tags")
    return response.data.data.tags
}


export const enableBrainSharing = async (): Promise<string> => {
  const response = await apiClient.post("/brain/share")
  return response.data.data.result.shareSlug
}


export const getPublicBrain = async (shareSlug: string): Promise<SharedBrain> => {
  const response = await apiClient.get(`/brain/share/${shareSlug}`)
  return response.data.data.brain
}


export const disableBrainSharing = async (): Promise<null> => {
  const response = await apiClient.patch("/brain/share")
  return response.data.data
}


export const getBrainShareViews = async (): Promise<BrainShareView[]> => {
  const response = await apiClient.get("/brain/share/views")
  return response.data.data.views
}