import { useHeader } from "@/context/header/useheader";
import { cn, colors } from "@/lib/utils";
import { XMarkIcon } from "../icons/heroicons-x-mark";
import { Link } from "react-router";

export default function ProductNav() {
  const { dispatch, menuOpen } = useHeader();

  return (
    <div
      className={cn(
        "absolute z-40 flex h-screen w-full flex-col bg-white px-4 py-2 transition-all duration-300 ease-out",
        menuOpen ? "translate-x-0" : "translate-x-full",
      )}
    >
      <button
        onClick={() => dispatch({ type: "menuToggle" })}
        className="self-end py-4"
      >
        <XMarkIcon />
      </button>

      <div className="flex-1 overflow-scroll">
        <ul className="h-screen space-y-4 overflow-scroll text-center uppercase">
          {colors.map((color) => (
            <li key={color}>
              <Link to={`/color/${color.toLowerCase().replace(" ", "-")}`}>
                {color}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
