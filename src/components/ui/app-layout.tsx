import { Outlet } from "react-router";
import Nav from "./navigation";
import Header from "./header";

function AppLayout() {
  return (
    <div className="flex max-h-screen flex-col justify-between">
      <Header />
      <main className="flex-1 overflow-scroll">
        <Outlet />
      </main>
      <Nav />
    </div>
  );
}

export default AppLayout;
