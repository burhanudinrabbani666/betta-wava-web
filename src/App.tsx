import { BrowserRouter, Route, Routes } from "react-router";
import Applayout from "./components/ui/applayout";
import Homepage from "./pages/homepage";
import Variant from "./pages/variant";
import Product from "./pages/product";
import Cart from "./pages/cart";
import Products from "./pages/products";
import Register from "./pages/register";
import Login from "./components/ui/login";
import { Dashboard } from "./pages/dashboard";

/*
  TODO:
  - Create Protected Route for:
    - Dashboard
    - Product
    - Cart
    - Account

  - Create Search Logic

*/

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Applayout />}>
          <Route index element={<Homepage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/product/:slug" element={<Product />} />
          <Route path="/variant/:slug" element={<Variant />} />
          {/* <Route path="/search" element={<Homepage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
