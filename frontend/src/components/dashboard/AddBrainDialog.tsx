import { Plus } from "lucide-react"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function AddBrainDialog() {
  return (
    <Dialog>
      <DialogTrigger
        className="
          inline-flex
          h-10
          shrink-0
          cursor-pointer
          items-center
          gap-2
          rounded-lg
          border
          border-slate-900
          bg-slate-950
          px-4
          font-['Space_Grotesk']
          text-xs
          font-semibold
          tracking-tight
          text-white
          shadow-[0_4px_14px_rgba(15,23,42,0.16)]
          transition-all
          duration-200
          hover:-translate-y-0.5
          hover:bg-slate-800
          hover:shadow-[0_8px_22px_rgba(15,23,42,0.20)]
          active:translate-y-0
          active:shadow-[0_3px_8px_rgba(15,23,42,0.14)]
        "
      >
        <Plus
          className="size-3.5"
          strokeWidth={2.2}
        />

        Add to Brain
      </DialogTrigger>

      <DialogContent
        className="
          gap-0
          rounded-2xl
          border
          border-slate-300
          bg-white
          p-0
          shadow-[0_20px_60px_rgba(15,23,42,0.15)]
          sm:max-w-[460px]
        "
      >
        <DialogHeader className="px-[18px] pt-[18px]">
          <DialogTitle
            className="
              font-sans
              text-lg
              font-medium
              tracking-tight
              text-slate-950
            "
          >
            Add to Brain
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-3.5 px-[18px] pb-[18px] pt-4">

          {/* Title */}
          <div className="space-y-1.5">
            <Label
              htmlFor="brain-title"
              className="
                font-['Geist_Mono']
                text-xs
                font-medium
                text-slate-950
              "
            >
              Title
            </Label>

            <Input
              id="brain-title"
              type="text"
              placeholder="Give it a title"
              className="
                h-[42px]
                rounded-lg
                border-slate-300
                bg-white
                px-3
                font-['Geist_Mono']
                text-xs
                text-slate-900
                shadow-none
                placeholder:text-slate-400
                focus:border-slate-400
                focus:ring-2
                focus:ring-slate-950/10
              "
            />
          </div>

          {/* URL */}
          <div className="space-y-1.5">
            <Label
              htmlFor="brain-url"
              className="
                font-['Geist_Mono']
                text-xs
                font-medium
                text-slate-950
              "
            >
              URL

              <span className="ml-2 font-normal text-slate-400">
                optional
              </span>
            </Label>

            <Input
              id="brain-url"
              type="url"
              placeholder="https://example.com"
              className="
                h-[42px]
                rounded-lg
                border-slate-300
                bg-white
                px-3
                font-['Geist_Mono']
                text-xs
                text-slate-900
                shadow-none
                placeholder:text-slate-400
                focus:border-slate-400
                focus:ring-2
                focus:ring-slate-950/10
              "
            />
          </div>

          {/* Note */}
          <div className="space-y-1.5">
            <Label
              htmlFor="brain-body"
              className="
                font-['Geist_Mono']
                text-xs
                font-medium
                text-slate-950
              "
            >
              Note

              <span className="ml-2 font-normal text-slate-400">
                optional
              </span>
            </Label>

            <textarea
              id="brain-body"
              placeholder="Add a note..."
              rows={3}
              className="
                flex
                min-h-[82px]
                w-full
                resize-none
                rounded-lg
                border
                border-slate-300
                bg-white
                px-3
                py-2.5
                font-['Geist_Mono']
                text-xs
                text-slate-900
                outline-none
                placeholder:text-slate-400
                transition-colors
                focus:border-slate-400
                focus:ring-2
                focus:ring-slate-950/10
              "
            />
          </div>

          {/* Tags */}
          <div className="space-y-1.5">
            <Label
              htmlFor="brain-tags"
              className="
                font-['Geist_Mono']
                text-xs
                font-medium
                text-slate-950
              "
            >
              Tags

              <span className="ml-2 font-normal text-slate-400">
                optional
              </span>
            </Label>

            <Input
              id="brain-tags"
              type="text"
              placeholder="tech, ideas, travel"
              className="
                h-[42px]
                rounded-lg
                border-slate-300
                bg-white
                px-3
                font-['Geist_Mono']
                text-xs
                text-slate-900
                shadow-none
                placeholder:text-slate-400
                focus:border-slate-400
                focus:ring-2
                focus:ring-slate-950/10
              "
            />

            <p className="font-['Geist_Mono'] text-[10px] text-slate-400">
              Separate tags with commas.
            </p>
          </div>

          {/* Save */}
          <div className="flex justify-end pt-1">
            <button
              type="button"
              className="
                inline-flex
                h-9
                cursor-pointer
                items-center
                gap-2
                rounded-lg
                bg-slate-950
                px-4
                font-['Space_Grotesk']
                text-xs
                font-semibold
                text-white
                shadow-[0_4px_12px_rgba(15,23,42,0.14)]
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:bg-slate-800
                hover:shadow-[0_8px_20px_rgba(15,23,42,0.18)]
                active:translate-y-0
                active:shadow-[0_3px_8px_rgba(15,23,42,0.12)]
              "
            >
              <Plus
                className="size-3.5"
                strokeWidth={2.2}
              />

              Save to Brain
            </button>
          </div>

        </div>
      </DialogContent>
    </Dialog>
  )
}

export default AddBrainDialog