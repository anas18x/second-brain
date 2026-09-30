import { useState } from "react"

import UsernameSettings from "@/components/dashboard/UsernameSettings"
import EmailSettings from "@/components/dashboard/EmailSettings"
import PasswordSettings from "@/components/dashboard/PasswordSettings"


type OpenSection = "username" | "email" | "password" | null

function AccountSettingPage() {
  const [openSection, setOpenSection] = useState<OpenSection>(null)
  const [emailOtpStep, setEmailOtpStep] = useState(false)

  function toggleSection(section: OpenSection) {
    if (openSection === section) {
      setOpenSection(null)

      if (section === "email") {
        setEmailOtpStep(false)
      }

      return
    }

    setOpenSection(section)

    if (section === "email") {
      setEmailOtpStep(false)
    }
  }

  function closeSection() {
    setOpenSection(null)
    setEmailOtpStep(false)
  }

  return (
    <div className="min-h-svh min-w-0 bg-background">
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

          <UsernameSettings
            isOpen={openSection === "username"}
            onToggle={() => toggleSection("username")}
            onClose={closeSection}
          />

          <EmailSettings
            isOpen={openSection === "email"}
            onToggle={() => toggleSection("email")}
            onClose={closeSection}
            emailOtpStep={emailOtpStep}
            setEmailOtpStep={setEmailOtpStep}
          />
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

          <PasswordSettings
            isOpen={openSection === "password"}
            onToggle={() => toggleSection("password")}
            onClose={closeSection}
          />
        </section>
      </div>
    </div>
  )
}

export default AccountSettingPage