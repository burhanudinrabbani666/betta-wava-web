import { Outlet } from "react-router";
import Nav from "./navigation";
import Header from "./header";

function AppLayout() {
  return (
    <div className="flex h-screen flex-col justify-between">
      <Header />
      <main className="flex-1 border-2 border-amber-800">
        <Outlet />
      </main>
      <Nav />
    </div>
  );
}

export default AppLayout;
