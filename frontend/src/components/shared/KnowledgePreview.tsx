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
    title: "A reminder: you don't need to turn every hobby into a side hustle.",
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

function KnowledgePreview() {
  return (
    <section className="px-6 pb-32">
      <div className="mx-auto max-w-2xl text-center">

        {/* Capture */}
        <div className="mx-auto mb-8 max-w-lg rounded-xl border border-border/60 bg-background/80 px-5 py-4 text-left shadow-sm backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <span className="text-lg text-muted-foreground">+</span>

            <span className="text-sm text-muted-foreground">
              Something worth remembering...
            </span>
            
          </div>
        </div>

        {/* Content types */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon

            return (
              <div
                key={item.type}
                className="
                  group
                  relative
                  rounded-xl
                  border
                  border-border/60
                  bg-background/70
                  p-4
                  text-left
                  shadow-sm
                  backdrop-blur-sm
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:shadow-md
                "
              >
                <div className="mb-3 flex items-center gap-2 text-xs text-muted-foreground">
                  {Icon ? (
                    <Icon className="size-4" />
                  ) : (
                    <span className="text-sm font-semibold">𝕏</span>
                  )}

                  <span>{item.label}</span>
                </div>

                <p className="pr-8 text-sm font-medium leading-5">
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
                    border-border/60
                    text-muted-foreground
                    transition-colors
                    group-hover:text-foreground
                  "
                >
                  <ArrowUpRight className="size-3.5" />
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
                border-border/60
                bg-background/60
                px-3
                py-1
                text-xs
                text-muted-foreground
              "
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Bottom message */}
        <div className="mt-10">
          <p className="text-sm text-muted-foreground">
            One place for everything you don't want to forget.
          </p>
        </div>
      </div>
    </section>
  )
}

export default KnowledgePreview