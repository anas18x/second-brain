import { useState } from "react"
import { Plus } from "lucide-react"
import {Dialog,DialogContent,DialogHeader,DialogTitle,DialogTrigger} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { createBrainSchema, type CreateBrainInput,} from "@/schema/brain.schema"
import { useCreateBrain } from "@/hooks/brain/usecreateBrain"
import axios from "axios"


function AddBrainDialog() {
  const [open, setOpen] = useState(false)
  const [serverError, setServerError] = useState("")
  const createBrainMutation = useCreateBrain()

  const {register ,
         handleSubmit,
         reset,
         formState:{errors, isSubmitting} } = useForm<CreateBrainInput>({
           resolver:zodResolver(createBrainSchema)
         })

  async function onSubmit(data : CreateBrainInput) {
    try{
      setServerError("")
      await createBrainMutation.mutateAsync(data)
      reset()
      setOpen(false)
    } catch(error){
      if(axios.isAxiosError(error)){
        setServerError(error.response?.data?.message ?? "Failed to add brain. Please try again.")
      } else {
           setServerError("Failed to add brain. Please try again.")
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

      <DialogTrigger
        className="
          inline-flex
          h-10
          shrink-0
          cursor-pointer
          items-center
          gap-2
          rounded-lg
          border
          border-[#ef3340]
          bg-[#ef3340]
          px-4
          font-['Space_Grotesk']
          text-xs
          font-semibold
          tracking-tight
          text-white
          shadow-[0_4px_14px_rgba(239,51,64,0.18)]
          transition-all
          duration-200
          hover:-translate-y-0.5
          hover:bg-[#ef3340]/90
          hover:shadow-[0_8px_22px_rgba(239,51,64,0.28)]
          active:translate-y-0
          active:shadow-[0_3px_8px_rgba(239,51,64,0.16)]
        "
      >
        <Plus
          className="size-3.5"
          strokeWidth={2.2}
        />
        Add to Brain
      </DialogTrigger>

      <DialogContent
        className="
          gap-0
          rounded-2xl
          border
          border-white/10
          bg-[#0d0d0d]
          p-0
          text-foreground
          shadow-[0_20px_60px_rgba(0,0,0,0.5)]
          sm:max-w-[460px]
        "
      >

        <DialogHeader className="px-[18px] pt-[18px]">

          <DialogTitle
            className="
              font-sans
              text-lg
              font-medium
              tracking-tight
              text-foreground
            "
          >
            Add to Brain
          </DialogTitle>

        </DialogHeader>

        <form
          onSubmit={handleSubmit(onSubmit)}
          onChange={() => setServerError("")}
        >

          <div className="space-y-3.5 px-[18px] pb-[18px] pt-4">

            {/* Title */}
            <div className="space-y-1.5">

              <Label
                htmlFor="brain-title"
                className="
                  font-['Geist_Mono']
                  text-xs
                  font-medium
                  text-foreground
                "
              >
                Title
              </Label>

              <Input
                id="brain-title"
                type="text"
                placeholder="Give it a title"
                {...register("title")}
                className="
                  h-[42px]
                  rounded-lg
                  border-white/10
                  bg-white/[0.04]
                  px-3
                  font-['Geist_Mono']
                  text-xs
                  text-foreground
                  shadow-none
                  placeholder:text-muted-foreground/50
                  focus:border-[#ef3340]/50
                  focus:ring-2
                  focus:ring-[#ef3340]/20
                "
              />

              {errors.title && (
                <p className="font-['Geist_Mono'] text-[10px] text-red-400">
                  {errors.title.message}
                </p>
              )}

            </div>

            {/* URL */}
            <div className="space-y-1.5">

              <Label
                htmlFor="brain-url"
                className="
                  font-['Geist_Mono']
                  text-xs
                  font-medium
                  text-foreground
                "
              >
                URL

                <span className="ml-2 font-normal text-muted-foreground/60">
                  optional
                </span>

              </Label>

              <Input
                id="brain-url"
                type="url"
                placeholder="https://example.com"
                {...register("url", {
                  setValueAs: (value) =>
                    value.trim() === "" ? undefined : value,
                })}
                className="
                  h-[42px]
                  rounded-lg
                  border-white/10
                  bg-white/[0.04]
                  px-3
                  font-['Geist_Mono']
                  text-xs
                  text-foreground
                  shadow-none
                  placeholder:text-muted-foreground/50
                  focus:border-[#ef3340]/50
                  focus:ring-2
                  focus:ring-[#ef3340]/20
                "
              />

              {errors.url && (
                <p className="font-['Geist_Mono'] text-[10px] text-red-400">
                  {errors.url.message}
                </p>
              )}

            </div>

            {/* Note */}
            <div className="space-y-1.5">

              <Label
                htmlFor="brain-body"
                className="
                  font-['Geist_Mono']
                  text-xs
                  font-medium
                  text-foreground
                "
              >
                Note

                <span className="ml-2 font-normal text-muted-foreground/60">
                  optional
                </span>

              </Label>

              <textarea
                id="brain-body"
                placeholder="Add a note..."
                rows={3}
                {...register("body")}
                className="
                  flex
                  min-h-[82px]
                  w-full
                  resize-none
                  rounded-lg
                  border
                  border-white/10
                  bg-white/[0.04]
                  px-3
                  py-2.5
                  font-['Geist_Mono']
                  text-xs
                  text-foreground
                  outline-none
                  placeholder:text-muted-foreground/50
                  transition-colors
                  focus:border-[#ef3340]/50
                  focus:ring-2
                  focus:ring-[#ef3340]/20
                "
              />

              {errors.body && (
                <p className="font-['Geist_Mono'] text-[10px] text-red-400">
                  {errors.body.message}
                </p>
              )}

            </div>

            {/* Tags */}
            <div className="space-y-1.5">

              <Label
                htmlFor="brain-tags"
                className="
                  font-['Geist_Mono']
                  text-xs
                  font-medium
                  text-foreground
                "
              >
                Tags

                <span className="ml-2 font-normal text-muted-foreground/60">
                  optional
                </span>

              </Label>

              <Input
                id="brain-tags"
                type="text"
                placeholder="tech, ideas, travel"
                {...register("tags", {
                  setValueAs: (value) =>
                    value
                      .split(",")
                      .map((tag: string) => tag.trim())
                      .filter(Boolean),
                })}
                className="
                  h-[42px]
                  rounded-lg
                  border-white/10
                  bg-white/[0.04]
                  px-3
                  font-['Geist_Mono']
                  text-xs
                  text-foreground
                  shadow-none
                  placeholder:text-muted-foreground/50
                  focus:border-[#ef3340]/50
                  focus:ring-2
                  focus:ring-[#ef3340]/20
                "
              />

              <p className="font-['Geist_Mono'] text-[10px] text-muted-foreground/60">
                Separate tags with commas.
              </p>

              {errors.tags && (
                <p className="font-['Geist_Mono'] text-[10px] text-red-400">
                  {errors.tags.message}
                </p>
              )}

            </div>

            {serverError && (<p className="font-['Geist_Mono'] text-[10px] text-red-400">{serverError}</p>)}

            {/* Save */}
            <div className="flex justify-end pt-1">

              <button
                type="submit"
                disabled={isSubmitting}
                className="
                  inline-flex
                  h-9
                  cursor-pointer
                  items-center
                  gap-2
                  rounded-lg
                  border
                  border-[#ef3340]
                  bg-[#ef3340]
                  px-4
                  font-['Space_Grotesk']
                  text-xs
                  font-semibold
                  text-white
                  shadow-[0_4px_12px_rgba(239,51,64,0.16)]
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:bg-[#ef3340]/90
                  hover:shadow-[0_8px_20px_rgba(239,51,64,0.24)]
                  active:translate-y-0
                  active:shadow-[0_3px_8px_rgba(239,51,64,0.14)]
                  disabled:cursor-not-allowed
                  disabled:opacity-50
                "
              >

                <Plus
                  className="size-3.5"
                  strokeWidth={2.2}
                />

                {isSubmitting ? "Saving..." : "Save to Brain"}

              </button>

            </div>

          </div>

        </form>

      </DialogContent>

    </Dialog>
  )
}

export default AddBrainDialog