import { NavLink } from "react-router";
import { MagnifyingGlassIcon } from "../icons/heroicons-magnifying-glass";
import { UserIcon } from "../icons/heroicons-user";
import { ShoppingBagIcon } from "../icons/heroicons-shopping-bag";
import { Bars3Icon } from "../icons/heroicons-bars-3";
import { useHeader } from "@/context/header/useheader";

export default function Navbar() {
  const { dispatch } = useHeader();

  return (
    <ul className="flex items-center">
      <li className="px-4 py-2">
        <button onClick={() => dispatch({ type: "searchToggle" })}>
          <MagnifyingGlassIcon />
        </button>
      </li>

      <NavLink to={"/member"} className="px-4 py-2">
        <button>
          <UserIcon />
        </button>
      </NavLink>

      <NavLink to={"/cart"} className="px-4 py-2">
        <button>
          <ShoppingBagIcon />
        </button>
      </NavLink>

      <li className="px-4 py-2">
        <button onClick={() => dispatch({ type: "menuToggle" })}>
          <Bars3Icon />
        </button>
      </li>
    </ul>
  );
}
