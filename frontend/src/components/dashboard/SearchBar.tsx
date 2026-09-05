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
          text-slate-500
        "
      />

      <Input
        type="search"
        placeholder="Search your brain..."
        className="
          h-12
          rounded-xl
          border-slate-300/70
          bg-white/75
          pl-11
          pr-24
          text-sm
          font-medium
          text-slate-900
          shadow-[0_4px_16px_rgba(15,23,42,0.06)]
          backdrop-blur-md
          transition-all
          duration-300

          placeholder:text-slate-500

          hover:border-slate-400
          hover:bg-white/90
          hover:shadow-[0_8px_24px_rgba(15,23,42,0.08)]

          focus:border-slate-400
          focus:bg-white
          focus:ring-2
          focus:ring-slate-950/10
          focus:shadow-[0_10px_30px_rgba(15,23,42,0.10)]
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
          border-slate-200
          bg-slate-50/90
          px-2
          py-1
          text-[10px]
          font-medium
          text-slate-500
        "
      >
        <Command className="size-3" />
        <span>K</span>
      </div>
    </div>
  )
}

export default SearchBar