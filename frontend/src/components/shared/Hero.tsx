import { Button } from "@/components/ui/button"

function Hero() {
  return (
    <section className="px-6">
    
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-start pt-20 pb-24 text-center">  

        {/* Eyebrow */}
        <p
          className="
            mb-5
            rounded-full
            border
            border-border/60
            bg-background
            px-4
            py-2
            text-xs
            shadow-[0_4px_6px_-1px_rgba(0,0,0,0.06),0_8px_20px_-4px_rgba(0,0,0,0.10)]
          "
        >
          Your personal space for everything worth keeping.
        </p>

        {/* Heading */}
        <h1 className="font-['Kalam'] text-5xl font-bold tracking-tight sm:text-6xl">
          Keep what matters.
          <br />
          <span>Find it when you need it.</span>
        </h1>

        {/* Description */}
        <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">
          Save notes, ideas, links, and knowledge. Keep everything organized
          and easy to find.
        </p>

        {/* CTA */}
        <Button size="lg" className="mt-8">
          Get Started →
        </Button>


      </div>
    </section>
  )
}

export default Hero