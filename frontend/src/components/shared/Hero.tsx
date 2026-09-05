import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

function Hero() {
  return (
    <section className="px-6">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-start pb-24 pt-20 text-center">

        {/* Eyebrow */}
        <div className="relative mb-6">
          <p
            className="
              relative
              w-fit
              rounded-full
              border
              border-slate-300/90
              bg-white/90
              px-4
              py-1.5
              font-['Space_Grotesk']
              text-xs
              font-semibold
              tracking-wide
              text-slate-900
              shadow-[0_1px_2px_rgba(0,0,0,0.06),0_4px_8px_rgba(0,0,0,0.08),0_10px_20px_-8px_rgba(0,0,0,0.18)]
              ring-1
              ring-white/80
              backdrop-blur-md
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:border-slate-400
              hover:shadow-[0_2px_4px_rgba(0,0,0,0.08),0_8px_16px_rgba(0,0,0,0.1),0_16px_28px_-8px_rgba(0,0,0,0.2)]
            "
          >
            Your personal space for everything worth keeping.
          </p>
        </div>

        {/* Hero heading */}
        <h1
          className="
            font-['Kalam']
            text-5xl
            font-bold
            tracking-tight
            text-slate-950
            sm:text-6xl
          "
        >
          Keep what matters.
          <br />
          <span className="text-orange-500">
            Find it when you need it.
          </span>
        </h1>

        {/* Description */}
        <p className="mt-5 max-w-xl text-base font-medium leading-7 text-slate-800">
          Save notes, ideas, links, and knowledge. Keep everything organized
          and easy to find.
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
              border-slate-800
              bg-slate-950
              px-6
              shadow-[0_4px_12px_rgba(15,23,42,0.12)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-slate-900
              hover:shadow-[0_12px_28px_rgba(15,23,42,0.22)]
              active:translate-y-0
              active:shadow-[0_4px_10px_rgba(15,23,42,0.15)]
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
  )
}

export default Hero