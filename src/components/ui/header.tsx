import Logo from "./logo";
import Navbar from "./navbar";

export default function Header() {
  return (
    <div className="absolute top-0 z-10 w-full">
      <div className="flex items-center justify-between px-4 py-2 text-white">
        <Logo />
        <Navbar />
      </div>
    </div>
  );
}
