import { Input } from "./input";

export default function Header() {
  return (
    <header className="border">
      <form action="" method="post">
        <label htmlFor="search" className="hidden">
          Search
        </label>
        <Input placeholder="Search" className="h-10" />
      </form>
    </header>
  );
}
