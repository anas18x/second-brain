import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide"
import { MorphIcon } from "morphicons/react"

import { Button } from "@/components/ui/button"

function ThemeToggle() {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  )

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  const toggleTheme = () => {
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