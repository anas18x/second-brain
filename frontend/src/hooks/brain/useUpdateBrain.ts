import { updateBrain } from "@/services/brain/brain.api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type  {UpdateBrainInput} from "@/schema/brain.schema";
import { toast } from "sonner";


export const useUpdateBrain = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn : ({id,data}: {id: string, data: UpdateBrainInput}) => {
            return updateBrain(id,data)
        },
    
        // _ is the data returned from the mutation function, and {id} is the variable passed to the mutation function
        onSuccess : ( _ , {id} ) => {
            queryClient.invalidateQueries({ queryKey: ["brains"] })
            queryClient.invalidateQueries({ queryKey: ["brain", id] })

            toast.success("Brain updated successfully")
        }
    })
} 