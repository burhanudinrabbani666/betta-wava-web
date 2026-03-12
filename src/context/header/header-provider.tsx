import { useReducer } from "react";
import { HeaderContext } from "./header-context";

type IntialStateType = {
  searchOpen: boolean;
  menuOpen: boolean;
};

export type ActionType = {
  type: string;
  payload?: string;
};

const intialState: IntialStateType = {
  searchOpen: false,
  menuOpen: false,
};

function reducer(state: IntialStateType, action: ActionType) {
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
