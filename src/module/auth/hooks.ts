import { useCookies } from "react-cookie";
import type { CookiesValues } from "./type";
import { $api } from "../common/api";

export function useAuth() {
  const [cookies, setCookies] = useCookies<"token", CookiesValues>([]);

  function setToken(token: string) {
    setCookies("token", token);
  }

  return {
    token: cookies.token,
    setToken,
  };
}

export function useUser() {
  const { token } = useAuth();

  const {
    data: user,
    isPending,
    error,
  } = $api.useQuery("get", "/auth/me", {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!user || error) {
    return {
      isAuthenticated: false,
      user,
      isPending,
      error,
    };
  }

  return {
    isAuthenticated: true,
    user,
    isPending,
    error,
  };
}
