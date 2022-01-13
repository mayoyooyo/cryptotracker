import React, { HTMLInputTypeAttribute } from "react";

const SearchBar = ({ ...props }: any) => {
  return (
    <div className="text-center w-full flex-col">
      <input
        type="text"
        className="bg-mayo4 items-center text-white rounded-sm p-1 px-4 outline-none "
        {...props}
      />
    </div>
  );
};

export default SearchBar;
