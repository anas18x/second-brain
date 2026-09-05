import {
  KeyRound,
  LogOut,
  Share2,
  UserRound,
} from "lucide-react"

import Brand from "@/components/shared/Brand"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

function UserSidebar() {
  return (
    <Sidebar collapsible="icon">
      {/* Brand */}
      <SidebarHeader className="px-3 py-5">
        <Brand />
      </SidebarHeader>

      <SidebarContent>
        {/* User Info */}
        <SidebarGroup>
          <SidebarGroupContent>
            <div
              className="
                px-2
                py-6
                group-data-[collapsible=icon]:px-0
                group-data-[collapsible=icon]:py-4
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
                  bg-slate-200
                  text-base
                  font-semibold
                  text-slate-800
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
                <span className="size-1.5 rounded-full bg-emerald-500" />

                <span className="text-xs text-slate-600">
                  Brain is public
                </span>
              </div>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Account */}
        <SidebarGroup>
          <SidebarGroupLabel>Account</SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  isActive
                  tooltip="Profile"
                >
                  <UserRound />
                  <span>Profile</span>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Share Brain">
                  <Share2 />
                  <span>Share Brain</span>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Change Password">
                  <KeyRound />
                  <span>Change Password</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Logout */}
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip="Log out"
              className="hover:bg-red-50 hover:text-red-600"
            >
              <LogOut />
              <span>Log out</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}

export default UserSidebar