import { Copy, ExternalLink, Share2 } from "lucide-react"

function ShareBrainPage() {
  return (
    <div className="min-h-svh bg-background">
      <div className="mx-auto w-full max-w-4xl px-6 py-10 md:px-10 md:py-12">

        {/* Header */}

        <div className="max-w-2xl">
          <div className="mb-4 flex size-10 items-center justify-center rounded-xl border border-border bg-card">
            <Share2 className="size-4 text-foreground" />
          </div>

          <h1 className="text-2xl font-semibold tracking-tight text-foreground">
            Share your Brain
          </h1>

          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Share your saved knowledge with others through a public link.
          </p>
        </div>

        {/* Sharing card */}

        <section className="mt-10 rounded-xl border border-border bg-card">

          <div className="border-b border-border px-5 py-5">
            <h2 className="text-sm font-medium text-card-foreground">
              Public sharing
            </h2>

            <p className="mt-1 text-sm leading-5 text-muted-foreground">
              Anyone with your public link will be able to view the
              content you choose to share.
            </p>
          </div>

          <div className="flex items-center justify-between gap-6 px-5 py-5">
            <div>
              <p className="text-sm font-medium text-foreground">
                Make your Brain public
              </p>

              <p className="mt-1 text-sm text-muted-foreground">
                Create a public link that you can share with others.
              </p>
            </div>

            <button
              type="button"
              className="
                inline-flex
                shrink-0
                items-center
                justify-center
                rounded-lg
                bg-primary
                px-4
                py-2
                text-sm
                font-medium
                text-primary-foreground
                transition-opacity
                hover:opacity-90
              "
            >
              Enable sharing
            </button>
          </div>
        </section>

        {/* Public link */}

        <section className="mt-6 rounded-xl border border-border bg-card">

          <div className="border-b border-border px-5 py-5">
            <h2 className="text-sm font-medium text-card-foreground">
              Your public link
            </h2>

            <p className="mt-1 text-sm leading-5 text-muted-foreground">
              Anyone with this link can access your public Brain.
            </p>
          </div>

          <div className="p-5">

            <div className="flex items-center gap-2">

              <div
                className="
                  flex
                  min-h-10
                  min-w-0
                  flex-1
                  items-center
                  rounded-lg
                  border
                  border-border
                  bg-muted/40
                  px-3
                  text-sm
                  text-muted-foreground
                "
              >
                <span className="truncate">
                  Your public link will appear here
                </span>
              </div>

              <button
                type="button"
                aria-label="Copy public link"
                disabled
                className="
                  inline-flex
                  size-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-border
                  text-muted-foreground
                  opacity-50
                "
              >
                <Copy className="size-4" />
              </button>

              <button
                type="button"
                aria-label="Open public link"
                disabled
                className="
                  inline-flex
                  size-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-border
                  text-muted-foreground
                  opacity-50
                "
              >
                <ExternalLink className="size-4" />
              </button>

            </div>

            <p className="mt-3 text-xs text-muted-foreground">
              Enable sharing to generate your public link.
            </p>

          </div>
        </section>

      </div>
    </div>
  )
}

export default ShareBrainPage