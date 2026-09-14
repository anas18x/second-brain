import { Skeleton } from "@/components/ui/skeleton"

function BrainSkeleton() {
  return (
    <div className="columns-1 gap-4 sm:columns-2 xl:columns-3">
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className="mb-4 break-inside-avoid">
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#111111] p-3.5 pl-4.5">
            <div className="absolute left-0 top-0 h-full w-1 bg-white/10" />

            <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2">
              <Skeleton className="size-4 rounded-md bg-white/[0.08]" />

              <div className="min-w-0 flex-1 space-y-1">
                <Skeleton className="h-2 w-16 bg-white/[0.08]" />
                <Skeleton className="h-1.5 w-24 bg-white/[0.06]" />
              </div>

              <Skeleton className="size-3 rounded-sm bg-white/[0.08]" />
            </div>

            <div className="mt-4 space-y-1.5">
              <Skeleton className="h-3.5 w-[85%] bg-white/[0.08]" />
              <Skeleton className="h-3.5 w-[65%] bg-white/[0.08]" />
              {index % 3 !== 0 && (
                <Skeleton className="h-3.5 w-[45%] bg-white/[0.08]" />
              )}
            </div>

            <div className="mt-4 flex gap-1.5">
              <Skeleton className="h-4 w-10 rounded-full bg-white/[0.06]" />
              {index % 2 === 0 && (
                <Skeleton className="h-4 w-12 rounded-full bg-white/[0.06]" />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default BrainSkeleton