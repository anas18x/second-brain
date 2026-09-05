import { useState } from "react"
import { Moon, Sun } from "lucide"
import { MorphIcon } from "morphicons/react"

import { Button } from "@/components/ui/button"

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark")
    setIsDark((prev) => !prev)
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