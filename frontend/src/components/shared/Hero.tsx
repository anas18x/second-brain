import { ArrowUpRight } from "lucide-react"

import { Link } from "react-router-dom"

function Hero() {
  return (
    <section className="px-4 sm:px-6">
      <div
        className="
          mx-auto
          flex
          max-w-6xl
          flex-col
          items-center
          pb-20
          pt-16
          text-center
          sm:pb-24
          sm:pt-20
          lg:pb-28
          lg:pt-24
        "
      >
        {/* Eyebrow */}
        <div
          className="
            eyebrow
            group
            relative
            mb-7
            [perspective:800px]
          "
        >
          {/* Soft shadow */}
          <div
            className="
              pointer-events-none
              absolute
              -bottom-1
              left-1/2
              h-2
              w-3/4
              -translate-x-1/2
              rounded-full
              bg-black/50
              blur-lg
              opacity-70
            "
          />

          {/* Body */}
          <div
            className="
              relative
              flex
              items-center
              gap-2.5
              overflow-hidden
              rounded-full
              border
              border-white/[0.12]
              bg-white/[0.045]
              px-3
              py-1.5
              text-[11px]
              font-medium
              leading-none
              tracking-[-0.01em]
              text-white/[0.88]
              shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_4px_16px_rgba(0,0,0,0.25)]
              backdrop-blur-sm
              transition-all
              duration-300
              [transform:rotateX(5deg)]
              hover:-translate-y-0.5
              hover:[transform:rotateX(2deg)_translateY(-2px)]
              hover:border-white/[0.18]
              hover:bg-white/[0.06]
              hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_6px_20px_rgba(0,0,0,0.35)]
              sm:px-3.5
              sm:py-2
              sm:text-xs
            "
          >
            {/* Top highlight */}
            <span
              className="
                pointer-events-none
                absolute
                inset-x-3
                top-0
                h-px
                rounded-full
                bg-gradient-to-r
                from-transparent
                via-white/20
                to-transparent
              "
            />

            {/* Inner glow */}
            <span
              className="
                pointer-events-none
                absolute
                inset-x-1
                top-0
                h-5
                rounded-full
                bg-gradient-to-b
                from-white/[0.045]
                to-transparent
              "
            />

            {/* Moving reflection */}
            <span
              className="
                pointer-events-none
                absolute
                inset-y-0
                -left-1/2
                w-1/3
                skew-x-[-20deg]
                bg-gradient-to-r
                from-transparent
                via-white/[0.12]
                to-transparent
                animate-[eyebrow-shine_4s_ease-in-out_infinite]
              "
            />

            {/* Indicator */}
            <span className="relative z-10 flex size-2 shrink-0 items-center justify-center">
              <span
                className="
                  absolute
                  size-3.5
                  rounded-full
                  bg-white/[0.06]
                  blur-[2px]
                "
              />

              <span
                className="
                  relative
                  size-1.5
                  rounded-full
                  bg-white/90
                  shadow-[0_0_7px_rgba(255,255,255,0.65)]
                "
              />
            </span>

            {/* Text */}
            <span className="relative z-10">
              Your personal space for everything worth keeping.
            </span>
          </div>
        </div>

        {/* Heading */}
        <h1
          className="
            max-w-5xl
            animate-[hero-in_700ms_ease-out_both]
            text-balance
            text-[3.25rem]
            font-semibold
            leading-[0.98]
            tracking-[-0.055em]
            text-foreground
            sm:text-6xl
            md:text-7xl
            lg:text-[5.25rem]
            lg:leading-[0.94]
          "
        >
          <span className="lg:whitespace-nowrap">
            Save, Organize, and Rediscover
          </span>

          <br />

          <span className="text-muted-foreground">
            all in one place.
          </span>
        </h1>

        {/* Description */}
        <div
          className="
            mt-7
            max-w-2xl
            animate-[hero-in_700ms_ease-out_100ms_both]
            sm:mt-8
          "
        >
          <p className="text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Save everything you read, watch, or want to remember.
          </p>

          <p className="mt-1.5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Bring your bookmarks, notes, ideas, and links from scattered
            places into one organized space.
          </p>
        </div>

        {/* CTA */}
        <Link
          to="/register"
          className="
            group
            mt-8
            inline-flex
            animate-[hero-in_700ms_ease-out_200ms_both]
            items-center
            gap-1.5
            rounded-md
            bg-primary
            px-3.5
            py-1.5
            text-[13px]
            font-medium
            text-primary-foreground
            shadow-sm
            transition-opacity
            hover:opacity-90
            sm:mt-9
            sm:px-4
            sm:py-2
            sm:text-sm
          "
        >
          Start building your Second Brain

          <ArrowUpRight
            className="
              size-3.5
              transition-transform
              duration-200
              group-hover:-translate-y-0.5
              group-hover:translate-x-0.5
            "
          />
        </Link>
      </div>
    </section>
  )
}

export default Hero