import { useHeader } from "@/context/header/useheader";
import { cn, colors } from "@/lib/utils";
import { XMarkIcon } from "../icons/heroicons-x-mark";
import { Link } from "react-router";
import { Button } from "@/button";
import { ChevronRightIcon } from "../icons/heroicons-chevron-right";

export default function ProductNav() {
  const { dispatch, menuOpen } = useHeader();

  return (
    <div
      className={cn(
        "fixed inset-0 z-100 flex flex-col bg-white transition-transform duration-300 ease-out",
        menuOpen ? "translate-x-0" : "translate-x-full",
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-neutral-100 px-4 py-3 sm:px-6">
        <span className="text-xs font-semibold tracking-widest text-neutral-400 uppercase">
          Menu
        </span>
        <Button
          size="icon"
          variant="ghost"
          onClick={() => dispatch({ type: "menuToggle" })}
        >
          <XMarkIcon />
        </Button>
      </div>

      {/* Nav Links */}
      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
        <ul className="space-y-1">
          {colors.map((color) => (
            <li key={color}>
              <Link
                to={`/color/${color.toLowerCase().replace(" ", "-")}`}
                onClick={() => dispatch({ type: "menuToggle" })}
                className="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium tracking-widest text-neutral-800 uppercase transition-colors hover:bg-neutral-100 active:bg-neutral-200 sm:py-4"
              >
                <span>{color}</span>
                <ChevronRightIcon className="h-4 w-4 text-neutral-400" />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer */}
      <div className="border-t border-neutral-100 px-4 py-4 sm:px-6">
        <p className="text-center text-xs tracking-widest text-neutral-300 uppercase">
          Explore Collection
        </p>
      </div>
    </div>
  );
}
