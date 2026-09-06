import PreviewCard from "@/components/shared/PreviewCard"

const previewBrains = [
  {
    id: "preview-1",
    title: "A travel video I want to watch before my next trip",
    body: "",
    url: "https://youtube.com/watch?v=example",
    tags: ["travel", "fun"],
  },
  {
    id: "preview-2",
    title:
      "The goal isn't to be productive all the time. It's to have a life you actually like.",
    body: "",
    url: "https://x.com/naval/status/example",
    tags: ["life", "ideas"],
  },
  {
    id: "preview-3",
    title:
      "How modern databases actually handle millions of requests",
    body:
      "A useful breakdown of how modern systems handle traffic, caching, databases, and the boring things that suddenly become important at scale.",
    url: "https://medium.com/@example/modern-databases",
    tags: ["tech", "backend"],
  },
  {
    id: "preview-4",
    title: "An idea I want to build someday",
    body:
      "A small tool that helps people organize things they want to learn. Something simple, useful, and actually enjoyable to build.",
    url: "",
    tags: ["ideas"],
  },
  {
    id: "preview-5",
    title:
      "The surprisingly simple rule behind good system design",
    body:
      "Good systems aren't necessarily the ones with the most clever architecture. Start with the simplest thing that works, understand where the pressure actually comes from, and only then introduce complexity.",
    url: "https://example.com/system-design",
    tags: ["tech", "ideas"],
  },
  {
    id: "preview-6",
    title:
      "This video completely changed how I think about learning",
    body:
      "I used to think learning was about consuming more information. The important part is actually being able to retrieve, apply, and explain what you've learned.",
    url: "https://youtube.com/watch?v=learning",
    tags: ["inspiration", "tech"],
  },
  {
    id: "preview-7",
    title:
      "Don't optimize your life before you've figured out what you actually want.",
    body: "",
    url: "https://x.com/example/status/456",
    tags: ["inspiration", "ideas"],
  },
  {
    id: "preview-8",
    title:
      "Things I want to remember when building my next project",
    body:
      "Keep the architecture simple. Ship early. Don't build abstractions before they are needed. Make the boring parts boring. Good software doesn't need to look complicated to be impressive.",
    url: "",
    tags: ["tech", "ideas"],
  },
]

function BrainPreview() {
  return (
    <section className="px-6 pb-28">
      <div className="mx-auto w-full max-w-6xl">
        {/* Section heading */}
        <div className="mb-7 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
            Your stuff, finally in one place.
          </p>
        </div>

        {/* Product preview */}
        <div className="relative">
          {/* Soft glow */}
          <div
            className="
              pointer-events-none
              absolute
              -inset-12
              -z-10
              rounded-[50px]
              bg-slate-300/10
              blur-3xl
            "
          />

          {/* Transparent browser frame */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[28px]
              border
              border-white/50
              bg-white/[0.06]
              p-3
              shadow-[0_30px_80px_rgba(15,23,42,0.08)]
              backdrop-blur-[2px]
              sm:p-4
            "
          >
            {/* Browser header */}
            <div
              className="
                mb-4
                flex
                items-center
                justify-between
                border-b
                border-white/40
                pb-3
              "
            >
              <div className="flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-slate-500/35" />
                <span className="size-1.5 rounded-full bg-slate-500/35" />
                <span className="size-1.5 rounded-full bg-slate-500/35" />
              </div>

              <div
                className="
                  hidden
                  rounded-full
                  border
                  border-white/60
                  bg-white/20
                  px-3
                  py-1
                  text-[9px]
                  font-medium
                  text-slate-500
                  backdrop-blur-sm
                  sm:block
                "
              >
                secondbrain.app
              </div>

              <div className="w-12" />
            </div>

            {/* Brain cards */}
            <div className="columns-2 gap-2.5 sm:columns-2 sm:gap-3 lg:columns-3">
              {previewBrains.map((brain) => (
                <div
                  key={brain.id}
                  className="mb-2.5 break-inside-avoid sm:mb-3"
                >
                  <PreviewCard
                    title={brain.title}
                    body={brain.body}
                    url={brain.url}
                    tags={brain.tags}
                  />
                </div>
              ))}
            </div>

            {/* Bottom fade */}
            <div
              className="
                pointer-events-none
                absolute
                bottom-0
                left-0
                right-0
                h-24
                bg-gradient-to-t
                from-transparent
                via-white/[0.02]
                to-transparent
              "
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrainPreview