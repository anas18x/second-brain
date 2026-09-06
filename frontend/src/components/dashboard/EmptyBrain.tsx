import { Brain, Plus, ArrowUpRight } from "lucide-react"

function EmptyBrain() {
  return (
    <div className="flex min-h-[420px] items-center justify-center">
      <div className="flex max-w-sm flex-col items-center text-center">

        {/* Icon */}
        <div
          className="
            mb-5
            flex
            size-14
            items-center
            justify-center
            rounded-2xl
            border
            border-slate-300/70
            bg-white/70
            text-slate-700
            shadow-[0_6px_20px_rgba(15,23,42,0.06)]
            backdrop-blur-md
          "
        >
          <Brain className="size-6" strokeWidth={1.7} />
        </div>

        {/* Heading */}
        <h2 className="text-xl font-semibold tracking-tight text-slate-950">
          Nothing here yet
        </h2>

        {/* Description */}
        <p className="mt-2 text-sm text-slate-500">
          Your second brain is empty.
        </p>

        {/* CTA */}
        <button
          type="button"
          className="
            group
            mt-6
            inline-flex
            cursor-pointer
            items-center
            gap-2
            rounded-xl
            border
            border-slate-800
            bg-slate-950
            px-4
            py-2.5
            text-sm
            font-medium
            text-white
            shadow-[0_4px_12px_rgba(15,23,42,0.12)]
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:bg-slate-900
            hover:shadow-[0_12px_28px_rgba(15,23,42,0.20)]
            active:translate-y-0
            active:shadow-[0_4px_10px_rgba(15,23,42,0.15)]
          "
        >
          <Plus
            className="
              size-4
              transition-transform
              duration-300
              group-hover:rotate-90
            "
          />

          Add your first entry
        </button>

        {/* Learn more */}
        <button
          type="button"
          className="
            mt-4
            inline-flex
            cursor-pointer
            items-center
            gap-1
            text-xs
            font-medium
            text-slate-500
            transition-colors
            hover:text-slate-950
          "
        >
          Learn more
          <ArrowUpRight className="size-3" />
        </button>

      </div>
    </div>
  )
}

export default EmptyBrain