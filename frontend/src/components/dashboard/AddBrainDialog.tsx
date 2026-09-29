import { useState } from "react"

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

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import {
  createBrainSchema,
  type CreateBrainInput,
} from "@/schema/brain.schema"

import { useCreateBrain } from "@/hooks/brain/usecreateBrain"

import axios from "axios"

function AddBrainDialog() {
  const [open, setOpen] = useState(false)
  const [serverError, setServerError] = useState("")

  const createBrainMutation = useCreateBrain()

  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm<CreateBrainInput>({
    resolver: zodResolver(createBrainSchema),
  })

  async function onSubmit(data: CreateBrainInput) {
    try {
      setServerError("")

      await createBrainMutation.mutateAsync(data)

      reset()
      setOpen(false)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setServerError(
          error.response?.data?.message ??
            "Failed to add brain. Please try again."
        )
      } else {
        setServerError(
          "Failed to add brain. Please try again."
        )
      }
    }
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(value) => {
        setOpen(value)

        if (!value) {
          reset()
          setServerError("")
        }
      }}
    >
      {/* Trigger */}
      <DialogTrigger
        className="
          inline-flex
          h-9
          shrink-0
          cursor-pointer
          items-center
          gap-2
          rounded-md
          bg-primary
          px-3.5
          text-sm
          font-medium
          text-primary-foreground
          shadow-sm
          transition-colors
          hover:bg-primary/90
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-[var(--landing-accent)]/25
          focus-visible:ring-offset-2
        "
      >
        <Plus className="size-4" />
        Add to Brain
      </DialogTrigger>

      <DialogContent
        className="
          w-[calc(100%-1.5rem)]
          gap-0
          overflow-hidden
          rounded-2xl
          border
          border-border/60
          bg-background
          p-0
          shadow-[0_24px_80px_rgba(0,0,0,0.18)]
          dark:shadow-[0_24px_80px_rgba(0,0,0,0.45)]
          max-h-[calc(100dvh-1.5rem)]
          overflow-y-auto
          sm:w-[calc(100%-2rem)]
          sm:max-w-[600px]
          sm:max-h-none
        "
      >
        {/* Header */}
        <DialogHeader
          className="
            border-b
            border-border/60
            px-5
            py-4
            sm:px-6
            sm:py-5
          "
        >
          <DialogTitle
            className="
              flex
              items-center
              gap-2
              text-base
              font-semibold
              tracking-tight
              text-foreground
            "
          >
            <span
              className="
                size-1.5
                rounded-full
                bg-[var(--landing-accent)]
              "
            />

            Add to Brain
          </DialogTitle>

          <p className="mt-1 text-xs leading-5 text-muted-foreground">
            Save a useful link, note, or idea for later.
          </p>
        </DialogHeader>

        <form
          onSubmit={handleSubmit(onSubmit)}
          onChange={() => setServerError("")}
        >
          <div
            className="
              space-y-4
              px-5
              py-4
              sm:space-y-5
              sm:px-6
              sm:py-5
            "
          >
            {/* Title */}
            <div className="space-y-1.5 sm:space-y-2">
              <Label
                htmlFor="brain-title"
                className="text-xs font-medium"
              >
                Title
              </Label>

              <Input
                id="brain-title"
                type="text"
                placeholder="Give it a title"
                {...register("title")}
                className="
                  h-9
                  rounded-lg
                  border-border/70
                  bg-muted/30
                  px-3
                  text-sm
                  shadow-none
                  transition-colors
                  placeholder:text-muted-foreground/50
                  focus-visible:border-[var(--landing-accent)]/45
                  focus-visible:ring-2
                  focus-visible:ring-[var(--landing-accent)]/12
                  sm:h-10
                "
              />

              {errors.title && (
                <p className="text-[11px] text-destructive">
                  {errors.title.message}
                </p>
              )}
            </div>

            {/* URL */}
            <div className="space-y-1.5 sm:space-y-2">
              <div className="flex items-center gap-2">
                <Label
                  htmlFor="brain-url"
                  className="text-xs font-medium"
                >
                  URL
                </Label>

                <span className="text-[10px] text-muted-foreground/70">
                  optional
                </span>
              </div>

              <Input
                id="brain-url"
                type="url"
                placeholder="https://example.com"
                {...register("url", {
                  setValueAs: (value) =>
                    value.trim() === ""
                      ? undefined
                      : value,
                })}
                className="
                  h-9
                  rounded-lg
                  border-border/70
                  bg-muted/30
                  px-3
                  text-sm
                  shadow-none
                  transition-colors
                  placeholder:text-muted-foreground/50
                  focus-visible:border-[var(--landing-accent)]/45
                  focus-visible:ring-2
                  focus-visible:ring-[var(--landing-accent)]/12
                  sm:h-10
                "
              />

              {errors.url && (
                <p className="text-[11px] text-destructive">
                  {errors.url.message}
                </p>
              )}
            </div>

            {/* Note */}
            <div className="space-y-1.5 sm:space-y-2">
              <div className="flex items-center gap-2">
                <Label
                  htmlFor="brain-body"
                  className="text-xs font-medium"
                >
                  Note
                </Label>

                <span className="text-[10px] text-muted-foreground/70">
                  optional
                </span>
              </div>

              <textarea
                id="brain-body"
                rows={3}
                placeholder="Add a note..."
                {...register("body")}
                className="
                  flex
                  min-h-[72px]
                  w-full
                  resize-none
                  rounded-lg
                  border
                  border-border/70
                  bg-muted/30
                  px-3
                  py-2
                  text-sm
                  leading-5
                  text-foreground
                  outline-none
                  transition-colors
                  placeholder:text-muted-foreground/50
                  focus:border-[var(--landing-accent)]/45
                  focus:ring-2
                  focus:ring-[var(--landing-accent)]/12
                  sm:min-h-[88px]
                  sm:py-2.5
                "
              />

              {errors.body && (
                <p className="text-[11px] text-destructive">
                  {errors.body.message}
                </p>
              )}
            </div>

            {/* Tags */}
            <div className="space-y-1.5 sm:space-y-2">
              <div className="flex items-center gap-2">
                <Label
                  htmlFor="brain-tags"
                  className="text-xs font-medium"
                >
                  Tags
                </Label>

                <span className="text-[10px] text-muted-foreground/70">
                  optional
                </span>
              </div>

              <Input
                id="brain-tags"
                type="text"
                placeholder="tech, ideas, travel"
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
                  h-9
                  rounded-lg
                  border-border/70
                  bg-muted/30
                  px-3
                  text-sm
                  shadow-none
                  transition-colors
                  placeholder:text-muted-foreground/50
                  focus-visible:border-[var(--landing-accent)]/45
                  focus-visible:ring-2
                  focus-visible:ring-[var(--landing-accent)]/12
                  sm:h-10
                "
              />

              <p className="text-[10px] text-muted-foreground/70">
                Separate tags with commas.
              </p>

              {errors.tags && (
                <p className="text-[11px] text-destructive">
                  {errors.tags.message}
                </p>
              )}
            </div>

            {/* Server error */}
            {serverError && (
              <div
                className="
                  rounded-lg
                  border
                  border-destructive/20
                  bg-destructive/5
                  px-3
                  py-2
                "
              >
                <p className="text-[11px] leading-4 text-destructive">
                  {serverError}
                </p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div
            className="
              flex
              items-center
              justify-between
              border-t
              border-border/60
              bg-muted/20
              px-5
              py-3
              sm:px-6
              sm:py-3.5
            "
          >
            <p className="hidden text-[10px] text-muted-foreground/60 sm:block">
              Press Enter to save
            </p>

            <div className="ml-auto">
              <button
                type="submit"
                disabled={isSubmitting}
                className="
                  inline-flex
                  h-8
                  cursor-pointer
                  items-center
                  gap-1.5
                  rounded-md
                  bg-primary
                  px-3
                  text-xs
                  font-medium
                  text-primary-foreground
                  shadow-sm
                  transition-colors
                  hover:bg-primary/90
                  active:scale-[0.98]
                  disabled:cursor-not-allowed
                  disabled:opacity-50
                  sm:h-9
                  sm:px-3.5
                  sm:text-sm
                "
              >
                <Plus className="size-3.5" />

                {isSubmitting
                  ? "Saving..."
                  : "Save to Brain"}
              </button>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default AddBrainDialog