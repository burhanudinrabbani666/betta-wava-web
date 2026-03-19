import { useReducer } from "react";
import { HeaderContext } from "./header-context";
import type { ActionType, IntialStateType } from "../schema";



const intialState: IntialStateType = {
  searchOpen: false,
  menuOpen: false,
  products: [],
  cartTemp: undefined,
};

function reducer(state: IntialStateType, action: ActionType): IntialStateType {
  switch (action.type) {
    case "searchToggle":
      return { ...state, searchOpen: !state.searchOpen };

    case "menuToggle":
      return { ...state, menuOpen: !state.menuOpen };

    case "products":
      return { ...state, products: action.payload ?? [] };

    case "cart": {
      const existing = state.cartTemp?.products ?? [];
      const alreadyIn = existing.find(
        (product) => product.id === action.payload.id,
      );

      const updatedProducts = alreadyIn
        ? existing.map((p) =>
            p.id === action.payload.id
              ? { ...p, quantity: p.quantity + action.payload.quantity }
              : p,
          )
        : [...existing, action.payload];

      const totalPrice = updatedProducts.reduce(
        (acc, curr) => acc + curr.price * curr.quantity,
        0,
      );

      return { ...state, cartTemp: { products: updatedProducts, totalPrice } };
    }

    default:
      throw new Error("Unknown Action");
  }
}

export function HeaderProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, intialState);
  const { searchOpen, menuOpen, products, cartTemp } = state;

  return (
    <HeaderContext.Provider
      value={{ searchOpen, menuOpen, dispatch, products, cartTemp }}
    >
      {children}
    </HeaderContext.Provider>
  );
}
