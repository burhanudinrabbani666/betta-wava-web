import { createContext } from "react";
import type { ActionType } from "../schema";

type HeaderContextType = {
  searchOpen: boolean;
  menuOpen: boolean;
  dispatch: React.Dispatch<ActionType>;
};

export const HeaderContext = createContext<HeaderContextType | null>(null);
