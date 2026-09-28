import { ExternalLink } from "lucide-react"

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

  const isYouTube =
    url?.includes("youtube.com")

  const isTwitter =
    url?.includes("twitter.com") ||
    url?.includes("x.com")

  const isGitHub =
    url?.includes("github.com")

  const accent = isYouTube
    ? "bg-[#e04430]"
    : isTwitter
      ? "bg-[#6f6b63]"
      : isGitHub
        ? "bg-[#8b6f5c]"
        : url
          ? "bg-[#8b6f5c]"
          : "bg-[#c49a68]"

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
    <article
      onClick={() =>
        navigate(`/brain/${id}`)
      }
      className="
        group
        relative
        flex
        min-w-0
        cursor-pointer
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-border/70
        bg-background/35
        p-2.5
        pl-3.5
        shadow-[0_8px_24px_rgba(0,0,0,0.035)]
        backdrop-blur-sm
        outline-none
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[var(--landing-accent)]/30
        hover:bg-background/55
        hover:shadow-[0_16px_40px_rgba(0,0,0,0.07)]
        dark:bg-white/[0.025]
        dark:hover:bg-white/[0.045]
        dark:hover:shadow-[0_16px_40px_rgba(0,0,0,0.28)]
        focus-visible:ring-2
        focus-visible:ring-ring
        focus-visible:ring-offset-2
        sm:p-3
        sm:pl-4
      "
    >
      {/* Subtle hover atmosphere */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          rounded-2xl
          bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.045),transparent_65%)]
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
          dark:bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.035),transparent_65%)]
        "
      />

      {/* Card accent */}
      <div
        className={`
          absolute
          left-0
          top-5
          z-20
          h-8
          w-[2px]
          rounded-r-full
          opacity-60
          transition-all
          duration-300
          group-hover:h-12
          group-hover:opacity-100
          ${accent}
        `}
      />

      {/* Source */}
      {url && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleBookmarkClick}
          className="
            relative
            z-10
            flex
            min-w-0
            items-center
            gap-2
            rounded-xl
            border
            border-border/60
            bg-muted/25
            px-2
            py-1.5
            transition-colors
            duration-300
            group-hover:bg-muted/40
          "
        >
          <img
            src={`https://www.google.com/s2/favicons?domain=${getDomain()}&sz=64`}
            alt=""
            className="size-4 shrink-0 rounded-sm"
          />

          <div className="min-w-0 flex-1">
            <p className="truncate text-[9px] font-semibold text-foreground">
              {getDomain()}
            </p>

            <p className="truncate text-[8px] text-muted-foreground">
              {url.replace(
                /^https?:\/\//,
                ""
              )}
            </p>
          </div>

          <ExternalLink
            className="
              size-3
              shrink-0
              text-muted-foreground/40
              transition-colors
              duration-300
              group-hover:text-muted-foreground/70
            "
          />
        </a>
      )}

      {/* Content */}
      <div
        className={`
          relative
          z-10
          ${url ? "mt-3" : "mt-0"}
          sm:${url ? "mt-4" : "mt-0"}
        `}
      >
        <h3
          className="
            line-clamp-2
            text-[12px]
            font-semibold
            leading-4.5
            tracking-tight
            text-foreground
            sm:text-[13px]
            sm:leading-5
          "
        >
          {title}
        </h3>

        {body && (
          <p
            className="
              mt-1.5
              line-clamp-4
              text-[9px]
              leading-3.5
              text-muted-foreground
              sm:text-[10px]
              sm:leading-4
            "
          >
            {body}
          </p>
        )}
      </div>

      {/* Tags */}
      {tags.length > 0 && (
        <div
          className="
            relative
            z-10
            mt-2.5
            flex
            flex-wrap
            gap-1
            sm:mt-3
          "
        >
          {tags.map((tag) => (
            <span
              key={tag}
              className="
                rounded-full
                border
                border-border/70
                bg-muted/40
                px-2
                py-0.5
                text-[8px]
                font-semibold
                text-foreground/65
                transition-all
                duration-200
                group-hover:border-[var(--landing-accent)]/20
                group-hover:bg-[var(--landing-accent)]/5
                group-hover:text-foreground
                sm:px-2.5
                sm:text-[9px]
              "
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </article>
  )
}

export default BrainCard