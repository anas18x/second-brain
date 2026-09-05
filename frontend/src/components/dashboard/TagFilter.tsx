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
          ? "border-slate-950 bg-slate-950 text-white"
          : "border-slate-300/80 bg-white/60 text-slate-700 hover:border-slate-400 hover:bg-white hover:text-slate-950"
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