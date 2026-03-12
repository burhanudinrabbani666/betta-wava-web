import { Outlet } from "react-router";
import Header from "./header";
import { useHeader } from "@/context/header/useheader";
import Search from "./search";

export default function Applayout() {
  const { dispatch, searchOpen, menuOpen } = useHeader();

  return (
    <div className="relative h-screen">
      {searchOpen && <Search />}
      {!searchOpen && !menuOpen && (
        <>
          <Header />
          <main>
            <Outlet />
          </main>
        </>
      )}
    </div>
  );
}
