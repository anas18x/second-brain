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
  const [tag, setTag] = useState("")

  const debouncedSearch = useDebounce(search, 500)

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
          pb-12
          pt-16
          sm:px-6
          sm:pb-16
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
            gap-7
            border-b
            border-border/60
            pb-7
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          <div className="min-w-0">
            {/* Section label */}
            <div className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-foreground/60" />

              <span
                className="
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.16em]
                  text-muted-foreground
                "
              >
                Your collection
              </span>
            </div>

            {/* Heading */}
            <h1
              className="
                mt-3
                text-2xl
                font-semibold
                tracking-[-0.03em]
                text-foreground
                sm:text-3xl
              "
            >
              Everything worth remembering.
            </h1>

            {/* Description */}
            <p
              className="
                mt-2
                max-w-xl
                text-sm
                leading-6
                text-muted-foreground
              "
            >
              Keep your notes, links, ideas, and discoveries organized
              in one place.
            </p>
          </div>

          <div className="shrink-0">
            <AddBrainDialog />
          </div>
        </header>

        {/* Search & Filters */}
        <section className="mt-7">
          <SearchBar
            value={search}
            setSearch={setSearch}
          />

          <div className="mt-2 min-w-0">
            <TagFilter
              value={tag}
              setTag={setTag}
            />
          </div>
        </section>

        {/* Content */}
        <section className="mt-8">
          {isLoading ? (
            <BrainSkeleton />
          ) : isError ? (
            <div
              className="
                flex
                min-h-64
                items-center
                justify-center
                rounded-xl
                border
                border-dashed
                border-border
              "
            >
              <div className="text-center">
                <p className="text-sm font-medium text-foreground">
                  Couldn't load your collection.
                </p>

                <p className="mt-1.5 text-xs text-muted-foreground">
                  Something went wrong while fetching your saved items.
                </p>
              </div>
            </div>
          ) : isEmpty ? (
            <div
              className="
                flex
                min-h-72
                items-center
                justify-center
                rounded-xl
                border
                border-dashed
                border-border
                bg-card/20
                px-6
              "
            >
              <div className="max-w-sm text-center">
                {/* Empty state icon */}
                <div
                  className="
                    mx-auto
                    flex
                    size-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-border
                    bg-muted/40
                  "
                >
                  <span className="size-1.5 rounded-full bg-muted-foreground/60" />
                </div>

                <h2
                  className="
                    mt-4
                    text-base
                    font-semibold
                    tracking-tight
                    text-foreground
                  "
                >
                  {hasFilters
                    ? "Nothing matches your search"
                    : "Your collection is empty"}
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
                    ? "Try a different keyword or clear your search."
                    : hasTag
                      ? "Try another tag or clear the filter."
                      : "Save a link, note, idea, or anything you want to find again later."}
                </p>

                {!hasFilters && (
                  <div className="mt-5">
                    <AddBrainDialog />
                  </div>
                )}
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