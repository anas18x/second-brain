import UserSidebar from "@/components/dashboard/UserSidebar";
import SearchBar from "@/components/dashboard/SearchBar";
import TagFilter from "@/components/dashboard/TagFilter";
import BrainCard from "@/components/dashboard/BrainCard";
import AddBrainDialog from "@/components/dashboard/AddBrainDialog";
import {SidebarInset,SidebarProvider,SidebarTrigger} from "@/components/ui/sidebar";
import { useBrains } from "@/hooks/brain/useBrains";
import BrainSkeleton from "@/components/dashboard/BrainSkeleton";
import { useState } from "react";
import { useDebounce } from "@/hooks/brain/useDebounce"


function DashboardPage() {
  const [search, setSearch] = useState("")
  const debouncedSetSearch = useDebounce(setSearch, 500)

  const [tag, setTag] = useState("")

  const { data, isLoading, isError } = useBrains({
    search,
    tags: tag,
    page: 1,
    limit: 10,
  });


  return (
    <SidebarProvider defaultOpen={true}>
      <UserSidebar />

      <SidebarInset className="min-w-0 bg-transparent">
        <main className="min-h-screen min-w-0 px-5 py-5 sm:px-8 lg:px-10">
          <SidebarTrigger className="cursor-pointer text-muted-foreground transition-colors hover:bg-white/[0.06] hover:text-foreground" />

          <div className="mx-auto mt-8 w-full max-w-7xl">
            <div className="flex items-start justify-between gap-8">
              <div className="min-w-0">
                <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  Your brain&apos;s bookmarks.
                </h1>

                <p className="mt-2 text-sm text-muted-foreground">
                  Keep the useful stuff close, without keeping it all in your head.</p>
              </div>

              <div className="shrink-0">
                <AddBrainDialog />
              </div>
            </div>

            <div className="mt-7">
              <SearchBar value={search} setSearch={debouncedSetSearch} />
            </div>

            <TagFilter value={tag} setTag={setTag} />

            {isLoading ? ( <div className="mt-7"> <BrainSkeleton /> </div> ) : isError ? (
              <div className="mt-7 rounded-xl border border-white/10 bg-[#111111] px-6 py-10 text-center">
                <p className="text-sm text-muted-foreground"> Failed to load your brains. Please try again. </p>
              </div>
            ) : data?.data.length === 0 ? (
              <div className="flex min-h-[420px] items-center justify-center">
                <div className="text-center">
                  <h2 className="text-xl font-semibold tracking-tight text-foreground">
                    {search.trim() ? "No brains found" : "Nothing here yet"}
                  </h2>

                  <p className="mt-2 text-sm text-muted-foreground">
                     {search.trim()
                       ? "Nothing matches your current search.."
                       : "Your second brain is empty. Start saving something useful."}
                     </p>
                </div>
              </div>
              
            ) : (
              <div className="mt-7 columns-1 gap-4 sm:columns-2 xl:columns-3">
                {(data?.data ?? []).map((brain) => (
                  <div key={brain._id} className="mb-4 break-inside-avoid">
                    <BrainCard
                      id={brain._id}
                      title={brain.title}
                      body={brain.body}
                      url={brain.url}
                      tags={brain.tags}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}

export default DashboardPage;