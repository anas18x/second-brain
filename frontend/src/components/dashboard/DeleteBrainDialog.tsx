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

function DeleteBrainDialog() {
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
          text-slate-400
          transition-colors
          duration-200
          hover:bg-red-50
          hover:text-red-600
        "
      >
        <Trash2 className="size-4" strokeWidth={1.8} />
      </AlertDialogTrigger>

      {/* Confirmation */}
      <AlertDialogContent
        className="
          rounded-2xl
          border
          border-slate-300
          bg-white
          shadow-[0_20px_60px_rgba(15,23,42,0.15)]
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
              bg-red-50
              text-red-600
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
              text-slate-950
            "
          >
            Delete this brain?
          </AlertDialogTitle>

          <AlertDialogDescription
            className="
              font-['Geist_Mono']
              text-xs
              leading-5
              text-slate-500
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
              border-slate-300
              font-['Space_Grotesk']
              text-xs
              font-semibold
              hover:bg-slate-50
            "
          >
            Cancel
          </AlertDialogCancel>

          <AlertDialogAction
            className="
              cursor-pointer
              rounded-lg
              bg-red-600
              font-['Space_Grotesk']
              text-xs
              font-semibold
              text-white
              shadow-none
              transition-all
              duration-200
              hover:bg-red-700
              hover:shadow-[0_6px_16px_rgba(220,38,38,0.18)]
            "
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default DeleteBrainDialog