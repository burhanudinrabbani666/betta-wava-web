import { Link } from "react-router";
import { Field, FieldLabel } from "./field";
import { Input } from "./input";
import { ShoppingCartIcon } from "../icons/heroicons-shopping-cart";
import { ChatBubbleBottomCenterIcon } from "../icons/heroicons-chat-bubble-bottom-center";

export default function Header() {
  return (
    <header className="flex items-center justify-between gap-4 bg-white p-2">
      <Field>
        <FieldLabel htmlFor="search" className="hidden">
          Search
        </FieldLabel>
        <Input placeholder="Search" className="h-10" />
      </Field>
      <div className="flex items-center gap-4">
        <Link to={"/"}>
          <ChatBubbleBottomCenterIcon />
        </Link>
        <Link to={"/"}>
          <ShoppingCartIcon />
        </Link>
      </div>
    </header>
  );
}
