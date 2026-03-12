import { useContext } from "react";
import { HeaderContext } from "./header-context";

export function useHeader() {
  const context = useContext(HeaderContext);

  if (context === undefined)
    throw new Error("QuizContext is use outside QuizProvider");

  return context;
}
