import Logo from "./logo";
import Navbar from "./navbar";

export default function Header() {
  return (
    <div className="absolute top-0 z-10 w-full">
      <div className="flex items-center justify-between px-8 py-4 text-white">
        <Logo />
        <Navbar />
      </div>
      <div className=""></div>
    </div>
  );
}
