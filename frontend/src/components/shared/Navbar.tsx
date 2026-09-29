import { Link } from "react-router-dom"

import Brand from "@/components/shared/Brand"

import { Button } from "@/components/ui/button"

function Navbar() {
  return (
    <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 sm:py-5">
      {/* Brand */}
      <Brand />

      {/* Actions */}
      <div className="flex items-center gap-1.5 sm:gap-2">
        {/* Sign In */}
        <Link to="/login">
          <Button
            variant="ghost"
            className="
              h-9
              px-3
              text-sm
              font-medium
              text-muted-foreground
              hover:bg-transparent
              hover:text-foreground
            "
          >
            Sign In
          </Button>
        </Link>

        {/* Get Started */}
        <Link to="/register">
          <Button
            className="
              h-9
              rounded-md
              px-4
              text-sm
              font-medium
              shadow-none
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