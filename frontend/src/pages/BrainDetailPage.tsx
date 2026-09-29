import {
  ArrowLeft,
  ExternalLink,
  Pencil,
  X,
  Loader2,
} from "lucide-react"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

import DeleteBrainDialog from "@/components/dashboard/DeleteBrainDialog"
import { useBrain } from "@/hooks/brain/useBrain"
import {
  updateBrainSchema,
  type UpdateBrainInput,
} from "@/schema/brain.schema"
import { useUpdateBrain } from "@/hooks/brain/useUpdateBrain"

function BrainDetailPage() {
  const navigate = useNavigate()
  const { id } = useParams()

  const {
    data: brain,
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
    resolver: zodResolver(updateBrainSchema),
  })

  const updateMutation = useUpdateBrain()

  const [isEditing, setIsEditing] = useState(false)

  function startEditing() {
    if (!brain) return

    reset({
      title: brain.title,
      body: brain.body ?? "",
      url: brain.url ?? "",
      tags: brain.tags,
    })

    setIsEditing(true)

    setTimeout(() => {
      setFocus("title")
    }, 0)
  }

  function cancelEditing() {
    if (!brain) return

    reset({
      title: brain.title,
      body: brain.body ?? "",
      url: brain.url ?? "",
      tags: brain.tags,
    })

    setIsEditing(false)
  }

  function onSubmit(formData: UpdateBrainInput) {
    if (!id) return

    updateMutation.mutate(
      {
        id,
        data: formData,
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
      <div className="flex min-h-screen items-center justify-center bg-background">
        <Loader2 className="size-5 animate-spin text-muted-foreground" />
      </div>
    )
  }

  if (isError || !brain) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <p className="text-sm font-medium text-foreground">
            Brain not found
          </p>

          <button
            type="button"
            onClick={() => navigate("/dashboard")}
            className="
              mt-3
              inline-flex
              cursor-pointer
              items-center
              gap-2
              rounded-md
              px-2
              py-1.5
              text-xs
              font-medium
              text-muted-foreground
              transition-colors
              hover:bg-muted
              hover:text-foreground
            "
          >
            <ArrowLeft className="size-3.5" />
            Back to your brain
          </button>
        </div>
      </div>
    )
  }

  const getDomain = () => {
    if (!brain.url) return ""

    try {
      return new URL(brain.url).hostname.replace(
        "www.",
        ""
      )
    } catch {
      return brain.url
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <main
        className="
          min-h-screen
          px-6
          py-6
          sm:px-8
          lg:px-10
        "
      >
        <div className="mx-auto w-full max-w-4xl">
          {/* Top navigation */}
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
                hover:bg-muted
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
                  onClick={startEditing}
                  title="Edit brain"
                  className="
                    flex
                    size-8
                    cursor-pointer
                    items-center
                    justify-center
                    rounded-md
                    text-muted-foreground/60
                    transition-colors
                    duration-200
                    hover:bg-muted
                    hover:text-foreground
                  "
                >
                  <Pencil className="size-4" />
                </button>

                <DeleteBrainDialog id={brain._id} />
              </div>
            )}
          </div>

          {/* Content */}
          <div className="mt-12">
            {isEditing ? (
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* Editable title */}
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
                    tracking-[-0.03em]
                    text-foreground
                    outline-none
                    placeholder:text-muted-foreground/40
                    sm:text-4xl
                  "
                  placeholder="Give it a title"
                />

                {/* Editable tags */}
                <div className="mt-5">
                  <input
                    {...register("tags", {
                      setValueAs: (value) =>
                        typeof value === "string"
                          ? value
                              .split(",")
                              .map((tag: string) =>
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
                      placeholder:text-muted-foreground/40
                    "
                    placeholder="ideas, productivity, habits"
                  />

                  <p
                    className="
                      mt-1.5
                      text-[10px]
                      font-medium
                      text-muted-foreground/50
                    "
                  >
                    Separate tags with commas.
                  </p>
                </div>

                {/* Editable URL */}
                <div className="mt-9">
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
                      w-full
                      border-0
                      border-b
                      border-border
                      bg-transparent
                      px-0
                      py-2.5
                      text-sm
                      font-medium
                      text-foreground
                      outline-none
                      transition-colors
                      placeholder:text-muted-foreground/40
                      focus:border-foreground/50
                    "
                    placeholder="https://example.com"
                  />
                </div>

                {/* Editable note */}
                <div className="mt-9">
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
                      border-0
                      bg-transparent
                      px-0
                      py-1
                      text-sm
                      font-medium
                      leading-8
                      text-foreground
                      outline-none
                      placeholder:text-muted-foreground/40
                      sm:text-[15px]
                    "
                    placeholder="Add a note..."
                  />
                </div>

                {/* Actions directly below content */}
                <div
                  className="
                    mt-5
                    flex
                    items-center
                    gap-2
                    border-t
                    border-border
                    pt-5
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
                      rounded-lg
                      border
                      border-primary
                      bg-primary
                      px-3.5
                      py-2
                      text-xs
                      font-semibold
                      text-primary-foreground
                      shadow-sm
                      transition-all
                      duration-200
                      hover:bg-primary/90
                      hover:shadow-md
                      disabled:cursor-not-allowed
                      disabled:opacity-50
                    "
                  >
                    {updateMutation.isPending
                      ? "Saving..."
                      : "Save changes"}
                  </button>

                  <button
                    type="button"
                    onClick={cancelEditing}
                    className="
                      inline-flex
                      cursor-pointer
                      items-center
                      gap-1.5
                      rounded-lg
                      border
                      border-border
                      bg-muted/30
                      px-3.5
                      py-2
                      text-xs
                      font-semibold
                      text-muted-foreground
                      transition-colors
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
                <header>
                  <h1
                    className="
                      max-w-4xl
                      text-3xl
                      font-semibold
                      leading-tight
                      tracking-[-0.03em]
                      text-foreground
                      sm:text-4xl
                    "
                  >
                    {brain.title}
                  </h1>

                  <div
                    className="
                      mt-5
                      flex
                      flex-wrap
                      items-center
                      gap-2
                    "
                  >
                    {brain.tags.map((tag) => (
                      <span
                        key={tag}
                        className="
                          rounded-full
                          border
                          border-border
                          bg-muted
                          px-2.5
                          py-1
                          text-[10px]
                          font-medium
                          text-muted-foreground
                        "
                      >
                        #{tag}
                      </span>
                    ))}

                    <span className="mx-1 text-sm text-muted-foreground/30">
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
                        brain.createdAt
                      ).toLocaleDateString()}
                    </span>
                  </div>
                </header>

                {/* URL */}
                {brain.url && (
                  <a
                    href={brain.url}
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
                      border-border
                      bg-muted/30
                      px-4
                      py-3
                      shadow-sm
                      transition-all
                      duration-200
                      hover:border-foreground/15
                      hover:bg-muted
                      hover:shadow-md
                    "
                  >
                    <div
                      className="
                        flex
                        size-8
                        shrink-0
                        items-center
                        justify-center
                        overflow-hidden
                        rounded-md
                        border
                        border-border
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
                        {brain.url}
                      </p>
                    </div>

                    <ExternalLink
                      className="
                        size-4
                        shrink-0
                        text-muted-foreground/40
                        transition-colors
                        group-hover:text-foreground
                      "
                    />
                  </a>
                )}

                {/* Divider */}
                <div className="mt-9 h-px w-full bg-border" />

                {/* Body */}
                <section className="py-9">
                  {brain.body ? (
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
                      {brain.body}
                    </p>
                  ) : (
                    <p
                      className="
                        text-sm
                        font-medium
                        text-muted-foreground/60
                      "
                    >
                      No note added.
                    </p>
                  )}
                </section>

                {/* Bottom divider */}
                <div className="h-px w-full bg-border" />

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
                    rounded-md
                    px-1
                    py-1
                    text-xs
                    font-medium
                    text-muted-foreground
                    transition-colors
                    hover:bg-muted
                    hover:text-foreground
                  "
                >
                  <ArrowLeft className="size-3.5" />
                  Back to your brain
                </button>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

export default BrainDetailPage