import {
  Settings2,
  LayoutDashboard,
  Share2,
  LogOut,
  UserRound,
  Pencil,
} from "lucide-react"

import { Moon, Sun } from "lucide"
import { MorphIcon } from "morphicons/react"

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

import {
  useLocation,
  useNavigate,
} from "react-router-dom"

import { useAuthStore } from "@/store/auth.store"
import { toast } from "sonner"
import { useTheme } from "next-themes"

function UserSidebar() {
  const navigate = useNavigate()
  const location = useLocation()

  const {
    isMobile,
    setOpenMobile,
  } = useSidebar()

  const user = useAuthStore(
    (state) => state.user
  )

  const clearUser = useAuthStore(
    (state) => state.clearUser
  )

  const {
    resolvedTheme,
    setTheme,
  } = useTheme()

  const username =
    user?.username?.trim() || ""

  const hasUsername =
    Boolean(username)

  const isDark =
    resolvedTheme === "dark"

  const isOverview =
    location.pathname === "/dashboard" ||
    location.pathname === "/dashboard/"

  const isShareBrain =
    location.pathname ===
    "/dashboard/share"

  const isAccount =
    location.pathname ===
    "/dashboard/account"

  function navigateFromSidebar(
    path: string
  ) {
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

  function handleAppearance() {
    setTheme(
      isDark ? "light" : "dark"
    )
  }

  return (
    <Sidebar
      className="
        shadow-[2px_0_12px_rgba(0,0,0,0.05)]
      "
    >
      {/* Header */}
      <SidebarHeader className="px-3 py-4">
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

      {/* Content */}
      <SidebarContent className="px-2">
        {/* User */}
        <SidebarGroup className="px-1 pb-4">
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
                    h-11
                    rounded-lg
                    px-2
                    text-sm
                    text-muted-foreground
                    transition-colors
                    hover:bg-transparent
                    hover:text-[#e04430]
                  "
                >
                  <div
                    className={`
                      flex
                      size-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      bg-sidebar
                      text-xs
                      font-semibold
                      shadow-sm
                      transition-colors
                      ${
                        hasUsername
                          ? "border-sidebar-border"
                          : "border-dashed border-sidebar-foreground/25"
                      }
                    `}
                  >
                    {hasUsername ? (
                      username
                        .charAt(0)
                        .toUpperCase()
                    ) : (
                      <UserRound
                        className="
                          size-4
                          text-muted-foreground
                        "
                      />
                    )}
                  </div>

                  <div
                    className="
                      min-w-0
                      flex-1
                      group-data-[collapsible=icon]:hidden
                    "
                  >
                    {hasUsername ? (
                      <>
                        <p className="truncate text-sm font-medium text-foreground">
                          @{username}
                        </p>

                        <p className="truncate text-xs text-muted-foreground">
                          Account
                        </p>
                      </>
                    ) : (
                      <>
                        <div className="flex items-center gap-1.5">
                          <p className="truncate text-sm font-medium text-foreground">
                            Set username
                          </p>

                          <Pencil className="size-3 text-muted-foreground" />
                        </div>

                        <p className="truncate text-xs text-muted-foreground">
                          Personalize your profile
                        </p>
                      </>
                    )}
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Workspace */}
        <SidebarGroup className="px-1">
          <SidebarGroupLabel>
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
                    rounded-md
                    px-2
                    text-sm
                    text-muted-foreground
                    transition-colors
                    hover:bg-transparent
                    hover:text-[#e04430]
                    data-[active=true]:bg-transparent
                    data-[active=true]:text-[#e04430]
                  "
                >
                  <LayoutDashboard className="size-4" />

                  <span>
                    Overview
                  </span>
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
                    rounded-md
                    px-2
                    text-sm
                    text-muted-foreground
                    transition-colors
                    hover:bg-transparent
                    hover:text-[#e04430]
                    data-[active=true]:bg-transparent
                    data-[active=true]:text-[#e04430]
                  "
                >
                  <Share2 className="size-4" />

                  <span>
                    Share Brain
                  </span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Account */}
        <SidebarGroup className="px-1 pt-6">
          <SidebarGroupLabel>
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
                    rounded-md
                    px-2
                    text-sm
                    text-muted-foreground
                    transition-colors
                    hover:bg-transparent
                    hover:text-[#e04430]
                    data-[active=true]:bg-transparent
                    data-[active=true]:text-[#e04430]
                  "
                >
                  <Settings2 className="size-4" />

                  <span>
                    Account Settings
                  </span>
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* Theme */}
              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={handleAppearance}
                  tooltip={
                    isDark
                      ? "Switch to light mode"
                      : "Switch to dark mode"
                  }
                  className="
                    rounded-md
                    px-2
                    text-sm
                    text-muted-foreground
                    transition-colors
                    hover:bg-transparent
                    hover:text-[#e04430]
                  "
                >
                  <MorphIcon
                    icon={
                      isDark
                        ? Moon
                        : Sun
                    }
                    spring="smooth"
                  />

                  <span className="group-data-[collapsible=icon]:hidden">
                    Theme
                  </span>

                  <div
                    className="
                      ml-auto
                      flex
                      h-6
                      w-10
                      shrink-0
                      items-center
                      rounded-full
                      border
                      border-sidebar-border
                      bg-sidebar-accent
                      p-0.5
                      shadow-sm
                      group-data-[collapsible=icon]:hidden
                    "
                  >
                    <div
                      className={`
                        size-5
                        rounded-full
                        bg-background
                        shadow-sm
                        transition-transform
                        duration-200
                        ${
                          isDark
                            ? "translate-x-4"
                            : "translate-x-0"
                        }
                      `}
                    />
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="px-2 pb-3">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={handleLogout}
              tooltip="Log out"
              className="
                rounded-md
                px-2
                text-sm
                text-muted-foreground
                transition-colors
                hover:bg-transparent
                hover:text-[#e04430]
              "
            >
              <LogOut className="size-4" />

              <span>
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