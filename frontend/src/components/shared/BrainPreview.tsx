import {
  ArrowUpRight,
  FileText,
  Play,
  StickyNote,
} from "lucide-react"

const items = [
  {
    type: "youtube",
    label: "YouTube",
    title: "A travel video I want to watch before my next trip",
    icon: Play,
  },
  {
    type: "twitter",
    label: "Twitter",
    title:
      "A reminder: you don't need to turn every hobby into a side hustle.",
    icon: null,
  },
  {
    type: "article",
    label: "Article",
    title: "How modern databases actually handle millions of requests",
    icon: FileText,
  },
  {
    type: "note",
    label: "Personal Note",
    title: "An idea I want to build someday",
    icon: StickyNote,
  },
]

function BrainPreview() {
  return (
    <section className="px-6 pb-32">
      <div className="mx-auto max-w-2xl text-center">

        {/* Capture Prompt */}
        <div
          className="
            group
            mx-auto
            mb-8
            max-w-lg
            rounded-xl
            border
            border-slate-300/90
            bg-white/85
            px-5
            py-4
            text-left
            shadow-[0_2px_4px_rgba(0,0,0,0.04),0_6px_12px_rgba(0,0,0,0.07),0_12px_24px_-10px_rgba(0,0,0,0.16)]
            ring-1
            ring-white/80
            backdrop-blur-md
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:border-slate-400/80
            hover:bg-white/95
            hover:shadow-[0_4px_8px_rgba(0,0,0,0.05),0_10px_20px_rgba(0,0,0,0.08),0_18px_30px_-10px_rgba(0,0,0,0.18)]
          "
        >
          <div className="flex items-center gap-3">
            <span
              className="
                text-lg
                font-medium
                text-slate-500
                transition-transform
                duration-300
                group-hover:rotate-90
              "
            >
              +
            </span>

            <span className="text-sm font-semibold text-slate-800">
              Something worth remembering...
            </span>
          </div>
        </div>

        {/* Content Types */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon

            return (
              <div
                key={item.type}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-xl
                  border
                  border-slate-300/90
                  bg-white/80
                  p-4
                  text-left
                  shadow-[0_2px_4px_rgba(0,0,0,0.04),0_6px_14px_rgba(0,0,0,0.06)]
                  backdrop-blur-md
                  transition-all
                  duration-300
                  ease-out
                  hover:-translate-y-1
                  hover:border-slate-400
                  hover:bg-white/95
                  hover:shadow-[0_4px_8px_rgba(0,0,0,0.05),0_12px_24px_-8px_rgba(0,0,0,0.16)]
                "
              >
                {/* Subtle Hover Glow */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-10
                    -top-10
                    size-24
                    rounded-full
                    bg-slate-300/20
                    opacity-0
                    blur-2xl
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                  "
                />

                {/* Type */}
                <div className="relative mb-4 flex items-center gap-2">
                  <div
                    className="
                      flex
                      size-7
                      items-center
                      justify-center
                      rounded-md
                      border
                      border-slate-300
                      bg-white/90
                      text-slate-700
                      shadow-sm
                      transition-all
                      duration-300
                      group-hover:border-slate-400
                      group-hover:text-slate-950
                    "
                  >
                    {Icon ? (
                      <Icon className="size-3.5" />
                    ) : (
                      <span className="text-xs font-semibold">𝕏</span>
                    )}
                  </div>

                  <span
                    className="
                      text-xs
                      font-semibold
                      text-slate-700
                      transition-colors
                      duration-300
                      group-hover:text-slate-950
                    "
                  >
                    {item.label}
                  </span>
                </div>

                {/* Title */}
                <p
                  className="
                    relative
                    pr-8
                    text-sm
                    font-semibold
                    leading-5
                    text-slate-900
                    transition-transform
                    duration-300
                    group-hover:translate-x-0.5
                  "
                >
                  {item.title}
                </p>

                {/* Link */}
                <div
                  className="
                    absolute
                    bottom-4
                    right-4
                    flex
                    size-7
                    items-center
                    justify-center
                    rounded-md
                    border
                    border-slate-300
                    bg-white/90
                    text-slate-600
                    shadow-sm
                    transition-all
                    duration-300
                    group-hover:border-slate-800
                    group-hover:bg-slate-900
                    group-hover:text-white
                  "
                >
                  <ArrowUpRight
                    className="
                      size-3.5
                      transition-transform
                      duration-300
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                    "
                  />
                </div>
              </div>
            )
          })}
        </div>

        {/* Tags */}
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {[
            "#travel",
            "#tech",
            "#ideas",
            "#fun",
            "#inspiration",
          ].map((tag) => (
            <span
              key={tag}
              className="
                rounded-full
                border
                border-slate-300
                bg-white/80
                px-3
                py-1
                text-xs
                font-semibold
                text-slate-700
                shadow-sm
                backdrop-blur-sm
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:border-slate-400
                hover:bg-white
                hover:text-slate-950
              "
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="mt-10">
          <p className="text-sm font-semibold text-slate-800">
            One place for everything you don't want to forget.
          </p>
        </div>
      </div>
    </section>
  )
}

export default BrainPreview