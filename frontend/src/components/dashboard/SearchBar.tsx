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
          text-foreground/65
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
          border-foreground/[0.16]
          bg-foreground/[0.025]
          pl-10
          pr-10
          text-sm
          font-medium
          text-foreground
          shadow-[0_2px_5px_rgba(0,0,0,0.18),0_8px_22px_rgba(0,0,0,0.12)]
          transition-all
          duration-200
          placeholder:text-foreground/45
          hover:border-foreground/[0.22]
          hover:bg-foreground/[0.035]
          hover:shadow-[0_3px_7px_rgba(0,0,0,0.22),0_10px_26px_rgba(0,0,0,0.15)]
          focus-visible:border-foreground/[0.28]
          focus-visible:bg-foreground/[0.04]
          focus-visible:ring-2
          focus-visible:ring-foreground/10
          focus-visible:ring-offset-0
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
            text-foreground/55
            transition-all
            duration-200
            hover:bg-foreground/[0.08]
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