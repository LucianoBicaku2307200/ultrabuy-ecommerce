import React, { useState } from "react";
import Search from "./Search";
import DropDown from "../Dropdown";

const DropDownValues = ["value1", "value2", "value3"];

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
      className={`border bg-C1-F border-C1-D flex px-4 py-2.5 relative rounded ${classContainer}`}
    >
      <DropDown className={classDropdown} values={DropDownValues} />
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
