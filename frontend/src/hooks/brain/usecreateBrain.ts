import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createBrain } from "@/services/brain/brain.api";
import type { CreateBrainInput } from "@/schema/brain.schema";


export const useCreateBrain = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn : (data : CreateBrainInput) => createBrain(data),

        onSuccess : () => {
            queryClient.invalidateQueries({
                queryKey : ["brains"]
            })
        }
    })
} 