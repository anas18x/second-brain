import {
  ArrowLeft,
  ExternalLink,
  Pencil,
  X,
  Loader2,
} from "lucide-react"

import { useState } from "react"

import DeleteBrainDialog from "@/components/dashboard/DeleteBrainDialog"

import { useBrain } from "@/hooks/brain/useBrain"

import {
  useNavigate,
  useParams,
} from "react-router-dom"

import {
  zodResolver,
} from "@hookform/resolvers/zod"

import {
  useForm,
} from "react-hook-form"

import {
  updateBrainSchema,
  type UpdateBrainInput,
} from "@/schema/brain.schema"

import {
  useUpdateBrain,
} from "@/hooks/brain/useUpdateBrain"

import { toast } from "sonner"

function BrainDetailPage() {
  const navigate = useNavigate()
  const { id } = useParams()

  const {
    data,
    isLoading,
    isError,
  } = useBrain(id!)

  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { isDirty },
  } = useForm<UpdateBrainInput>({
    resolver: zodResolver(
      updateBrainSchema
    ),
  })

  const updateMutation =
    useUpdateBrain()

  const [isEditing, setIsEditing] =
    useState(false)

  function onSubmit(
    data: UpdateBrainInput
  ) {
    updateMutation.mutate(
      {
        id: id!,
        data,
      },
      {
        onSuccess: () => {
          setIsEditing(false)
        },
        onError: () => {
          toast.error(
            "Failed to update brain. Please try again."
          )
        },
      }
    )
  }

  if (isLoading) {
    return (
      <div
        className="
          flex
          min-h-screen
          items-center
          justify-center
          bg-background
        "
      >
        <Loader2
          className="
            size-5
            animate-spin
            text-muted-foreground
          "
        />
      </div>
    )
  }

  if (isError || !data) {
    return (
      <div
        className="
          flex
          min-h-screen
          items-center
          justify-center
          bg-background
        "
      >
        <p className="text-sm text-muted-foreground">
          Brain not found
        </p>
      </div>
    )
  }

  const getDomain = () => {
    if (!data.url) return ""

    try {
      return new URL(data.url)
        .hostname
        .replace("www.", "")
    } catch {
      return data.url
    }
  }

  return (
    <div className="relative min-h-screen w-full bg-background">
      <main
        className="
          relative
          z-10
          min-h-screen
          px-6
          py-6
          sm:px-8
          lg:px-10
        "
      >
        <div className="mx-auto w-full max-w-5xl">
          {/* Top bar */}
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="
                inline-flex
                cursor-pointer
                items-center
                gap-2
                rounded-md
                px-1
                py-1
                text-xs
                font-medium
                text-muted-foreground
                transition-colors
                duration-200
                hover:text-foreground
              "
            >
              <ArrowLeft className="size-4" />
              Back
            </button>

            {!isEditing && (
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => {
                    reset({
                      title: data.title,
                      body: data.body ?? "",
                      url: data.url ?? "",
                      tags: data.tags,
                    })

                    setIsEditing(true)

                    setTimeout(() => {
                      setFocus("title")
                    }, 0)
                  }}
                  title="Edit brain"
                  className="
                    flex
                    size-8
                    cursor-pointer
                    items-center
                    justify-center
                    rounded-md
                    text-muted-foreground/60
                    transition-all
                    duration-200
                    hover:bg-[#e04430]/5
                    hover:text-[#e04430]
                  "
                >
                  <Pencil className="size-4" />
                </button>

                <DeleteBrainDialog
                  id={data._id}
                />
              </div>
            )}
          </div>

          {/* Edit */}
          {isEditing ? (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-12"
            >
              {/* Title */}
              <input
                {...register("title")}
                className="
                  w-full
                  border-none
                  bg-transparent
                  p-0
                  text-3xl
                  font-semibold
                  leading-tight
                  tracking-[-0.025em]
                  text-foreground
                  outline-none
                  placeholder:text-muted-foreground/50
                  sm:text-4xl
                "
                placeholder="Give it a title"
              />

              {/* Tags */}
              <div className="mt-6">
                <input
                  {...register("tags", {
                    setValueAs: (value) =>
                      typeof value === "string"
                        ? value
                            .split(",")
                            .map(
                              (
                                tag: string
                              ) =>
                                tag.trim()
                            )
                            .filter(Boolean)
                        : value ?? [],
                  })}
                  className="
                    w-full
                    border-none
                    bg-transparent
                    p-0
                    text-xs
                    font-medium
                    text-muted-foreground
                    outline-none
                    placeholder:text-muted-foreground/50
                  "
                  placeholder="ideas, productivity, habits"
                />

                <p
                  className="
                    mt-1.5
                    text-[10px]
                    font-medium
                    text-muted-foreground/60
                  "
                >
                  Separate tags with commas.
                </p>
              </div>

              {/* URL */}
              <div className="mt-8">
                <p
                  className="
                    mb-2
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.14em]
                    text-muted-foreground
                  "
                >
                  URL
                </p>

                <input
                  {...register("url")}
                  className="
                    h-11
                    w-full
                    rounded-lg
                    border
                    border-border/70
                    bg-muted/30
                    px-3
                    text-xs
                    font-medium
                    text-foreground
                    outline-none
                    transition-all
                    placeholder:text-muted-foreground/50
                    hover:border-border
                    focus:border-[#e04430]/45
                    focus:bg-[#e04430]/[0.025]
                    focus:ring-2
                    focus:ring-[#e04430]/10
                  "
                  placeholder="https://example.com"
                />
              </div>

              {/* Note */}
              <div className="mt-8">
                <p
                  className="
                    mb-2
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.14em]
                    text-muted-foreground
                  "
                >
                  Note
                </p>

                <textarea
                  {...register("body")}
                  rows={8}
                  className="
                    w-full
                    resize-none
                    rounded-lg
                    border
                    border-border/70
                    bg-muted/30
                    px-3
                    py-3
                    text-sm
                    font-medium
                    leading-7
                    text-foreground
                    outline-none
                    transition-all
                    placeholder:text-muted-foreground/50
                    hover:border-border
                    focus:border-[#e04430]/45
                    focus:bg-[#e04430]/[0.025]
                    focus:ring-2
                    focus:ring-[#e04430]/10
                  "
                  placeholder="Add a note..."
                />
              </div>

              {/* Actions */}
              <div
                className="
                  mt-7
                  flex
                  justify-end
                  gap-2
                "
              >
                <button
                  type="submit"
                  disabled={
                    !isDirty ||
                    updateMutation.isPending
                  }
                  className="
                    inline-flex
                    cursor-pointer
                    items-center
                    gap-1.5
                    rounded-lg
                    border
                    border-[#e04430]/25
                    bg-[#e04430]/10
                    px-3
                    py-2
                    text-xs
                    font-semibold
                    text-foreground
                    shadow-[0_0_12px_rgba(224,68,48,0.06)]
                    transition-all
                    duration-200
                    hover:border-[#e04430]/35
                    hover:bg-[#e04430]/15
                    hover:shadow-[0_0_16px_rgba(224,68,48,0.10)]
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                  "
                >
                  {updateMutation.isPending
                    ? "Saving..."
                    : "Save"}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    reset({
                      title: data.title,
                      body: data.body ?? "",
                      url: data.url ?? "",
                      tags: data.tags,
                    })

                    setIsEditing(false)
                  }}
                  className="
                    inline-flex
                    cursor-pointer
                    items-center
                    gap-1.5
                    rounded-lg
                    border
                    border-border/70
                    bg-muted/30
                    px-3
                    py-2
                    text-xs
                    font-semibold
                    text-muted-foreground
                    transition-all
                    duration-200
                    hover:border-border
                    hover:bg-muted
                    hover:text-foreground
                  "
                >
                  <X className="size-3.5" />
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <>
              {/* Header */}
              <header className="mt-12">
                <h1
                  className="
                    max-w-4xl
                    text-3xl
                    font-semibold
                    leading-tight
                    tracking-[-0.025em]
                    text-foreground
                    sm:text-4xl
                  "
                >
                  {data.title}
                </h1>

                <div className="mt-5 flex flex-wrap items-center gap-2.5">
                  {data.tags.map((tag) => (
                    <span
                      key={tag}
                      className="
                        rounded-full
                        border
                        border-[#e04430]/20
                        bg-[#e04430]/5
                        px-2.5
                        py-1
                        text-[10px]
                        font-medium
                        text-[#e04430]
                      "
                    >
                      #{tag}
                    </span>
                  ))}

                  <span className="mx-1 text-sm text-muted-foreground/40">
                    /
                  </span>

                  <span
                    className="
                      text-[10px]
                      font-medium
                      text-muted-foreground/60
                    "
                  >
                    Saved{" "}
                    {new Date(
                      data.createdAt
                    ).toLocaleDateString()}
                  </span>
                </div>
              </header>

              {/* URL */}
              {data.url && (
                <a
                  href={data.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    mt-9
                    flex
                    min-w-0
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-border/60
                    bg-muted/25
                    px-4
                    py-3
                    shadow-sm
                    transition-all
                    duration-200
                    hover:border-border
                    hover:bg-muted/40
                    hover:shadow-md
                  "
                >
                  <div
                    className="
                      flex
                      size-7
                      shrink-0
                      items-center
                      justify-center
                      overflow-hidden
                      rounded-md
                      border
                      border-border/60
                      bg-background
                    "
                  >
                    <img
                      src={`https://www.google.com/s2/favicons?domain=${getDomain()}&sz=64`}
                      alt=""
                      className="size-4"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold text-foreground">
                      {getDomain()}
                    </p>

                    <p
                      className="
                        mt-0.5
                        truncate
                        text-[10px]
                        font-medium
                        text-muted-foreground/60
                      "
                    >
                      {data.url}
                    </p>
                  </div>

                  <ExternalLink
                    className="
                      size-4
                      shrink-0
                      text-muted-foreground/50
                      transition-colors
                      group-hover:text-[#e04430]
                    "
                  />
                </a>
              )}

              {/* Divider */}
              <div className="mt-9 h-px w-full bg-border/60" />

              {/* Body */}
              <section className="py-9">
                {data.body ? (
                  <p
                    className="
                      max-w-4xl
                      whitespace-pre-wrap
                      text-sm
                      font-medium
                      leading-8
                      text-muted-foreground
                      sm:text-[15px]
                    "
                  >
                    {data.body}
                  </p>
                ) : (
                  <p className="text-sm font-medium text-muted-foreground/60">
                    No note added.
                  </p>
                )}
              </section>

              {/* Divider */}
              <div className="h-px w-full bg-border/60" />

              {/* Back */}
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="
                  mt-6
                  inline-flex
                  cursor-pointer
                  items-center
                  gap-2
                  text-xs
                  font-medium
                  text-muted-foreground
                  transition-colors
                  hover:text-foreground
                "
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