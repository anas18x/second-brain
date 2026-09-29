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
          transition-all
          duration-200
          ${
            value === ""
              ? `
                border-foreground
                bg-foreground
                text-background
                shadow-sm
              `
              : `
                border-foreground/10
                bg-card
                text-muted-foreground
                shadow-[0_1px_3px_rgba(0,0,0,0.04)]
                hover:border-foreground/20
                hover:bg-muted
                hover:text-foreground
                hover:shadow-sm
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
            transition-all
            duration-200
            ${
              value === tag
                ? `
                  border-foreground
                  bg-foreground
                  text-background
                  shadow-sm
                `
                : `
                  border-foreground/10
                  bg-card
                  text-muted-foreground
                  shadow-[0_1px_3px_rgba(0,0,0,0.04)]
                  hover:border-foreground/20
                  hover:bg-muted
                  hover:text-foreground
                  hover:shadow-sm
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