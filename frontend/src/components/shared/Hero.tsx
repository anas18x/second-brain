import { ArrowUpRight } from "lucide-react"

import { Link } from "react-router-dom"

function Hero() {
  return (
    <section className="px-6">
      <div className="mx-auto max-w-6xl pb-28 pt-16 sm:pt-20">

        {/* Eyebrow */}
        <div className="relative mb-10 inline-block">
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

          <div className="relative overflow-hidden rounded-full p-[1px]">
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
                bg-[conic-gradient(from_0deg,transparent_0deg,transparent_250deg,var(--landing-accent)_285deg,#8b5e4a_320deg,transparent_350deg)]
              "
              style={{
                animation: "eyebrow-orbit 4s linear infinite",
              }}
            />

            {/* Content */}
            <p
              className="
                relative
                z-10
                flex
                items-center
                gap-2.5
                rounded-full
                bg-background
                px-4
                py-1.5
                font-mono
                text-xs
                font-normal
                tracking-wide
                text-foreground/80
              "
            >
              <span
                className="
                  size-1.5
                  shrink-0
                  rounded-full
                  bg-[var(--landing-accent)]
                "
              />
              Your personal space for everything worth keeping.
            </p>
          </div>
        </div>

        {/* Hero content */}
        <div
          className="
            grid
            grid-cols-1
            gap-12
            lg:grid-cols-[minmax(0,1fr)_280px]
            lg:items-center
            lg:gap-20
          "
        >
          {/* Heading */}
          <div>
            <h1
              className="
                max-w-5xl
                font-sans
                text-[3.25rem]
                font-extrabold
                leading-[0.98]
                tracking-[-0.045em]
                text-foreground
                sm:text-[4.5rem]
                sm:leading-[1.04]
                lg:text-[clamp(4rem,8vw,6.125rem)]
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
                  text-[var(--landing-serif)]
                  sm:text-[4.5rem]
                  lg:text-[clamp(4rem,8vw,6.125rem)]
                "
              >
                Find it when you need it.
              </span>
            </h1>
          </div>

          {/* Description */}
<div className="flex flex-col justify-center lg:justify-self-end">
  {/* Main statement */}
  <p
    className="
      max-w-sm
      text-[15px]
      font-semibold
      leading-6.5
      text-foreground
      sm:text-[16px]
    "
  >
    Save it once. Find it when it matters.
  </p>

  {/* Supporting description */}
  <p
    className="
      mt-3
      max-w-sm
      text-[15px]
      font-medium
      leading-6.5
      text-muted-foreground
      sm:text-[16px]
    "
  >
    Keep your bookmarks, notes, ideas, and saved links organized in
    one place.
  </p>

  {/* CTA */}
  <Link
    to="/register"
    className="
      group
      mt-7
      inline-flex
      w-fit
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