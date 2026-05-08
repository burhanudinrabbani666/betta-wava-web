import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { HeaderProvider } from "./context/header/header-provider.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CookiesProvider } from "react-cookie";

const queryCLient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HeaderProvider>
      <CookiesProvider defaultSetOptions={{ path: "/" }}>
        <QueryClientProvider client={queryCLient}>
          <App />
        </QueryClientProvider>
      </CookiesProvider>
    </HeaderProvider>
  </StrictMode>,
);
