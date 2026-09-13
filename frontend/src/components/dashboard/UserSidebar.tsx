import { LogOut } from "lucide-react"

import Brand from "@/components/shared/Brand"

import ShareBrainDialog from "@/components/dashboard/ShareBrainDialog"

import ChangePasswordDialog from "@/components/dashboard/ChangePasswordDialog"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import { logout } from "@/services/auth/auth.api"

import { useNavigate } from "react-router-dom"

import { useAuthStore } from "@/store/auth.store"

import { toast } from "sonner"

function UserSidebar() {
  const navigate = useNavigate()
  const clearUser = useAuthStore((state) => state.clearUser)

  async function handleLogout() {
    try {
      await logout()
      clearUser()
      navigate("/login")
    } catch (error) {
      toast.error("Unable to log out. Please try again.")
    }
  }

  return (
    <Sidebar
      collapsible="icon"
      className="
        border-r
        border-white/10
        bg-[#0a0a0a]
        [&_[data-sidebar=sidebar-inner]]:bg-[#0a0a0a]
      "
    >
      {/* Brand */}
      <SidebarHeader className="relative px-3 py-5">
        <Brand />
      </SidebarHeader>

      <SidebarContent className="relative">
        {/* User Info */}
        <SidebarGroup>
          <SidebarGroupContent>
            <div
              className="
                px-2
                py-7
                group-data-[collapsible=icon]:px-0
                group-data-[collapsible=icon]:py-5
              "
            >
              {/* Avatar */}
              <div
                className="
                  mx-auto
                  flex
                  size-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.08]
                  text-base
                  font-semibold
                  text-foreground
                  shadow-[0_6px_18px_rgba(0,0,0,0.3)]
                  transition-all
                  duration-200
                  group-data-[collapsible=icon]:size-8
                  group-data-[collapsible=icon]:shadow-[0_3px_10px_rgba(0,0,0,0.25)]
                "
              >
                A
              </div>

              {/* Username */}
              <p
                className="
                  mt-3
                  text-center
                  text-sm
                  font-semibold
                  tracking-tight
                  text-foreground
                  group-data-[collapsible=icon]:hidden
                "
              >
                @anas
              </p>

              {/* Public Status */}
              <div
                className="
                  mt-2
                  flex
                  items-center
                  justify-center
                  gap-1.5
                  group-data-[collapsible=icon]:hidden
                "
              >
                <span
                  className="
                    size-1.5
                    rounded-full
                    bg-emerald-500
                    shadow-[0_0_0_3px_rgba(16,185,129,0.10)]
                  "
                />
                <span className="text-xs font-medium text-muted-foreground">
                  Brain is public
                </span>
              </div>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Share Brain */}
        <SidebarGroup className="pt-0">
          <SidebarGroupContent>
            <ShareBrainDialog />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="relative px-2 pb-4">
        <SidebarMenu className="gap-1">
          {/* Change Password */}
          <SidebarMenuItem>
            <div
              className="
                rounded-lg
                transition-all
                duration-200
                hover:bg-white/[0.06]
                hover:shadow-[0_3px_10px_rgba(0,0,0,0.2)]
                group-data-[collapsible=icon]:hover:bg-white/[0.08]
              "
            >
              <ChangePasswordDialog />
            </div>
          </SidebarMenuItem>

          {/* Logout */}
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={handleLogout}
              tooltip="Log out"
              className="
                h-9
                rounded-lg
                px-2.5
                text-muted-foreground
                transition-all
                duration-200
                hover:bg-white/[0.06]
                hover:text-foreground
                hover:shadow-[0_2px_8px_rgba(0,0,0,0.2)]
                active:bg-white/[0.08]
                group-data-[collapsible=icon]:hover:bg-white/[0.08]
                group-data-[collapsible=icon]:hover:text-foreground
              "
            >
              <LogOut className="size-4" />
              <span className="text-xs font-medium">
                Log out
              </span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}

export default UserSidebar