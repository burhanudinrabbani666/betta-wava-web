import { useLocation } from "react-router";
import Logo from "./logo";
import Navbar from "./navbar";
import { cn } from "@/lib/utils";

export default function Header() {
  const path = useLocation();
  const isHome = path.pathname === "/";

  return (
    <div
      className={cn(
        "flex w-full items-center justify-between px-4 py-2",
        isHome
          ? "absolute top-0 z-10 text-white"
          : "sticky top-0 z-50 border-b border-neutral-100 bg-white/80 text-inherit backdrop-blur-sm",
      )}
    >
      <Logo />
      <Navbar />
    </div>
  );
}
