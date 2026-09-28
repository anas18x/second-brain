import { Moon, Sun } from "lucide"
import { MorphIcon } from "morphicons/react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  const isDark = resolvedTheme === "dark"

  function toggleTheme() {
    setTheme(isDark ? "light" : "dark")
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      onClick={toggleTheme}
    >
      <MorphIcon
        icon={isDark ? Moon : Sun}
        spring="smooth"
      />
    </Button>
  )
}

export default ThemeToggle