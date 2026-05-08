import { NavLink } from "react-router";
import { MagnifyingGlassIcon } from "../icons/heroicons-magnifying-glass";
import { UserIcon } from "../icons/heroicons-user";
import { ShoppingBagIcon } from "../icons/heroicons-shopping-bag";
import { Bars3Icon } from "../icons/heroicons-bars-3";
import { useHeader } from "@/context/header/useheader";
import { Button } from "@/button";
import { useAuth } from "@/module/auth/hooks";

export default function Navbar() {
  const { dispatch } = useHeader();
  const { cookies } = useAuth();

  console.log(cookies.token);

  return (
    <ul className="flex items-center">
      <li>
        <Button
          variant="ghost"
          onClick={() => dispatch({ type: "searchToggle" })}
        >
          <MagnifyingGlassIcon />
        </Button>
      </li>

      <NavLink to={cookies.token ? "/dashboard" : "/login"}>
        <Button variant="ghost">
          <UserIcon />
        </Button>
      </NavLink>

      <NavLink to={"/cart"}>
        <Button variant="ghost">
          <ShoppingBagIcon />
        </Button>
      </NavLink>

      <li>
        <Button
          variant="ghost"
          onClick={() => dispatch({ type: "menuToggle" })}
        >
          <Bars3Icon />
        </Button>
      </li>
    </ul>
  );
}
