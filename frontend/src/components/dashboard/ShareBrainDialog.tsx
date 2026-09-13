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

  const visitors = [
    {
      username: "john",
      viewedAt: "2 min ago",
    },
    {
      username: "sarah",
      viewedAt: "18 min ago",
    },
    {
      username: "alex",
      viewedAt: "Yesterday",
    },
  ]

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
            flex size-8 cursor-pointer items-center justify-center
            rounded-lg
            border border-white/10
            bg-white/[0.04]
            text-muted-foreground
            transition-all duration-200
            hover:border-[#ef3340]/20
            hover:bg-[#ef3340]/10
            hover:text-[#ff6b73]
            hover:shadow-[0_4px_12px_rgba(239,51,64,0.08)]
            active:bg-[#ef3340]/15
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
            mt-0.5 flex size-7 shrink-0 items-center justify-center
            rounded-lg
            border border-[#ef3340]/20
            bg-[#ef3340]/10
            text-[#ff6b73]
            shadow-[0_3px_12px_rgba(239,51,64,0.08)]
          "
        >

          <Share2 className="size-3.5" />

        </div>

        <div className="min-w-0 flex-1">

          <p className="text-xs font-semibold tracking-tight text-foreground">

            Share Brain

          </p>

          <p className="mt-0.5 text-[10px] font-medium leading-4 text-muted-foreground">

            Let others view your saved entries.

          </p>

        </div>

      </div>

      {/* Public / Private */}

      <div
        className="
          mt-4 rounded-xl
          border border-white/10
          bg-white/[0.04]
          p-3
          shadow-[0_4px_16px_rgba(0,0,0,0.2)]
          backdrop-blur-sm
        "
      >

        <div className="flex items-center justify-between gap-3">

          <div className="min-w-0 pr-3">

            <p className="text-[11px] font-semibold tracking-tight text-foreground">

              {isPublic ? "Public" : "Private"}

            </p>

            <p className="mt-0.5 text-[9px] font-medium leading-4 text-muted-foreground">

              {isPublic

                ? "Anyone with the link can view it."

                : "Only you can view your brain."}

            </p>

          </div>

          <Switch
            checked={isPublic}
            onCheckedChange={setIsPublic}
            className="
              shrink-0 cursor-pointer
              data-[state=checked]:bg-[#ef3340]
            "
          />

        </div>

      </div>

      {/* Share Link */}

      {isPublic && (

        <>

          <div className="mt-4">

            <p className="mb-1.5 text-[10px] font-semibold text-muted-foreground">

              Share link

            </p>

            <div className="flex min-w-0 items-center gap-1.5">

              <div
                className="
                  min-w-0 flex-1
                  rounded-lg
                  border border-white/10
                  bg-white/[0.04]
                  px-2.5 py-2
                  shadow-[0_2px_8px_rgba(0,0,0,0.2)]
                "
              >

                <p className="truncate text-[9px] font-medium text-muted-foreground">

                  {shareUrl}

                </p>

              </div>

              <button
                type="button"
                onClick={handleCopy}
                className="
                  inline-flex shrink-0 cursor-pointer
                  items-center gap-1.5
                  rounded-lg
                  border border-[#ef3340]
                  bg-[#ef3340]
                  px-2.5 py-2
                  font-['Space_Grotesk']
                  text-[10px]
                  font-semibold
                  text-white
                  shadow-[0_3px_10px_rgba(239,51,64,0.16)]
                  transition-all duration-200
                  hover:-translate-y-0.5
                  hover:bg-[#ef3340]/90
                  hover:shadow-[0_6px_16px_rgba(239,51,64,0.24)]
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

          {/* Recent Visitors */}

          <div className="mt-5">

            <div className="mb-2 flex items-center justify-between">

              <p className="text-[10px] font-semibold text-muted-foreground">

                Recent visitors

              </p>

              <span className="text-[9px] font-medium text-muted-foreground/50">

                {visitors.length} visits

              </span>

            </div>

            <div
              className="
                overflow-hidden
                rounded-xl
                border border-white/10
                bg-white/[0.025]
              "
            >

              {visitors.map((visitor, index) => (

                <div
                  key={`${visitor.username}-${visitor.viewedAt}`}
                  className={`
                    flex items-center justify-between gap-3
                    px-3 py-2.5
                    transition-colors
                    hover:bg-white/[0.04]
                    ${index !== visitors.length - 1 ? "border-b border-white/[0.06]" : ""}
                  `}
                >

                  <div className="flex min-w-0 items-center gap-2.5">

                    <div
                      className="
                        flex size-6 shrink-0 items-center justify-center
                        rounded-full
                        border border-white/10
                        bg-white/[0.06]
                        text-[9px]
                        font-semibold
                        uppercase
                        text-muted-foreground
                      "
                    >

                      {visitor.username.charAt(0)}

                    </div>

                    <p className="truncate text-[10px] font-medium text-foreground">

                      {visitor.username}

                    </p>

                  </div>

                  <span className="shrink-0 text-[9px] font-medium text-muted-foreground/50">

                    {visitor.viewedAt}

                  </span>

                </div>

              ))}

            </div>

          </div>

        </>

      )}

    </div>

  )

}

export default ShareBrainDialog