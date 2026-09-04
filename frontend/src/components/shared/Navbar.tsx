import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import logo from "@/assets/brain-cognative.svg"


function Navbar() {
  return (
    <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
      {/* Brand */}
      <div className="flex items-center gap-2.5">
        <img
          src={logo}
          alt="Second Brain"
          className="size-5 object-contain"
        />

        <span className="text-lg font-semibold tracking-tight">
          Second Brain
        </span>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          aria-label="Toggle theme"
        >
          <Sun className="size-4 dark:hidden" />
          <Moon className="hidden size-4 dark:block" />
        </Button>

        <Button variant="ghost">
          Sign In
        </Button>

        <Button>
          Get Started
        </Button>
      </div>
    </nav>
  )
}

export default Navbar