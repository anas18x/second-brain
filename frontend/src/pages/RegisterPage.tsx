import { Link, useNavigate } from "react-router-dom"
import Brand from "@/components/shared/Brand"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import axios from "axios"
import { useForm } from "react-hook-form"
import { registerSchema, type RegisterInput } from "@/schema/auth.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { register as UserRegister } from "@/services/auth/auth.api"
import { useState } from "react"
import { toast } from "sonner"



function RegisterPage() {
  const navigate = useNavigate()
  const [serverError, setServerError] = useState("")
  const { register, 
          handleSubmit,
          formState: { errors, isSubmitting }} = useForm<RegisterInput>({resolver: zodResolver(registerSchema)})

  async function onSubmit(data: RegisterInput) {
    try {
      setServerError("")

      await UserRegister(data)
      toast.success("Account created successfully. Please sign in.")
      navigate("/login")

    } catch (error) {
      if (axios.isAxiosError(error)) {
        setServerError(error.response?.data?.message ??"something went wrong. Please try again")
      } else {
        setServerError("something went wrong. Please try again")
      }
    }
  }

  return (
    <>
      {/* Register */}
      <main className="flex min-h-screen items-center justify-center px-4 py-8 sm:px-6 sm:py-12">
        <div
          className=" w-full max-w-[350px] -translate-y-5 rounded-xl border  border-white/10  bg-white/[0.015] px-5 py-6 shadow-[0_24px_70px_rgba(0,0,0,0.45)] backdrop-blur-md sm:max-w-[410px] sm:translate-y-0 sm:px-8 sm:py-9">

          {/* Brand */}
          <div className="mx-auto w-fit"> <Brand /> </div>

          {/* Heading */}
          <div className="mb-7 mt-8 text-center sm:mb-8 sm:mt-9">
            <h1 className="whitespace-nowrap text-lg font-semibold tracking-tight text-foreground sm:text-xl">
              Welcome 👋 Let&apos;s get started
            </h1>
          </div>

          {/* Register Form */}
          <div>
            {/* Server Error */}
            {serverError && (<p role="alert" className="mb-4 rounded-lg border border-[#ef3340]/20 bg-[#ef3340]/10 px-3 py-2.5 text-center text-xs font-medium text-[#ff6b73]">{serverError}</p>)}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 sm:space-y-6">

              {/* Username */}
              <div className="space-y-2 sm:space-y-2.5">
                <Label
                  htmlFor="username"
                  className="text-xs font-semibold text-foreground sm:text-sm">
                  Username
                </Label>

                <Input
                  {...register("username", {onChange: () => setServerError("")})}
                  id="username"
                  type="text"
                  placeholder="your username"
                  autoComplete="username"
                  className="h-10 border-white/10 bg-white/[0.04] text-foreground placeholder:text-muted-foreground/60 focus-visible:border-[#ef3340]/50 focus-visible:ring-[#ef3340]/20 sm:h-11" />

                {errors.username && (<p className="text-xs text-[#ff6b73]">{errors.username.message}</p>)}
              </div>

              {/* Password */}
              <div className="space-y-2 sm:space-y-2.5">
                <Label htmlFor="password" className="text-xs font-semibold text-foreground sm:text-sm">
                  Password
                </Label>

                <Input
                  {...register("password", {onChange: () => setServerError("")})}
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  autoComplete="new-password"
                  className=" h-10 border-white/10 bg-white/[0.04] text-foreground placeholder:text-muted-foreground/60 focus-visible:border-[#ef3340]/50 focus-visible:ring-[#ef3340]/20 sm:h-11 "/>

                {errors.password && (<p className="text-xs text-[#ff6b73]">{errors.password.message}</p>)}
              </div>

              {/* Submit */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className=" mt-2 h-10 w-full cursor-pointer border border-[#ef3340] bg-[#ef3340]  text-white shadow-[0_4px_14px_rgba(239,51,64,0.18)]transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ef3340]/90 hover:shadow-[0_10px_25px_rgba(239,51,64,0.28)] active:translate-y-0 active:shadow-[0_4px_10px_rgba(239,51,64,0.18)] disabled:cursor-not-allowed disabled:opacity-60 sm:h-11">

                {isSubmitting ? "Creating Account..." : "Create Account"}
              </Button>
            </form>

          </div>
          {/* Login */}
          <div className="mt-8 flex items-center justify-center">
            <p className="text-center text-xs text-muted-foreground sm:text-sm"> Already have an account?{" "}

             <Link to="/login" className="font-semibold text-foreground transition-colors hover:text-[#ef3340] hover:underline "> Sign in</Link>

            </p>

          </div>

        </div>

      </main>

    </>

  )

}

export default RegisterPage