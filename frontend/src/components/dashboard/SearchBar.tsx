import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"


type SearchBarProps = {
  value: string
  setSearch: (value: string) => void
}



function SearchBar({ value, setSearch }: SearchBarProps) {
  return (
    <div className="relative w-full max-w-3xl">

      {/* Search icon */}
      <Search
        className="
          pointer-events-none
          absolute
          left-4
          top-1/2
          z-10
          size-[18px]
          -translate-y-1/2
          text-muted-foreground
        "
      />
    
     
      <Input
        type="search"
        value={value}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search your brain..."
        className="
          h-12
          rounded-xl
          border-white/10
          bg-white/[0.04]
          pl-11
          text-sm
          font-medium
          text-foreground
          shadow-[0_4px_16px_rgba(0,0,0,0.25)]
          backdrop-blur-md
          transition-all
          duration-300
          placeholder:text-muted-foreground/60
          hover:border-white/15
          hover:bg-white/[0.06]
          hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)]
          focus:border-[#ef3340]/40
          focus:bg-white/[0.06]
          focus:ring-2
          focus:ring-[#ef3340]/15
          focus:shadow-[0_10px_30px_rgba(239,51,64,0.08)]
        "
      />

      {/* Clear button */}
       {value && (
        <button
        type="button"
        onClick={() => setSearch("")}
        className="
        absolute
        right-3
        top-1/2
        -translate-y-1/2
        cursor-pointer
        rounded-md
        p-1
        text-muted-foreground
        transition-colors
        hover:bg-white/[0.06]
        hover:text-foreground
        "aria-label="Clear search">
        <X className="size-4" />
    </button>
      
 )}
    </div>
  )
}

export default SearchBar