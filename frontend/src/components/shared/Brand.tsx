import { Link } from "react-router-dom"

import logo from "@/assets/brain-cognative.svg"

function Brand() {
  return (
    <Link
      to="/"
      className="
        flex
        w-full
        items-center
        gap-2.5
        overflow-hidden
      "
    >
      <img
        src={logo}
        alt="Second Brain"
        className="size-5 shrink-0 object-contain"
      />

      <span
        className="
          whitespace-nowrap
          text-base
          font-semibold
          tracking-tight
          text-white
          group-data-[collapsible=icon]:hidden
        "
      >
        Second Brain
      </span>
    </Link>
  )
}

export default Brand