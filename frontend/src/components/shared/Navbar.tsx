import { Sun } from "lucide-react"

import { Button } from "@/components/ui/button"

import Brand from "@/components/shared/Brand"

import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 sm:py-5">

      {/* Brand */}
      <Brand />

      {/* Actions */}
      <div className="flex items-center gap-1 sm:gap-2">

        {/* Theme */}
        <Sun className="size-3.5 text-slate-800 sm:size-4" />

        {/* Sign In */}
        <Link to="/login">
          <Button
            variant="ghost"
            className="
              h-8
              cursor-pointer
              px-2
              text-[11px]
              text-slate-900
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-white/30
              hover:text-slate-950
              hover:shadow-[0_8px_20px_rgba(15,23,42,0.08)]
              active:translate-y-0
              active:shadow-none
              sm:h-9
              sm:px-3
              sm:text-sm
            "
          >
            Sign In
          </Button>
        </Link>

        {/* Get Started */}
        <Link to="/register">
          <Button
            className="
              h-8
              cursor-pointer
              border
              border-slate-800
              bg-slate-950
              px-2.5
              text-[11px]
              shadow-[0_4px_12px_rgba(15,23,42,0.12)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-slate-900
              hover:shadow-[0_10px_25px_rgba(15,23,42,0.22)]
              active:translate-y-0
              active:shadow-[0_4px_10px_rgba(15,23,42,0.15)]
              sm:h-9
              sm:px-4
              sm:text-sm
            "
          >
            Get Started
          </Button>
        </Link>

      </div>
    </nav>
  )
}

export default Navbar