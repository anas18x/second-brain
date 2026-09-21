import { Link } from "react-router-dom"

import logo from "@/assets/brain-cognative.svg"

function Brand() {
  return (
    <Link
      to="/"
      className="flex items-center gap-2 overflow-hidden"
    >
      <img
        src={logo}
        alt="Second Brain"
        className="size-5 shrink-0 object-contain dark:invert"
      />

    <span
  className="
    font-brand text-lg font-medium tracking-[-0.02em]
  "
>
  Second Brain
</span>

    </Link>
  )
}

export default Brand