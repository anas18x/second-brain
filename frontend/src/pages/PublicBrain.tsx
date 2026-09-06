import {
  ArrowUpRight,
  Brain,
  ExternalLink,
} from "lucide-react"
import { Link, useParams } from "react-router-dom"

type BrainItem = {
  id: string
  title: string
  body?: string
  url?: string
  tags: string[]
}

function PublicBrainPage() {
  const { shareSlug } = useParams()

  // Demo data for UI only.
  // This will come from the public brain API later.
  const owner = {
    username: "anas",
    shareSlug,
  }

  const brains: BrainItem[] = [
    {
      id: "1",
      title: "The best explanation of React Server Components",
      body: "Worth keeping around. Explains the mental model without making it unnecessarily complicated.",
      url: "https://react.dev",
      tags: ["tech", "react"],
    },
    {
      id: "2",
      title: "How to build things people actually use",
      body: "A reminder to focus on solving a real problem before adding more features.",
      url: "https://paulgraham.com/start.html",
      tags: ["ideas", "building"],
    },
    {
      id: "3",
      title: "System design notes",
      body: "Caching, queues, database indexing and the things I keep forgetting.",
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
      body: "Make the thing simpler before making the thing bigger.",
      tags: ["notes"],
    },
    {
      id: "6",
      title: "Understanding databases from first principles",
      body: "A useful reference for thinking about indexes, queries and storage instead of memorizing terminology.",
      url: "https://use-the-index-luke.com",
      tags: ["tech", "databases"],
    },
  ]

  const getDomain = (url: string) => {
    try {
      return new URL(url).hostname.replace("www.", "")
    } catch {
      return url
    }
  }

  const getAccent = (url?: string) => {
    if (!url) return "bg-amber-400"

    if (
      url.includes("youtube.com") ||
      url.includes("youtu.be")
    ) {
      return "bg-red-500"
    }

    if (
      url.includes("twitter.com") ||
      url.includes("x.com")
    ) {
      return "bg-slate-950"
    }

    if (url.includes("github.com")) {
      return "bg-violet-500"
    }

    return "bg-blue-500"
  }

  return (
    <main className="min-h-screen bg-slate-50/70">
      {/* Header */}
      <header className="border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
          
          {/* Brand */}
          <Link
            to="/"
            className="
              flex
              items-center
              gap-2.5
              font-['Space_Grotesk']
              text-sm
              font-semibold
              tracking-tight
              text-slate-950
            "
          >
            <div
              className="
                flex
                size-7
                items-center
                justify-center
                rounded-lg
                bg-slate-950
                text-white
              "
            >
              <Brain className="size-4" />
            </div>

            Second Brain
          </Link>

          <Link
            to="/register"
            className="
              inline-flex
              items-center
              gap-1.5
              rounded-lg
              px-3
              py-1.5
              font-['Space_Grotesk']
              text-xs
              font-semibold
              text-slate-600
              transition-colors
              hover:bg-slate-100
              hover:text-slate-950
            "
          >
            Create your own
            <ArrowUpRight className="size-3.5" />
          </Link>
        </div>
      </header>

      <div className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8 sm:py-14">

        {/* Owner */}
        <section className="mb-10">
          <div
            className="
              flex
              size-12
              items-center
              justify-center
              rounded-2xl
              border
              border-slate-200
              bg-white
              font-['Space_Grotesk']
              text-lg
              font-semibold
              text-slate-700
              shadow-[0_4px_14px_rgba(15,23,42,0.05)]
            "
          >
            {owner.username.charAt(0).toUpperCase()}
          </div>

          <p
            className="
              mt-5
              font-['Geist_Mono']
              text-[10px]
              font-medium
              uppercase
              tracking-[0.16em]
              text-slate-400
            "
          >
            Public Brain
          </p>

          <h1
            className="
              mt-2
              font-sans
              text-3xl
              font-semibold
              tracking-tight
              text-slate-950
              sm:text-4xl
            "
          >
            {owner.username}&apos;s Second Brain
          </h1>

          <p
            className="
              mt-2
              max-w-xl
              font-['Geist_Mono']
              text-xs
              leading-5
              text-slate-500
            "
          >
            A collection of links, notes, ideas, and things
            worth keeping.
          </p>
        </section>

        {/* Brain Grid */}
        <div className="columns-1 gap-4 sm:columns-2 xl:columns-3">
          {brains.map((brain) => (
            <article
              key={brain.id}
              className="
                group
                relative
                mb-4
                break-inside-avoid
                overflow-hidden
                rounded-2xl
                border
                border-slate-200/80
                bg-white/90
                p-4
                pl-5
                shadow-[0_3px_12px_rgba(15,23,42,0.04)]
                backdrop-blur-md
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-slate-300
                hover:bg-white
                hover:shadow-[0_12px_28px_rgba(15,23,42,0.09)]
              "
            >
              {/* Accent */}
              <div
                className={`
                  absolute
                  left-0
                  top-0
                  h-full
                  w-1
                  opacity-80
                  ${getAccent(brain.url)}
                `}
              />

              {/* Bookmark */}
              {brain.url && (
                <a
                  href={brain.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex
                    min-w-0
                    items-center
                    gap-2.5
                    rounded-lg
                    border
                    border-slate-200/80
                    bg-slate-50/80
                    px-3
                    py-2
                    transition-all
                    duration-200
                    hover:border-slate-300
                    hover:bg-white
                    hover:shadow-[0_4px_12px_rgba(15,23,42,0.06)]
                  "
                >
                  <img
                    src={`https://www.google.com/s2/favicons?domain=${getDomain(
                      brain.url,
                    )}&sz=64`}
                    alt=""
                    className="size-5 shrink-0 rounded-md"
                  />

                  <div className="min-w-0 flex-1">
                    <p
                      className="
                        truncate
                        font-['Geist_Mono']
                        text-[10px]
                        font-semibold
                        text-slate-700
                      "
                    >
                      {getDomain(brain.url)}
                    </p>

                    <p
                      className="
                        truncate
                        font-['Geist_Mono']
                        text-[9px]
                        text-slate-400
                      "
                    >
                      {brain.url.replace(/^https?:\/\//, "")}
                    </p>
                  </div>

                  <ExternalLink
                    className="
                      size-3
                      shrink-0
                      text-slate-300
                      transition-colors
                      group-hover:text-slate-500
                    "
                  />
                </a>
              )}

              {/* Content */}
              <div className="mt-5">
                <h2
                  className="
                    text-[15px]
                    font-semibold
                    leading-6
                    tracking-tight
                    text-slate-950
                  "
                >
                  {brain.title}
                </h2>

                {brain.body && (
                  <p
                    className="
                      mt-2
                      text-xs
                      leading-5
                      text-slate-500
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
                        bg-slate-100
                        px-2.5
                        py-1
                        font-['Geist_Mono']
                        text-[10px]
                        font-medium
                        text-slate-600
                      "
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-14 border-t border-slate-200 pt-5">
          <p
            className="
              font-['Geist_Mono']
              text-[10px]
              text-slate-400
            "
          >
            Shared publicly with Second Brain
          </p>
        </div>
      </div>
    </main>
  )
}

export default PublicBrainPage