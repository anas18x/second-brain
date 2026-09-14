import { useQuery } from "@tanstack/react-query"
import { getPublicBrain } from "@/services/brain/brain.api"


export const usePublicBrain = (shareSlug: string) => {
  return useQuery({

    queryKey: ["publicBrain", shareSlug],

    queryFn: () => getPublicBrain(shareSlug),

    staleTime: 5 * 60 * 1000,

  })

}