import { NavLink } from "react-router";
import { MagnifyingGlassIcon } from "../icons/heroicons-magnifying-glass";
import { UserIcon } from "../icons/heroicons-user";
import { ShoppingBagIcon } from "../icons/heroicons-shopping-bag";
import { Bars3Icon } from "../icons/heroicons-bars-3";

export default function Navbar() {
  return (
    <ul className="flex items-center">
      <li className="px-4 py-2">
        <button>
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
        <button>
          <Bars3Icon />
        </button>
      </li>
    </ul>
  );
}
