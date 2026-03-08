import { BrowserRouter, Route, Routes } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import AppLayout from "./components/ui/app-layout";
import Product from "./components/ui/product";
import Dashboard from "./pages/dashboard";
import Review from "./pages/review";
import Transaction from "./pages/transaction";
import Account from "./pages/account";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/review" element={<Review />} />
            <Route path="/transaction" element={<Transaction />} />
            <Route path="/account" element={<Account />} />
          </Route>
          <Route path="/cart" element={<Product />} />
          <Route path="/chat" element={<Product />} />
          <Route path="/product/:productId"></Route>
          <Route path="/checkout"></Route>
          <Route path="/place-order"></Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
