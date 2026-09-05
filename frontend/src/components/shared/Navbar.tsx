import { Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import Brand from "@/components/shared/Brand"
import {Link} from "react-router-dom"


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
            className="cursor-pointer text-slate-900 hover:bg-white/30 hover:text-slate-950"
          >
            Sign In
          </Button>
        </Link>

        <Link to="/register">
          <Button className="cursor-pointer">
            Get Started
          </Button>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar