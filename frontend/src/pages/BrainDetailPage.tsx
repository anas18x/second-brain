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
    // API integration will come here later.
    setIsEditing(false)
  }

  return (
    <div className="relative min-h-screen w-full">

      {/* Dashed Bottom Right Fade Grid */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e7e5e4 1px, transparent 1px),
            linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 0 0",
          maskImage: `
            repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(
              ellipse 80% 80% at 100% 100%,
              #000 50%,
              transparent 90%
            )
          `,
          WebkitMaskImage: `
            repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(
              ellipse 80% 80% at 100% 100%,
              #000 50%,
              transparent 90%
            )
          `,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />

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
                text-slate-600
                transition-colors
                duration-200
                hover:text-slate-950
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
                    text-slate-500
                    transition-all
                    duration-200
                    hover:bg-white/70
                    hover:text-slate-800
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
                  text-slate-950
                  outline-none
                  placeholder:text-slate-400
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
                    text-slate-600
                    outline-none
                    placeholder:text-slate-400
                  "
                  placeholder="ideas, productivity, habits"
                />

                <p className="mt-1.5 text-[10px] font-medium text-slate-500">
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
                    text-slate-500
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
                    border-slate-200
                    bg-white/70
                    px-3
                    text-xs
                    font-medium
                    text-slate-700
                    outline-none
                    transition-all
                    focus:border-slate-400
                    focus:bg-white
                    focus:ring-2
                    focus:ring-slate-950/10
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
                    text-slate-500
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
                    border-slate-200
                    bg-white/70
                    px-3
                    py-3
                    text-sm
                    font-medium
                    leading-7
                    text-slate-700
                    outline-none
                    transition-all
                    focus:border-slate-400
                    focus:bg-white
                    focus:ring-2
                    focus:ring-slate-950/10
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
                    border-slate-300
                    bg-white/70
                    px-3
                    py-2
                    font-['Space_Grotesk']
                    text-xs
                    font-semibold
                    text-slate-600
                    transition-all
                    hover:border-slate-400
                    hover:bg-white
                    hover:text-slate-900
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
                    bg-slate-950
                    px-3.5
                    py-2
                    font-['Space_Grotesk']
                    text-xs
                    font-semibold
                    text-white
                    shadow-[0_3px_10px_rgba(15,23,42,0.12)]
                    transition-all
                    hover:-translate-y-0.5
                    hover:bg-slate-800
                    active:translate-y-0
                  "
                >
                  <Save className="size-3.5" />
                  Save Changes
                </button>

              </div>
            </div>
          ) : (

            /* ========================= */
            /* VIEW MODE                  */
            /* ========================= */

            <>
              {/* Header */}
              <header className="mt-12">

                <h1
                  className="
                    max-w-4xl
                    text-3xl
                    font-semibold
                    leading-tight
                    tracking-[-0.025em]
                    text-slate-950
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
                        bg-white/70
                        px-2.5
                        py-1
                        text-[10px]
                        font-medium
                        text-slate-600
                        shadow-[0_1px_3px_rgba(15,23,42,0.04)]
                      "
                    >
                      #{tag}
                    </span>
                  ))}

                  <span className="mx-1 text-sm text-slate-400">
                    /
                  </span>

                  <span className="text-[10px] font-medium text-slate-500">
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
                    border-slate-200/90
                    bg-white/75
                    px-4
                    py-3
                    shadow-[0_3px_12px_rgba(15,23,42,0.04)]
                    backdrop-blur-sm
                    transition-all
                    duration-200
                    hover:border-slate-300
                    hover:bg-white
                    hover:shadow-[0_8px_22px_rgba(15,23,42,0.07)]
                  "
                >
                  <img
                    src={`https://www.google.com/s2/favicons?domain=${getDomain()}&sz=64`}
                    alt=""
                    className="size-7 shrink-0 rounded-md"
                  />

                  <div className="min-w-0 flex-1">

                    <p className="text-xs font-semibold text-slate-800">
                      {getDomain()}
                    </p>

                    <p className="mt-0.5 truncate text-[10px] font-medium text-slate-500">
                      {getUrlWithoutProtocol()}
                    </p>

                  </div>

                  <ExternalLink
                    className="
                      size-4
                      shrink-0
                      text-slate-400
                      transition-colors
                      group-hover:text-slate-700
                    "
                  />
                </a>
              )}

              {/* Divider */}
              <div className="mt-9 h-px w-full bg-slate-300/70" />

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
                      text-slate-700
                      sm:text-[15px]
                    "
                  >
                    {body}
                  </p>
                ) : (
                  <p className="text-sm font-medium text-slate-500">
                    No note added.
                  </p>
                )}

              </section>

              {/* Bottom Divider */}
              <div className="h-px w-full bg-slate-300/70" />

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
                  text-slate-600
                  transition-colors
                  hover:text-slate-950
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