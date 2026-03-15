import { Outlet } from "react-router";
import Header from "./header";
import Search from "./search";
import ProductNav from "./product-nav";

export default function Applayout() {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-sm">
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
