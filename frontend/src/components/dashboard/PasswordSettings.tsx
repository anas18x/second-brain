import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { KeyRound, X } from "lucide-react"
import {changePasswordFormSchema,type ChangePasswordFormInput} from "@/schema/auth.schema"

import { changePassword } from "@/services/auth/auth.api"

type PasswordSettingsProps = {
  isOpen: boolean
  onToggle: () => void
  onClose: () => void
}

function PasswordSettings({
  isOpen,
  onToggle,
  onClose,
}: PasswordSettingsProps) {
    
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ChangePasswordFormInput>({
    resolver: zodResolver(changePasswordFormSchema),
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  })

  async function onSubmit(data: ChangePasswordFormInput) {
    try {
      await changePassword({
        oldPassword: data.oldPassword,
        newPassword: data.newPassword,
      })

      toast.success("Password changed successfully")

      reset()
      onClose()
    } catch {
      toast.error("Failed to change password")
    }
  }

  return (
    <div>
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
            <KeyRound className="size-4" />
          </div>

          <div className="min-w-0">
            <p className="text-sm font-medium text-foreground">
              Password
            </p>

            <p
              className="
                mt-0.5
                truncate
                text-xs
                text-muted-foreground
              "
            >
              Change your password
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
            <div className="space-y-3">
              <div>
                <label
                  htmlFor="current-password"
                  className="
                    text-xs
                    font-medium
                    text-foreground
                  "
                >
                  Current password
                </label>

                <input
                  id="current-password"
                  type="password"
                  {...register("oldPassword")}
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
                    focus:border-ring
                    focus:ring-2
                    focus:ring-ring/15
                  "
                />

                {errors.oldPassword && (
                  <p className="mt-1 text-xs text-destructive">
                    {errors.oldPassword.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="new-password"
                  className="
                    text-xs
                    font-medium
                    text-foreground
                  "
                >
                  New password
                </label>

                <input
                  id="new-password"
                  type="password"
                  {...register("newPassword")}
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
                    focus:border-ring
                    focus:ring-2
                    focus:ring-ring/15
                  "
                />

                {errors.newPassword && (
                  <p className="mt-1 text-xs text-destructive">
                    {errors.newPassword.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="confirm-password"
                  className="
                    text-xs
                    font-medium
                    text-foreground
                  "
                >
                  Confirm new password
                </label>

                <input
                  id="confirm-password"
                  type="password"
                  {...register("confirmPassword")}
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
                    focus:border-ring
                    focus:ring-2
                    focus:ring-ring/15
                  "
                />

                {errors.confirmPassword && (
                  <p className="mt-1 text-xs text-destructive">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-4 flex justify-end gap-2">
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
                {isSubmitting ? "Updating..." : "Update password"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}

export default PasswordSettings