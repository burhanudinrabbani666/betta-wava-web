import { createContext } from "react";
import type { ProductsSchema } from "@/module/schema";
import type { ActionType, CartTemp } from "../schema";

type HeaderContextType = {
  searchOpen: boolean;
  menuOpen: boolean;
  dispatch: React.Dispatch<ActionType>;
  products: ProductsSchema | undefined;
  cartTemp: CartTemp | undefined;
};

export const HeaderContext = createContext<HeaderContextType | null>(null);
