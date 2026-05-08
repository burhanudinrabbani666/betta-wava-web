import { useCookies } from "react-cookie";
import type { CookiesValues } from "./type";

export function useAuth() {
  const [cookies, setCookies] = useCookies<"token", CookiesValues>([]);

  function setToken(token: string) {
    setCookies("token", token);
  }

  return {
    token: cookies,
    setToken,
  };
}
