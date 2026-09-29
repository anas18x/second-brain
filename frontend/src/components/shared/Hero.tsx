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
          {/* Floating shadow */}
          <div
            className="
              pointer-events-none
              absolute
              -bottom-2
              left-1/2
              h-3
              w-[85%]
              -translate-x-1/2
              rounded-full
              bg-black/80
              blur-md
              opacity-80
            "
          />

          {/* 3D body */}
          <div
            className="
              relative
              flex
              items-center
              gap-2.5
              overflow-hidden
              rounded-full
              border
              border-white/[0.14]
              bg-[#111113]
              px-4
              py-2
              text-xs
              font-medium
              leading-none
              tracking-[-0.01em]
              text-white/90
              shadow-[inset_0_1px_0_rgba(255,255,255,0.18),inset_0_-2px_0_rgba(0,0,0,0.8),0_1px_0_rgba(255,255,255,0.06),0_3px_0_#050505,0_5px_0_#030303,0_10px_20px_rgba(0,0,0,0.65)]
              transition-all
              duration-300
              [transform:rotateX(8deg)]
              hover:-translate-y-0.5
              hover:[transform:rotateX(4deg)_translateY(-2px)]
              hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),inset_0_-2px_0_rgba(0,0,0,0.8),0_2px_0_rgba(255,255,255,0.06),0_5px_0_#050505,0_9px_0_#030303,0_16px_28px_rgba(0,0,0,0.75)]
            "
          >
            {/* Top bevel */}
            <span
              className="
                pointer-events-none
                absolute
                inset-x-2
                top-0
                h-px
                rounded-full
                bg-gradient-to-r
                from-transparent
                via-white/25
                to-transparent
              "
            />

            {/* Inner light */}
            <span
              className="
                pointer-events-none
                absolute
                inset-x-1
                top-1
                h-4
                rounded-full
                bg-gradient-to-b
                from-white/[0.06]
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
                  size-4
                  rounded-full
                  bg-white/[0.08]
                  blur-[2px]
                "
              />

              <span
                className="
                  relative
                  size-1.5
                  rounded-full
                  bg-white
                  shadow-[0_0_8px_rgba(255,255,255,0.8),0_1px_2px_rgba(0,0,0,0.8)]
                "
              />
            </span>

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
            gap-2
            rounded-md
            bg-primary
            px-5
            py-2.5
            text-sm
            font-medium
            text-primary-foreground
            shadow-sm
            transition-opacity
            hover:opacity-90
            sm:mt-9
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
    </section>
  )
}

export default Hero