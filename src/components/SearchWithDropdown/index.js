import React, { useState } from "react";
import Search from "./Search";
import DropDown from "./DropDown";
const SearchWithDropdown = ({ classContainer, classDropdown, classSearch }) => {
  const [SearchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };
  const handleSearch = () => {
    console.log(SearchValue);
  };

  return (
    <div
      className={`border bg-C1-F border-C1-D flex px-4 py-2.5 rounded ${classContainer}`}
    >
      <DropDown className={classDropdown} />
      <Search
        onChange={handleChange}
        onSearch={handleSearch}
        value={SearchValue}
        className={classSearch}
      />
    </div>
  );
};

export default SearchWithDropdown;
