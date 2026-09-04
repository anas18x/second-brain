import { AtSign, ExternalLink, FileText, Play } from "lucide-react"

const items = [
  {
    icon: Play,
    source: "YouTube",
    title: "How React actually renders",
    url: "youtube.com",
    tags: ["react", "frontend"],
  },
  {
    icon: AtSign,
    source: "X / Twitter",
    title: "An interesting thought about building products",
    url: "x.com",
    tags: ["ideas", "product"],
  },
  {
    icon: ExternalLink,
    source: "Web Article",
    title: "The architecture behind modern web apps",
    url: "example.com",
    tags: ["architecture", "web"],
  },
  {
    icon: FileText,
    source: "Personal Note",
    title: "Things worth remembering",
    url: null,
    tags: ["learning", "personal"],
  },
]

function KnowledgePreview() {
  return (
    <section className="px-6 pb-32">
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
        {items.map((item, index) => {
          const Icon = item.icon

          return (
            <article
              key={item.title}
              className={`
                rounded-2xl
                border
                border-border/60
                bg-background/75
                p-5
                shadow-sm
                backdrop-blur-sm
                transition-transform
                duration-200
                hover:-translate-y-1
                ${index % 2 === 0 ? "sm:translate-y-3" : ""}
              `}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex size-8 items-center justify-center rounded-lg bg-muted">
                    <Icon className="size-4 text-muted-foreground" />
                  </div>

                  <span className="text-xs text-muted-foreground">
                    {item.source}
                  </span>
                </div>

                {item.url && (
                  <ExternalLink className="size-3.5 text-muted-foreground" />
                )}
              </div>

              <h3 className="mt-5 text-base font-semibold tracking-tight">
                {item.title}
              </h3>

              {item.url && (
                <p className="mt-2 text-xs text-muted-foreground">
                  {item.url}
                </p>
              )}

              <div className="mt-5 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default KnowledgePreview