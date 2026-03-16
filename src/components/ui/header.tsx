import { useLocation } from "react-router";
import Logo from "./logo";
import Navbar from "./navbar";
import { cn } from "@/lib/utils";

export default function Header() {
  const path = useLocation();

  return (
    <div
      className={cn(
        "absolute flex w-full items-center justify-between px-4 py-2 text-white",
        path.pathname !== "/"
          ? "sticky text-inherit backdrop-blur-sm"
          : "top-0 z-10",
      )}
    >
      <Logo />
      <Navbar />
    </div>
  );
}
