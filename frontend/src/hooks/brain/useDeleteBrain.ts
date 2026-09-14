import { deleteBrain } from "@/services/brain/brain.api"
import { useMutation, useQueryClient } from "@tanstack/react-query"


export const useDeleteBrain = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn : (id : string) => deleteBrain(id),
        onSuccess : ( _ , id) => {
                queryClient.invalidateQueries({ queryKey: ["brains"] })
                queryClient.removeQueries({ queryKey: ["brain", id] })
        }
    })
}