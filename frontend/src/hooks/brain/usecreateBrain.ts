import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createBrain } from "@/services/brain/brain.api";
import type { CreateBrainInput } from "@/schema/brain.schema";
import { toast } from "sonner"


export const useCreateBrain = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn : (data : CreateBrainInput) => createBrain(data),

        onSuccess : () => {
            queryClient.invalidateQueries({
                queryKey : ["brains"]
            })
            queryClient.invalidateQueries({
                queryKey : ["tags"]
            })

            toast.success("Brain created successfully")
        }
    })
} 