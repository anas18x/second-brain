import { Link } from "react-router-dom"

import logo from "@/assets/brain-cognative.svg"

function Brand() {
  return (
    <Link
      to="/"
      className="flex items-center gap-2.5 overflow-hidden"
    >
      <img
        src={logo}
        alt="Second Brain"
        className="size-5 shrink-0 object-contain dark:invert"
      />

      <span
        className="
          whitespace-nowrap
          font-brand
          text-xl
          font-semibold
          leading-none
          tracking-tight
          text-foreground
          group-data-[collapsible=icon]:hidden
        "
      >
        Second Brain
      </span>
    </Link>
  )
}

export default Brand