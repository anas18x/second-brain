import { Skeleton } from "@/components/ui/skeleton"

function BrainSkeleton() {
  return (
    <div className="columns-1 gap-4 sm:columns-2 xl:columns-3">
      {/* Card 1 */}
      <div className="mb-4 break-inside-avoid">
        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#111111] p-3.5 pl-4.5 shadow-[0_4px_14px_rgba(0,0,0,0.25)]">
          <div className="absolute left-0 top-0 h-full w-1 bg-white/10" />
          <div className="flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2">
            <Skeleton className="size-5 rounded-md bg-white/[0.08]" />
            <div className="min-w-0 flex-1 space-y-1.5">
              <Skeleton className="h-2.5 w-20 bg-white/[0.08]" />
              <Skeleton className="h-2 w-32 bg-white/[0.06]" />
            </div>
            <Skeleton className="size-3 rounded-sm bg-white/[0.08]" />
          </div>
          <div className="mt-5 space-y-2">
            <Skeleton className="h-4 w-[85%] bg-white/[0.08]" />
            <Skeleton className="h-4 w-[65%] bg-white/[0.08]" />
          </div>
          <div className="mt-5 flex gap-1.5">
            <Skeleton className="h-5 w-12 rounded-full bg-white/[0.06]" />
            <Skeleton className="h-5 w-16 rounded-full bg-white/[0.06]" />
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="mb-4 break-inside-avoid">
        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#111111] p-3.5 pl-4.5 shadow-[0_4px_14px_rgba(0,0,0,0.25)]">
          <div className="absolute left-0 top-0 h-full w-1 bg-white/10" />
          <div className="flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2">
            <Skeleton className="size-5 rounded-md bg-white/[0.08]" />
            <div className="min-w-0 flex-1 space-y-1.5">
              <Skeleton className="h-2.5 w-16 bg-white/[0.08]" />
              <Skeleton className="h-2 w-28 bg-white/[0.06]" />
            </div>
            <Skeleton className="size-3 rounded-sm bg-white/[0.08]" />
          </div>
          <div className="mt-5 space-y-2">
            <Skeleton className="h-4 w-[90%] bg-white/[0.08]" />
            <Skeleton className="h-4 w-[80%] bg-white/[0.08]" />
            <Skeleton className="h-4 w-[45%] bg-white/[0.08]" />
          </div>
          <div className="mt-5 flex gap-1.5">
            <Skeleton className="h-5 w-14 rounded-full bg-white/[0.06]" />
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="mb-4 break-inside-avoid">
        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#111111] p-3.5 pl-4.5 shadow-[0_4px_14px_rgba(0,0,0,0.25)]">
          <div className="absolute left-0 top-0 h-full w-1 bg-white/10" />
          <div className="flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2">
            <Skeleton className="size-5 rounded-md bg-white/[0.08]" />
            <div className="min-w-0 flex-1 space-y-1.5">
              <Skeleton className="h-2.5 w-24 bg-white/[0.08]" />
              <Skeleton className="h-2 w-36 bg-white/[0.06]" />
            </div>
            <Skeleton className="size-3 rounded-sm bg-white/[0.08]" />
          </div>
          <div className="mt-5 space-y-2">
            <Skeleton className="h-4 w-[75%] bg-white/[0.08]" />
          </div>
          <div className="mt-5 flex gap-1.5">
            <Skeleton className="h-5 w-10 rounded-full bg-white/[0.06]" />
            <Skeleton className="h-5 w-14 rounded-full bg-white/[0.06]" />
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div className="mb-4 break-inside-avoid">
        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#111111] p-3.5 pl-4.5 shadow-[0_4px_14px_rgba(0,0,0,0.25)]">
          <div className="absolute left-0 top-0 h-full w-1 bg-white/10" />
          <div className="flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2">
            <Skeleton className="size-5 rounded-md bg-white/[0.08]" />
            <div className="min-w-0 flex-1 space-y-1.5">
              <Skeleton className="h-2.5 w-20 bg-white/[0.08]" />
              <Skeleton className="h-2 w-32 bg-white/[0.06]" />
            </div>
            <Skeleton className="size-3 rounded-sm bg-white/[0.08]" />
          </div>
          <div className="mt-5 space-y-2">
            <Skeleton className="h-4 w-[88%] bg-white/[0.08]" />
            <Skeleton className="h-4 w-[70%] bg-white/[0.08]" />
            <Skeleton className="h-4 w-[55%] bg-white/[0.08]" />
          </div>
          <div className="mt-5 flex gap-1.5">
            <Skeleton className="h-5 w-12 rounded-full bg-white/[0.06]" />
            <Skeleton className="h-5 w-16 rounded-full bg-white/[0.06]" />
          </div>
        </div>
      </div>

      {/* Card 5 */}
      <div className="mb-4 break-inside-avoid">
        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#111111] p-3.5 pl-4.5 shadow-[0_4px_14px_rgba(0,0,0,0.25)]">
          <div className="absolute left-0 top-0 h-full w-1 bg-white/10" />
          <div className="flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2">
            <Skeleton className="size-5 rounded-md bg-white/[0.08]" />
            <div className="min-w-0 flex-1 space-y-1.5">
              <Skeleton className="h-2.5 w-16 bg-white/[0.08]" />
              <Skeleton className="h-2 w-[120px] bg-white/[0.06]" />
            </div>
            <Skeleton className="size-3 rounded-sm bg-white/[0.08]" />
          </div>
          <div className="mt-5 space-y-2">
            <Skeleton className="h-4 w-[80%] bg-white/[0.08]" />
            <Skeleton className="h-4 w-[60%] bg-white/[0.08]" />
          </div>
          <div className="mt-5 flex gap-1.5">
            <Skeleton className="h-5 w-14 rounded-full bg-white/[0.06]" />
          </div>
        </div>
      </div>

      {/* Card 6 */}
      <div className="mb-4 break-inside-avoid">
        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#111111] p-3.5 pl-4.5 shadow-[0_4px_14px_rgba(0,0,0,0.25)]">
          <div className="absolute left-0 top-0 h-full w-1 bg-white/10" />
          <div className="flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2">
            <Skeleton className="size-5 rounded-md bg-white/[0.08]" />
            <div className="min-w-0 flex-1 space-y-1.5">
              <Skeleton className="h-2.5 w-20 bg-white/[0.08]" />
              <Skeleton className="h-2 w-28 bg-white/[0.06]" />
            </div>
            <Skeleton className="size-3 rounded-sm bg-white/[0.08]" />
          </div>
          <div className="mt-5 space-y-2">
            <Skeleton className="h-4 w-[92%] bg-white/[0.08]" />
            <Skeleton className="h-4 w-[72%] bg-white/[0.08]" />
          </div>
          <div className="mt-5 flex gap-1.5">
            <Skeleton className="h-5 w-12 rounded-full bg-white/[0.06]" />
            <Skeleton className="h-5 w-14 rounded-full bg-white/[0.06]" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrainSkeleton