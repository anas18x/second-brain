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
          hover:bg-muted
          hover:text-foreground
        "
      >
        <Trash2
          className="size-4"
          strokeWidth={1.8}
        />
      </AlertDialogTrigger>

      {/* Confirmation */}
      <AlertDialogContent
        className="
          w-[calc(100%-3rem)]
          rounded-2xl
          border
          border-border/60
          bg-background
          text-foreground
          shadow-[0_20px_60px_rgba(0,0,0,0.16)]
          dark:shadow-[0_20px_60px_rgba(0,0,0,0.45)]
          sm:w-[calc(100%-2rem)]
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
              border-[#e04430]/20
              bg-[#e04430]/8
              text-[#e04430]
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
              border-border
              bg-muted/30
              font-['Space_Grotesk']
              text-xs
              font-semibold
              text-muted-foreground
              hover:bg-muted
              hover:text-foreground
            "
          >
            Cancel
          </AlertDialogCancel>

          <AlertDialogAction
            onClick={() =>
              deleteMutation.mutate(id, {
                onSuccess: () => {
                  navigate("/dashboard")
                },
                onError: () => {
                  toast.error(
                    "Failed to delete brain. Please try again."
                  )
                },
              })
            }
            disabled={deleteMutation.isPending}
            className="
              cursor-pointer
              rounded-lg
              border
              border-black
              bg-black
              font-['Space_Grotesk']
              text-xs
              font-semibold
              text-white
              shadow-sm
              transition-all
              duration-200
              hover:bg-black/90
              hover:shadow-md
              dark:border-white
              dark:bg-white
              dark:text-black
              dark:hover:bg-white/90
            "
          >
            {deleteMutation.isPending
              ? "Deleting..."
              : "Delete"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default DeleteBrainDialog