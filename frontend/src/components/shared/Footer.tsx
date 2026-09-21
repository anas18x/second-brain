function Footer() {
  return (
    <footer className="border-t border-border/60 bg-transparent">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        {/* Brand / Tagline */}
        <div>
          <p className="text-sm font-medium text-muted-foreground">
            A better way to remember.
          </p>

          <p className="mt-1 text-sm font-semibold text-foreground">
            Second Brain
          </p>
        </div>

        {/* Links */}
        <div className="flex items-center gap-5 text-sm font-medium text-muted-foreground">
          <a
            href="https://github.com/anas18x/second-brain"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            GitHub
          </a>

          <a
            href="#"
            className="transition-colors hover:text-foreground"
          >
            Twitter
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mx-auto max-w-6xl border-t border-border/50 px-6 py-4">
        <p className="text-xs font-medium text-muted-foreground">
          © 2026 Second Brain. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer