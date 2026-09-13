import { Search, Command } from "lucide-react"

import { Input } from "@/components/ui/input"

function SearchBar() {
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
        placeholder="Search your brain..."
        className="
          h-12
          rounded-xl
          border-white/10
          bg-white/[0.04]
          pl-11
          pr-24
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
      {/* Keyboard shortcut */}
      <div
        className="
          pointer-events-none
          absolute
          right-3
          top-1/2
          flex
          -translate-y-1/2
          items-center
          gap-1
          rounded-md
          border
          border-white/10
          bg-white/[0.06]
          px-2
          py-1
          text-[10px]
          font-medium
          text-muted-foreground
        "
      >
        <Command className="size-3" />
        <span>K</span>
      </div>
    </div>
  )
}

export default SearchBar