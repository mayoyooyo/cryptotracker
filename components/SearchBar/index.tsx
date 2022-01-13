import React, { HTMLInputTypeAttribute } from "react";

const SearchBar = ({ ...props }: any) => {
  return (
    <div className="text-center w-full flex-col pt-6 ">
      <input
        type="text"
        className="bg-mayo4 items-center text-white rounded-sm p-1 px-4 outline-none shadow-md shadow-slate-900"
        {...props}
      />
    </div>
  );
};

export default SearchBar;
