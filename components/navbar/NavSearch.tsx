import { Input } from "@/components/ui/input";

const NavSearch = () => {
  return (
    <Input
      type="search"
      name="search"
      placeholder="search product..."
      className="max-w-xs dark:bg-muted"
    />
  );
};
export default NavSearch;
