import { ExternalLink } from "lucide-react"
import { useNavigate } from "react-router-dom"

type BrainCardProps = {
  id: string
  title: string
  body?: string
  url?: string
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
    url?.includes("youtube.com") ||
    url?.includes("youtu.be")

  const isTwitter =
    url?.includes("twitter.com") ||
    url?.includes("x.com")

  const isGitHub =
    url?.includes("github.com")

  const accent = isYouTube
    ? "bg-red-500"
    : isTwitter
      ? "bg-slate-950"
      : isGitHub
        ? "bg-violet-500"
        : url
          ? "bg-blue-500"
          : "bg-amber-400"

  const getDomain = () => {
    if (!url) return ""

    try {
      return new URL(url).hostname.replace("www.", "")
    } catch {
      return url
    }
  }

  const handleCardClick = () => {
    navigate(`/brain/${id}`)
  }

  const handleCardKeyDown = (
    event: React.KeyboardEvent<HTMLElement>,
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      navigate(`/brain/${id}`)
    }
  }

  const handleBookmarkClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
  ) => {
    event.stopPropagation()
  }

  return (
    <article
      role="link"
      tabIndex={0}
      onClick={handleCardClick}
      onKeyDown={handleCardKeyDown}
      className="
        group
        relative
        flex
        cursor-pointer
        flex-col
        overflow-hidden
        rounded-xl
        border
        border-slate-200/90
        bg-white
        p-3.5
        pl-4.5
        shadow-[0_4px_14px_rgba(15,23,42,0.07),0_1px_3px_rgba(15,23,42,0.05)]
        outline-none
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-slate-300
        hover:shadow-[0_16px_35px_rgba(15,23,42,0.12),0_4px_10px_rgba(15,23,42,0.06)]
        focus-visible:border-slate-400
        focus-visible:ring-2
        focus-visible:ring-slate-950/10
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
          ${accent}
          opacity-80
          transition-all
          duration-300
          group-hover:w-1.5
          group-hover:opacity-100
        `}
      />

      {/* Bookmark */}
      {url && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleBookmarkClick}
          className="
            relative
            flex
            min-w-0
            items-center
            gap-2
            rounded-lg
            border
            border-slate-200
            bg-slate-50
            px-2.5
            py-1.5
            shadow-[0_1px_3px_rgba(15,23,42,0.04)]
            transition-all
            duration-200
            hover:border-slate-300
            hover:bg-white
            hover:shadow-[0_4px_10px_rgba(15,23,42,0.07)]
          "
        >
          <img
            src={`https://www.google.com/s2/favicons?domain=${getDomain()}&sz=64`}
            alt=""
            className="size-4.5 shrink-0 rounded-md"
          />

          <div className="min-w-0 flex-1">
            <p className="truncate text-[9px] font-semibold text-slate-800">
              {getDomain()}
            </p>

            <p className="truncate text-[8px] font-medium text-slate-400">
              {url.replace(/^https?:\/\//, "")}
            </p>
          </div>

          <ExternalLink
            className="
              size-3
              shrink-0
              text-slate-400
              transition-colors
              duration-200
              group-hover:text-slate-500
            "
          />
        </a>
      )}

      {/* Content */}
      <div className="relative mt-4">
        <h3
          className="
            text-[14px]
            font-semibold
            leading-5.5
            tracking-tight
            text-slate-950
          "
        >
          {title}
        </h3>

        {body && (
          <p
            className="
              mt-1.5
              text-[11px]
              font-medium
              leading-4.5
              text-slate-600
            "
          >
            {body}
          </p>
        )}
      </div>

      {/* Footer */}
      <div
        className="
          relative
          mt-4
          flex
          items-end
          justify-between
          gap-2
        "
      >
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="
                rounded-full
                border
                border-slate-200/80
                bg-slate-100
                px-2
                py-0.5
                text-[9px]
                font-medium
                text-slate-600
              "
            >
              #{tag}
            </span>
          ))}
        </div>

        <div
          className="
            flex
            shrink-0
            items-center
            gap-1.5
            text-[8px]
            font-semibold
            uppercase
            tracking-[0.14em]
            text-slate-400
          "
        >
          <span className="size-1.5 rounded-full bg-emerald-400" />
          Saved
        </div>
      </div>
    </article>
  )
}

export default BrainCard