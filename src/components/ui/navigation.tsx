import { NavLink, useLocation } from "react-router";
import { Home20SolidIcon } from "../icons/heroicons-home-20-solid";
import { ClipboardDocumentListIcon } from "../icons/heroicons-clipboard-document-list";
import { ChatBubbleBottomCenterTextIcon } from "../icons/heroicons-chat-bubble-bottom-center-text";
import { UserIcon } from "../icons/heroicons-user";

export default function Nav() {
  const path = useLocation();
  console.log(path.pathname);

  return (
    <nav>
      <ul className="flex items-center justify-around border py-4">
        <li>
          <NavLink className={"flex flex-col items-center gap-2"} to={"/"}>
            <Home20SolidIcon />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="flex flex-col items-center gap-2" to={"/review"}>
            <ChatBubbleBottomCenterTextIcon />
            <span>Review</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className="flex flex-col items-center gap-2"
            to={"/transaction"}
          >
            <ClipboardDocumentListIcon />
            <span>Transaction</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="flex flex-col items-center gap-2" to={"/account"}>
            <UserIcon />
            <span>Account</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
