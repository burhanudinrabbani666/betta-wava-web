import { Outlet } from "react-router";
import Header from "./header";
import { useHeader } from "@/context/header/useheader";

export default function Applayout() {
  const { dispatch, searchOpen, menuOpen } = useHeader();

  return (
    <div className="relative h-screen">
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
