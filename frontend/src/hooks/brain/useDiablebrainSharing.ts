import { useMutation } from "@tanstack/react-query"
import { disableBrainSharing } from "@/services/brain/brain.api"
import { useAuthStore } from "@/store/auth.store"


export const useDisableBrainSharing = () => {
  const setBrainPublic = useAuthStore((state) => state.setBrainPublic)

  return useMutation({

    mutationFn: disableBrainSharing,

    onSuccess: () => {
      setBrainPublic(false)
    }

  })

}