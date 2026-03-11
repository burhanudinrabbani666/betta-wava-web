import { Outlet } from "react-router";
import Header from "./header";

export default function Applayout() {
  return (
    <div className="relative h-screen">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
