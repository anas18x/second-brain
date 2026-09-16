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

 // Handle click on the bookmark link to prevent navigation to the brain detail page
  const handleBookmarkClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
  ) => {
    event.stopPropagation()
  }


  return (
    <article
    onClick={() => navigate(`/brain/${id}`)}
      className="
        group
        relative
        flex
        cursor-pointer
        flex-col
        overflow-hidden
        rounded-xl
        border
        border-white/10
        bg-[#111111]
        p-3.5
        pl-4.5
        shadow-[0_4px_14px_rgba(0,0,0,0.25),0_1px_3px_rgba(0,0,0,0.2)]
        outline-none
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-white/15
        hover:bg-[#141414]
        hover:shadow-[0_16px_35px_rgba(0,0,0,0.35),0_4px_10px_rgba(0,0,0,0.2)]
        focus-visible:border-white/20
        focus-visible:ring-2
        focus-visible:ring-white/10
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
            border-white/10
            bg-white/[0.04]
            px-2.5
            py-1.5
            shadow-[0_1px_3px_rgba(0,0,0,0.2)]
            transition-all
            duration-200
            hover:border-white/15
            hover:bg-white/[0.07]
            hover:shadow-[0_4px_10px_rgba(0,0,0,0.25)]
          "
        >
          <img
            src={`https://www.google.com/s2/favicons?domain=${getDomain()}&sz=64`}
            alt=""
            className="size-4.5 shrink-0 rounded-md"
          />
          <div className="min-w-0 flex-1">
            <p className="truncate text-[9px] font-semibold text-foreground">
              {getDomain()}
            </p>
            <p className="truncate text-[8px] font-medium text-muted-foreground/60">
              {url.replace(/^https?:\/\//, "")}
            </p>
          </div>
          <ExternalLink
            className="
              size-3
              shrink-0
              text-muted-foreground/50
              transition-colors
              duration-200
              group-hover:text-muted-foreground
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
            text-foreground
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
              text-muted-foreground
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
                border-white/10
                bg-white/[0.05]
                px-2
                py-0.5
                text-[9px]
                font-medium
                text-muted-foreground
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
            text-muted-foreground/50
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