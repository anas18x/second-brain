import { useQuery } from "@tanstack/react-query"
import { getBrainShareViews } from "@/services/brain/brain.api"


export const useBrainShareViews = () => {
  return useQuery({

    queryKey: ["brainShareViews"],

    queryFn: getBrainShareViews,

    staleTime: 5 * 60 * 1000,

  })

}