import { Mail, X } from "lucide-react"

import { useAuthStore } from "@/store/auth.store"

type EmailSettingsProps = {
  isOpen: boolean
  onToggle: () => void
  onClose: () => void
  emailOtpStep: boolean
  setEmailOtpStep: (value: boolean) => void
}

function EmailSettings({
  isOpen,
  onToggle,
  onClose,
  emailOtpStep,
  setEmailOtpStep,
}: EmailSettingsProps) {
  const user = useAuthStore((state) => state.user)

  const canChangeEmail = user?.canChangeEmail ?? false

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
            <Mail className="size-4" />
          </div>

          <div className="min-w-0">
            <p className="text-sm font-medium text-foreground">
              Email address
            </p>

            <p
              className="
                mt-0.5
                truncate
                text-xs
                text-muted-foreground
              "
            >
              {canChangeEmail
                ? "Change your email address"
                : "This email is managed by your account provider"}
            </p>
          </div>
        </div>

        {canChangeEmail && (
          <button
            type="button"
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
            "
          >
            {isOpen ? "Close" : "Change"}
          </button>
        )}
      </div>

      {canChangeEmail && isOpen && (
        <div className="px-4 pb-5 sm:px-5">
          {!emailOtpStep ? (
            <div
              className="
                rounded-lg
                border
                border-border/70
                bg-muted/20
                p-4
              "
            >
              <label
                htmlFor="new-email"
                className="
                  text-xs
                  font-medium
                  text-foreground
                "
              >
                New email address
              </label>

              <input
                id="new-email"
                type="email"
                placeholder="Enter new email"
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

              <div className="mt-3 flex justify-end gap-2">
                <button
                  type="button"
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
                  "
                >
                  <X className="size-3.5" />
                  Cancel
                </button>

                <button
                  type="button"
                  onClick={() => setEmailOtpStep(true)}
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
                  "
                >
                  Send OTP
                </button>
              </div>
            </div>
          ) : (
            <div
              className="
                rounded-lg
                border
                border-border/70
                bg-muted/20
                p-4
              "
            >
              <p className="text-xs font-medium text-foreground">
                Verify your new email
              </p>

              <p
                className="
                  mt-1
                  text-xs
                  leading-5
                  text-muted-foreground
                "
              >
                Enter the 6-digit OTP sent to your new
                email address.
              </p>

              <input
                id="email-otp"
                inputMode="numeric"
                autoComplete="one-time-code"
                maxLength={6}
                placeholder="Enter 6-digit OTP"
                className="
                  mt-3
                  h-10
                  w-full
                  rounded-md
                  border
                  border-input
                  bg-background
                  px-3
                  text-center
                  text-sm
                  tracking-[0.2em]
                  text-foreground
                  outline-none
                  transition-colors
                  placeholder:tracking-normal
                  placeholder:text-muted-foreground/50
                  focus:border-ring
                  focus:ring-2
                  focus:ring-ring/15
                "
              />

              <div className="mt-3 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setEmailOtpStep(false)}
                  className="
                    inline-flex
                    h-8
                    cursor-pointer
                    items-center
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
                  "
                >
                  Back
                </button>

                <button
                  type="button"
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
                  "
                >
                  Verify OTP
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default EmailSettings