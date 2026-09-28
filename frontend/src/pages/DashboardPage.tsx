import { useState } from "react"

import SearchBar from "@/components/dashboard/SearchBar"
import TagFilter from "@/components/dashboard/TagFilter"
import BrainCard from "@/components/dashboard/BrainCard"
import AddBrainDialog from "@/components/dashboard/AddBrainDialog"
import BrainSkeleton from "@/components/dashboard/BrainSkeleton"

import { useBrains } from "@/hooks/brain/useBrains"
import { useDebounce } from "@/hooks/brain/useDebounce"

function DashboardPage() {
  const [search, setSearch] = useState("")
  const debouncedSearch = useDebounce(search, 500)

  const [tag, setTag] = useState("")

  const {
    data,
    isLoading,
    isError,
  } = useBrains({
    search: debouncedSearch,
    tags: tag,
    page: 1,
    limit: 10,
  })

  const brains = data?.data ?? []
  const isEmpty = brains.length === 0

  const hasSearch = search.trim().length > 0
  const hasTag = tag.trim().length > 0
  const hasFilters = hasSearch || hasTag

  return (
    <div className="min-h-svh min-w-0 bg-background">
      <div
        className="
          mx-auto
          w-full
          max-w-7xl
          min-w-0
          px-4
          pb-10
          pt-16
          sm:px-6
          sm:pb-12
          sm:pt-8
          md:px-8
          lg:px-10
        "
      >
        {/* Header */}
        <header
          className="
            flex
            flex-col
            gap-6
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-[#e04430]" />

              <span
                className="
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.16em]
                  text-muted-foreground/70
                "
              >
                Your workspace
              </span>
            </div>

            <h1
              className="
                mt-3
                text-2xl
                font-semibold
                tracking-tight
                text-foreground
                sm:text-3xl
              "
            >
              Build your second brain.
            </h1>

            <p
              className="
                mt-2
                max-w-xl
                text-sm
                leading-6
                text-muted-foreground
              "
            >
              Capture the things you want to remember.
            </p>
          </div>

          <div className="shrink-0">
            <AddBrainDialog />
          </div>
        </header>

        {/* Search + filters */}
        <div className="mt-9">
          <SearchBar
            value={search}
            setSearch={setSearch}
          />

          <div className="mt-3 min-w-0">
            <TagFilter
              value={tag}
              setTag={setTag}
            />
          </div>
        </div>

        {/* Content */}
        <section className="mt-8">
          {isLoading ? (
            <BrainSkeleton />
          ) : isError ? (
            <div className="py-20 text-center">
              <p className="text-sm font-medium text-foreground">
                Failed to load your brains.
              </p>

              <p className="mt-1 text-xs text-muted-foreground">
                Please try again in a moment.
              </p>
            </div>
          ) : isEmpty ? (
            <div className="py-20 text-center">
              <div className="mx-auto max-w-sm">
                <div
                  className="
                    mx-auto
                    flex
                    size-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#e04430]/20
                    bg-[#e04430]/5
                  "
                >
                  <span className="size-1.5 rounded-full bg-[#e04430]" />
                </div>

                <h2
                  className="
                    mt-4
                    text-lg
                    font-semibold
                    tracking-tight
                    text-foreground
                  "
                >
                  {hasFilters
                    ? "No brains found"
                    : "Nothing here yet"}
                </h2>

                <p
                  className="
                    mt-2
                    text-sm
                    leading-6
                    text-muted-foreground
                  "
                >
                  {hasSearch
                    ? "Nothing matches your current search."
                    : hasTag
                      ? "Nothing matches the selected tag."
                      : "Your second brain is empty. Start saving something useful."}
                </p>
              </div>
            </div>
          ) : (
            <div
              className="
                min-w-0
                columns-1
                gap-4
                sm:columns-2
                xl:columns-3
              "
            >
              {brains.map((brain) => (
                <div
                  key={brain._id}
                  className="mb-4 break-inside-avoid"
                >
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
        </section>
      </div>
    </div>
  )
}

export default DashboardPage