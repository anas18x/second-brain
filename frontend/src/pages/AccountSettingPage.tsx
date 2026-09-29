import { useState } from "react"
import {
  KeyRound,
  Mail,
  UserRound,
  X,
} from "lucide-react"

type OpenSection =
  | "username"
  | "email"
  | "password"
  | null

type AccordionContentProps = {
  open: boolean
  children: React.ReactNode
}

function AccordionContent({
  open,
  children,
}: AccordionContentProps) {
  return (
    <div
      className={`
        grid
        transition-[grid-template-rows,opacity]
        duration-300
        ease-out
        ${
          open
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }
      `}
    >
      <div className="min-h-0 overflow-hidden">
        {children}
      </div>
    </div>
  )
}

function AccountSettingPage() {
  const [openSection, setOpenSection] =
    useState<OpenSection>(null)

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [currentPassword, setCurrentPassword] =
    useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] =
    useState("")

  function toggleSection(section: OpenSection) {
    setOpenSection((current) =>
      current === section ? null : section
    )
  }

  function closeSection() {
    setOpenSection(null)
    setUsername("")
    setEmail("")
    setCurrentPassword("")
    setNewPassword("")
    setConfirmPassword("")
  }

  return (
    <div className="min-h-svh min-w-0 bg-background font-sans">
      <div
        className="
          mx-auto
          w-full
          max-w-4xl
          px-4
          pb-10
          pt-16
          sm:px-6
          sm:pb-12
          sm:pt-8
          md:px-8
          lg:px-10
        "
      >
        {/* Header */}
        <div>
          <h1
            className="
              text-2xl
              font-semibold
              tracking-[-0.02em]
              text-foreground
              sm:text-3xl
            "
          >
            Account Settings
          </h1>

          <p
            className="
              mt-1.5
              text-sm
              text-muted-foreground
            "
          >
            Manage your account and security preferences.
          </p>
        </div>

        {/* Profile */}
        <section
          className="
            mt-8
            overflow-hidden
            rounded-xl
            border
            border-border/70
            bg-card/50
            shadow-[0_1px_2px_rgba(0,0,0,0.03)]
            dark:shadow-none
          "
        >
          {/* Section heading */}
          <div
            className="
              border-b
              border-border/70
              px-4
              py-3.5
              sm:px-5
            "
          >
            <h2
              className="
                text-xs
                font-medium
                uppercase
                tracking-[0.08em]
                text-muted-foreground
              "
            >
              Profile
            </h2>
          </div>

          {/* Username */}
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
                  <p
                    className="
                      text-sm
                      font-medium
                      text-foreground
                    "
                  >
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
                onClick={() =>
                  toggleSection("username")
                }
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
                {openSection === "username"
                  ? "Close"
                  : "Change"}
              </button>
            </div>

            <AccordionContent
              open={openSection === "username"}
            >
              <div className="px-4 pb-5 sm:px-5">
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
                    value={username}
                    onChange={(event) =>
                      setUsername(event.target.value)
                    }
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

                  <div className="mt-3 flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={closeSection}
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
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </div>

          {/* Email */}
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
                  <p
                    className="
                      text-sm
                      font-medium
                      text-foreground
                    "
                  >
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
                    Change your email address
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() =>
                  toggleSection("email")
                }
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
                {openSection === "email"
                  ? "Close"
                  : "Change"}
              </button>
            </div>

            <AccordionContent
              open={openSection === "email"}
            >
              <div className="px-4 pb-5 sm:px-5">
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
                    htmlFor="email"
                    className="
                      text-xs
                      font-medium
                      text-foreground
                    "
                  >
                    New email address
                  </label>

                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(event) =>
                      setEmail(event.target.value)
                    }
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
                      onClick={closeSection}
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
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </div>
        </section>

        {/* Security */}
        <section
          className="
            mt-5
            overflow-hidden
            rounded-xl
            border
            border-border/70
            bg-card/50
            shadow-[0_1px_2px_rgba(0,0,0,0.03)]
            dark:shadow-none
          "
        >
          {/* Section heading */}
          <div
            className="
              border-b
              border-border/70
              px-4
              py-3.5
              sm:px-5
            "
          >
            <h2
              className="
                text-xs
                font-medium
                uppercase
                tracking-[0.08em]
                text-muted-foreground
              "
            >
              Security
            </h2>
          </div>

          {/* Password */}
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
                  <p
                    className="
                      text-sm
                      font-medium
                      text-foreground
                    "
                  >
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
                onClick={() =>
                  toggleSection("password")
                }
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
                {openSection === "password"
                  ? "Close"
                  : "Change"}
              </button>
            </div>

            <AccordionContent
              open={openSection === "password"}
            >
              <div className="px-4 pb-5 sm:px-5">
                <div
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
                        value={currentPassword}
                        onChange={(event) =>
                          setCurrentPassword(
                            event.target.value
                          )
                        }
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
                        value={newPassword}
                        onChange={(event) =>
                          setNewPassword(
                            event.target.value
                          )
                        }
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
                        value={confirmPassword}
                        onChange={(event) =>
                          setConfirmPassword(
                            event.target.value
                          )
                        }
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
                    </div>
                  </div>

                  <div className="mt-4 flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={closeSection}
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
                      Update password
                    </button>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </div>
        </section>
      </div>
    </div>
  )
}

export default AccountSettingPage