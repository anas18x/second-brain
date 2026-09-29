import {
  Copy,
  ExternalLink,
  Link2,
  Share2,
  UsersRound,
} from "lucide-react"

function ShareBrainPage() {
  return (
    <div className="min-h-svh min-w-0 bg-background">
      <div
        className="
          mx-auto
          w-full
          max-w-4xl
          px-4
          pb-10
          pt-16
          sm:px-6
          sm:pb-12
          sm:pt-8
          md:px-8
          lg:px-10
        "
      >
        {/* Header */}
        <header>
          <h1
            className="
              text-2xl
              font-semibold
              tracking-tight
              text-foreground
              sm:text-3xl
            "
          >
            Share your Brain
          </h1>

          <p
            className="
              mt-1.5
              text-sm
              text-muted-foreground
            "
          >
            Share your knowledge with others through a public link.
          </p>
        </header>

        {/* Public sharing */}
        <section
          className="
            mt-8
            overflow-hidden
            rounded-xl
            border
            border-border
            bg-card
          "
        >
          {/* Section header */}
          <div
            className="
              flex
              items-center
              gap-3
              border-b
              border-border
              px-4
              py-4
              sm:px-5
            "
          >
            <div
              className="
                flex
                size-8
                shrink-0
                items-center
                justify-center
                rounded-lg
                bg-muted
                text-muted-foreground
              "
            >
              <Share2 className="size-4" />
            </div>

            <div>
              <h2 className="text-sm font-medium text-foreground">
                Public sharing
              </h2>

              <p className="mt-0.5 text-xs text-muted-foreground">
                Control whether your Brain can be viewed publicly.
              </p>
            </div>
          </div>

          {/* Content */}
          <div
            className="
              flex
              flex-col
              gap-4
              px-4
              py-4
              sm:flex-row
              sm:items-center
              sm:justify-between
              sm:px-5
            "
          >
            <div className="min-w-0">
              <p className="text-sm font-medium text-foreground">
                Make your Brain public
              </p>

              <p className="mt-0.5 text-xs text-muted-foreground">
                Create a public link that others can visit.
              </p>
            </div>

            <button
              type="button"
              className="
                inline-flex
                h-9
                w-full
                shrink-0
                cursor-pointer
                items-center
                justify-center
                rounded-md
                bg-primary
                px-4
                text-xs
                font-medium
                text-primary-foreground
                shadow-sm
                transition-colors
                hover:bg-primary/90
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-ring
                focus-visible:ring-offset-2
                sm:w-auto
              "
            >
              Enable sharing
            </button>
          </div>
        </section>

        {/* Public link */}
        <section
          className="
            mt-4
            overflow-hidden
            rounded-xl
            border
            border-border
            bg-card
          "
        >
          {/* Section header */}
          <div
            className="
              flex
              items-center
              gap-3
              border-b
              border-border
              px-4
              py-4
              sm:px-5
            "
          >
            <div
              className="
                flex
                size-8
                shrink-0
                items-center
                justify-center
                rounded-lg
                bg-muted
                text-muted-foreground
              "
            >
              <Link2 className="size-4" />
            </div>

            <div>
              <h2 className="text-sm font-medium text-foreground">
                Your public link
              </h2>

              <p className="mt-0.5 text-xs text-muted-foreground">
                Use this link to share your Brain.
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="px-4 py-4 sm:px-5">
            <div className="flex items-center gap-2">
              {/* Link */}
              <div
                className="
                  flex
                  min-h-10
                  min-w-0
                  flex-1
                  items-center
                  rounded-lg
                  border
                  border-input
                  bg-muted/30
                  px-3
                  text-sm
                  text-muted-foreground
                "
              >
                <span className="truncate">
                  Your public link will appear here
                </span>
              </div>

              {/* Copy */}
              <button
                type="button"
                aria-label="Copy public link"
                disabled
                className="
                  inline-flex
                  size-10
                  shrink-0
                  cursor-not-allowed
                  items-center
                  justify-center
                  rounded-md
                  border
                  border-border
                  bg-background
                  text-muted-foreground
                  opacity-50
                "
              >
                <Copy className="size-4" />
              </button>

              {/* Open */}
              <button
                type="button"
                aria-label="Open public link"
                disabled
                className="
                  inline-flex
                  size-10
                  shrink-0
                  cursor-not-allowed
                  items-center
                  justify-center
                  rounded-md
                  border
                  border-border
                  bg-background
                  text-muted-foreground
                  opacity-50
                "
              >
                <ExternalLink className="size-4" />
              </button>
            </div>

            <p className="mt-2.5 text-xs text-muted-foreground">
              Enable sharing to generate your public link.
            </p>
          </div>
        </section>

        {/* Visitors */}
        <section
          className="
            mt-4
            overflow-hidden
            rounded-xl
            border
            border-border
            bg-card
          "
        >
          {/* Section header */}
          <div
            className="
              flex
              items-center
              gap-3
              border-b
              border-border
              px-4
              py-4
              sm:px-5
            "
          >
            <div
              className="
                flex
                size-8
                shrink-0
                items-center
                justify-center
                rounded-lg
                bg-muted
                text-muted-foreground
              "
            >
              <UsersRound className="size-4" />
            </div>

            <div>
              <h2 className="text-sm font-medium text-foreground">
                Visitors
              </h2>

              <p className="mt-0.5 text-xs text-muted-foreground">
                See how many people have viewed your Brain.
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="px-4 py-5 sm:px-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-foreground">
                  Total visitors
                </p>

                <p className="mt-0.5 text-xs text-muted-foreground">
                  People who have viewed your public Brain.
                </p>
              </div>

              <p
                className="
                  text-2xl
                  font-semibold
                  tracking-tight
                  text-foreground
                "
              >
                --
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ShareBrainPage