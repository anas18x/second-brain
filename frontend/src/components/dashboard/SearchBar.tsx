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
          text-foreground/60
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
          h-12
          w-full
          rounded-xl
          border
          border-foreground/15
          bg-card
          pl-10
          pr-10
          text-sm
          font-medium
          text-foreground
          shadow-[0_2px_4px_rgba(0,0,0,0.04),0_8px_20px_rgba(0,0,0,0.06)]
          transition-all
          duration-200
          placeholder:text-muted-foreground/55
          hover:border-foreground/20
          hover:shadow-[0_3px_6px_rgba(0,0,0,0.05),0_10px_24px_rgba(0,0,0,0.08)]
          focus-visible:border-foreground/25
          focus-visible:ring-2
          focus-visible:ring-foreground/10
          focus-visible:ring-offset-0
          dark:border-white/15
          dark:bg-card
          dark:shadow-[0_2px_5px_rgba(0,0,0,0.3),0_10px_28px_rgba(0,0,0,0.2)]
          dark:hover:border-white/20
          dark:hover:shadow-[0_3px_7px_rgba(0,0,0,0.35),0_12px_30px_rgba(0,0,0,0.24)]
          dark:focus-visible:border-white/25
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
            size-6
            -translate-y-1/2
            cursor-pointer
            items-center
            justify-center
            rounded-md
            text-muted-foreground/60
            transition-all
            duration-200
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