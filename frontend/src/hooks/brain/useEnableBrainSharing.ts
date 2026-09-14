import { useMutation } from "@tanstack/react-query"
import { enableBrainSharing } from "@/services/brain/brain.api"
import { useAuthStore } from "@/store/auth.store"

export const useEnableBrainSharing = () => {
    const setBrainPublic = useAuthStore((state) => state.setBrainPublic)

  return useMutation({
    mutationFn: enableBrainSharing,
    
    onSuccess: () => {
      setBrainPublic(true)
    }
  })
}