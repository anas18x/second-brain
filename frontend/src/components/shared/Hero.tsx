import { ArrowUpRight } from "lucide-react"

import { Link } from "react-router-dom"

function Hero() {
  return (
    <section className="px-6">
      <div className="mx-auto max-w-6xl pb-28 pt-16 sm:pt-20">
        {/* Eyebrow */}
        <div className="relative mb-10 inline-block group max-sm:mb-9">
  <style>
    {`
      @keyframes eyebrow-orbit {
        from {
          transform: translate(-50%, -50%) rotate(0deg);
        }
        to {
          transform: translate(-50%, -50%) rotate(360deg);
        }
      }
    `}
  </style>

  <div
    className="
      relative
      -translate-y-0.5
      overflow-hidden
      rounded-full
      p-px
      shadow-[0_4px_20px_rgba(224,68,48,0.10)]
      transition-all
      duration-300
    "
  >
    {/* Moving gradient */}
    <div
      className="
        pointer-events-none
        absolute
        left-1/2
        top-1/2
        z-0
        h-[300%]
        w-[300%]
        bg-[conic-gradient(from_0deg,transparent_0deg,transparent_250deg,var(--landing-accent)_285deg,var(--landing-accent)_315deg,transparent_350deg)]
      "
      style={{
        animation: "eyebrow-orbit 4s linear infinite",
      }}
    />

    {/* Inner background */}
    <div
      className="
        relative
        z-10
        rounded-full
        bg-background/95
        px-4
        py-1.5
        backdrop-blur-sm
        max-sm:px-3
        max-sm:py-1.5
      "
    >
      <p
        className="
          flex
          items-center
          gap-2.5
          whitespace-nowrap
          font-mono
          text-xs
          font-normal
          tracking-wide
          text-foreground
          max-sm:gap-2
          max-sm:text-[10px]
          max-sm:tracking-[0.04em]
        "
      >
        <span
          className="
            size-1.5
            shrink-0
            scale-125
            rounded-full
            bg-[var(--landing-accent)]
            shadow-[0_0_8px_var(--landing-accent)]
          "
        />

        Your personal space for everything worth keeping.
      </p>
    </div>
  </div>
</div>

        {/* Hero content */}
        <div>
          {/* Heading */}
          <div className="min-w-0">
            <h1
              className="
                whitespace-nowrap
                font-sans
                text-[3.25rem]
                font-extrabold
                leading-[0.98]
                tracking-[-0.045em]
                text-foreground
                sm:text-[4.5rem]
                sm:leading-[1]
                lg:text-[clamp(4rem,6vw,5.5rem)]

                max-sm:whitespace-normal
                max-sm:text-[3rem]
                max-sm:leading-[0.96]
                max-sm:tracking-[-0.05em]
              "
            >
              Keep what matters.
              <br />

              <span
                className="
                  font-serif
                  text-[3.1rem]
                  font-normal
                  italic
                  leading-[1]
                  text-[var(--landing-accent)]
                  sm:text-[4.5rem]
                  lg:text-[clamp(4rem,6vw,5.5rem)]

                  max-sm:text-[2.9rem]
                "
              >
                Find it
              </span>{" "}

              <span className="font-sans not-italic text-foreground">
                when you need it
              </span>

              <span
                className="
                  font-sans
                  not-italic
                  text-[var(--landing-accent)]
                  opacity-90
                "
              >
                .
              </span>
            </h1>
          </div>

          {/* Description + CTA */}
          <div
            className="
              mt-10
              flex
              flex-col
              items-start
              gap-6
              sm:mt-12
              lg:ml-[52%]
              lg:max-w-md

              max-sm:mt-10
              max-sm:gap-6
            "
          >
            {/* Main statement + supporting description */}
            <div>
              <p
                className="
                  text-[15px]
                  font-semibold
                  leading-6
                  text-foreground
                  sm:text-[16px]
                "
              >
                Save it once. Find it when it matters.
              </p>

              <p
                className="
                  mt-2
                  text-[13px]
                  font-medium
                  leading-6
                  text-muted-foreground
                  sm:text-[14px]
                "
              >
                Keep your bookmarks, notes, ideas, and saved links organized
                in one place.
              </p>
            </div>

            {/* CTA */}
            <Link
              to="/register"
              className="
                group
                inline-flex
                items-center
                gap-2
                text-sm
                font-semibold
                text-foreground
                transition-colors
                hover:text-[var(--landing-accent)]
              "
            >
              Start building your Second Brain

              <ArrowUpRight
                className="
                  size-4
                  transition-transform
                  duration-200
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero