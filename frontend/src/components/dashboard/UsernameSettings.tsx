import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { UserRound, X } from "lucide-react"

import { updateUsernameSchema, type UpdateUsernameInput} from "@/schema/auth.schema"
import { updateUsername } from "@/services/auth/auth.api"
import { useAuthStore } from "@/store/auth.store"

type UsernameSettingsProps = {
  isOpen: boolean
  onToggle: () => void
  onClose: () => void
}

function UsernameSettings({
  isOpen,
  onToggle,
  onClose,
}: UsernameSettingsProps) {
  const user = useAuthStore((state) => state.user)
  const setUser = useAuthStore((state) => state.setUser)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<UpdateUsernameInput>({
    resolver: zodResolver(updateUsernameSchema),
    defaultValues: {
      username: user?.username ?? "",
    },
  })

  useEffect(() => {
    if (isOpen) {
      reset({
        username: user?.username ?? "",
      })
    }
  }, [isOpen, user?.username, reset])

  async function onSubmit(data: UpdateUsernameInput) {
    try {
      await updateUsername(data)

      if (user) {
        setUser({
          ...user,
          username: data.username,
        })
      }

      toast.success("Username updated successfully")
      onClose()
    } catch {
      toast.error("Failed to update username")
    }
  }

  return (
    <div className="border-b border-border/70">
      <div
        className="
          flex
          items-center
          justify-between
          gap-4
          px-4
          py-4
          sm:px-5
        "
      >
        <div className="flex min-w-0 items-center gap-3">
          <div
            className="
              flex
              size-9
              shrink-0
              items-center
              justify-center
              rounded-lg
              border
              border-border/70
              bg-muted/60
              text-muted-foreground
            "
          >
            <UserRound className="size-4" />
          </div>

          <div className="min-w-0">
            <p className="text-sm font-medium text-foreground">
              Username
            </p>

            <p
              className="
                mt-0.5
                truncate
                text-xs
                text-muted-foreground
              "
            >
              Change your username
            </p>
          </div>
        </div>

        <button
          type="button"
          disabled={isSubmitting}
          onClick={onToggle}
          className="
            inline-flex
            h-8
            shrink-0
            cursor-pointer
            items-center
            justify-center
            rounded-md
            border
            border-border/70
            bg-background
            px-3
            text-xs
            font-medium
            text-foreground
            transition-colors
            hover:bg-muted
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-ring
            focus-visible:ring-offset-2
            disabled:pointer-events-none
            disabled:opacity-50
          "
        >
          {isOpen ? "Close" : "Change"}
        </button>
      </div>

      {isOpen && (
        <div className="px-4 pb-5 sm:px-5">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="
              rounded-lg
              border
              border-border/70
              bg-muted/20
              p-4
            "
          >
            <label
              htmlFor="username"
              className="
                text-xs
                font-medium
                text-foreground
              "
            >
              New username
            </label>

            <input
              id="username"
              {...register("username")}
              placeholder="Enter username"
              className="
                mt-2
                h-10
                w-full
                rounded-md
                border
                border-input
                bg-background
                px-3
                text-sm
                text-foreground
                outline-none
                transition-colors
                placeholder:text-muted-foreground/50
                focus:border-ring
                focus:ring-2
                focus:ring-ring/15
              "
            />

            {errors.username && (
              <p className="mt-1 text-xs text-destructive">
                {errors.username.message}
              </p>
            )}

            <div className="mt-3 flex justify-end gap-2">
              <button
                type="button"
                disabled={isSubmitting}
                onClick={onClose}
                className="
                  inline-flex
                  h-8
                  cursor-pointer
                  items-center
                  gap-1.5
                  rounded-md
                  border
                  border-border
                  bg-background
                  px-3
                  text-xs
                  font-medium
                  text-muted-foreground
                  transition-colors
                  hover:bg-muted
                  hover:text-foreground
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-ring
                  focus-visible:ring-offset-2
                  disabled:pointer-events-none
                  disabled:opacity-50
                "
              >
                <X className="size-3.5" />
                Cancel
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                className="
                  inline-flex
                  h-8
                  cursor-pointer
                  items-center
                  rounded-md
                  bg-primary
                  px-3
                  text-xs
                  font-medium
                  text-primary-foreground
                  transition-opacity
                  hover:opacity-90
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-ring
                  focus-visible:ring-offset-2
                  disabled:pointer-events-none
                  disabled:opacity-50
                "
              >
                {isSubmitting ? "Updating..." : "Update username"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}

export default UsernameSettings