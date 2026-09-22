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
      toast.success("If the account exists, a password reset OTP has been sent to your email.")
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
          rounded-2xl border border-border/70 bg-card/30
          px-4 py-7
          sm:max-w-[410px] sm:px-8 sm:py-9
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
              text-[20px] font-semibold tracking-[-0.025em] text-foreground
              sm:text-[26px]
            "
          >
            Forgot your password?
          </h1>

          <p
            className="
              mx-auto mt-2 max-w-[260px]
              text-[11px] leading-4 text-muted-foreground
              sm:max-w-[320px] sm:text-sm sm:leading-5
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
                mb-4 rounded-md
                border border-[var(--landing-accent)]/20
                bg-[var(--landing-accent)]/5
                px-2.5 py-2
                text-center text-[11px] font-medium
                text-[var(--landing-accent)]
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
                className="text-[11px] font-medium text-foreground sm:text-sm"
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
                  h-9 rounded-lg
                  border-border bg-transparent
                  text-xs text-foreground
                  shadow-none
                  placeholder:text-muted-foreground/50
                  transition-all duration-200
                  focus-visible:border-[var(--landing-accent)]
                  focus-visible:ring-[var(--landing-accent)]/15
                  sm:h-11 sm:text-base
                "
              />

              {errors.email && (
                <p className="text-[10px] text-[var(--landing-accent)] sm:text-xs">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="
                h-9 w-full cursor-pointer rounded-lg
                border border-[var(--landing-accent)]
                bg-[var(--landing-accent)]
                text-xs text-white
                shadow-[0_4px_14px_rgba(224,68,48,0.16)]
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-[var(--landing-accent)]
                hover:shadow-[0_10px_25px_rgba(224,68,48,0.24)]
                active:translate-y-0
                active:shadow-[0_4px_10px_rgba(224,68,48,0.16)]
                disabled:cursor-not-allowed
                disabled:opacity-60
                sm:h-11 sm:text-base
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
              text-[11px] font-medium text-muted-foreground
              transition-colors
              hover:text-[var(--landing-accent)]
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