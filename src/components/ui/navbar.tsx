import { NavLink } from "react-router";
import { MagnifyingGlassIcon } from "../icons/heroicons-magnifying-glass";
import { UserIcon } from "../icons/heroicons-user";
import { ShoppingBagIcon } from "../icons/heroicons-shopping-bag";
import { Bars3Icon } from "../icons/heroicons-bars-3";
import { useHeader } from "@/context/header/useheader";
import { Button } from "@/button";

export default function Navbar() {
  const { dispatch } = useHeader();

  return (
    <ul className="flex items-center">
      <li>
        <Button
          className="px-4 py-2"
          variant="ghost"
          onClick={() => dispatch({ type: "searchToggle" })}
        >
          <MagnifyingGlassIcon />
        </Button>
      </li>

      <NavLink to={"/member"}>
        <Button className="px-4 py-2" variant="ghost">
          <UserIcon />
        </Button>
      </NavLink>

      <NavLink to={"/cart"}>
        <Button className="px-4 py-2" variant="ghost">
          <ShoppingBagIcon />
        </Button>
      </NavLink>

      <li>
        <Button
          className="px-4 py-2"
          variant="ghost"
          onClick={() => dispatch({ type: "menuToggle" })}
        >
          <Bars3Icon />
        </Button>
      </li>
    </ul>
  );
}
