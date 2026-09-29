import { Link, useNavigate } from "react-router-dom"

import Brand from "@/components/shared/Brand"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { useForm } from "react-hook-form"

import {
  forgotPasswordSchema,
  type ForgotPasswordInput,
} from "@/schema/auth.schema"

import { forgotPassword } from "@/services/auth/auth.api"

import axios from "axios"
import { useState } from "react"

import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"

function ForgotPasswordPage() {
  const navigate = useNavigate()

  const [serverError, setServerError] = useState("")

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordInput>({
    resolver: zodResolver(forgotPasswordSchema),
  })

  async function onSubmit(data: ForgotPasswordInput) {
    try {
      setServerError("")

      await forgotPassword(data)

      toast.success(
        "If the account exists, a password reset OTP has been sent to your email.",
      )

      navigate("/reset-password", {
        state: {
          email: data.email,
        },
      })
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setServerError(
          error.response?.data?.message ??
            "Something went wrong. Please try again",
        )
      } else {
        setServerError("Something went wrong. Please try again")
      }
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-3 py-4 sm:px-6 sm:py-10">
      <div
        className="
          w-full max-w-[310px]

          rounded-2xl
          border border-foreground/10
          bg-card/40

          px-4 py-7

          shadow-[0_20px_60px_rgba(0,0,0,0.04)]
          backdrop-blur-xl

          dark:border-white/[0.08]
          dark:bg-white/[0.025]
          dark:shadow-[0_24px_70px_rgba(0,0,0,0.35)]

          sm:max-w-[410px]
          sm:px-8 sm:py-9
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
            Forgot your password?
          </h1>

          <p
            className="
              mx-auto
              mt-2
              max-w-[260px]

              text-[11px]
              leading-4
              text-muted-foreground

              sm:max-w-[320px]
              sm:text-sm
              sm:leading-5
            "
          >
            Enter your email address and we&apos;ll send you a 6-digit
            verification code to securely reset your password.
          </p>
        </div>

        {/* Form */}
        <div>
          {/* Server Error */}
          {serverError && (
            <p
              role="alert"
              className="
                mb-4
                rounded-md

                border
                border-destructive/20

                bg-destructive/[0.06]

                px-2.5
                py-2

                text-center
                text-[11px]
                font-medium
                text-destructive

                dark:border-destructive/25
                dark:bg-destructive/[0.08]
              "
            >
              {serverError}
            </p>
          )}

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 sm:space-y-6"
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
                {...register("email", {
                  onChange: () => setServerError(""),
                })}
                id="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                className="
                  h-9
                  rounded-lg

                  border-border/80
                  bg-background/50

                  text-xs
                  text-foreground

                  shadow-none

                  placeholder:text-muted-foreground/45

                  transition-all
                  duration-200

                  focus-visible:border-foreground/25
                  focus-visible:ring-2
                  focus-visible:ring-foreground/10

                  dark:border-white/[0.10]
                  dark:bg-white/[0.025]
                  dark:focus-visible:border-white/[0.20]
                  dark:focus-visible:ring-white/[0.08]

                  sm:h-11
                  sm:text-base
                "
              />

              {errors.email && (
                <p className="text-[10px] text-destructive sm:text-xs">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="
                h-9
                w-full
                cursor-pointer
                rounded-lg

                border
                border-foreground

                bg-primary
                text-primary-foreground

                text-xs
                font-medium

                shadow-[0_4px_14px_rgba(0,0,0,0.10)]

                transition-all
                duration-300

                hover:-translate-y-0.5
                hover:bg-primary
                hover:shadow-[0_10px_25px_rgba(0,0,0,0.14)]

                active:translate-y-0
                active:shadow-[0_4px_10px_rgba(0,0,0,0.10)]

                disabled:cursor-not-allowed
                disabled:opacity-60

                dark:border-white
                dark:shadow-[0_4px_18px_rgba(0,0,0,0.30)]
                dark:hover:shadow-[0_10px_30px_rgba(0,0,0,0.40)]

                sm:h-11
                sm:text-base
              "
            >
              {isSubmitting ? "Sending..." : "Send reset code"}
            </Button>
          </form>
        </div>

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
              hover:underline
              hover:underline-offset-4

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

export default ForgotPasswordPage