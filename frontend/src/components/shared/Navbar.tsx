import { Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import Brand from "@/components/shared/Brand"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
      {/* Brand */}
      <Brand />

      {/* Actions */}
      <div className="flex items-center gap-2">
        <Sun className="size-4 text-slate-800" />

        <Link to="/login">
          <Button
            variant="ghost"
            className="
              cursor-pointer
              text-slate-900
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-white/30
              hover:text-slate-950
              hover:shadow-[0_8px_20px_rgba(15,23,42,0.08)]
              active:translate-y-0
              active:shadow-none
            "
          >
            Sign In
          </Button>
        </Link>

        <Link to="/register">
          <Button
            className="
              cursor-pointer
              border
              border-slate-800
              bg-slate-950
              shadow-[0_4px_12px_rgba(15,23,42,0.12)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-slate-900
              hover:shadow-[0_10px_25px_rgba(15,23,42,0.22)]
              active:translate-y-0
              active:shadow-[0_4px_10px_rgba(15,23,42,0.15)]
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