import Button from "@/components/common/Button";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div className="bg-white py-2 drop-shadow-sm">
      <div className="container mx-auto px-3">
        <div className="flex justify-between items-center">
          <SearchBar />
          <div className="flex items-center gap-3">
            <Button variant="text">Log in</Button>
            <Button className="hidden md:block">Create account</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
