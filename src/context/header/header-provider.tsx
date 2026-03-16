import type { ProductsSchema } from "@/module/schema";

import { useReducer } from "react";
import { HeaderContext } from "./header-context";

type IntialStateType = {
  searchOpen: boolean;
  menuOpen: boolean;
  products: ProductsSchema | undefined;
};

export type ActionType =
  | { type: "searchToggle" }
  | { type: "menuToggle" }
  | { type: "products"; payload: ProductsSchema | undefined };

const intialState: IntialStateType = {
  searchOpen: false,
  menuOpen: false,
  products: [],
};

function reducer(state: IntialStateType, action: ActionType) {
  switch (action.type) {
    case "searchToggle":
      return { ...state, searchOpen: !state.searchOpen };

    case "menuToggle":
      return { ...state, menuOpen: !state.menuOpen };

    case "products":
      return { ...state, products: action.payload ?? [] };

    default:
      throw new Error("Unknown Action");
  }
}

export function HeaderProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, intialState);
  const { searchOpen, menuOpen, products } = state;

  return (
    <HeaderContext.Provider
      value={{ searchOpen, menuOpen, dispatch, products }}
    >
      {children}
    </HeaderContext.Provider>
  );
}
