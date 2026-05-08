import { useCookies } from "react-cookie";
import type { CookiesValues } from "./type";
import { $api } from "../common/api";

export function useAuth() {
  const [cookies, setCookies] = useCookies<"token", CookiesValues>([]);

  function setToken(token: string) {
    setCookies("token", token);
  }

  return {
    cookies,
    setToken,
  };
}

export function useUser() {
  const { cookies } = useAuth();

  if (!cookies.token) {
    return {
      isAuthenticated: false,
    };
  }

  const {
    data: user,
    isPending,
    error,
  } = $api.useQuery("get", "/auth/me", {
    headers: { Authorization: `Bearer ${cookies.token}` },
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
