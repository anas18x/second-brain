import { useEffect, useRef, useState } from "react"
import PreviewCard from "@/components/shared/PreviewCard"

const previewBrains = [
  {
    id: "preview-1",
    title: "A travel video I want to watch before my next trip",
    body: "✈️ Saving this for the next trip. Looks like exactly the kind of place I'd love to explore.",
    url: "https://youtube.com/watch?v=example",
    tags: ["travel", "fun"],
  },

  {
    id: "preview-2",
    title: "A quote that stuck with me",
    body:
      "💭 Some things are worth saving simply because they made you stop and think.",
    url: "https://x.com/example/status/789",
    tags: ["quotes", "ideas"],
  },

  {
    id: "preview-3",
    title: "The surprisingly simple rule behind good system design",
    body:
      "💡 Good systems aren't necessarily the ones with the most clever architecture. Start with the simplest thing that works, understand where the pressure actually comes from, and only then introduce complexity.",
    url: "https://medium.com/system-design",
    tags: ["tech", "ideas"],
  },

  {
    id: "preview-4",
    title:
      "Don't optimize your life before you've figured out what you actually want.",
    body: "🧠 Something worth coming back to.",
    url: "https://x.com/example/status/456",
    tags: ["inspiration", "ideas"],
  },

  {
    id: "preview-5",
    title: "An idea I don't want to forget",
    body:
      "✨ A small idea that came to mind today. It might turn into something useful someday, or maybe it won't. Either way, worth keeping.",
    url: "",
    tags: ["ideas"],
  },

  {
    id: "preview-6",
    title: "Future me is going to be very glad I saved this.",
    body:
      "😅 Future me has absolutely no idea what this is, but apparently present me thought it was important enough to save.",
    url: "",
    tags: ["life", "random"],
  },

  {
    id: "preview-7",
    title: "A few places I want to visit someday",
    body:
      "🌍 Save the places that catch your attention. No need to plan everything now. Just keep them somewhere you'll actually find them later.",
    url: "https://example.com/travel",
    tags: ["travel", "ideas"],
  },

  {
    id: "preview-8",
    title: "This video completely changed how I think about learning",
    body:
      "📚 I used to think learning was about consuming more information. The important part is actually being able to retrieve, apply, and explain what you've learned.",
    url: "https://youtube.com/watch?v=learning",
    tags: ["inspiration", "tech"],
  },

  {
    id: "preview-9",
    title: "An idea I want to build someday",
    body:
      "🚀 A small tool that helps people organize things they want to learn. Something simple, useful, and actually enjoyable to build.",
    url: "",
    tags: ["ideas"],
  },
]

function useRevealOnScroll() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current

    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(element)
        }
      },
      {
        threshold: 0.1,
      },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return { ref, isVisible }
}

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
              {previewBrains.map((brain) => {
                const { ref, isVisible } = useRevealOnScroll()

                return (
                  <div
                    key={brain.id}
                    ref={ref}
                    className={`
                      mb-2.5
                      break-inside-avoid
                      transition-all
                      duration-700
                      ease-out
                      sm:mb-3
                      ${
                        isVisible
                          ? "translate-y-0 opacity-100"
                          : "translate-y-6 opacity-0"
                      }
                    `}
                  >
                    <PreviewCard
                      title={brain.title}
                      body={brain.body}
                      url={brain.url}
                      tags={brain.tags}
                    />
                  </div>
                )
              })}
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