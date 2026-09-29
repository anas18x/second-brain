import {
  ArrowUpRight,
  ExternalLink,
} from "lucide-react"

import { useNavigate } from "react-router-dom"

type BrainCardProps = {
  id: string
  title: string
  body?: string | null
  url?: string | null
  tags: string[]
}

function BrainCard({
  id,
  title,
  body,
  url,
  tags,
}: BrainCardProps) {
  const navigate = useNavigate()

  const getDomain = () => {
    if (!url) return ""

    try {
      return new URL(url)
        .hostname
        .replace("www.", "")
    } catch {
      return url
    }
  }

  function handleBookmarkClick(
    event: React.MouseEvent<HTMLAnchorElement>
  ) {
    event.stopPropagation()
  }

  return (
    <div className="group relative pb-1.5">
      {/* Back layer */}
      <div
        className="
          absolute
          inset-x-2
          bottom-[-3px]
          top-2
          rounded-xl
          border
          border-foreground/10
          bg-card
          shadow-[0_3px_8px_rgba(0,0,0,0.08)]
          transition-all
          duration-300
          ease-out
          group-hover:translate-y-1
          group-hover:shadow-[0_5px_12px_rgba(0,0,0,0.10)]
          dark:border-white/10
          dark:shadow-[0_4px_10px_rgba(0,0,0,0.35)]
          dark:group-hover:shadow-[0_6px_14px_rgba(0,0,0,0.42)]
        "
      />

      {/* Middle layer */}
      <div
        className="
          absolute
          inset-x-1
          bottom-[-1px]
          top-1
          rounded-xl
          border
          border-foreground/10
          bg-card
          shadow-[0_4px_12px_rgba(0,0,0,0.07)]
          transition-all
          duration-300
          ease-out
          group-hover:translate-y-0.5
          group-hover:shadow-[0_5px_14px_rgba(0,0,0,0.09)]
          dark:border-white/10
          dark:shadow-[0_4px_12px_rgba(0,0,0,0.3)]
          dark:group-hover:shadow-[0_6px_16px_rgba(0,0,0,0.38)]
        "
      />

      {/* Main card */}
      <article
        onClick={() => navigate(`/brain/${id}`)}
        className="
          relative
          z-10
          flex
          min-w-0
          cursor-pointer
          flex-col
          overflow-hidden
          rounded-xl
          border
          border-foreground/12
          bg-card
          shadow-[0_2px_5px_rgba(0,0,0,0.06),0_8px_20px_rgba(0,0,0,0.07)]
          outline-none
          transition-all
          duration-300
          ease-out
          hover:-translate-y-1
          hover:border-foreground/15
          hover:shadow-[0_4px_8px_rgba(0,0,0,0.07),0_14px_28px_rgba(0,0,0,0.10)]
          focus-visible:ring-2
          focus-visible:ring-ring
          focus-visible:ring-offset-2
          dark:border-white/12
          dark:shadow-[0_3px_7px_rgba(0,0,0,0.28),0_10px_24px_rgba(0,0,0,0.22)]
          dark:hover:border-white/15
          dark:hover:shadow-[0_5px_10px_rgba(0,0,0,0.32),0_16px_32px_rgba(0,0,0,0.30)]
        "
      >
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
            opacity-80
            transition-all
            duration-300
            group-hover:h-11
            group-hover:bg-primary
            group-hover:opacity-100
          "
        />

        <div className="relative z-10 p-4 sm:p-5">
          {/* Source */}
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleBookmarkClick}
              className="
                flex
                min-w-0
                items-center
                gap-3
                rounded-lg
                border
                border-foreground/10
                bg-muted/50
                px-3
                py-2.5
                shadow-[0_1px_3px_rgba(0,0,0,0.04)]
                transition-all
                duration-200
                hover:border-foreground/15
                hover:bg-muted
                hover:shadow-sm
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
                  shadow-sm
                "
              >
                <img
                  src={`https://www.google.com/s2/favicons?domain=${getDomain()}&sz=64`}
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
                  {getDomain()}
                </p>

                <p
                  className="
                    mt-0.5
                    truncate
                    text-[8px]
                    text-muted-foreground
                  "
                >
                  {url.replace(/^https?:\/\//, "")}
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
          <div className={url ? "mt-5" : "mt-1"}>
            <div className="flex items-start gap-3">
              <div className="min-w-0 flex-1">
                <h3
                  className="
                    line-clamp-2
                    text-[15px]
                    font-semibold
                    leading-[1.35]
                    tracking-[-0.02em]
                    text-foreground
                    sm:text-[16px]
                  "
                >
                  {title}
                </h3>

                {body && (
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
                    {body}
                  </p>
                )}
              </div>

              <ArrowUpRight
                className="
                  mt-0.5
                  size-4
                  shrink-0
                  translate-x-[-3px]
                  translate-y-[3px]
                  text-muted-foreground/25
                  opacity-0
                  transition-all
                  duration-300
                  group-hover:translate-x-0
                  group-hover:translate-y-0
                  group-hover:text-foreground/60
                  group-hover:opacity-100
                "
              />
            </div>
          </div>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="
                    rounded-full
                    border
                    border-foreground/10
                    bg-muted/55
                    px-2.5
                    py-1
                    text-[8px]
                    font-medium
                    text-muted-foreground
                    shadow-[0_1px_2px_rgba(0,0,0,0.03)]
                    transition-all
                    duration-200
                    group-hover:border-foreground/15
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
      </article>
    </div>
  )
}

export default BrainCard