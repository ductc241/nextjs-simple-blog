import Button from "@/components/common/Button";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div className="bg-white py-2 drop-shadow-sm">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <SearchBar />
          <div className="flex align-center">
            <Button>Log in</Button>
            <Button>Create account</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
