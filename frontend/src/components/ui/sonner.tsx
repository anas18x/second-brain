import { useTheme } from "next-themes"
import {
  Toaster as Sonner,
  type ToasterProps,
} from "sonner"
import {
  CircleCheckIcon,
  InfoIcon,
  TriangleAlertIcon,
  OctagonXIcon,
  Loader2Icon,
} from "lucide-react"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      icons={{
        success: (
          <CircleCheckIcon className="size-4 text-[#e04430]" />
        ),
        info: (
          <InfoIcon className="size-4 text-[#e04430]" />
        ),
        warning: (
          <TriangleAlertIcon className="size-4 text-[#e04430]" />
        ),
        error: (
          <OctagonXIcon className="size-4 text-[#e04430]" />
        ),
        loading: (
          <Loader2Icon className="size-4 animate-spin text-[#e04430]" />
        ),
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "color-mix(in oklab, #e04430 20%, var(--border))",
          "--border-radius": "var(--radius)",
        } as React.CSSProperties
      }
      toastOptions={{
        classNames: {
          toast: `
            cn-toast
            border-[#e04430]/20
            bg-background
            text-foreground
            shadow-[0_8px_30px_rgba(0,0,0,0.08)]
            dark:shadow-[0_8px_30px_rgba(0,0,0,0.30)]
          `,
          title: `
            text-sm
            font-medium
            text-foreground
          `,
          description: `
            text-xs
            leading-5
            text-muted-foreground
          `,
        },
      }}
      {...props}
    />
  )
}

export { Toaster }