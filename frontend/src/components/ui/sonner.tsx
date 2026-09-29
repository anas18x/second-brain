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
          <CircleCheckIcon className="size-4 text-foreground" />
        ),

        info: (
          <InfoIcon className="size-4 text-muted-foreground" />
        ),

        warning: (
          <TriangleAlertIcon className="size-4 text-foreground" />
        ),

        error: (
          <OctagonXIcon className="size-4 text-destructive" />
        ),

        loading: (
          <Loader2Icon className="size-4 animate-spin text-muted-foreground" />
        ),
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--border-radius": "var(--radius)",
        } as React.CSSProperties
      }
      toastOptions={{
        classNames: {
          toast: `
            cn-toast

            border
            border-border/70

            bg-popover/95
            text-popover-foreground

            shadow-[0_12px_40px_rgba(0,0,0,0.08)]

            backdrop-blur-xl

            dark:border-white/[0.09]
            dark:bg-popover/90
            dark:shadow-[0_14px_45px_rgba(0,0,0,0.40)]
          `,

          title: `
            text-sm
            font-medium
            tracking-[-0.01em]
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