import { Link, useLocation, useNavigate } from "react-router-dom"

import Brand from "@/components/shared/Brand"

import { Button } from "@/components/ui/button"

import { Input } from "@/components/ui/input"

import { Label } from "@/components/ui/label"

import { useForm } from "react-hook-form"

import {
  resetPasswordSchema,
  type ResetPasswordInput,
} from "@/schema/auth.schema"

import { resetPassword } from "@/services/auth/auth.api"

import axios from "axios"

import { toast } from "sonner"

import { zodResolver } from "@hookform/resolvers/zod"


function ResetPasswordPage() {
  const navigate = useNavigate()

  const location = useLocation()

  const email = location.state?.email as string | undefined

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordInput>({
    resolver: zodResolver(resetPasswordSchema),

    defaultValues: {
      email: email ?? "",
    },
  })


  async function onSubmit(data: ResetPasswordInput) {
    try {
      await resetPassword(data)

      toast.success("Password reset successfully. Please sign in.")

      navigate("/login", { replace: true })
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message =
          error.response?.data?.message ??
          "Something went wrong. Please try again"

        if (
          message ===
          "Maximum OTP attempts exceeded. Please request a new one."
        ) {
          toast.error(message)

          navigate("/forgot-password", { replace: true })

          return
        }

        toast.error(message)
      } else {
        toast.error("Something went wrong. Please try again")
      }
    }
  }


  if (!email) {
    return (
      <main className="flex min-h-screen items-center justify-center px-3">
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Reset session not found.
          </p>

          <Link
            to="/forgot-password"
            className="
              mt-3 inline-block
              text-sm font-medium
              text-foreground
              transition-colors duration-200
              hover:text-muted-foreground
            "
          >
            Request a new reset code
          </Link>
        </div>
      </main>
    )
  }


  return (
    <main className="flex min-h-screen items-center justify-center px-3 py-4 sm:px-6 sm:py-10">

      <div
        className="
          w-full max-w-[310px]

          rounded-2xl

          border border-border/60

          bg-card/45

          px-4 py-7

          shadow-[0_12px_40px_rgba(0,0,0,0.04)]

          backdrop-blur-xl

          sm:max-w-[410px]
          sm:px-8
          sm:py-9

          dark:bg-card/35
          dark:border-white/[0.08]
          dark:shadow-[0_18px_55px_rgba(0,0,0,0.28)]
        "
      >

        {/* Brand */}

        <div className="mx-auto mb-7 w-fit sm:mb-9">
          <Brand />
        </div>


        {/* Heading */}

        <div className="mb-7 text-center sm:mb-8">

          <h1
            className="
              text-[20px]
              font-semibold
              tracking-[-0.035em]
              text-foreground

              sm:text-[26px]
            "
          >
            Reset your password
          </h1>

          <p
            className="
              mx-auto
              mt-2
              max-w-[270px]

              text-[11px]
              leading-4
              text-muted-foreground

              sm:max-w-[320px]
              sm:text-sm
              sm:leading-5
            "
          >
            Enter the 6-digit verification code sent to your email and set a
            new password.
          </p>

        </div>


        {/* Form */}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 sm:space-y-5"
        >

          {/* Email */}

          <div className="space-y-1.5 sm:space-y-2.5">

            <Label
              htmlFor="email"
              className="
                text-[11px]
                font-medium
                text-foreground

                sm:text-sm
              "
            >
              Email address
            </Label>

            <Input
              {...register("email")}
              id="email"
              type="email"
              readOnly
              aria-readonly="true"
              className="
                h-9
                cursor-not-allowed
                rounded-lg

                border-border/60
                bg-muted/35

                text-xs
                text-muted-foreground

                shadow-inner
                shadow-black/[0.02]

                select-none

                sm:h-11
                sm:text-base

                dark:border-white/[0.08]
                dark:bg-white/[0.035]
                dark:shadow-inner
                dark:shadow-black/20
              "
            />

          </div>


          {/* OTP */}

          <div className="space-y-1.5 sm:space-y-2.5">

            <Label
              htmlFor="otp"
              className="
                text-[11px]
                font-medium
                text-foreground

                sm:text-sm
              "
            >
              Verification code
            </Label>

            <Input
              {...register("otp")}
              id="otp"
              type="text"
              inputMode="numeric"
              maxLength={6}
              placeholder="Enter 6-digit code"
              autoComplete="one-time-code"
              className="
                h-9
                rounded-lg

                border-border/60
                bg-background/40

                text-xs
                text-foreground

                tracking-[0.15em]

                shadow-none

                placeholder:tracking-normal
                placeholder:text-muted-foreground/50

                transition-all
                duration-200

                focus-visible:border-foreground/30
                focus-visible:ring-2
                focus-visible:ring-foreground/10

                sm:h-11
                sm:text-base

                dark:border-white/[0.09]
                dark:bg-white/[0.025]
                dark:focus-visible:border-white/20
                dark:focus-visible:ring-white/10
              "
            />

            {errors.otp && (
              <p
                className="
                  text-[10px]
                  text-destructive

                  sm:text-xs
                "
              >
                {errors.otp.message}
              </p>
            )}

          </div>


          {/* New Password */}

          <div className="space-y-1.5 sm:space-y-2.5">

            <Label
              htmlFor="newPassword"
              className="
                text-[11px]
                font-medium
                text-foreground

                sm:text-sm
              "
            >
              New password
            </Label>

            <Input
              {...register("newPassword")}
              id="newPassword"
              type="password"
              placeholder="Create a new password"
              autoComplete="new-password"
              className="
                h-9
                rounded-lg

                border-border/60
                bg-background/40

                text-xs
                text-foreground

                shadow-none

                placeholder:text-muted-foreground/50

                transition-all
                duration-200

                focus-visible:border-foreground/30
                focus-visible:ring-2
                focus-visible:ring-foreground/10

                sm:h-11
                sm:text-base

                dark:border-white/[0.09]
                dark:bg-white/[0.025]
                dark:focus-visible:border-white/20
                dark:focus-visible:ring-white/10
              "
            />

            {errors.newPassword && (
              <p
                className="
                  text-[10px]
                  text-destructive

                  sm:text-xs
                "
              >
                {errors.newPassword.message}
              </p>
            )}

          </div>


          {/* Submit */}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="
              mt-1
              h-9
              w-full
              cursor-pointer
              rounded-lg

              border
              border-primary

              bg-primary
              text-primary-foreground

              text-xs
              font-medium

              shadow-[0_4px_14px_rgba(0,0,0,0.10)]

              transition-all
              duration-300

              hover:-translate-y-0.5
              hover:bg-primary
              hover:shadow-[0_10px_28px_rgba(0,0,0,0.14)]

              active:translate-y-0
              active:shadow-[0_4px_10px_rgba(0,0,0,0.10)]

              disabled:cursor-not-allowed
              disabled:opacity-60

              dark:shadow-[0_4px_18px_rgba(0,0,0,0.35)]

              dark:hover:shadow-[0_10px_30px_rgba(0,0,0,0.45)]

              sm:h-11
              sm:text-base
            "
          >
            {isSubmitting ? "Resetting password..." : "Reset password"}
          </Button>

        </form>


        {/* Back to Login */}

        <div className="mt-7 flex justify-center sm:mt-8">

          <Link
            to="/login"
            className="
              text-[11px]
              font-medium
              text-muted-foreground

              transition-colors
              duration-200

              hover:text-foreground

              sm:text-sm
            "
          >
            ← Back to sign in
          </Link>

        </div>

      </div>

    </main>
  )
}

export default ResetPasswordPage