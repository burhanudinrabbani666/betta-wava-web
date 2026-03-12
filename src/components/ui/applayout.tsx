import { Outlet } from "react-router";
import Header from "./header";
import { useHeader } from "@/context/header/useheader";
import Search from "./search";
import ProductNav from "./product-nav";

export default function Applayout() {
  const { searchOpen, menuOpen } = useHeader();

  return (
    <div className="relative h-screen overflow-x-hidden text-sm">
      <Search />
      <ProductNav />
      <>
        <Header />
        <main>
          <Outlet />
        </main>
      </>
    </div>
  );
}
