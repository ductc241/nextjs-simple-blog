"use client";

import SearchIcon from "@/icons/SearchIcon";

const SearchBar = () => {
  return (
    <div className=" w-[450px] px-3 py-2 border rounded-lg">
      <div className="flex space-between items-center">
        <input
          type="text"
          className="grow outline-none"
          placeholder="Search..."
        />
        <SearchIcon width={20} height={20} />
      </div>
    </div>
  );
};

export default SearchBar;
