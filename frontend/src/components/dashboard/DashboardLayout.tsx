import { Outlet } from "react-router-dom"

import UserSidebar from "@/components/dashboard/UserSidebar"

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

function DashboardLayout() {
  return (
    <SidebarProvider defaultOpen={true}>
      <UserSidebar />

      <SidebarInset className="min-w-0 bg-background">
        <div className="absolute left-3 top-3 z-50">
          <SidebarTrigger
            className="
              size-9
              rounded-lg
              border
              border-border/60
              bg-background
              shadow-sm
              hover:bg-muted
            "
          />
        </div>

        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  )
}

export default DashboardLayout