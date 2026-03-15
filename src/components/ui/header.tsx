import { useLocation } from "react-router";
import Logo from "./logo";
import Navbar from "./navbar";
import { cn } from "@/lib/utils";

export default function Header() {
  const path = useLocation();

  return (
    <div
      className={cn(
        "flex w-full items-center justify-between px-4 py-2 text-white",
        path.pathname !== "/"
          ? "text-inherit backdrop-blur-md"
          : "absolute top-0 z-10",
      )}
    >
      <Logo />
      <Navbar />
    </div>
  );
}
