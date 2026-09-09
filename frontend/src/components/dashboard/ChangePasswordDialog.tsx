import { KeyRound } from "lucide-react"
import { useState } from "react"
import {Dialog,DialogContent,DialogHeader,DialogTitle,} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SidebarMenuButton } from "@/components/ui/sidebar"
import { useForm } from "react-hook-form"
import { changePasswordFormSchema, type ChangePasswordFormInput } from "@/schema/auth.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { changePassword } from "@/services/auth/auth.api"
import axios from "axios"
import { toast } from "sonner"
import { useNavigate } from "react-router-dom"
import { useAuthStore } from "@/store/auth.store"


function ChangePasswordDialog() {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [serverError, setServerError] = useState("")

  const clearUser = useAuthStore((state)=> state.clearUser)

  const {register , handleSubmit , reset,
    formState : {errors , isSubmitting} } = useForm<ChangePasswordFormInput>({resolver:zodResolver(changePasswordFormSchema)})

  async function onSubmit(data:ChangePasswordFormInput){
    try{
      setServerError("")

      const {confirmPassword, ...passwordData} = data
      await changePassword(passwordData)
      clearUser()
      toast.success("Password changed successfully. Please log in again.")

      reset()
      setOpen(false)
      navigate("/login")

    } catch(error){
      if(axios.isAxiosError(error)){
        setServerError(error.response?.data?.message ?? "something went wrong. Please try again")
      } else {
         setServerError("something went wrong. Please try again")
      }

    }
  }

  return (
    <>
      {/* Sidebar Trigger */}
      <SidebarMenuButton
        tooltip="Change Password"
        onClick={() => setOpen(true)}
      >
        <KeyRound />
        <span>Change Password</span>
      </SidebarMenuButton>

      {/* Dialog */}
      <Dialog open={open} onOpenChange={(value) => {setOpen(value)
        if(!value){
          setServerError("")
           reset()
          }}}>
        <DialogContent
          className="
            gap-0
            rounded-2xl
            border
            border-slate-300
            bg-white
            p-0
            shadow-[0_20px_60px_rgba(15,23,42,0.15)]
            sm:max-w-[460px]
          "
        >
          {/* Header */}
          <DialogHeader className="px-[18px] pt-[18px]">
            <div className="flex items-center gap-3">
              <div
                className="
                  flex
                  size-9
                  items-center
                  justify-center
                  rounded-lg
                  bg-slate-100
                  text-slate-700
                "
              >
                <KeyRound className="size-4" />
              </div>

              <DialogTitle
                className="
                  font-sans
                  text-lg
                  font-medium
                  tracking-tight
                  text-slate-950
                "
              >
                Change password
              </DialogTitle>
            </div>
          </DialogHeader>

        {serverError && ( <p role="alert" className=" mx-[18px] mt-4 rounded-lg border  border-red-200  bg-red-50 px-3 py-2 font-['Geist_Mono'] text-xs  text-red-600"> {serverError}</p>)}

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)}
          className="space-y-3.5 px-[18px] pb-[18px] pt-5">

            {/* Current Password */}
            <div className="space-y-1.5">
              <Label
                htmlFor="oldPassword"
                className="
                  font-['Geist_Mono']
                  text-xs
                  font-medium
                  text-slate-950
                "
              >
                Current password
              </Label>

              <Input {...register("oldPassword", {onChange: () => setServerError("")})}
                id="oldPassword"
                type="password"
                placeholder="Enter your current password"
                className="
                  h-[42px]
                  rounded-lg
                  border-slate-300
                  bg-white
                  px-3
                  font-['Geist_Mono']
                  text-xs
                  text-slate-900
                  shadow-none
                  placeholder:text-slate-400
                  focus:border-slate-400
                  focus:ring-2
                  focus:ring-slate-950/10
                "
              />
              {errors.oldPassword && (<p className="text-xs text-red-500">{errors.oldPassword.message}</p>)}
            </div>

            {/* New Password */}
            <div className="space-y-1.5">
              <Label
                htmlFor="newPassword"
                className="
                font-['Geist_Mono']
                text-xs
                font-medium
                text-slate-950
                "
                >
                New password
              </Label>

              <Input {...register("newPassword", {onChange: () => setServerError("")})}
                id="newPassword"
                type="password"
                placeholder="Enter a new password"
                className="
                h-[42px]
                rounded-lg
                border-slate-300
                bg-white
                px-3
                font-['Geist_Mono']
                text-xs
                text-slate-900
                shadow-none
                placeholder:text-slate-400
                focus:border-slate-400
                focus:ring-2
                focus:ring-slate-950/10
                "
                />
                {errors.newPassword && (<p className="text-xs text-red-500">{errors.newPassword.message}</p>)}
            </div>

            {/* Confirm Password */}
            <div className="space-y-1.5">
              <Label
                htmlFor="confirmPassword"
                className="
                  font-['Geist_Mono']
                  text-xs
                  font-medium
                  text-slate-950
                "
              >
                Confirm new password
              </Label>

              <Input {...register("confirmPassword", {onChange: () => setServerError("")})}
                id="confirmPassword"
                type="password"
                placeholder="Confirm your new password"
                className="
                h-[42px]
                rounded-lg
                  border-slate-300
                  bg-white
                  px-3
                  font-['Geist_Mono']
                  text-xs
                  text-slate-900
                  shadow-none
                  placeholder:text-slate-400
                  focus:border-slate-400
                  focus:ring-2
                  focus:ring-slate-950/10
                "
              />
            {errors.confirmPassword && (<p className="text-xs text-red-500">{errors.confirmPassword.message}</p>)}
            </div>

            {/* Hint */}
            <p
              className="
                pt-1
                font-['Geist_Mono']
                text-[10px]
                leading-4
                text-slate-400
              "
            >
              Use a strong password you don't use elsewhere.
            </p>

            {/* Action */}
            <div className="flex justify-end pt-1">
              <button
                type="submit"
                disabled={isSubmitting}
                className="
                  inline-flex
                  cursor-pointer
                  items-center
                  gap-2
                  rounded-lg
                  bg-slate-950
                  px-3.5
                  py-2
                  font-['Space_Grotesk']
                  text-xs
                  font-semibold
                  text-white
                  shadow-[0_4px_12px_rgba(15,23,42,0.12)]
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:bg-slate-900
                  hover:shadow-[0_8px_20px_rgba(15,23,42,0.18)]
                  active:translate-y-0
                "
              >
                <KeyRound className="size-3.5" />
                {isSubmitting ? "Updating..." : "Update Password"}
              </button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default ChangePasswordDialog