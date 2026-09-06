import { Check, Copy, Share2 } from "lucide-react"
import { useState } from "react"

import { Switch } from "@/components/ui/switch"
import { useSidebar } from "@/components/ui/sidebar"

function ShareBrainDialog() {
  const { state } = useSidebar()

  const [isPublic, setIsPublic] = useState(true)
  const [copied, setCopied] = useState(false)

  const shareSlug = "anas-second-brain"
  const shareUrl = `${window.location.origin}/share/${shareSlug}`

  const handleCopy = async () => {
    await navigator.clipboard.writeText(shareUrl)

    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  {/* Collapsed Sidebar */}
  if (state === "collapsed") {
    return (
      <div className="flex justify-center">
        <button
          type="button"
          title="Share Brain"
          className="
            flex
            size-8
            cursor-pointer
            items-center
            justify-center
            rounded-md
            text-slate-700
            transition-all
            duration-200
            hover:bg-slate-200/80
            hover:text-slate-950
            hover:shadow-[0_3px_10px_rgba(15,23,42,0.06)]
            active:bg-slate-300/70
          "
        >
          <Share2 className="size-4" />
        </button>
      </div>
    )
  }

  return (
    <div className="px-2 py-2">
      {/* Share Header */}
      <div className="flex items-start gap-2.5">
        <div
          className="
            mt-0.5
            flex
            size-7
            shrink-0
            items-center
            justify-center
            rounded-md
            border
            border-slate-800
            bg-slate-950
            text-white
            shadow-[0_3px_10px_rgba(15,23,42,0.12)]
          "
        >
          <Share2 className="size-3.5" />
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-xs font-semibold tracking-tight text-slate-950">
            Share Brain
          </p>

          <p className="mt-0.5 text-[10px] font-medium leading-4 text-slate-600">
            Let others view your saved entries.
          </p>
        </div>
      </div>

      {/* Public / Private */}
      <div
        className="
          mt-4
          rounded-xl
          border
          border-slate-200
          bg-white/80
          p-3
          shadow-[0_3px_12px_rgba(15,23,42,0.04)]
        "
      >
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0 pr-3">
            <p className="text-[11px] font-semibold tracking-tight text-slate-950">
              {isPublic ? "Public" : "Private"}
            </p>

            <p className="mt-0.5 text-[9px] font-medium leading-4 text-slate-600">
              {isPublic
                ? "Anyone with the link can view it."
                : "Only you can view your brain."}
            </p>
          </div>

          <Switch
            checked={isPublic}
            onCheckedChange={setIsPublic}
            className="shrink-0 cursor-pointer"
          />
        </div>
      </div>

      {/* Share Link */}
      {isPublic && (
        <div className="mt-4">
          <p className="mb-1.5 text-[10px] font-semibold text-slate-700">
            Share link
          </p>

          <div className="flex min-w-0 items-center gap-1.5">
            <div
              className="
                min-w-0
                flex-1
                rounded-lg
                border
                border-slate-200
                bg-white
                px-2.5
                py-2
                shadow-[0_2px_8px_rgba(15,23,42,0.025)]
              "
            >
              <p className="truncate text-[9px] font-medium text-slate-600">
                {shareUrl}
              </p>
            </div>

            <button
              type="button"
              onClick={handleCopy}
              className="
                inline-flex
                shrink-0
                cursor-pointer
                items-center
                gap-1.5
                rounded-lg
                bg-slate-950
                px-2.5
                py-2
                font-['Space_Grotesk']
                text-[10px]
                font-semibold
                text-white
                shadow-[0_3px_10px_rgba(15,23,42,0.12)]
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:bg-slate-800
                hover:shadow-[0_6px_14px_rgba(15,23,42,0.16)]
                active:translate-y-0
                active:shadow-none
              "
            >
              {copied ? (
                <>
                  <Check className="size-3" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="size-3" />
                  Copy
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ShareBrainDialog