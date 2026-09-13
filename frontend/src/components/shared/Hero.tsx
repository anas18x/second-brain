import { Button } from "@/components/ui/button";

import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="px-6">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-start pb-24 pt-20 text-center">
        {/* Eyebrow */}
        <div className="relative mb-6 inline-block">
          <style>
            {`
              @keyframes eyebrow-travel {
                from {
                  stroke-dashoffset: 0;
                }

                to {
                  stroke-dashoffset: -1000;
                }
              }
            `}
          </style>

          <div className="relative rounded-full">
            {/* Static dark border */}
            <div className="absolute inset-0 rounded-full border border-white/10" />

            {/* Moving red line */}
            <svg
              className="pointer-events-none absolute inset-0 z-20 h-full w-full"
              viewBox="0 0 420 40"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <rect
                x="1.5"
                y="1.5"
                width="417"
                height="37"
                rx="18.5"
                fill="none"
                stroke="#ef3340"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="80 920"
                strokeDashoffset="0"
                pathLength="1000"
                style={{
                  animation: "eyebrow-travel 4s linear infinite",
                }}
              />
            </svg>

            {/* Content */}
            <p
              className="
                relative
                z-10
                flex
                items-center
                gap-2.5
                rounded-full
                bg-[#0a0a0a]
                px-4
                py-1.5
                font-['Space_Grotesk']
                text-xs
                font-medium
                tracking-wide
                text-foreground/80
              "
            >
              <span
                className="
                  size-1.5
                  shrink-0
                  rounded-full
                  bg-[#ef3340]
                  shadow-[0_0_7px_rgba(239,51,64,0.7)]
                "
              />

              Your personal space for everything worth keeping.
            </p>
          </div>
        </div>

        {/* Hero heading */}
        <h1
          className="
            font-['Kalam']
            text-5xl
            font-bold
            tracking-tight
            text-foreground
            sm:text-6xl
          "
        >
          Keep what matters.
          <br />
          <span className="bg-gradient-to-r from-[#ff6b6b] via-[#ef3340] to-[#c91f32] bg-clip-text text-transparent">
            Find it when you need it.
          </span>
        </h1>

        {/* Description */}
        <p className="mt-5 max-w-xl text-base font-medium leading-7 text-muted-foreground">
          Keep your bookmarks, notes, ideas, and saved links organized in one
          place.
        </p>

        {/* CTA */}
        <Link to="/register">
          <Button
            size="lg"
            className="
              group
              mt-8
              cursor-pointer
              border
              border-[#ef3340]
              bg-[#ef3340]
              px-6
              text-white
              shadow-[0_4px_12px_rgba(239,51,64,0.2)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#ef3340]/90
              hover:shadow-[0_12px_28px_rgba(239,51,64,0.3)]
              active:translate-y-0
              active:shadow-[0_4px_10px_rgba(239,51,64,0.2)]
            "
          >
            Get Started

            <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Button>
        </Link>
      </div>
    </section>
  );
}

export default Hero;