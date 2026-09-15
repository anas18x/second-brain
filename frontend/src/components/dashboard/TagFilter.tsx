import { useTags } from "@/hooks/brain/useTags";

type TagFilterProps = {
  value: string;
  setTag: (tag: string) => void;
};

function TagFilter({ value, setTag }: TagFilterProps) {
  const { data: tags, isLoading, isError } = useTags();

  if (isLoading || isError) {
    return null;
  }

  return (
    <div className="mt-4 flex flex-wrap items-center gap-2">
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
          font-medium
          transition-all
          ${
            value === ""
              ? "border-[#ef3340] bg-[#ef3340] text-white shadow-[0_3px_10px_rgba(239,51,64,0.14)]"
              : "border-white/10 bg-white/[0.04] text-muted-foreground hover:border-white/15 hover:bg-white/[0.08] hover:text-foreground"
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
         font-medium
         transition-all
         ${ value === tag
          ? "border-[#ef3340] bg-[#ef3340] text-white shadow-[0_3px_10px_rgba(239,51,64,0.14)]"
          : "border-white/10 bg-white/[0.04] text-muted-foreground hover:border-white/15 hover:bg-white/[0.08] hover:text-foreground"
      }
    `}
        >
          #{tag}
        </button>
      ))}
    </div>
  );
}

export default TagFilter;
