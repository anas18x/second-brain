import { KeyRound } from "lucide-react"
import { useState } from "react"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SidebarMenuButton } from "@/components/ui/sidebar"

function ChangePasswordDialog() {
  const [open, setOpen] = useState(false)

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
      <Dialog open={open} onOpenChange={setOpen}>
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

          {/* Form */}
          <div className="space-y-3.5 px-[18px] pb-[18px] pt-5">

            {/* Current Password */}
            <div className="space-y-1.5">
              <Label
                htmlFor="current-password"
                className="
                  font-['Geist_Mono']
                  text-xs
                  font-medium
                  text-slate-950
                "
              >
                Current password
              </Label>

              <Input
                id="current-password"
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
            </div>

            {/* New Password */}
            <div className="space-y-1.5">
              <Label
                htmlFor="new-password"
                className="
                  font-['Geist_Mono']
                  text-xs
                  font-medium
                  text-slate-950
                "
              >
                New password
              </Label>

              <Input
                id="new-password"
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
            </div>

            {/* Confirm Password */}
            <div className="space-y-1.5">
              <Label
                htmlFor="confirm-password"
                className="
                  font-['Geist_Mono']
                  text-xs
                  font-medium
                  text-slate-950
                "
              >
                Confirm new password
              </Label>

              <Input
                id="confirm-password"
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
                type="button"
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
                Update Password
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default ChangePasswordDialog