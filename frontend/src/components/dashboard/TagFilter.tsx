import { useTags } from "@/hooks/brain/useTags"

type TagFilterProps = {
  value: string
  setTag: (tag: string) => void
}

function TagFilter({
  value,
  setTag,
}: TagFilterProps) {
  const {
    data: tags,
    isLoading,
    isError,
  } = useTags()

  if (isLoading || isError) {
    return null
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      <button
        type="button"
        onClick={() => setTag("")}
        className={`
          cursor-pointer
          rounded-full
          border
          px-3.5
          py-1.5
          text-xs
          font-semibold
          tracking-[-0.01em]
          transition-all
          duration-200
          ${
            value === ""
              ? `
                border-foreground
                bg-foreground
                text-background
                shadow-[0_2px_6px_rgba(0,0,0,0.22)]
              `
              : `
                border-foreground/[0.16]
                bg-foreground/[0.035]
                text-foreground/75
                shadow-[0_1px_3px_rgba(0,0,0,0.16)]
                hover:border-foreground/[0.24]
                hover:bg-foreground/[0.07]
                hover:text-foreground
                hover:shadow-[0_2px_6px_rgba(0,0,0,0.20)]
              `
          }
        `}
      >
        All
      </button>

      {(tags ?? []).map((tag) => (
        <button
          key={tag}
          type="button"
          onClick={() => setTag(tag)}
          className={`
            cursor-pointer
            rounded-full
            border
            px-3.5
            py-1.5
            text-xs
            font-semibold
            tracking-[-0.01em]
            transition-all
            duration-200
            ${
              value === tag
                ? `
                  border-foreground
                  bg-foreground
                  text-background
                  shadow-[0_2px_6px_rgba(0,0,0,0.22)]
                `
                : `
                  border-foreground/[0.16]
                  bg-foreground/[0.035]
                  text-foreground/75
                  shadow-[0_1px_3px_rgba(0,0,0,0.16)]
                  hover:border-foreground/[0.24]
                  hover:bg-foreground/[0.07]
                  hover:text-foreground
                  hover:shadow-[0_2px_6px_rgba(0,0,0,0.20)]
                `
            }
          `}
        >
          #{tag}
        </button>
      ))}
    </div>
  )
}

export default TagFilter