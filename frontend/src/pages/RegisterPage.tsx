import { Link } from "react-router-dom"

import Brand from "@/components/shared/Brand"
import { PageBackground } from "@/components/shared/PageBackground"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function RegisterPage() {
  return (
    <PageBackground>
      {/* Header */}
      <header className="mx-auto w-full max-w-6xl px-4 py-4 sm:px-6 sm:py-5">
        <Brand />
      </header>

      {/* Register */}
      <main className="flex min-h-[calc(100vh-68px)] items-center justify-center px-4 py-10 sm:min-h-[calc(100vh-76px)] sm:px-6 sm:py-16">
        <div className="w-full max-w-sm sm:max-w-md">

          {/* Heading */}
          <div className="mb-7 text-center sm:mb-8">
            <h1 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Create your account
            </h1>

            <p className="mt-2.5 text-sm leading-6 text-slate-700 sm:mt-3 sm:text-base">
              Start building your second brain today.
            </p>
          </div>

          {/* Register Card */}
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
            <form className="space-y-3.5 sm:space-y-4">

              {/* Username */}
              <div className="space-y-1.5 sm:space-y-2">
                <Label
                  htmlFor="username"
                  className="text-xs font-semibold text-slate-900 sm:text-sm"
                >
                  Username
                </Label>

                <Input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="yourusername"
                  autoComplete="username"
                  className="h-10 bg-white/90 sm:h-11"
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5 sm:space-y-2">
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
              <div className="space-y-1.5 sm:space-y-2">
                <Label
                  htmlFor="password"
                  className="text-xs font-semibold text-slate-900 sm:text-sm"
                >
                  Password
                </Label>

                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  autoComplete="new-password"
                  className="h-10 bg-white/90 sm:h-11"
                />
              </div>

              {/* Submit */}
              <Button
                type="submit"
                className="mt-2 h-10 w-full cursor-pointer sm:h-11"
              >
                Create Account
              </Button>
            </form>
          </div>

          {/* Login */}
          <p className="mt-5 text-center text-xs text-slate-700 sm:mt-6 sm:text-sm">
            Already have an account?{" "}
            <Link
              to="/login"
              className="
                font-semibold
                text-slate-950
                transition-colors
                hover:text-slate-600
                hover:underline
              "
            >
              Sign in
            </Link>
          </p>

        </div>
      </main>
    </PageBackground>
  )
}

export default RegisterPage