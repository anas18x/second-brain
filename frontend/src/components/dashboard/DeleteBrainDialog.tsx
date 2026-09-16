import { Trash2 } from "lucide-react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useDeleteBrain } from "@/hooks/brain/useDeleteBrain"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"


function DeleteBrainDialog({ id }: { id: string }) {
   const deleteMutation = useDeleteBrain()
   const navigate = useNavigate()

  return (
    <AlertDialog>
      {/* Trigger */}
      <AlertDialogTrigger
        className="
          inline-flex
          cursor-pointer
          items-center
          justify-center
          rounded-lg
          p-2
          text-muted-foreground/60
          transition-colors
          duration-200
          hover:bg-white/[0.06]
          hover:text-foreground
        "
      >
        <Trash2 className="size-4" strokeWidth={1.8} />
      </AlertDialogTrigger>
      {/* Confirmation */}
      <AlertDialogContent
        className="
          rounded-2xl
          border
          border-white/10
          bg-[#0d0d0d]
          text-foreground
          shadow-[0_20px_60px_rgba(0,0,0,0.5)]
          sm:max-w-[400px]
        "
      >
        <AlertDialogHeader>
          <div
            className="
              mb-2
              flex
              size-10
              items-center
              justify-center
              rounded-xl
              border
              border-[#ef3340]/20
              bg-[#ef3340]/10
              text-[#ff6b73]
            "
          >
            <Trash2
              className="size-5"
              strokeWidth={1.8}
            />
          </div>
          <AlertDialogTitle
            className="
              font-sans
              text-lg
              font-medium
              tracking-tight
              text-foreground
            "
          >
            Delete this brain?
          </AlertDialogTitle>
          <AlertDialogDescription
            className="
              font-['Geist_Mono']
              text-xs
              leading-5
              text-muted-foreground
            "
          >
            This will permanently remove this entry from
            your second brain. This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="mt-2">
          <AlertDialogCancel
            className="
              cursor-pointer
              rounded-lg
              border-white/10
              bg-white/[0.04]
              font-['Space_Grotesk']
              text-xs
              font-semibold
              text-muted-foreground
              hover:bg-white/[0.08]
              hover:text-foreground
            "
          >
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={() =>deleteMutation.mutate(id,{
              onSuccess: () => {
                navigate("/dashboard")
              },
              onError: () => {
                toast.error("Failed to delete brain. Please try again.")
              }
            })}
            disabled={deleteMutation.isPending}

            className="
              cursor-pointer
              rounded-lg
              border
              border-[#ef3340]
              bg-[#ef3340]
              font-['Space_Grotesk']
              text-xs
              font-semibold
              text-white
              shadow-[0_4px_12px_rgba(239,51,64,0.14)]
              transition-all
              duration-200
              hover:bg-[#ef3340]/90
              hover:shadow-[0_6px_16px_rgba(239,51,64,0.22)]
            "
          >
            {deleteMutation.isPending ? "Deleting..." : "Delete"}

          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default DeleteBrainDialog