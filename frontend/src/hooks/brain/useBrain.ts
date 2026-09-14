import { useQuery } from "@tanstack/react-query"
import { getBrainById } from "@/services/brain/brain.api"

export const useBrain = (id:string) => {
    return useQuery({
      queryKey : ["brain",id],
      queryFn : () => getBrainById(id),
      staleTime: 5 * 60 * 1000,
    })
}