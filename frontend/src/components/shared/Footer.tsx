function Footer() {
  return (
    <footer className="border-t border-slate-400/60 bg-white/20 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
        {/* Brand / Tagline */}
        <div>
          <p className="text-sm font-medium text-slate-700">
            A better way to remember.
          </p>

          <p className="mt-1 text-sm font-semibold text-slate-950">
            Second Brain
          </p>
        </div>

        {/* Links */}
        <div className="flex items-center gap-5 text-sm font-medium text-slate-700">
          <a
            href="https://github.com/anas18x/second-brain"
            className="transition-colors hover:text-slate-950"
          >
            GitHub
          </a>

          <a
            href="#"
            className="transition-colors hover:text-slate-950"
          >
            Twitter
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mx-auto max-w-6xl border-t border-slate-300/50 px-6 py-4">
        <p className="text-xs font-medium text-slate-600">
          © 2026 Second Brain. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer