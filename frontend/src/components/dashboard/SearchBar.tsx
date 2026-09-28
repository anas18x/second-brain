import { Search, X } from "lucide-react"

import { Input } from "@/components/ui/input"

type SearchBarProps = {
  value: string
  setSearch: (value: string) => void
}

function SearchBar({
  value,
  setSearch,
}: SearchBarProps) {
  return (
    <div className="relative w-full max-w-2xl">
      <Search
        className="
          pointer-events-none
          absolute
          left-3.5
          top-1/2
          z-10
          size-4
          -translate-y-1/2
          text-muted-foreground/60
        "
      />

      <Input
        value={value}
        onChange={(event) =>
          setSearch(event.target.value)
        }
        placeholder="Search your brain..."
        aria-label="Search your brain"
        className="
          h-10
          w-full
          rounded-lg
          border-border/70
          bg-background
          pl-10
          pr-10
          text-sm
          shadow-[0_2px_10px_rgba(0,0,0,0.06)]
          transition-shadow
          duration-200
          placeholder:text-muted-foreground/45
          hover:border-border
          hover:shadow-[0_3px_12px_rgba(0,0,0,0.08)]
          focus-visible:border-border
          focus-visible:ring-2
          focus-visible:ring-ring/15
          dark:shadow-[0_2px_10px_rgba(0,0,0,0.18)]
          dark:hover:shadow-[0_3px_14px_rgba(0,0,0,0.24)]
        "
      />

      {value && (
        <button
          type="button"
          aria-label="Clear search"
          onClick={() => setSearch("")}
          className="
            absolute
            right-3
            top-1/2
            flex
            size-5
            -translate-y-1/2
            items-center
            justify-center
            rounded-md
            text-muted-foreground/50
            transition-colors
            hover:bg-muted
            hover:text-foreground
          "
        >
          <X className="size-3.5" />
        </button>
      )}
    </div>
  )
}

export default SearchBar