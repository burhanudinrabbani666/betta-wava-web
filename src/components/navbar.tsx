import { NavLink } from "react-router";
import { SearchIcon } from "./icons/material-symbols-search";
import { Person2OutlineIcon } from "./icons/material-symbols-person-2-outline";
import { ShoppingBagOutlineIcon } from "./icons/material-symbols-shopping-bag-outline";
import { MenuRoundedIcon } from "./icons/material-symbols-menu-rounded";

export default function Navbar() {
  return (
    <ul>
      <li>
        <button>
          <SearchIcon />
        </button>
      </li>

      <NavLink to={"/member"}>
        <button>
          <Person2OutlineIcon />
        </button>
      </NavLink>

      <NavLink to={"/cart"}>
        <button>
          <ShoppingBagOutlineIcon />
        </button>
      </NavLink>

      <li>
        <button>
          <MenuRoundedIcon />
        </button>
      </li>
    </ul>
  );
}
