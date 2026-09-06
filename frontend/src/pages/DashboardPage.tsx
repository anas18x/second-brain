import UserSidebar from "@/components/dashboard/UserSidebar"
import SearchBar from "@/components/dashboard/SearchBar"
import TagFilter from "@/components/dashboard/TagFilter"
import BrainGrid from "@/components/dashboard/BrainGrid"
import AddBrainDialog from "@/components/dashboard/AddBrainDialog"

import PageBackground from "@/components/shared/PageBackground"

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

function DashboardPage() {
  return (
    <PageBackground>
      <SidebarProvider defaultOpen={true}>
        <UserSidebar />

        <SidebarInset className="min-w-0 bg-transparent">
          <main className="min-h-screen min-w-0 px-5 py-5 sm:px-8 lg:px-10">

            {/* Sidebar Trigger */}
            <div className="flex items-center">
              <SidebarTrigger />
            </div>

            {/* Main Dashboard Container */}
            <div className="mx-auto mt-8 w-full max-w-7xl">

              {/* Header */}
              <div className="flex items-start justify-between gap-8">

                {/* Heading */}
                <div className="min-w-0">
                  <h1
                    className="
                      text-3xl
                      font-semibold
                      tracking-tight
                      text-slate-950
                      sm:text-4xl
                    "
                  >
                    Your brain&apos;s bookmarks.
                  </h1>

                  <p
                    className="
                      mt-2
                      text-sm
                      text-slate-600
                    "
                  >
                    Keep the useful stuff close, without keeping it
                    all in your head.
                  </p>
                </div>

                {/* Add Button */}
                <div className="shrink-0">
                  <AddBrainDialog />
                </div>

              </div>

              {/* Search */}
              <div className="mt-7">
                <SearchBar />
              </div>

              {/* Tags */}
              <TagFilter />

              {/* Brain Cards */}
              <BrainGrid />

            </div>
          </main>
        </SidebarInset>
      </SidebarProvider>
    </PageBackground>
  )
}

export default DashboardPage