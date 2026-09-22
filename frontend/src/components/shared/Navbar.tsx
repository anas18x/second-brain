import { Link } from "react-router-dom"
import ThemeToggle from "@/components/shared/ThemeToggle"
import { Button } from "@/components/ui/button"
import Brand from "@/components/shared/Brand"
function Navbar() {
  return (
    <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 sm:py-5">
      {/* Brand */}
      <Brand />
      {/* Actions */}
      <div className="flex items-center gap-1 sm:gap-2">
        {/* Theme */}
        <ThemeToggle />
        {/* Sign In */}
        <Link to="/login">
          <Button
            variant="ghost"
            className="
              h-8
              cursor-pointer
              px-2
              text-[11px]
              font-semibold
              text-foreground/70
              transition-colors
              hover:bg-transparent
              hover:text-foreground
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
              border-0
              bg-[var(--landing-accent)]
              px-2.5
              text-[11px]
              font-semibold
              text-white
              shadow-none
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:bg-[var(--landing-accent)]
              hover:shadow-[0_4px_12px_rgba(224,68,48,0.18)]
              active:translate-y-0
              active:scale-[0.98]
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