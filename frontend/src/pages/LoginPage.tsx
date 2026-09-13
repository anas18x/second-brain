import { Link, useNavigate } from "react-router-dom"
import Brand from "@/components/shared/Brand"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useForm } from "react-hook-form"
import { loginSchema, type LoginInput } from "@/schema/auth.schema"
import { login } from "@/services/auth/auth.api"
import axios from "axios"
import { useState } from "react"
import { useAuthStore } from "@/store/auth.store"


function LoginPage() {
  const initializeAuth = useAuthStore((state) => state.initializeAuth)
  const navigate = useNavigate()
  const [serverError, setServerError] = useState("")

  const {
       register,
       handleSubmit,
       formState: { errors, isSubmitting },
  } = useForm<LoginInput>({resolver: zodResolver(loginSchema)})


  async function onSubmit(data: LoginInput) {
    try {
      setServerError("")
      await login(data)

      // After successful login, we need to re-initialize the auth state to fetch the current user and update Zustand store in order to access the protected routes
      await initializeAuth()
      navigate("/dashboard")

    } catch (error) {
      if (axios.isAxiosError(error)) {
        setServerError(
          error.response?.data?.message ??
            "something went wrong. Please try again",
        )
      } else {
        setServerError("something went wrong. Please try again")
      }
    }
  }

  return (
    <>
      {/* Header */}
      <header className="mx-auto w-full max-w-6xl px-4 py-4 sm:px-6 sm:py-5">
        <Brand />
      </header>

      {/* Login */}
      <main className="flex min-h-[calc(100vh-68px)] items-center justify-center px-4 py-10 sm:min-h-[calc(100vh-76px)] sm:px-6 sm:py-16">
        <div className="w-full max-w-sm sm:max-w-md">
          {/* Heading */}
          <div className="mb-7 min-h-[82px] text-center sm:mb-8 sm:min-h-[88px]">
            <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Welcome back
            </h1>

            <p className="mt-2.5 text-sm leading-6 text-muted-foreground sm:mt-3 sm:text-base">
              Sign in to continue to your second brain.
            </p>
          </div>

          {/* Login Card */}
          <div
            className="
              min-h-[272px]
              rounded-2xl
              border
              border-white/10
              bg-white/[0.04]
              p-5
              shadow-[0_20px_50px_rgba(0,0,0,0.35)]
              backdrop-blur-xl
              sm:min-h-[286px]
              sm:p-7
            "
          >
            {/* Server Error */}
            {serverError && (<p role="alert" className=" mb-4 rounded-lg border border-[#ef3340]/20 bg-[#ef3340]/10px-3py-2.5 text-center text-xs font-medium text-[#ff6b73]">{serverError}</p>)}

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5 sm:space-y-6"
            >
              {/* Username */}
              <div className="space-y-2 sm:space-y-2.5">
                <Label
                  htmlFor="username"
                  className="text-xs font-semibold text-foreground sm:text-sm"
                >
                  Username
                </Label>

                <Input
                  {...register("username", {onChange: () => setServerError("")})}
                  id="username"
                  type="text"
                  placeholder="your username"
                  autoComplete="username"
                  className="
                    h-10
                    border-white/10
                    bg-white/[0.04]
                    text-foreground
                    placeholder:text-muted-foreground/60
                    focus-visible:border-[#ef3340]/50
                    focus-visible:ring-[#ef3340]/20
                    sm:h-11
                  "
                />

                {errors.username && (<p className="text-xs text-[#ff6b73]">{errors.username.message}</p>)}
              </div>

              {/* Password */}
              <div className="space-y-2 sm:space-y-2.5">
                <Label
                  htmlFor="password"
                  className="text-xs font-semibold text-foreground sm:text-sm"
                >
                  Password
                </Label>

                <Input
                  {...register("password", {onChange: () => setServerError("")})}
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  autoComplete="current-password"
                  className="
                    h-10
                    border-white/10
                    bg-white/[0.04]
                    text-foreground
                    placeholder:text-muted-foreground/60
                    focus-visible:border-[#ef3340]/50
                    focus-visible:ring-[#ef3340]/20
                    sm:h-11
                  "
                />

                {errors.password && (<p className="text-xs text-[#ff6b73]">{errors.password.message}</p>)}
              </div>

              {/* Submit */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="
                  h-10
                  w-full
                  cursor-pointer
                  border
                  border-[#ef3340]
                  bg-[#ef3340]
                  text-white
                  shadow-[0_4px_14px_rgba(239,51,64,0.18)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#ef3340]/90
                  hover:shadow-[0_10px_25px_rgba(239,51,64,0.28)]
                  active:translate-y-0
                  active:shadow-[0_4px_10px_rgba(239,51,64,0.18)]
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                  sm:h-11
                "
              >
                {isSubmitting ? "Signing In..." : "Sign In"}
              </Button>
            </form>
          </div>

          {/* Register */}
          <div className="mt-6 flex min-h-[20px] items-center justify-center sm:mt-7 sm:min-h-[22px]">
            <p className="text-center text-xs text-muted-foreground sm:text-sm">
              Don&apos;t have an account?{" "}
              <Link
                to="/register"
                className="
                  font-semibold
                  text-foreground
                  transition-colors
                  hover:text-[#ef3340]
                  hover:underline
                "
              >
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </main>
    </>
  )
}

export default LoginPage