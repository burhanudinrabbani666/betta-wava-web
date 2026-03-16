import { createContext } from "react";
import type { ActionType } from "./header-provider";
import type { ProductsSchema } from "@/module/schema";

type HeaderContextType = {
  searchOpen: boolean;
  menuOpen: boolean;
  dispatch: React.Dispatch<ActionType>;
  products: ProductsSchema;
};

export const HeaderContext = createContext<HeaderContextType | null>(null);
