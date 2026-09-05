import { Link } from "react-router-dom"

import Brand from "@/components/shared/Brand"
import PageBackground from "@/components/shared/PageBackground"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function RegisterPage() {
  return (
    <PageBackground>
      {/* Header */}
      <header className="mx-auto w-full max-w-6xl px-6 py-5">
        <Brand />
      </header>

      {/* Register */}
      <main className="flex min-h-[calc(100vh-76px)] items-center justify-center px-6 py-16">
        <div className="w-full max-w-md">

          {/* Heading */}
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-semibold tracking-tight text-slate-950">
              Create your account
            </h1>

            <p className="mt-3 text-base leading-6 text-slate-700">
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
              p-7
              shadow-[0_8px_20px_rgba(0,0,0,0.05),0_24px_48px_-20px_rgba(0,0,0,0.2)]
              backdrop-blur-xl
            "
          >
            <form className="space-y-4">

              {/* Username */}
              <div className="space-y-2">
                <Label
                  htmlFor="username"
                  className="text-sm font-semibold text-slate-900"
                >
                  Username
                </Label>

                <Input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="yourusername"
                  autoComplete="username"
                  className="h-11 bg-white/90"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
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
              <div className="space-y-2">
                <Label
                  htmlFor="password"
                  className="text-sm font-semibold text-slate-900"
                >
                  Password
                </Label>

                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  autoComplete="new-password"
                  className="h-11 bg-white/90"
                />
              </div>

              {/* Submit */}
              <Button
                type="submit"
                className="mt-2 h-11 w-full cursor-pointer"
              >
                Create Account
              </Button>
            </form>
          </div>

          {/* Login */}
          <p className="mt-6 text-center text-sm text-slate-700">
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