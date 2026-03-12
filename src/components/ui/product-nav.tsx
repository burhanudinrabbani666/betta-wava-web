import { useHeader } from "@/context/header/useheader";
import { cn } from "@/lib/utils";

export default function ProductNav() {
  const { dispatch, menuOpen } = useHeader();

  return (
    <div
      className={cn(
        "absolute z-40 min-h-full w-full bg-amber-400 transition-all duration-300 ease-out",
        menuOpen ? "translate-x-0" : "translate-x-full",
      )}
    >
      <button onClick={() => dispatch({ type: "menuToggle" })}>Back</button>
    </div>
  );
}
