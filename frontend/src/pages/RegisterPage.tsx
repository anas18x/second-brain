import { Link, useNavigate, useSearchParams } from "react-router-dom"

import Brand from "@/components/shared/Brand"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import axios from "axios"
import { useForm } from "react-hook-form"

import {
  registerSchema,
  type RegisterInput,
} from "@/schema/auth.schema"

import { zodResolver } from "@hookform/resolvers/zod"
import { register as UserRegister } from "@/services/auth/auth.api"

import { useState } from "react"
import { toast } from "sonner"

function RegisterPage() {
  const navigate = useNavigate()

  const [serverError, setServerError] = useState("")

  const [searchParams] = useSearchParams()

  const oauthError = searchParams.get("error")

  const oauthErrorMessage =
    oauthError === "oauth_cancelled"
      ? "Google sign-in was cancelled."
      : oauthError === "oauth_failed"
        ? "Google sign-in failed. Please try again."
        : ""

  const handleGoogleLogin = () => {
    window.location.href = `${import.meta.env.VITE_API_URL}/auth/google?from=register`
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
  })

  async function onSubmit(data: RegisterInput) {
    try {
      setServerError("")

      await UserRegister(data)

      toast.success("Account created successfully. Please sign in.")

      navigate("/login")
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
    <main className="flex min-h-screen items-center justify-center px-3 py-3 sm:px-6 sm:py-10">
      <div
        className="
          w-full max-w-[320px]
          rounded-2xl
          border border-foreground/10
          bg-card/40
          px-3.5 py-4
          shadow-[0_20px_60px_rgba(0,0,0,0.04)]
          backdrop-blur-xl

          dark:border-white/[0.08]
          dark:bg-white/[0.025]
          dark:shadow-[0_24px_70px_rgba(0,0,0,0.35)]

          sm:max-w-[390px]
          sm:px-7 sm:py-8
        "
      >
        {/* Brand */}
        <div className="mx-auto mb-4 w-fit sm:mb-8">
          <Brand />
        </div>

        {/* Heading */}
        <div className="mb-4 text-center sm:mb-6">
          <h1
            className="
              text-[18px]
              font-semibold
              tracking-[-0.035em]
              text-foreground
              sm:text-[24px]
            "
          >
            Welcome 👋 Let&apos;s get started
          </h1>

          <p
            className="
              mt-1
              text-[11px]
              leading-4
              text-muted-foreground
              sm:mt-2
              sm:text-[13px]
            "
          >
            Your Second Brain starts here.
          </p>
        </div>

        {/* Google OAuth */}
        <Button
          type="button"
          variant="outline"
          onClick={handleGoogleLogin}
          className="
            h-9
            w-full
            cursor-pointer
            rounded-lg

            border-foreground/10
            bg-background/40

            text-xs
            font-medium
            text-foreground

            shadow-[0_1px_2px_rgba(0,0,0,0.03)]
            backdrop-blur-sm

            transition-all
            duration-200

            hover:-translate-y-px
            hover:border-foreground/15
            hover:bg-muted/60
            hover:shadow-[0_4px_14px_rgba(0,0,0,0.06)]

            active:translate-y-0

            dark:border-white/[0.10]
            dark:bg-white/[0.025]
            dark:hover:border-white/[0.16]
            dark:hover:bg-white/[0.06]
            dark:hover:shadow-[0_6px_20px_rgba(0,0,0,0.25)]

            sm:h-10
            sm:text-base
          "
        >
          <svg
            viewBox="0 0 24 24"
            className="mr-1.5 size-3.5 sm:mr-2 sm:size-4"
            aria-hidden="true"
          >
            <path
              fill="#4285F4"
              d="M21.35 12.23c0-.79-.07-1.55-.2-2.28H12v4.31h5.24a4.48 4.48 0 0 1-1.94 2.94v2.45h3.14c1.84-1.69 2.91-4.18 2.91-7.42Z"
            />

            <path
              fill="#34A853"
              d="M12 21.5c2.63 0 4.84-.87 6.45-2.35l-3.14-2.45c-.87.58-1.98.92-3.31.92-2.54 0-4.69-1.72-5.46-4.03H3.3v2.53A9.74 9.74 0 0 0 12 21.5Z"
            />

            <path
              fill="#FBBC05"
              d="M6.54 13.59A5.86 5.86 0 0 1 6.23 12c0-.55.11-1.09.31-1.59V7.88H3.3A9.74 9.74 0 0 0 2.25 12c0 1.57.38 3.05 1.05 4.12l3.24-2.53Z"
            />

            <path
              fill="#EA4335"
              d="M12 6.38c1.43 0 2.71.49 3.72 1.45l2.79-2.79C16.84 3.47 14.63 2.5 12 2.5a9.74 9.74 0 0 0-8.7 5.38l3.24 2.53C7.31 8.1 9.46 6.38 12 6.38Z"
            />
          </svg>

          Continue with Google
        </Button>

        {/* Divider */}
        <div className="my-4 flex items-center gap-2.5 sm:my-6 sm:gap-4">
          <div className="h-px flex-1 bg-border/70" />

          <span className="text-[11px] text-muted-foreground sm:text-xs">
            or
          </span>

          <div className="h-px flex-1 bg-border/70" />
        </div>

        {/* Register Form */}
        <div>
          {/* Server Error */}
          {(serverError || oauthErrorMessage) && (
            <p
              role="alert"
              className="
                mb-3
                rounded-md

                border
                border-destructive/20

                bg-destructive/[0.06]

                px-2.5
                py-1.5

                text-center
                text-[11px]
                font-medium
                text-destructive

                dark:border-destructive/25
                dark:bg-destructive/[0.08]

                sm:text-xs
              "
            >
              {oauthErrorMessage || serverError}
            </p>
          )}

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-3 sm:space-y-5"
          >
            {/* Email */}
            <div className="space-y-1 sm:space-y-2.5">
              <Label
                htmlFor="email"
                className="
                  text-[11px]
                  font-medium
                  text-foreground
                  sm:text-[13px]
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

                  sm:h-10
                  sm:text-base
                "
              />

              {errors.email && (
                <p className="text-[10px] text-destructive sm:text-xs">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="space-y-1 sm:space-y-2.5">
              <Label
                htmlFor="password"
                className="
                  text-[11px]
                  font-medium
                  text-foreground
                  sm:text-sm
                "
              >
                Password
              </Label>

              <Input
                {...register("password", {
                  onChange: () => setServerError(""),
                })}
                id="password"
                type="password"
                placeholder="Create a password"
                autoComplete="new-password"
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

                  sm:h-10
                  sm:text-base
                "
              />

              {errors.password && (
                <p className="text-[10px] text-destructive sm:text-xs">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="
                mt-0
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
              {isSubmitting ? "Creating Account..." : "Create Account"}
            </Button>
          </form>
        </div>

        {/* Login */}
        <div className="mt-4 flex items-center justify-center sm:mt-6">
          <p
            className="
              text-center
              text-[11px]
              text-muted-foreground
              sm:text-sm
            "
          >
            Already have an account?{" "}

            <Link
              to="/login"
              className="
                font-semibold
                text-foreground

                transition-colors
                duration-200

                hover:text-foreground/70
                hover:underline
                hover:underline-offset-4
              "
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}

export default RegisterPage