import {
  LayoutDashboard,
  LogOut,
  Settings2,
  Share2,
  UserRound,
} from "lucide-react"

import { useLocation, useNavigate } from "react-router-dom"

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
  useSidebar,
} from "@/components/ui/sidebar"

import { logout } from "@/services/auth/auth.api"
import { useAuthStore } from "@/store/auth.store"
import { toast } from "sonner"

function UserSidebar() {
  const navigate = useNavigate()
  const location = useLocation()

  const { isMobile, setOpenMobile } = useSidebar()

  const user = useAuthStore((state) => state.user)
  const clearUser = useAuthStore((state) => state.clearUser)

  const username = user?.username?.trim() || ""
  const hasUsername = Boolean(username)

  const isOverview =
    location.pathname === "/dashboard" ||
    location.pathname === "/dashboard/"

  const isShareBrain =
    location.pathname === "/dashboard/share"

  const isAccount =
    location.pathname === "/dashboard/account"

  function navigateFromSidebar(path: string) {
    navigate(path)

    if (isMobile) {
      setOpenMobile(false)
    }
  }

  async function handleLogout() {
    try {
      await logout()
      clearUser()
      navigate("/login")
    } catch {
      toast.error(
        "Unable to log out. Please try again."
      )
    }
  }

  return (
    <Sidebar
      className="
        border-sidebar-border
        bg-sidebar
        shadow-[2px_0_16px_rgba(0,0,0,0.18)]
      "
    >
      {/* =================================================
          HEADER
          ================================================= */}
      <SidebarHeader className="px-3 pb-6 pt-4">
        <div
          className="
            flex
            h-8
            min-w-0
            items-center
            overflow-hidden
            px-1
            group-data-[collapsible=icon]:w-8
            group-data-[collapsible=icon]:justify-center
            group-data-[collapsible=icon]:px-0
            [&>a]:min-w-0
            [&>a]:shrink-0
            [&>a>span]:whitespace-nowrap
            group-data-[collapsible=icon]:[&>a>span]:hidden
          "
        >
          <Brand />
        </div>
      </SidebarHeader>

      {/* =================================================
          CONTENT
          ================================================= */}
      <SidebarContent className="px-2">
        {/* =================================================
            PROFILE
            ================================================= */}
        <SidebarGroup className="px-1 pb-6">
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={() =>
                    navigateFromSidebar(
                      "/dashboard/account"
                    )
                  }
                  tooltip="Account"
                  className="
                    h-auto
                    min-h-14
                    rounded-xl
                    px-2
                    py-2
                    text-muted-foreground
                    transition-colors
                    hover:bg-sidebar-accent
                    hover:text-sidebar-accent-foreground
                  "
                >
                  {/* Avatar */}
                  <div
                    className="
                      flex
                      size-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-sidebar-border
                      bg-sidebar-accent
                      text-xs
                      font-semibold
                      text-sidebar-accent-foreground
                    "
                  >
                    {hasUsername ? (
                      username.charAt(0).toUpperCase()
                    ) : (
                      <UserRound className="size-4" />
                    )}
                  </div>

                  {/* Username */}
                  <div
                    className="
                      min-w-0
                      flex-1
                      group-data-[collapsible=icon]:hidden
                    "
                  >
                    <p
                      className="
                        truncate
                        text-sm
                        font-medium
                        leading-none
                        text-foreground
                      "
                    >
                      {hasUsername
                        ? `@${username}`
                        : "Set username"}
                    </p>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* =================================================
            WORKSPACE
            ================================================= */}
        <SidebarGroup className="px-1">
          <SidebarGroupLabel
            className="
              px-2
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.12em]
              text-muted-foreground/60
            "
          >
            Workspace
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              {/* Overview */}
              <SidebarMenuItem>
                <SidebarMenuButton
                  isActive={isOverview}
                  onClick={() =>
                    navigateFromSidebar(
                      "/dashboard"
                    )
                  }
                  tooltip="Overview"
                  className="
                    rounded-lg
                    px-2
                    text-sm
                    text-muted-foreground
                    transition-colors
                    hover:bg-sidebar-accent
                    hover:text-sidebar-accent-foreground
                    data-[active=true]:bg-sidebar-accent
                    data-[active=true]:font-medium
                    data-[active=true]:text-sidebar-accent-foreground
                  "
                >
                  <LayoutDashboard className="size-4" />
                  <span>Overview</span>
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* Share Brain */}
              <SidebarMenuItem>
                <SidebarMenuButton
                  isActive={isShareBrain}
                  onClick={() =>
                    navigateFromSidebar(
                      "/dashboard/share"
                    )
                  }
                  tooltip="Share Brain"
                  className="
                    rounded-lg
                    px-2
                    text-sm
                    text-muted-foreground
                    transition-colors
                    hover:bg-sidebar-accent
                    hover:text-sidebar-accent-foreground
                    data-[active=true]:bg-sidebar-accent
                    data-[active=true]:font-medium
                    data-[active=true]:text-sidebar-accent-foreground
                  "
                >
                  <Share2 className="size-4" />
                  <span>Share Brain</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* =================================================
            ACCOUNT
            ================================================= */}
        <SidebarGroup className="px-1 pt-7">
          <SidebarGroupLabel
            className="
              px-2
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.12em]
              text-muted-foreground/60
            "
          >
            Account
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              {/* Account Settings */}
              <SidebarMenuItem>
                <SidebarMenuButton
                  isActive={isAccount}
                  onClick={() =>
                    navigateFromSidebar(
                      "/dashboard/account"
                    )
                  }
                  tooltip="Account Settings"
                  className="
                    rounded-lg
                    px-2
                    text-sm
                    text-muted-foreground
                    transition-colors
                    hover:bg-sidebar-accent
                    hover:text-sidebar-accent-foreground
                    data-[active=true]:bg-sidebar-accent
                    data-[active=true]:font-medium
                    data-[active=true]:text-sidebar-accent-foreground
                  "
                >
                  <Settings2 className="size-4" />
                  <span>Account Settings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* =================================================
          FOOTER
          ================================================= */}
      <SidebarFooter className="px-2 pb-3">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={handleLogout}
              tooltip="Log out"
              className="
                rounded-lg
                px-2
                text-sm
                text-muted-foreground
                transition-colors
                hover:bg-sidebar-accent
                hover:text-sidebar-accent-foreground
              "
            >
              <LogOut className="size-4" />
              <span>Log out</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}

export default UserSidebar