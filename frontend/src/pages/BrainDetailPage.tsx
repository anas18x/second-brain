import { ArrowLeft, ExternalLink, Pencil, X } from "lucide-react"
import { useState } from "react"
import DeleteBrainDialog from "@/components/dashboard/DeleteBrainDialog"
import { useBrain } from "@/hooks/brain/useBrain"
import { useNavigate, useParams } from "react-router-dom"
import { Loader2 } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { updateBrainSchema, type UpdateBrainInput } from "@/schema/brain.schema"
import {useUpdateBrain} from "@/hooks/brain/useUpdateBrain"
import { toast } from "sonner"


function BrainDetailPage() {
  const navigate = useNavigate()
  const { id } = useParams()
  const { data, isLoading, isError } = useBrain(id!)
  
  const { register,handleSubmit , reset, setFocus, formState: { isDirty } } = useForm<UpdateBrainInput>({resolver: zodResolver(updateBrainSchema)})

  const updateMutation = useUpdateBrain()
  function onSubmit(data: UpdateBrainInput) {
    updateMutation.mutate({
      id : id!,
      data
    }, {
      onSuccess: () => {
        setIsEditing(false)
      },
      onError: () => {
        toast.error("Failed to update brain. Please try again.")
      }
    })
  }
  

  const [isEditing, setIsEditing] = useState(false)

  if (isLoading) {
    return <div className="flex min-h-screen items-center justify-center bg-background">
                <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
           </div>
  }

  if (isError || !data) {
    return <div className="flex min-h-screen items-center justify-center bg-background">Brain not found</div>
  }

  const getDomain = () => {
    if (!data.url) return ""
    try {
      return new URL(data.url).hostname.replace("www.", "")
    } catch {
      return data.url
    }
  }

  return (
    <div className="relative min-h-screen w-full">
      <main className="relative z-10 min-h-screen px-6 py-6 sm:px-8 lg:px-10">
        <div className="mx-auto w-full max-w-5xl">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="inline-flex cursor-pointer items-center gap-2 rounded-md px-1 py-1 text-xs font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              <ArrowLeft className="size-4" />
              Back
            </button>

            {!isEditing && (
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() =>{ 
                    reset({
                      title: data.title,
                      body: data.body ?? "",
                      url: data.url ?? "",
                      tags: data.tags
                    })
                    setIsEditing(true)
                    setTimeout(() => {
                      setFocus("title")
                    }, 0)
                  }}
                  title="Edit brain"
                  className="flex size-8 cursor-pointer items-center justify-center rounded-md text-muted-foreground transition-all duration-200 hover:bg-white/[0.06] hover:text-foreground"
                >
                  <Pencil className="size-4" />
                </button>
                <DeleteBrainDialog id={data._id} />
              </div>
            )}
          </div>

          {isEditing ? (
            <form onSubmit={handleSubmit(onSubmit)} className="mt-12">
              <input
                {...register("title")}
                className="w-full border-none bg-transparent p-0 text-3xl font-semibold leading-tight tracking-[-0.025em] text-foreground outline-none placeholder:text-muted-foreground/50 sm:text-4xl"
                placeholder="Give it a title"
              />

              <div className="mt-6">
                <input
                {...register("tags", {
                    setValueAs: (value) =>
                     typeof value === "string"
                      ? value
                      .split(",")
                     .map((tag: string) => tag.trim())
                      .filter(Boolean)
                      : value ?? [],
                        })}

                  className="w-full border-none bg-transparent p-0 text-xs font-medium text-muted-foreground outline-none placeholder:text-muted-foreground/50"
                  placeholder="ideas, productivity, habits"
                />
                <p className="mt-1.5 text-[10px] font-medium text-muted-foreground/60">
                  Separate tags with commas.
                </p>
              </div>

              <div className="mt-8">
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  URL
                </p>
                <input
                {...register("url")}
                  className="h-11 w-full rounded-lg border border-white/10 bg-white/[0.04] px-3 text-xs font-medium text-foreground outline-none transition-all placeholder:text-muted-foreground/50 focus:border-[#ef3340]/40 focus:bg-white/[0.06] focus:ring-2 focus:ring-[#ef3340]/15"
                  placeholder="https://example.com"
                />
              </div>

              <div className="mt-8">
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  Note
                </p>
                <textarea
                  {...register("body")}
                  rows={8}
                  className="w-full resize-none rounded-lg border border-white/10 bg-white/[0.04] px-3 py-3 text-sm font-medium leading-7 text-foreground outline-none transition-all placeholder:text-muted-foreground/50 focus:border-[#ef3340]/40 focus:bg-white/[0.06] focus:ring-2 focus:ring-[#ef3340]/15"
                  placeholder="Add a note..."
                />
              </div>

              <div className="mt-7 flex justify-end gap-2">
                <button type="submit"
                disabled={!isDirty || updateMutation.isPending}
                className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-[#ef3340] bg-[#ef3340] px-3 py-2 font-['Space_Grotesk'] text-xs font-semibold text-white transition-all hover:bg-[#ef3340]/90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                {updateMutation.isPending ? "Saving..." : "Save"}
              </button>

                <button
                  type="button"
                  onClick={() => {
                    reset({
                      title: data.title,
                      body: data.body ?? "",
                      url: data.url ?? "",
                      tags: data.tags
                    })
                    setIsEditing(false);
                  }}
                  className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 font-['Space_Grotesk'] text-xs font-semibold text-muted-foreground transition-all hover:border-white/15 hover:bg-white/[0.08] hover:text-foreground"
                >
                  <X className="size-3.5" />
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <>
              <header className="mt-12">
                <h1 className="max-w-4xl text-3xl font-semibold leading-tight tracking-[-0.025em] text-foreground sm:text-4xl">
                  {data.title}
                </h1>

                <div className="mt-5 flex flex-wrap items-center gap-2.5">
                  {data.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] font-medium text-muted-foreground"
                    >
                      #{tag}
                    </span>
                  ))}

                  <span className="mx-1 text-sm text-muted-foreground/40">
                    /
                  </span>

                  <span className="text-[10px] font-medium text-muted-foreground/60">
                    Saved {new Date(data.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </header>

              {data.url && (
                <a
                  href={data.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-9 flex min-w-0 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 shadow-[0_3px_12px_rgba(0,0,0,0.2)] backdrop-blur-sm transition-all duration-200 hover:border-white/15 hover:bg-white/[0.06] hover:shadow-[0_8px_22px_rgba(0,0,0,0.28)]"
                >
                  <img
                    src={`https://www.google.com/s2/favicons?domain=${getDomain()}&sz=64`}
                    alt=""
                    className="size-7 shrink-0 rounded-md"
                  />

                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold text-foreground">
                      {getDomain()}
                    </p>
                    <p className="mt-0.5 truncate text-[10px] font-medium text-muted-foreground/60">
                      {data.url}
                    </p>
                  </div>

                  <ExternalLink className="size-4 shrink-0 text-muted-foreground/50 transition-colors group-hover:text-muted-foreground" />
                </a>
              )}

              <div className="mt-9 h-px w-full bg-white/10" />

              <section className="py-9">
                {data.body ? (
                  <p className="max-w-4xl whitespace-pre-wrap text-sm font-medium leading-8 text-muted-foreground sm:text-[15px]">
                    {data.body}
                  </p>
                ) : (
                  <p className="text-sm font-medium text-muted-foreground/60">
                    No note added.
                  </p>
                )}
              </section>

              <div className="h-px w-full bg-white/10" />

              <button
                type="button"
                onClick={() => navigate(-1)}
                className="mt-6 inline-flex cursor-pointer items-center gap-2 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                <ArrowLeft className="size-3.5" />
                Back to your brain
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  )
}

export default BrainDetailPage