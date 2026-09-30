import {
  ExternalLink,
  X,
} from "lucide-react"

type BrainItem = {
  id: string
  title: string
  body?: string
  url?: string
  tags: string[]
}

type BrainDialogProps = {
  brain: BrainItem | null
  onClose: () => void
}

function BrainDialog({
  brain,
  onClose,
}: BrainDialogProps) {
  if (!brain) return null

  function getDomain(url: string) {
    try {
      return new URL(url).hostname.replace(
        "www.",
        "",
      )
    } catch {
      return url
    }
  }

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        p-4
        sm:p-6
      "
      role="dialog"
      aria-modal="true"
      aria-labelledby="brain-dialog-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose()
        }
      }}
    >
      {/* Backdrop */}
      <div
        className="
          absolute
          inset-0
          bg-background/75
          backdrop-blur-sm
        "
      />

      {/* Dialog */}
      <div
        className="
          relative
          z-10
          flex
          w-full
          max-w-2xl
          max-h-[85vh]
          flex-col
          overflow-hidden
          rounded-2xl
          border
          border-foreground/[0.12]
          bg-card
          shadow-[0_20px_60px_rgba(0,0,0,0.18)]
          dark:border-white/[0.12]
          dark:shadow-[0_24px_70px_rgba(0,0,0,0.55)]
        "
      >
        {/* Top highlight */}
        <div
          className="
            pointer-events-none
            absolute
            inset-x-8
            top-0
            z-20
            h-px
            bg-gradient-to-r
            from-transparent
            via-foreground/[0.14]
            to-transparent
          "
        />

        {/* Header */}
        <div
          className="
            flex
            shrink-0
            items-center
            justify-between
            border-b
            border-border
            px-5
            py-4
            sm:px-6
          "
        >
          <span
            className="
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.16em]
              text-muted-foreground
            "
          >
            Saved item
          </span>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="
              flex
              size-8
              cursor-pointer
              items-center
              justify-center
              rounded-lg
              text-muted-foreground
              transition-all
              duration-200
              hover:bg-muted
              hover:text-foreground
            "
          >
            <X className="size-4" />
          </button>
        </div>

        {/* Scrollable content */}
        <div
          className="
            min-h-0
            flex-1
            overflow-y-auto
            overscroll-contain
            px-5
            py-6
            sm:px-7
            sm:py-7

            scrollbar-thin
            scrollbar-track-transparent
            scrollbar-thumb-foreground/15
            hover:scrollbar-thumb-foreground/25
          "
        >
          {/* Title */}
          <h2
            id="brain-dialog-title"
            className="
              max-w-xl
              text-2xl
              font-semibold
              leading-tight
              tracking-[-0.025em]
              text-foreground
              sm:text-3xl
            "
          >
            {brain.title}
          </h2>

          {/* Tags */}
          {brain.tags.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-1.5">
              {brain.tags.map((tag) => (
                <span
                  key={tag}
                  className="
                    rounded-full
                    border
                    border-foreground/[0.11]
                    bg-muted/60
                    px-2.5
                    py-1
                    text-[9px]
                    font-medium
                    text-muted-foreground
                    transition-colors
                    hover:border-foreground/[0.16]
                    hover:bg-muted
                    hover:text-foreground
                  "
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* URL */}
          {brain.url && (
            <a
              href={brain.url}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                mt-7
                flex
                min-w-0
                items-center
                gap-3
                rounded-xl
                border
                border-foreground/[0.10]
                bg-muted/35
                px-3.5
                py-3
                transition-all
                duration-200
                hover:border-foreground/[0.16]
                hover:bg-muted/60
                hover:shadow-sm
              "
            >
              <div
                className="
                  flex
                  size-8
                  shrink-0
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-lg
                  border
                  border-border
                  bg-background
                  shadow-sm
                "
              >
                <img
                  src={`https://www.google.com/s2/favicons?domain=${getDomain(
                    brain.url,
                  )}&sz=64`}
                  alt=""
                  className="size-4 rounded-sm"
                />
              </div>

              <div className="min-w-0 flex-1">
                <p
                  className="
                    truncate
                    text-xs
                    font-semibold
                    text-foreground
                  "
                >
                  {getDomain(brain.url)}
                </p>

                <p
                  className="
                    mt-0.5
                    truncate
                    text-[10px]
                    text-muted-foreground
                  "
                >
                  {brain.url.replace(
                    /^https?:\/\//,
                    "",
                  )}
                </p>
              </div>

              <ExternalLink
                className="
                  size-3.5
                  shrink-0
                  text-muted-foreground/50
                  transition-all
                  duration-200
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                  group-hover:text-foreground
                "
              />
            </a>
          )}

          {/* Divider */}
          <div className="mt-7 h-px w-full bg-border" />

          {/* Body */}
          <div className="mt-7">
            {brain.body ? (
              <p
                className="
                  whitespace-pre-wrap
                  text-sm
                  font-medium
                  leading-7
                  text-foreground/70
                  sm:text-[15px]
                  sm:leading-8
                "
              >
                {brain.body}
              </p>
            ) : (
              <p
                className="
                  text-sm
                  font-medium
                  text-muted-foreground/60
                "
              >
                No note added.
              </p>
            )}
          </div>
        </div>

        {/* Footer */}
        <div
          className="
            flex
            shrink-0
            items-center
            justify-between
            border-t
            border-border
            px-5
            py-3.5
            sm:px-7
          "
        >
          <span
            className="
              text-[10px]
              font-medium
              text-muted-foreground/50
            "
          >
            Public brain
          </span>

          <button
            type="button"
            onClick={onClose}
            className="
              cursor-pointer
              rounded-md
              px-2
              py-1
              text-xs
              font-medium
              text-muted-foreground
              transition-colors
              hover:bg-muted
              hover:text-foreground
            "
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default BrainDialog