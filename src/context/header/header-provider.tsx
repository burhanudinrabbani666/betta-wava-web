import { useReducer } from "react";
import { HeaderContext } from "./header-context";
import type { ActionType, IntialStateType } from "../schema";

const intialState: IntialStateType = {
  searchOpen: false,
  menuOpen: false,
};

function reducer(state: IntialStateType, action: ActionType): IntialStateType {
  switch (action.type) {
    case "searchToggle":
      return { ...state, searchOpen: !state.searchOpen };

    case "menuToggle":
      return { ...state, menuOpen: !state.menuOpen };

    default:
      throw new Error("Unknown Action");
  }
}

export function HeaderProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, intialState);
  const { searchOpen, menuOpen } = state;

  return (
    <HeaderContext.Provider value={{ searchOpen, menuOpen, dispatch }}>
      {children}
    </HeaderContext.Provider>
  );
}
