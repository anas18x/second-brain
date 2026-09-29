import { useEffect, useRef, useState } from "react"

const previewBrains = [
  {
    id: "preview-1",
    title: "A travel video I want to watch before my next trip",
    body: "✈️ Saving this for the next trip. Looks like exactly the kind of place I'd love to explore.",
    source: "youtube.com",
    url: "youtube.com/watch?v=example",
    logo: "https://www.google.com/s2/favicons?domain=youtube.com&sz=64",
    accent: "bg-foreground",
    tags: ["travel", "fun"],
  },
  {
    id: "preview-2",
    title:
      "Don't optimize your life before you've figured out what you actually want.",
    body: "🧠 Something worth coming back to.",
    source: "x.com",
    url: "x.com/example/status/456",
    logo: "https://www.google.com/s2/favicons?domain=x.com&sz=64",
    accent: "bg-foreground",
    tags: ["inspiration", "ideas"],
  },
  {
    id: "preview-3",
    title: "A few places I want to visit someday",
    body: "🌍 Save the places that catch your attention. No need to plan everything now. Just keep them somewhere you'll actually find them later.",
    source: "example.com",
    url: "example.com/travel",
    logo: "https://www.google.com/s2/favicons?domain=example.com&sz=64",
    accent: "bg-foreground",
    tags: ["travel", "ideas"],
  },
  {
    id: "preview-4",
    title: "A quote that stuck with me",
    body: "💭 Some things are worth saving simply because they made you stop and think.",
    source: "x.com",
    url: "x.com/example/status/789",
    logo: "https://www.google.com/s2/favicons?domain=x.com&sz=64",
    accent: "bg-foreground",
    tags: ["quotes", "ideas"],
  },
  {
    id: "preview-5",
    title: "An idea I don't want to forget",
    body: "✨ A small idea that came to mind today. It might turn into something useful someday, or maybe it won't. Either way, worth keeping.",
    source: "",
    url: "",
    logo: "",
    accent: "bg-foreground",
    tags: ["ideas"],
  },
  {
    id: "preview-6",
    title: "Future me is going to be very glad I saved this.",
    body: "😅 Future me has absolutely no idea what this is, but apparently present me thought it was important enough to save.",
    source: "",
    url: "",
    logo: "",
    accent: "bg-foreground",
    tags: ["life", "random"],
  },
  {
    id: "preview-7",
    title: "The surprisingly simple rule behind good system design",
    body: "💡 Good systems aren't necessarily the ones with the most clever architecture. Start with the simplest thing that works, understand where the pressure actually comes from, and only then introduce complexity.",
    source: "medium.com",
    url: "medium.com/system-design",
    logo: "https://www.google.com/s2/favicons?domain=medium.com&sz=64",
    accent: "bg-foreground",
    tags: ["tech", "ideas"],
  },
  {
    id: "preview-8",
    title: "This video completely changed how I think about learning",
    body: "📚 I used to think learning was about consuming more information. The important part is actually being able to retrieve, apply, and explain what you've learned.",
    source: "youtube.com",
    url: "youtube.com/watch?v=learning",
    logo: "https://www.google.com/s2/favicons?domain=youtube.com&sz=64",
    accent: "bg-foreground",
    tags: ["inspiration", "tech"],
  },
  {
    id: "preview-9",
    title: "An idea I want to build someday",
    body: "🚀 A small tool that helps people organize things they want to learn. Something simple, useful, and actually enjoyable to build.",
    source: "",
    url: "",
    logo: "",
    accent: "bg-foreground",
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
      <style>
        {`
          @keyframes brain-ambient {
            0% {
              transform: translate3d(-2%, -1%, 0) scale(1);
            }

            50% {
              transform: translate3d(2%, 1%, 0) scale(1.04);
            }

            100% {
              transform: translate3d(-1%, 2%, 0) scale(1.02);
            }
          }
        `}
      </style>

      <div className="mx-auto w-full max-w-6xl">
        {/* Section heading */}
        <div className="mb-8 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            your stuff, finally in one place.
          </p>
        </div>

        {/* Floating cards area */}
        <div
          className="
            relative
            overflow-hidden
            rounded-[32px]
            border
            border-border/60
            bg-background
            px-3
            py-4
            shadow-[0_20px_60px_rgba(0,0,0,0.025)]
            sm:px-4
            sm:py-5
            dark:bg-background
            dark:shadow-[0_24px_70px_rgba(0,0,0,0.12)]
          "
        >
          {/* Overall soft fade */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              z-0
              rounded-[32px]
              bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.025),transparent_60%)]
              dark:bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.025),transparent_60%)]
            "
          />

          {/* Overall ambient glow */}
          <div
            className="
              pointer-events-none
              absolute
              -inset-20
              -z-10
              rounded-[80px]
              bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.025),transparent_65%)]
              blur-3xl
              dark:bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.025),transparent_65%)]
            "
          />

          {/* Slow ambient background */}
          <div className="pointer-events-none absolute inset-x-[-8%] inset-y-[-10%] -z-10 overflow-hidden">
            <div
              className="
                absolute
                left-[8%]
                top-[8%]
                h-64
                w-64
                rounded-full
                bg-foreground/[0.025]
                blur-3xl
                dark:bg-white/[0.025]
              "
              style={{
                animation: "brain-ambient 18s ease-in-out infinite",
              }}
            />

            <div
              className="
                absolute
                right-[10%]
                top-[30%]
                h-72
                w-72
                rounded-full
                bg-foreground/[0.018]
                blur-3xl
                dark:bg-white/[0.018]
              "
              style={{
                animation: "brain-ambient 22s ease-in-out infinite reverse",
              }}
            />

            <div
              className="
                absolute
                bottom-[4%]
                left-[35%]
                h-56
                w-56
                rounded-full
                bg-foreground/[0.015]
                blur-3xl
                dark:bg-white/[0.015]
              "
              style={{
                animation: "brain-ambient 20s ease-in-out infinite",
              }}
            />
          </div>

          {/* Cards */}
          <div className="relative z-10 columns-2 gap-2.5 sm:columns-2 sm:gap-3 lg:columns-3">
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
                  {/* Card stack */}
                  <div className="group relative pb-1.5">
                    {/* Deep back layer */}
                    <div
                      className="
                        absolute
                        inset-x-2
                        bottom-[-5px]
                        top-2
                        rounded-xl
                        border
                        border-border/40
                        bg-background
                        shadow-[0_4px_10px_rgba(0,0,0,0.025)]
                        transition-all
                        duration-500
                        ease-out
                        group-hover:translate-y-1
                        group-hover:border-border/60
                        group-hover:shadow-[0_8px_18px_rgba(0,0,0,0.06)]
                        dark:border-white/[0.07]
                        dark:shadow-[0_5px_12px_rgba(0,0,0,0.16)]
                        dark:group-hover:border-white/[0.10]
                        dark:group-hover:shadow-[0_9px_20px_rgba(0,0,0,0.24)]
                      "
                    />

                    {/* Middle layer */}
                    <div
                      className="
                        absolute
                        inset-x-1
                        bottom-[-2px]
                        top-1
                        rounded-xl
                        border
                        border-border/55
                        bg-background
                        shadow-[0_5px_14px_rgba(0,0,0,0.035)]
                        transition-all
                        duration-500
                        ease-out
                        group-hover:translate-y-0.5
                        group-hover:border-border/70
                        group-hover:shadow-[0_7px_18px_rgba(0,0,0,0.07)]
                        dark:border-white/[0.09]
                        dark:shadow-[0_6px_15px_rgba(0,0,0,0.20)]
                        dark:group-hover:border-white/[0.12]
                        dark:group-hover:shadow-[0_8px_20px_rgba(0,0,0,0.28)]
                      "
                    />

                    {/* Main card */}
                    <article
                      className="
                        group/card
                        relative
                        z-10
                        flex
                        flex-col
                        overflow-hidden
                        rounded-xl
                        border
                        border-border/70
                        bg-background
                        p-2.5
                        pl-3.5
                        shadow-[0_8px_24px_rgba(0,0,0,0.035)]
                        transition-all
                        duration-500
                        ease-out
                        hover:-translate-y-1
                        hover:border-border
                        hover:shadow-[0_14px_32px_rgba(0,0,0,0.06)]
                        sm:p-3
                        sm:pl-4
                        dark:bg-background
                        dark:border-white/[0.10]
                        dark:shadow-[0_8px_24px_rgba(0,0,0,0.22)]
                        dark:hover:border-white/[0.14]
                        dark:hover:shadow-[0_16px_36px_rgba(0,0,0,0.30)]
                      "
                    >
                      {/* Subtle top surface highlight */}
                      <div
                        className="
                          pointer-events-none
                          absolute
                          inset-x-3
                          top-0
                          z-20
                          h-px
                          bg-gradient-to-r
                          from-transparent
                          via-foreground/10
                          to-transparent
                          opacity-60
                          transition-opacity
                          duration-500
                          group-hover/card:opacity-100
                          dark:via-white/10
                        "
                      />

                      {/* Soft card glow */}
                      <div
                        className="
                          pointer-events-none
                          absolute
                          inset-0
                          z-0
                          bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.025),transparent_55%)]
                          opacity-0
                          transition-opacity
                          duration-500
                          group-hover/card:opacity-100
                          dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.035),transparent_55%)]
                        "
                      />

                      {/* Accent */}
                      <div
                        className="
                          absolute
                          left-0
                          top-5
                          z-20
                          h-8
                          w-[2px]
                          rounded-r-full
                          bg-foreground
                          opacity-30
                          transition-all
                          duration-500
                          group-hover/card:h-12
                          group-hover/card:opacity-70
                        "
                      />

                      {/* Source */}
                      {brain.url && (
                        <div
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
                            transition-all
                            duration-300
                            group-hover/card:border-border/80
                            group-hover/card:bg-muted/40
                          "
                        >
                          <img
                            src={brain.logo}
                            alt=""
                            className="size-4 shrink-0 rounded-sm"
                          />

                          <div className="min-w-0 flex-1">
                            <p className="truncate text-[9px] font-semibold text-foreground">
                              {brain.source}
                            </p>

                            <p className="truncate text-[8px] text-muted-foreground">
                              {brain.url}
                            </p>
                          </div>

                          <span className="shrink-0 text-[10px] text-muted-foreground/50 transition-transform duration-300 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5">
                            ↗
                          </span>
                        </div>
                      )}

                      {/* Content */}
                      <div className="relative z-10 mt-3 sm:mt-4">
                        <h3
                          className="
                            text-[12px]
                            font-semibold
                            leading-4.5
                            tracking-tight
                            text-foreground
                            sm:text-[13px]
                            sm:leading-5
                          "
                        >
                          {brain.title}
                        </h3>

                        {brain.body && (
                          <p
                            className="
                              mt-1.5
                              text-[9px]
                              leading-3.5
                              text-muted-foreground
                              sm:text-[10px]
                              sm:leading-4
                            "
                          >
                            {brain.body}
                          </p>
                        )}
                      </div>

                      {/* Tags */}
                      <div className="relative z-10 mt-2.5 flex flex-wrap gap-1 sm:mt-3">
                        {brain.tags.map((tag) => (
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
                              font-medium
                              text-muted-foreground
                              transition-all
                              duration-300
                              group-hover/card:border-foreground/20
                              group-hover/card:bg-foreground/5
                              group-hover/card:text-foreground
                              sm:px-2.5
                              sm:text-[9px]
                            "
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </article>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Soft fade into background */}
          <div
            className="
              pointer-events-none
              absolute
              bottom-0
              left-0
              right-0
              z-20
              h-28
              bg-gradient-to-t
              from-background
              via-background/70
              to-transparent
            "
          />
        </div>
      </div>
    </section>
  )
}

export default BrainPreview