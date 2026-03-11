import { NavLink } from "react-router";
import { MagnifyingGlassIcon } from "../icons/heroicons-magnifying-glass";
import { UserIcon } from "../icons/heroicons-user";
import { ShoppingBagIcon } from "../icons/heroicons-shopping-bag";
import { Bars3Icon } from "../icons/heroicons-bars-3";

export default function Navbar() {
  return (
    <ul className="flex items-center gap-8">
      <li>
        <button>
          <MagnifyingGlassIcon />
        </button>
      </li>

      <NavLink to={"/member"}>
        <button>
          <UserIcon />
        </button>
      </NavLink>

      <NavLink to={"/cart"}>
        <button>
          <ShoppingBagIcon />
        </button>
      </NavLink>

      <li>
        <button>
          <Bars3Icon />
        </button>
      </li>
    </ul>
  );
}
