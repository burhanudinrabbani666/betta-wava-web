import { BrowserRouter, Route, Routes } from "react-router";
import Applayout from "./components/ui/applayout";
import Homepage from "./pages/homepage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Applayout />}>
          <Route index element={<Homepage />} />
          <Route path="/search" element={<Homepage />} />
          <Route path="/member" element={<Homepage />} />
          <Route path="/cart" element={<Homepage />} />
          <Route path="/:productId" element={<Homepage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
