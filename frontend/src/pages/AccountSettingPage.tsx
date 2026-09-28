import { KeyRound, Mail, UserRound } from "lucide-react"

function AccountSettingPage() {
  return (
    <div className="min-h-svh bg-background">
      <div className="mx-auto w-full max-w-4xl px-6 py-10 md:px-10 md:py-12">

        {/* Header */}

        <div className="max-w-2xl">
          <h1 className="text-2xl font-semibold tracking-tight text-foreground">
            Account Settings
          </h1>

          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Manage your account information and security settings.
          </p>
        </div>

        {/* Profile */}

        <section className="mt-10 rounded-xl border border-border bg-card">

          <div className="border-b border-border px-5 py-5">
            <h2 className="text-sm font-medium text-card-foreground">
              Profile
            </h2>

            <p className="mt-1 text-sm leading-5 text-muted-foreground">
              Manage the information associated with your account.
            </p>
          </div>

          {/* Username */}

          <div className="flex items-center justify-between gap-6 border-b border-border px-5 py-5">
            <div className="flex min-w-0 items-start gap-3">
              <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted">
                <UserRound className="size-4 text-muted-foreground" />
              </div>

              <div className="min-w-0">
                <p className="text-sm font-medium text-foreground">
                  Username
                </p>

                <p className="mt-1 text-sm text-muted-foreground">
                  Choose the username that will identify you.
                </p>
              </div>
            </div>

            <button
              type="button"
              className="
                shrink-0
                rounded-lg
                border
                border-border
                bg-background
                px-3.5
                py-2
                text-sm
                font-medium
                text-foreground
                transition-colors
                hover:bg-muted
              "
            >
              Change
            </button>
          </div>

          {/* Email */}

          <div className="flex items-center justify-between gap-6 px-5 py-5">
            <div className="flex min-w-0 items-start gap-3">
              <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted">
                <Mail className="size-4 text-muted-foreground" />
              </div>

              <div className="min-w-0">
                <p className="text-sm font-medium text-foreground">
                  Email address
                </p>

                <p className="mt-1 text-sm text-muted-foreground">
                  Your email is used for authentication and account recovery.
                </p>
              </div>
            </div>

            <button
              type="button"
              className="
                shrink-0
                rounded-lg
                border
                border-border
                bg-background
                px-3.5
                py-2
                text-sm
                font-medium
                text-foreground
                transition-colors
                hover:bg-muted
              "
            >
              Change
            </button>
          </div>
        </section>

        {/* Security */}

        <section className="mt-6 rounded-xl border border-border bg-card">

          <div className="border-b border-border px-5 py-5">
            <h2 className="text-sm font-medium text-card-foreground">
              Security
            </h2>

            <p className="mt-1 text-sm leading-5 text-muted-foreground">
              Keep your account secure by regularly updating your password.
            </p>
          </div>

          <div className="flex items-center justify-between gap-6 px-5 py-5">
            <div className="flex min-w-0 items-start gap-3">
              <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted">
                <KeyRound className="size-4 text-muted-foreground" />
              </div>

              <div className="min-w-0">
                <p className="text-sm font-medium text-foreground">
                  Password
                </p>

                <p className="mt-1 text-sm text-muted-foreground">
                  Update your password to keep your account secure.
                </p>
              </div>
            </div>

            <button
              type="button"
              className="
                shrink-0
                rounded-lg
                border
                border-border
                bg-background
                px-3.5
                py-2
                text-sm
                font-medium
                text-foreground
                transition-colors
                hover:bg-muted
              "
            >
              Change
            </button>
          </div>
        </section>

      </div>
    </div>
  )
}

export default AccountSettingPage