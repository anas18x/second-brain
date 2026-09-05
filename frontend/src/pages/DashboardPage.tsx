import UserSidebar from "@/components/dashboard/UserSidebar"
import SearchBar from "@/components/dashboard/SearchBar"
import TagFilter from "@/components/dashboard/TagFilter"
import BrainGrid from "@/components/dashboard/BrainGrid"

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
            {/* Top bar */}
            <div className="flex items-center">
              <SidebarTrigger />
            </div>

            {/* Dashboard */}
            <div className="mx-auto mt-8 w-full max-w-7xl">
              {/* Header */}
              <div className="flex items-start justify-between gap-8">
                <div className="min-w-0">
                  <h1 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                    Your brain&apos;s bookmarks.
                  </h1>

                  <p className="mt-2 text-sm text-slate-600">
                    Keep the useful stuff close, without keeping it all in your
                    head.
                  </p>
                </div>

                {/* Add to Brain */}
                <button
                  type="button"
                  className="
                    group
                    mt-0.5
                    inline-flex
                    shrink-0
                    cursor-pointer
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-slate-800
                    bg-slate-950
                    px-4
                    py-2.5
                    text-sm
                    font-medium
                    text-white
                    shadow-[0_4px_12px_rgba(15,23,42,0.12)]
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-slate-900
                    hover:shadow-[0_12px_28px_rgba(15,23,42,0.22)]
                    active:translate-y-0
                    active:shadow-[0_4px_10px_rgba(15,23,42,0.15)]
                  "
                >
                  <span
                    className="
                      text-base
                      leading-none
                      transition-transform
                      duration-300
                      group-hover:rotate-90
                    "
                  >
                    +
                  </span>

                  Add to Brain
                </button>
              </div>

              {/* Search */}
              <div className="mt-7">
                <SearchBar />
              </div>

              {/* Tags */}
              <TagFilter />

              {/* Cards */}
              <BrainGrid />
            </div>
          </main>
        </SidebarInset>
      </SidebarProvider>
    </PageBackground>
  )
}

export default DashboardPage