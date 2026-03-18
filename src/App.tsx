import { BrowserRouter, Route, Routes } from "react-router";
import Applayout from "./components/ui/applayout";
import Homepage from "./pages/homepage";
import Variant from "./pages/variant";
import Product from "./pages/product";
import Login from "./components/ui/login";
import Cart from "./pages/cart";
import Products from "./pages/products";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Applayout />}>
          <Route index element={<Homepage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/search" element={<Homepage />} />
          <Route path="/member" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/variant/:slug" element={<Variant />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
