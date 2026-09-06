import { Skeleton } from "@/components/ui/skeleton"


function BrainSkeleton() {
  return (
    <div className="columns-1 gap-4 sm:columns-2 xl:columns-3">
      {/* Card 1 */}
      <div className="mb-4 break-inside-avoid">
        <div className="relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white/70 p-4 pl-5 shadow-sm">
          <div className="absolute left-0 top-0 h-full w-1 bg-slate-300/70" />

          <div className="flex items-center gap-2.5 rounded-lg border border-slate-200/60 bg-slate-50/70 px-3 py-2">
            <Skeleton className="size-5 rounded-md" />

            <div className="min-w-0 flex-1 space-y-1.5">
              <Skeleton className="h-2.5 w-20" />
              <Skeleton className="h-2 w-32" />
            </div>

            <Skeleton className="size-3 rounded-sm" />
          </div>

          <div className="mt-5 space-y-2">
            <Skeleton className="h-4 w-[85%]" />
            <Skeleton className="h-4 w-[65%]" />
          </div>

          <div className="mt-5 flex gap-1.5">
            <Skeleton className="h-5 w-12 rounded-full" />
            <Skeleton className="h-5 w-16 rounded-full" />
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="mb-4 break-inside-avoid">
        <div className="relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white/70 p-4 pl-5 shadow-sm">
          <div className="absolute left-0 top-0 h-full w-1 bg-slate-300/70" />

          <div className="flex items-center gap-2.5 rounded-lg border border-slate-200/60 bg-slate-50/70 px-3 py-2">
            <Skeleton className="size-5 rounded-md" />

            <div className="min-w-0 flex-1 space-y-1.5">
              <Skeleton className="h-2.5 w-16" />
              <Skeleton className="h-2 w-28" />
            </div>

            <Skeleton className="size-3 rounded-sm" />
          </div>

          <div className="mt-5 space-y-2">
            <Skeleton className="h-4 w-[90%]" />
            <Skeleton className="h-4 w-[80%]" />
            <Skeleton className="h-4 w-[45%]" />
          </div>

          <div className="mt-5 flex gap-1.5">
            <Skeleton className="h-5 w-14 rounded-full" />
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="mb-4 break-inside-avoid">
        <div className="relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white/70 p-4 pl-5 shadow-sm">
          <div className="absolute left-0 top-0 h-full w-1 bg-slate-300/70" />

          <div className="flex items-center gap-2.5 rounded-lg border border-slate-200/60 bg-slate-50/70 px-3 py-2">
            <Skeleton className="size-5 rounded-md" />

            <div className="min-w-0 flex-1 space-y-1.5">
              <Skeleton className="h-2.5 w-24" />
              <Skeleton className="h-2 w-36" />
            </div>

            <Skeleton className="size-3 rounded-sm" />
          </div>

          <div className="mt-5 space-y-2">
            <Skeleton className="h-4 w-[75%]" />
          </div>

          <div className="mt-5 flex gap-1.5">
            <Skeleton className="h-5 w-10 rounded-full" />
            <Skeleton className="h-5 w-14 rounded-full" />
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div className="mb-4 break-inside-avoid">
        <div className="relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white/70 p-4 pl-5 shadow-sm">
          <div className="absolute left-0 top-0 h-full w-1 bg-slate-300/70" />

          <div className="flex items-center gap-2.5 rounded-lg border border-slate-200/60 bg-slate-50/70 px-3 py-2">
            <Skeleton className="size-5 rounded-md" />

            <div className="min-w-0 flex-1 space-y-1.5">
              <Skeleton className="h-2.5 w-20" />
              <Skeleton className="h-2 w-32" />
            </div>

            <Skeleton className="size-3 rounded-sm" />
          </div>

          <div className="mt-5 space-y-2">
            <Skeleton className="h-4 w-[88%]" />
            <Skeleton className="h-4 w-[70%]" />
            <Skeleton className="h-4 w-[55%]" />
          </div>

          <div className="mt-5 flex gap-1.5">
            <Skeleton className="h-5 w-12 rounded-full" />
            <Skeleton className="h-5 w-16 rounded-full" />
          </div>
        </div>
      </div>

      {/* Card 5 */}
      <div className="mb-4 break-inside-avoid">
        <div className="relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white/70 p-4 pl-5 shadow-sm">
          <div className="absolute left-0 top-0 h-full w-1 bg-slate-300/70" />

          <div className="flex items-center gap-2.5 rounded-lg border border-slate-200/60 bg-slate-50/70 px-3 py-2">
            <Skeleton className="size-5 rounded-md" />

            <div className="min-w-0 flex-1 space-y-1.5">
              <Skeleton className="h-2.5 w-16" />
              <Skeleton className="h-2 w-[120px]" />
            </div>

            <Skeleton className="size-3 rounded-sm" />
          </div>

          <div className="mt-5 space-y-2">
            <Skeleton className="h-4 w-[80%]" />
            <Skeleton className="h-4 w-[60%]" />
          </div>

          <div className="mt-5 flex gap-1.5">
            <Skeleton className="h-5 w-14 rounded-full" />
          </div>
        </div>
      </div>

      {/* Card 6 */}
      <div className="mb-4 break-inside-avoid">
        <div className="relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white/70 p-4 pl-5 shadow-sm">
          <div className="absolute left-0 top-0 h-full w-1 bg-slate-300/70" />

          <div className="flex items-center gap-2.5 rounded-lg border border-slate-200/60 bg-slate-50/70 px-3 py-2">
            <Skeleton className="size-5 rounded-md" />

            <div className="min-w-0 flex-1 space-y-1.5">
              <Skeleton className="h-2.5 w-20" />
              <Skeleton className="h-2 w-28" />
            </div>

            <Skeleton className="size-3 rounded-sm" />
          </div>

          <div className="mt-5 space-y-2">
            <Skeleton className="h-4 w-[92%]" />
            <Skeleton className="h-4 w-[72%]" />
          </div>

          <div className="mt-5 flex gap-1.5">
            <Skeleton className="h-5 w-12 rounded-full" />
            <Skeleton className="h-5 w-14 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrainSkeleton