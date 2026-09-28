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
          px-3
          py-1.5
          text-xs
          font-medium
          transition-all
          duration-200
          ${
            value === ""
              ? `
                border-[#e04430]/40
                bg-[#e04430]/10
                text-[#e04430]
                shadow-[0_0_12px_rgba(224,68,48,0.08)]
              `
              : `
                border-border/70
                bg-muted/30
                text-muted-foreground
                hover:border-[#e04430]/30
                hover:bg-[#e04430]/5
                hover:text-[#e04430]
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
            px-3
            py-1.5
            text-xs
            font-medium
            transition-all
            duration-200
            ${
              value === tag
                ? `
                  border-[#e04430]/40
                  bg-[#e04430]/10
                  text-[#e04430]
                  shadow-[0_0_12px_rgba(224,68,48,0.08)]
                `
                : `
                  border-border/70
                  bg-muted/30
                  text-muted-foreground
                  hover:border-[#e04430]/30
                  hover:bg-[#e04430]/5
                  hover:text-[#e04430]
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