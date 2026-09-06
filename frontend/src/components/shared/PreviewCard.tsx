import { ExternalLink } from "lucide-react"

type PreviewCardProps = {
  title: string
  body?: string
  url?: string
  tags: string[]
}

function PreviewCard({
  title,
  body,
  url,
  tags,
}: PreviewCardProps) {
  const isYouTube =
    url?.includes("youtube.com") || url?.includes("youtu.be")

  const isTwitter =
    url?.includes("twitter.com") || url?.includes("x.com")

  const isGitHub = url?.includes("github.com")

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

  return (
    <article
      className="
        group
        relative
        flex
        flex-col
        overflow-hidden
        rounded-xl
        border
        border-slate-200/80
        bg-white/90
        p-2.5
        pl-3.5
        shadow-[0_2px_8px_rgba(15,23,42,0.04)]
        backdrop-blur-md
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:border-slate-300
        hover:bg-white
        hover:shadow-[0_10px_24px_rgba(15,23,42,0.09)]
        sm:p-3
        sm:pl-4
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
        `}
      />

      {/* Bookmark */}
      {url && (
        <div
          className="
            flex
            min-w-0
            items-center
            gap-1.5
            rounded-md
            border
            border-slate-200/80
            bg-slate-50/80
            px-2
            py-1.5
            sm:gap-2
            sm:px-2.5
          "
        >
          <img
            src={`https://www.google.com/s2/favicons?domain=${getDomain()}&sz=64`}
            alt=""
            className="size-4 shrink-0 rounded-sm"
          />

          <div className="min-w-0 flex-1">
            <p className="truncate text-[9px] font-semibold text-slate-700">
              {getDomain()}
            </p>

            <p className="truncate text-[8px] text-slate-400">
              {url.replace(/^https?:\/\//, "")}
            </p>
          </div>

          <ExternalLink className="size-2.5 shrink-0 text-slate-300" />
        </div>
      )}

      {/* Content */}
      <div className="relative mt-3 sm:mt-4">
        <h3
          className="
            text-[12px]
            font-semibold
            leading-4.5
            tracking-tight
            text-slate-950
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
              text-[9px]
              leading-3.5
              text-slate-500
              sm:text-[10px]
              sm:leading-4
            "
          >
            {body}
          </p>
        )}
      </div>

      {/* Tags */}
      <div className="relative mt-2.5 flex flex-wrap gap-1 sm:mt-3">
        {tags.map((tag) => (
          <span
            key={tag}
            className="
              rounded-full
              bg-slate-100
              px-1.5
              py-0.5
              text-[7px]
              font-medium
              text-slate-600
              sm:px-2
              sm:text-[8px]
            "
          >
            #{tag}
          </span>
        ))}
      </div>
    </article>
  )
}

export default PreviewCard