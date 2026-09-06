import {
  LogOut,
} from "lucide-react"

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

function UserSidebar() {
  return (
    <Sidebar
      collapsible="icon"
      className="border-r border-slate-200/80"
    >
      {/* Background atmosphere */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
        "
        style={{
          background: `
            radial-gradient(
              circle at 15% 8%,
              rgba(148, 163, 184, 0.16),
              transparent 28%
            ),
            radial-gradient(
              circle at 90% 35%,
              rgba(251, 146, 60, 0.08),
              transparent 30%
            ),
            radial-gradient(
              circle at 30% 90%,
              rgba(100, 116, 139, 0.10),
              transparent 35%
            ),
            linear-gradient(
              180deg,
              #ffffff 0%,
              #f8fafc 48%,
              #f1f5f9 100%
            )
          `,
        }}
      />

      {/* Top glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-0
          right-0
          top-0
          h-32
          bg-gradient-to-b
          from-white/80
          to-transparent
        "
      />

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
                  border-white
                  bg-gradient-to-br
                  from-slate-100
                  to-slate-200
                  text-base
                  font-semibold
                  text-slate-800
                  shadow-[0_4px_14px_rgba(15,23,42,0.08)]
                  group-data-[collapsible=icon]:size-8
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
                  text-slate-950
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

                <span className="text-xs font-medium text-slate-600">
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
                transition-colors
                duration-200
                hover:bg-white/70
                hover:shadow-[0_2px_8px_rgba(15,23,42,0.04)]
              "
            >
              <ChangePasswordDialog />
            </div>
          </SidebarMenuItem>

          {/* Logout */}
          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip="Log out"
              className="
                h-9
                rounded-lg
                px-2.5
                text-slate-600
                transition-all
                duration-200
                hover:bg-red-50
                hover:text-red-600
                hover:shadow-[0_2px_8px_rgba(239,68,68,0.06)]
                active:bg-red-100
                active:text-red-700
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