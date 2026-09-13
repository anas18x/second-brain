const tags = [
  "All",
  "tech",
  "ideas",
  "travel",
  "inspiration",
  "fun",
]

function TagFilter() {
  return (
    <div className="mt-4 flex flex-wrap items-center gap-2">
      {tags.map((tag, index) => (
        <button
          key={tag}
          type="button"
          className={`
            cursor-pointer
            rounded-full
            border
            px-3.5
            py-1.5
            text-xs
            font-medium
            transition-all
            ${
              index === 0
                ? "border-[#ef3340] bg-[#ef3340] text-white shadow-[0_3px_10px_rgba(239,51,64,0.14)]"
                : "border-white/10 bg-white/[0.04] text-muted-foreground hover:border-white/15 hover:bg-white/[0.08] hover:text-foreground"
            }
          `}
        >
          {index === 0 ? tag : `#${tag}`}
        </button>
      ))}
    </div>
  )
}

export default TagFilter