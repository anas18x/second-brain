function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-muted-foreground">
            A better way to remember.
          </p>

          <p className="mt-1 text-sm font-medium">
            Second Brain
          </p>
        </div>

        <div className="flex items-center gap-5 text-sm text-muted-foreground">
          <a
            href="#"
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

      <div className="mx-auto max-w-6xl px-6 pb-4">
        <p className="text-xs text-muted-foreground">
          © 2026 Second Brain. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer