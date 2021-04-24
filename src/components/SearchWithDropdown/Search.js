import React from "react";
import Input from "../Inputs";
import SearchIcon from "../../images/svg/ic-actions-search.svg";
const Search = ({ className, onChange, onSearch, value }) => {
  return (
    <div className={className}>
      <Input
        placeholder="Search Products, categories ..."
        // classLabel=""
        classInput="border-none py-0 px-0"
        // error={false}
        // errorMessage="error message"
        icon={SearchIcon}
        iconPosition="right"
        //className=""
        // error={false}
        value={value}
        onChange={onChange}
        onClickIcon={onSearch}
        iconClass="cursor-pointer"
      />
    </div>
  );
};

export default Search;
