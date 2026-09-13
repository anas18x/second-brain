import {
  ArrowLeft,
  ExternalLink,
  Pencil,
  Save,
  X,
} from "lucide-react"

import { useEffect, useRef, useState } from "react"

import { useNavigate } from "react-router-dom"

import DeleteBrainDialog from "@/components/dashboard/DeleteBrainDialog"

function BrainDetailPage() {
  const navigate = useNavigate()

  const [isEditing, setIsEditing] = useState(false)

  const [title, setTitle] = useState(
    "How to build better habits",
  )

  const [body, setBody] = useState(
    "A useful article about building habits that actually stick. The main idea is to focus on making the habit easy to start rather than relying entirely on motivation.",
  )

  const [url, setUrl] = useState(
    "https://jamesclear.com/atomic-habits",
  )

  const [tags, setTags] = useState(
    "ideas, productivity, habits",
  )

  const titleInputRef = useRef<HTMLInputElement>(null)

  const createdAt = "Sep 6, 2026"

  useEffect(() => {
    if (isEditing) {
      titleInputRef.current?.focus()
    }
  }, [isEditing])

  const getDomain = () => {
    if (!url) return ""

    try {
      return new URL(url).hostname.replace("www.", "")
    } catch {
      return url
    }
  }

  const getUrlWithoutProtocol = () => {
    if (!url) return ""

    return url.replace(/^https?:\/\//, "")
  }

  const tagList = tags
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean)

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleCancel = () => {
    setTitle("How to build better habits")

    setBody(
      "A useful article about building habits that actually stick. The main idea is to focus on making the habit easy to start rather than relying entirely on motivation.",
    )

    setUrl("https://jamesclear.com/atomic-habits")

    setTags("ideas, productivity, habits")

    setIsEditing(false)
  }

  const handleSave = () => {
    /* API integration will come here later. */
    setIsEditing(false)
  }

  return (
    <div className="relative min-h-screen w-full">
      {/* Page Content */}
      <main className="relative z-10 min-h-screen px-6 py-6 sm:px-8 lg:px-10">
        <div className="mx-auto w-full max-w-5xl">
          {/* Top Navigation */}
          <div className="flex items-center justify-between">
            {/* Back */}
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

            {/* Actions */}
            {!isEditing && (
              <div className="flex items-center gap-1">
                {/* Edit */}
                <button
                  type="button"
                  onClick={handleEdit}
                  title="Edit brain"
                  className="
                    flex
                    size-8
                    cursor-pointer
                    items-center
                    justify-center
                    rounded-md
                    text-muted-foreground
                    transition-all
                    duration-200
                    hover:bg-white/[0.06]
                    hover:text-foreground
                  "
                >
                  <Pencil className="size-4" />
                </button>

                {/* Delete */}
                <DeleteBrainDialog />
              </div>
            )}
          </div>

          {/* ========================= */}
          {/* EDIT MODE                  */}
          {/* ========================= */}
          {isEditing ? (
            <div className="mt-12">
              {/* Title */}
              <input
                ref={titleInputRef}
                value={title}
                onChange={(event) =>
                  setTitle(event.target.value)
                }
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
                  value={tags}
                  onChange={(event) =>
                    setTags(event.target.value)
                  }
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
                <p className="mt-1.5 text-[10px] font-medium text-muted-foreground/60">
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
                  value={url}
                  onChange={(event) =>
                    setUrl(event.target.value)
                  }
                  className="
                    h-11
                    w-full
                    rounded-lg
                    border
                    border-white/10
                    bg-white/[0.04]
                    px-3
                    text-xs
                    font-medium
                    text-foreground
                    outline-none
                    transition-all
                    placeholder:text-muted-foreground/50
                    focus:border-[#ef3340]/40
                    focus:bg-white/[0.06]
                    focus:ring-2
                    focus:ring-[#ef3340]/15
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
                  value={body}
                  onChange={(event) =>
                    setBody(event.target.value)
                  }
                  rows={8}
                  className="
                    w-full
                    resize-none
                    rounded-lg
                    border
                    border-white/10
                    bg-white/[0.04]
                    px-3
                    py-3
                    text-sm
                    font-medium
                    leading-7
                    text-foreground
                    outline-none
                    transition-all
                    placeholder:text-muted-foreground/50
                    focus:border-[#ef3340]/40
                    focus:bg-white/[0.06]
                    focus:ring-2
                    focus:ring-[#ef3340]/15
                  "
                  placeholder="Add a note..."
                />
              </div>

              {/* Edit Actions */}
              <div className="mt-7 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="
                    inline-flex
                    cursor-pointer
                    items-center
                    gap-1.5
                    rounded-lg
                    border
                    border-white/10
                    bg-white/[0.04]
                    px-3
                    py-2
                    font-['Space_Grotesk']
                    text-xs
                    font-semibold
                    text-muted-foreground
                    transition-all
                    hover:border-white/15
                    hover:bg-white/[0.08]
                    hover:text-foreground
                  "
                >
                  <X className="size-3.5" />
                  Cancel
                </button>

                <button
                  type="button"
                  onClick={handleSave}
                  className="
                    inline-flex
                    cursor-pointer
                    items-center
                    gap-1.5
                    rounded-lg
                    border
                    border-[#ef3340]
                    bg-[#ef3340]
                    px-3.5
                    py-2
                    font-['Space_Grotesk']
                    text-xs
                    font-semibold
                    text-white
                    shadow-[0_3px_10px_rgba(239,51,64,0.14)]
                    transition-all
                    hover:-translate-y-0.5
                    hover:bg-[#ef3340]/90
                    hover:shadow-[0_7px_18px_rgba(239,51,64,0.22)]
                    active:translate-y-0
                  "
                >
                  <Save className="size-3.5" />
                  Save Changes
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* ========================= */}
              {/* VIEW MODE                  */}
              {/* ========================= */}

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
                  {title}
                </h1>

                {/* Metadata */}
                <div className="mt-5 flex flex-wrap items-center gap-2.5">
                  {tagList.map((tag) => (
                    <span
                      key={tag}
                      className="
                        rounded-full
                        border
                        border-white/10
                        bg-white/[0.04]
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

                  <span className="mx-1 text-sm text-muted-foreground/40">
                    /
                  </span>

                  <span className="text-[10px] font-medium text-muted-foreground/60">
                    Saved {createdAt}
                  </span>
                </div>
              </header>

              {/* External Link */}
              {url && (
                <a
                  href={url}
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
                    border-white/10
                    bg-white/[0.04]
                    px-4
                    py-3
                    shadow-[0_3px_12px_rgba(0,0,0,0.2)]
                    backdrop-blur-sm
                    transition-all
                    duration-200
                    hover:border-white/15
                    hover:bg-white/[0.06]
                    hover:shadow-[0_8px_22px_rgba(0,0,0,0.28)]
                  "
                >
                  <img
                    src={`https://www.google.com/s2/favicons?domain=${getDomain()}&sz=64`}
                    alt=""
                    className="size-7 shrink-0 rounded-md"
                  />

                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold text-foreground">
                      {getDomain()}
                    </p>

                    <p className="mt-0.5 truncate text-[10px] font-medium text-muted-foreground/60">
                      {getUrlWithoutProtocol()}
                    </p>
                  </div>

                  <ExternalLink
                    className="
                      size-4
                      shrink-0
                      text-muted-foreground/50
                      transition-colors
                      group-hover:text-muted-foreground
                    "
                  />
                </a>
              )}

              {/* Divider */}
              <div className="mt-9 h-px w-full bg-white/10" />

              {/* Note */}
              <section className="py-9">
                {body ? (
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
                    {body}
                  </p>
                ) : (
                  <p className="text-sm font-medium text-muted-foreground/60">
                    No note added.
                  </p>
                )}
              </section>

              {/* Bottom Divider */}
              <div className="h-px w-full bg-white/10" />

              {/* Bottom Back */}
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