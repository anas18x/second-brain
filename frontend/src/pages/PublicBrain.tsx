import {
  ArrowUpRight,
  ExternalLink,
} from "lucide-react"

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import Brand from "@/components/shared/Brand"
import BrainDialog from "@/components/shared/BrainDialog"

type BrainItem = {
  id: string
  title: string
  body?: string
  url?: string
  tags: string[]
}

function PublicBrainPage() {
  const { shareSlug } = useParams()

  const [selectedBrain, setSelectedBrain] =
    useState<BrainItem | null>(null)

  /*
   * Temporary frontend data.
   *
   * This will eventually come from the
   * public brain API.
   */
  const owner = {
    username: "anas",
  }

  const brains: BrainItem[] = [
    {
      id: "1",
      title:
        "The best explanation of React Server Components",
      body:
        "Worth keeping around. Explains the mental model without making it unnecessarily complicated.hsiuhfduiwehfuefhuerfherufhuew fuiewsdhvfu fwdhvu wf ehfuhew ufguewhfu ewdhvcudhvciuwehvf uerhfuewhf uehdcuhewufch uiwehfehfuewhf uewhdcf uhdeu chweufhewghfyuewgfyu ewgf yuewgfyuewg fuyewgfygweygfuy ewgf yewgfyewuewhruib3cy34yrbto324v5t7328q5o34ybv575ybfyeuiyruweyuv3gtg3b4gtoq738t4v5o178tbobt7bt7trbregvfywgrfyugr fyugrfuviygrf uygrf uyg4tug4tyergt uygrt u3ygyu34gtg4vyu4tgicwugtyrgtw4ygtiyc4g 5tg w4gtcw4tycgw45itg4cbgtwyurgyguyergvuy er gy egc ywgeyfgcyuewgf yue yge3yufg e3wg fuu3etfytfytftyfuyvygffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8",
      url: "https://react.dev",
      tags: ["tech", "react"],
    },
    {
      id: "2",
      title:
        "How to build things people actually use",
      body:
        "A reminder to focus on solving a real problem before adding more features.",
      url: "https://paulgraham.com/start.html",
      tags: ["ideas", "building"],
    },
    {
      id: "3",
      title: "System design notes",
      body:
        "Caching, queues, database indexing and the things I keep forgetting.",
      tags: ["system-design", "backend"],
    },
    {
      id: "4",
      title: "A few places I want to visit",
      url: "https://www.lonelyplanet.com",
      tags: ["travel"],
    },
    {
      id: "5",
      title: "Good reminder",
      body:
        "Make the thing simpler before making the thing bigger.",
      tags: ["notes"],
    },
    {
      id: "6",
      title:
        "Understanding databases from first principles",
      body:
        "A useful reference for thinking about indexes, queries and storage instead of memorizing terminology.",
      url: "https://use-the-index-luke.com",
      tags: ["tech", "databases"],
    },
  ]

  /*
   * Close dialog with Escape.
   */
  useEffect(() => {
    if (!selectedBrain) return

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSelectedBrain(null)
      }
    }

    document.addEventListener(
      "keydown",
      handleKeyDown,
    )

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown,
      )
    }
  }, [selectedBrain])

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

  function handleCardClick(brain: BrainItem) {
    setSelectedBrain(brain)
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header
        className="
          border-b
          border-border
          bg-background/90
          backdrop-blur-xl
        "
      >
        <div
          className="
            mx-auto
            flex
            h-16
            w-full
            max-w-6xl
            items-center
            justify-between
            px-5
            sm:px-8
          "
        >
          <Brand />

          <a
            href="/register"
            className="
              inline-flex
              items-center
              gap-1.5
              rounded-lg
              px-3
              py-2
              text-xs
              font-semibold
              text-muted-foreground
              transition-all
              duration-200
              hover:bg-muted
              hover:text-foreground
            "
          >
            Create your own
            <ArrowUpRight className="size-3.5" />
          </a>
        </div>
      </header>

      {/* Main */}
      <div
        className="
          mx-auto
          w-full
          max-w-6xl
          px-5
          py-10
          sm:px-8
          sm:py-14
        "
      >
        {/* Page intro */}
        <section className="mb-10 sm:mb-12">
          <p
            className="
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.16em]
              text-muted-foreground
            "
          >
            Public Brain
          </p>

          <h1
            className="
              mt-2
              text-3xl
              font-semibold
              tracking-[-0.03em]
              text-foreground
              sm:text-4xl
            "
          >
            {owner.username}&apos;s Second Brain
          </h1>
        </section>

        {/* Cards */}
        <div
          className="
            columns-1
            gap-5
            sm:columns-2
            xl:columns-3
          "
        >
          {brains.map((brain) => (
            <article
              key={brain.id}
              role="button"
              tabIndex={0}
              onClick={() =>
                handleCardClick(brain)
              }
              onKeyDown={(event) => {
                if (
                  event.key === "Enter" ||
                  event.key === " "
                ) {
                  event.preventDefault()
                  handleCardClick(brain)
                }
              }}
              className="
                group
                relative
                mb-5
                break-inside-avoid
                cursor-pointer
                outline-none
              "
            >
              {/* Back layer */}
              <div
                className="
                  absolute
                  inset-x-2
                  bottom-[-6px]
                  top-2
                  rounded-xl
                  border
                  border-foreground/[0.08]
                  bg-card
                  shadow-[0_4px_10px_rgba(0,0,0,0.10)]
                  transition-all
                  duration-300
                  ease-out
                  group-hover:translate-y-1
                  group-hover:shadow-[0_7px_16px_rgba(0,0,0,0.13)]
                  dark:border-white/[0.08]
                  dark:shadow-[0_5px_12px_rgba(0,0,0,0.38)]
                "
              />

              {/* Middle layer */}
              <div
                className="
                  absolute
                  inset-x-1
                  bottom-[-3px]
                  top-1
                  rounded-xl
                  border
                  border-foreground/[0.10]
                  bg-card
                  shadow-[0_3px_8px_rgba(0,0,0,0.08)]
                  transition-all
                  duration-300
                  ease-out
                  group-hover:translate-y-0.5
                  group-hover:shadow-[0_5px_12px_rgba(0,0,0,0.11)]
                  dark:border-white/[0.10]
                "
              />

              {/* Main card */}
              <div
                className="
                  relative
                  z-10
                  overflow-hidden
                  rounded-xl
                  border
                  border-foreground/[0.12]
                  bg-card
                  shadow-[0_2px_5px_rgba(0,0,0,0.06),0_8px_20px_rgba(0,0,0,0.07)]
                  transition-all
                  duration-300
                  ease-out
                  group-hover:-translate-y-1
                  group-hover:border-foreground/[0.16]
                  group-hover:shadow-[0_4px_8px_rgba(0,0,0,0.07),0_16px_30px_rgba(0,0,0,0.11)]
                  focus-within:ring-2
                  focus-within:ring-ring
                  dark:border-white/[0.12]
                  dark:shadow-[0_3px_7px_rgba(0,0,0,0.28),0_10px_24px_rgba(0,0,0,0.22)]
                "
              >
                {/* Top highlight */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-x-4
                    top-0
                    z-20
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-foreground/[0.10]
                    to-transparent
                  "
                />

                {/* Accent rail */}
                <div
                  className="
                    absolute
                    left-0
                    top-5
                    z-20
                    h-8
                    w-[2px]
                    rounded-r-full
                    bg-primary/45
                    transition-all
                    duration-300
                    group-hover:h-11
                    group-hover:bg-primary
                  "
                />

                <div className="relative z-10 p-4 sm:p-5">
                  {/* Source */}
                  {brain.url && (
                    <a
                      href={brain.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(event) => {
                        event.stopPropagation()
                      }}
                      className="
                        flex
                        min-w-0
                        items-center
                        gap-3
                        rounded-lg
                        border
                        border-foreground/[0.10]
                        bg-muted/50
                        px-3
                        py-2.5
                        transition-all
                        duration-200
                        hover:border-foreground/[0.15]
                        hover:bg-muted
                      "
                    >
                      <div
                        className="
                          flex
                          size-7
                          shrink-0
                          items-center
                          justify-center
                          overflow-hidden
                          rounded-md
                          border
                          border-border
                          bg-background
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
                            text-[9px]
                            font-semibold
                            uppercase
                            tracking-[0.08em]
                            text-foreground
                          "
                        >
                          {getDomain(brain.url)}
                        </p>

                        <p
                          className="
                            mt-0.5
                            truncate
                            text-[8px]
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
                          text-muted-foreground/40
                          transition-all
                          duration-200
                          group-hover:-translate-y-0.5
                          group-hover:translate-x-0.5
                          group-hover:text-foreground/70
                        "
                      />
                    </a>
                  )}

                  {/* Content */}
                  <div
                    className={
                      brain.url
                        ? "mt-5"
                        : "mt-1"
                    }
                  >
                    <h2
                      className="
                        line-clamp-3
                        text-[15px]
                        font-semibold
                        leading-[1.4]
                        tracking-[-0.02em]
                        text-foreground
                        sm:text-[16px]
                      "
                    >
                      {brain.title}
                    </h2>

                    {brain.body && (
                      <p
                        className="
                          mt-2.5
                          line-clamp-4
                          text-[10px]
                          leading-[1.75]
                          text-muted-foreground
                          sm:text-[11px]
                        "
                      >
                        {brain.body}
                      </p>
                    )}
                  </div>

                  {/* Tags */}
                  {brain.tags.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {brain.tags.map((tag) => (
                        <span
                          key={tag}
                          className="
                            rounded-full
                            border
                            border-foreground/[0.10]
                            bg-muted/55
                            px-2.5
                            py-1
                            text-[8px]
                            font-medium
                            text-muted-foreground
                            transition-all
                            duration-200
                            group-hover:border-foreground/[0.15]
                            group-hover:bg-muted
                            group-hover:text-foreground
                            sm:text-[9px]
                          "
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Footer */}
        <footer
          className="
            mt-14
            border-t
            border-border
            pt-5
          "
        >
          <p
            className="
              text-[10px]
              text-muted-foreground
            "
          >
            Shared publicly with Second Brain
          </p>
        </footer>
      </div>

      {/* Detail dialog */}
      <BrainDialog
        brain={selectedBrain}
        onClose={() => setSelectedBrain(null)}
      />
    </main>
  )
}

export default PublicBrainPage