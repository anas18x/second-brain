import { Link } from "react-router-dom"

import logo from "@/assets/brain-cognative.svg"

function Brand() {
  return (
    <Link
      to="/"
      className="flex w-fit items-center gap-2.5"
    >
      <img
        src={logo}
        alt="Second Brain"
        className="size-6 object-contain"
      />

      <span className="text-base font-semibold tracking-tight text-slate-950">
        Second Brain
      </span>
    </Link>
  )
}

export default Brand