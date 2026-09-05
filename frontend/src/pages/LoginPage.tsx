import { Link } from "react-router-dom"

import Brand from "@/components/shared/Brand"
import PageBackground from "@/components/shared/PageBackground"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function LoginPage() {
  return (
    <PageBackground>
      {/* Header */}
      <header className="mx-auto w-full max-w-6xl px-6 py-5">
        <Brand />
      </header>

      {/* Login */}
      <main className="flex min-h-[calc(100vh-76px)] items-center justify-center px-6 pb-20">
        <div className="w-full max-w-md">

          {/* Heading */}
          <div className="mb-9 text-center">
            <h1 className="text-4xl font-semibold tracking-tight text-slate-950">
              Welcome back
            </h1>

            <p className="mt-3 text-base leading-6 text-slate-700">
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
              p-7
              shadow-[0_8px_20px_rgba(0,0,0,0.05),0_24px_48px_-20px_rgba(0,0,0,0.2)]
              backdrop-blur-xl
            "
          >
            <form className="space-y-6">

              {/* Email */}
              <div className="space-y-2.5">
                <Label
                  htmlFor="email"
                  className="text-sm font-semibold text-slate-900"
                >
                  Email
                </Label>

                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  className="h-11 bg-white/90"
                />
              </div>

              {/* Password */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <Label
                    htmlFor="password"
                    className="text-sm font-semibold text-slate-900"
                  >
                    Password
                  </Label>

                  <button
                    type="button"
                    className="
                      cursor-pointer
                      text-xs
                      font-medium
                      text-slate-600
                      transition-colors
                      hover:text-slate-950
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
                  className="h-11 bg-white/90"
                />
              </div>

              {/* Submit */}
              <Button
                type="submit"
                className="h-11 w-full cursor-pointer"
              >
                Sign In
              </Button>
            </form>
          </div>


          {/* Register */}
          <p className="mt-7 text-center text-sm text-slate-700">
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