import { Link , useNavigate} from "react-router-dom"

import Brand from "@/components/shared/Brand"
import { PageBackground } from "@/components/shared/PageBackground"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useForm } from "react-hook-form"
import { loginSchema, type LoginInput } from "@/schema/auth.schema"
import { login } from "@/services/auth/auth.api"
import axios from "axios"
import { useState } from "react"


function LoginPage() {
  const navigate = useNavigate()
    const [serverError , setServerError] = useState("")
  
  const {register,
         handleSubmit,
         formState: {errors, isSubmitting}
        } = useForm <LoginInput>({resolver:zodResolver(loginSchema)})


  async function onSubmit(data:LoginInput){
    try {
      setServerError("")
      await login(data)

      navigate("/dashboard")

    } catch (error){
      if(axios.isAxiosError(error)){
        setServerError(error.response?.data?.message ?? "something went wrong. Please try again")
      } else {
        setServerError("something went wrong. Please try again")
      }
    }
  }      
 

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
          {serverError && (<p role="alert" className="mb-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2.5 text-center text-xs font-medium text-red-600" >{serverError} </p>)}

            <form onSubmit={handleSubmit(onSubmit)}
             className="space-y-5 sm:space-y-6">
              {/* Username */}
              <div className="space-y-2 sm:space-y-2.5">
                <Label
                  htmlFor="username"
                  className="text-xs font-semibold text-slate-900 sm:text-sm"
                >
                  Username
                </Label>

                <Input {...register("username", {
                  onChange: () => setServerError("")
                })}
                  id="username"
                  type="text"
                  placeholder="your username"
                  autoComplete="username"
                  className="h-10 bg-white/90 sm:h-11"
                />
                {errors.username && (<p className="text-xs text-red-500"> {errors.username.message}</p>)}
              </div>



              {/* Password */}
              <div className="space-y-2 sm:space-y-2.5">
                <Label
                  htmlFor="password"
                  className="text-xs font-semibold text-slate-900 sm:text-sm"
                >
                  Password
                </Label>

                <Input {...register("password",{
                  onChange: () => setServerError("")
                })}
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  autoComplete="current-password"
                  className="h-10 bg-white/90 sm:h-11"
                />
                {errors.password && (<p className="text-xs text-red-500"> {errors.password.message}</p>)}

              </div>

              {/* Submit */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="h-10 w-full cursor-pointer sm:h-11"
              >
              {isSubmitting ? "Signing In..." : "Sign In"}
              </Button>
            </form>
          </div>

          {/* Register */}
          <p className="mt-6 text-center text-xs text-slate-700 sm:mt-7 sm:text-sm">
            Don&apos;t have an account?{" "}
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