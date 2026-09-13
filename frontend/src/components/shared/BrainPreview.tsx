import { useEffect, useRef, useState } from "react";

const previewBrains = [
  {
    id: "preview-1",
    title: "A travel video I want to watch before my next trip",
    body: "✈️ Saving this for the next trip. Looks like exactly the kind of place I'd love to explore.",
    source: "youtube.com",
    url: "youtube.com/watch?v=example",
    logo: "https://www.google.com/s2/favicons?domain=youtube.com&sz=64",
    accent: "bg-[#ff4d5a]",
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
    accent: "bg-[#343744]",
    tags: ["inspiration", "ideas"],
  },
  {
    id: "preview-3",
    title: "A few places I want to visit someday",
    body: "🌍 Save the places that catch your attention. No need to plan everything now. Just keep them somewhere you'll actually find them later.",
    source: "example.com",
    url: "example.com/travel",
    logo: "https://www.google.com/s2/favicons?domain=example.com&sz=64",
    accent: "bg-[#4d91ff]",
    tags: ["travel", "ideas"],
  },
  {
    id: "preview-4",
    title: "A quote that stuck with me",
    body: "💭 Some things are worth saving simply because they made you stop and think.",
    source: "x.com",
    url: "x.com/example/status/789",
    logo: "https://www.google.com/s2/favicons?domain=x.com&sz=64",
    accent: "bg-[#343744]",
    tags: ["quotes", "ideas"],
  },
  {
    id: "preview-5",
    title: "An idea I don't want to forget",
    body: "✨ A small idea that came to mind today. It might turn into something useful someday, or maybe it won't. Either way, worth keeping.",
    source: "",
    url: "",
    logo: "",
    accent: "bg-[#ffbf24]",
    tags: ["ideas"],
  },
  {
    id: "preview-6",
    title: "Future me is going to be very glad I saved this.",
    body: "😅 Future me has absolutely no idea what this is, but apparently present me thought it was important enough to save.",
    source: "",
    url: "",
    logo: "",
    accent: "bg-[#ffbf24]",
    tags: ["life", "random"],
  },
  {
    id: "preview-7",
    title: "The surprisingly simple rule behind good system design",
    body: "💡 Good systems aren't necessarily the ones with the most clever architecture. Start with the simplest thing that works, understand where the pressure actually comes from, and only then introduce complexity.",
    source: "medium.com",
    url: "medium.com/system-design",
    logo: "https://www.google.com/s2/favicons?domain=medium.com&sz=64",
    accent: "bg-[#4d91ff]",
    tags: ["tech", "ideas"],
  },
  {
    id: "preview-8",
    title: "This video completely changed how I think about learning",
    body: "📚 I used to think learning was about consuming more information. The important part is actually being able to retrieve, apply, and explain what you've learned.",
    source: "youtube.com",
    url: "youtube.com/watch?v=learning",
    logo: "https://www.google.com/s2/favicons?domain=youtube.com&sz=64",
    accent: "bg-[#ff4d5a]",
    tags: ["inspiration", "tech"],
  },
  {
    id: "preview-9",
    title: "An idea I want to build someday",
    body: "🚀 A small tool that helps people organize things they want to learn. Something simple, useful, and actually enjoyable to build.",
    source: "",
    url: "",
    logo: "",
    accent: "bg-[#ffbf24]",
    tags: ["ideas"],
  },
];

function useRevealOnScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.1,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

function BrainPreview() {
  return (
    <section className="px-6 pb-28">
      <div className="mx-auto w-full max-w-6xl">
        {/* Section heading */}
        <div className="mb-7 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
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
              bg-white/[0.03]
              blur-3xl
            "
          />

          {/* Browser frame */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[28px]
              border
              border-white/10
              bg-[#0b0b0b]
              p-3
              shadow-[0_30px_80px_rgba(0,0,0,0.5)]
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
                border-white/10
                pb-3
              "
            >
              <div className="flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-white/20" />
                <span className="size-1.5 rounded-full bg-white/20" />
                <span className="size-1.5 rounded-full bg-white/20" />
              </div>

              <div
                className="
                  hidden
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.04]
                  px-3
                  py-1
                  text-[9px]
                  font-medium
                  text-muted-foreground
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
                const { ref, isVisible } = useRevealOnScroll();

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
                      ${isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-6 opacity-0"
                      }
                    `}
                  >
                    <article
                      className="
                        group
                        relative
                        flex
                        flex-col
                        overflow-hidden
                        rounded-2xl
                        border
                        border-white/10
                        bg-[#111111]
                        p-2.5
                        pl-3.5
                        shadow-[0_2px_8px_rgba(0,0,0,0.3)]
                        backdrop-blur-md
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:border-[#ef3340]/20
                        hover:bg-[#141414]
                        hover:shadow-[0_10px_28px_rgba(239,51,64,0.08),0_10px_24px_rgba(0,0,0,0.4)]
                        sm:p-3
                        sm:pl-4
                      "
                    >
                      {/* Individual red hover gradient */}
                      <div
                        className="
                          pointer-events-none
                          absolute
                          inset-0
                          z-0
                          rounded-2xl
                          bg-[radial-gradient(ellipse_at_top_left,rgba(239,51,64,0.10),transparent_65%)]
                          opacity-0
                          transition-opacity
                          duration-500
                          group-hover:opacity-100
                        "
                      />

                      {/* Card side accent */}
                      <div
                        className={`
                          absolute
                          left-0
                          top-0
                          z-20
                          h-full
                          w-1
                          ${brain.accent}
                        `}
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
                            border-white/10
                            bg-white/[0.03]
                            px-2
                            py-1.5
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

                          <span className="shrink-0 text-[10px] text-muted-foreground/40">
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
    border-white/10
    bg-white/[0.08]
    px-2
    py-0.5
    text-[8px]
    font-semibold
    text-foreground/70
    transition-colors
    duration-200
    group-hover:border-[#ef3340]/20
    group-hover:bg-[#ef3340]/10
    group-hover:text-foreground
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
                );
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
                from-[#0b0b0b]
                via-[#0b0b0b]/50
                to-transparent
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BrainPreview;
