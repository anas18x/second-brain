import { Skeleton } from "@/components/ui/skeleton"

function BrainSkeleton() {
  return (
    <div className="columns-1 gap-4 sm:columns-2 xl:columns-3">
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="mb-4 break-inside-avoid"
        >
          <div
            className="
              relative
              overflow-hidden
              rounded-2xl
              border
              border-border/70
              bg-background/35
              p-2.5
              pl-3.5
              shadow-[0_8px_24px_rgba(0,0,0,0.035)]
              backdrop-blur-sm
              dark:bg-white/[0.025]
              sm:p-3
              sm:pl-4
            "
          >
            {/* Accent */}
            <div
              className="
                absolute
                left-0
                top-5
                h-8
                w-[2px]
                rounded-r-full
                bg-[#e04430]/50
              "
            />

            {/* Source */}
            <div
              className="
                flex
                min-w-0
                items-center
                gap-2
                rounded-xl
                border
                border-border/60
                bg-muted/25
                px-2
                py-1.5
              "
            >
              <Skeleton className="size-4 shrink-0 rounded-sm" />

              <div className="min-w-0 flex-1 space-y-1">
                <Skeleton className="h-2 w-16" />
                <Skeleton className="h-1.5 w-24" />
              </div>

              <Skeleton className="size-3 shrink-0 rounded-sm" />
            </div>

            {/* Content */}
            <div className="mt-3 space-y-1.5 sm:mt-4">
              <Skeleton className="h-3.5 w-[85%]" />
              <Skeleton className="h-3.5 w-[70%]" />

              {index % 3 !== 0 && (
                <Skeleton className="h-3.5 w-[48%]" />
              )}
            </div>

            {/* Tags */}
            <div className="mt-2.5 flex gap-1 sm:mt-3">
              <Skeleton className="h-4 w-10 rounded-full" />

              {index % 2 === 0 && (
                <Skeleton className="h-4 w-12 rounded-full" />
              )}

              {index % 3 === 0 && (
                <Skeleton className="h-4 w-14 rounded-full" />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default BrainSkeleton