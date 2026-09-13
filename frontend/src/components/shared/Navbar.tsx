import { Sun } from "lucide-react";

import { Button } from "@/components/ui/button";

import Brand from "@/components/shared/Brand";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 sm:py-5">
      {/* Brand */}
      <Brand />

      {/* Actions */}
      <div className="flex items-center gap-1 sm:gap-2">
        {/* Theme */}
        <Sun className="hidden size-3.5 text-foreground/75 sm:block sm:size-4" />

        {/* Sign In */}
        <Link to="/login">
          <Button
            variant="ghost"
            className="
              h-8
              cursor-pointer
              px-2
              text-[11px]
              text-foreground/75
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-accent
              hover:text-foreground
              hover:shadow-[0_8px_20px_rgba(0,0,0,0.25)]
              active:translate-y-0
              active:shadow-none
              sm:h-9
              sm:px-3
              sm:text-sm
            "
          >
            Sign In
          </Button>
        </Link>

        {/* Get Started */}
        <Link to="/register">
          <Button
            className="
              h-8
              cursor-pointer
              border
              border-[#ef3340]
              bg-[#ef3340]
              px-2.5
              text-[11px]
              text-white
              shadow-[0_4px_12px_rgba(239,51,64,0.2)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#ef3340]/90
              hover:shadow-[0_10px_25px_rgba(239,51,64,0.3)]
              active:translate-y-0
              active:shadow-[0_4px_10px_rgba(239,51,64,0.2)]
              sm:h-9
              sm:px-4
              sm:text-sm
            "
          >
            Get Started
          </Button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;