import { Link } from "react-router-dom"

import Brand from "@/components/shared/Brand"
import { PageBackground } from "@/components/shared/PageBackground"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function LoginPage() {
  return (
    <PageBackground>
      {/* Header */}
      <header className="mx-auto w-full max-w-6xl px-4 py-4 sm:px-6 sm:py-5">
        <Brand />
      </header>

      {/* Login */}
      <main className="flex min-h-[calc(100vh-68px)] items-center justify-center px-4 pb-12 sm:min-h-[calc(100vh-76px)] sm:px-6 sm:pb-20">
        <div className="w-full max-w-sm sm:max-w-md">

          {/* Heading */}
          <div className="mb-7 text-center sm:mb-9">
            <h1 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Welcome back
            </h1>

            <p className="mt-2.5 text-sm leading-6 text-slate-700 sm:mt-3 sm:text-base">
              Sign in to continue to your second brain.
            </p>
          </div>

          {/* Login Card */}
          <div
            className="
              rounded-2xl
              border
              border-slate-300/80
              bg-white/85
              p-5
              shadow-[0_8px_20px_rgba(0,0,0,0.05),0_24px_48px_-20px_rgba(0,0,0,0.2)]
              backdrop-blur-xl
              sm:p-7
            "
          >
            <form className="space-y-5 sm:space-y-6">

              {/* Email */}
              <div className="space-y-2 sm:space-y-2.5">
                <Label
                  htmlFor="email"
                  className="text-xs font-semibold text-slate-900 sm:text-sm"
                >
                  Email
                </Label>

                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  className="h-10 bg-white/90 sm:h-11"
                />
              </div>

              {/* Password */}
              <div className="space-y-2 sm:space-y-2.5">
                <div className="flex items-center justify-between">
                  <Label
                    htmlFor="password"
                    className="text-xs font-semibold text-slate-900 sm:text-sm"
                  >
                    Password
                  </Label>

                  <button
                    type="button"
                    className="
                      cursor-pointer
                      text-[11px]
                      font-medium
                      text-slate-600
                      transition-colors
                      hover:text-slate-950
                      sm:text-xs
                    "
                  >
                    Forgot password?
                  </button>
                </div>

                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  autoComplete="current-password"
                  className="h-10 bg-white/90 sm:h-11"
                />
              </div>

              {/* Submit */}
              <Button
                type="submit"
                className="h-10 w-full cursor-pointer sm:h-11"
              >
                Sign In
              </Button>
            </form>
          </div>

          {/* Register */}
          <p className="mt-6 text-center text-xs text-slate-700 sm:mt-7 sm:text-sm">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="
                font-semibold
                text-slate-950
                transition-colors
                hover:text-slate-600
                hover:underline
              "
            >
              Create an account
            </Link>
          </p>

        </div>
      </main>
    </PageBackground>
  )
}

export default LoginPage