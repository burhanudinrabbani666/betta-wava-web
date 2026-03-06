import { BrowserRouter, Route, Routes } from "react-router";
import AppLayout from "./components/ui/app-layout";
import Dashboard from "./components/ui/dashboard";
import Product from "./components/ui/product";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/product" element={<Product />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
