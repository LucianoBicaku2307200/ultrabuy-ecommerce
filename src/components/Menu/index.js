import React from "react";
import DropDown from "./Dropdown";
const MainMenu = ({ items }) => {
  return (
    <div className="hidden w-full bg-C1-E py-4 px-6 md:flex ">
      {items.map((item, index) => (
        <div className="mr-10" key={index}>
          <DropDown categorie={item.categorie} values={item.subcategories} />
        </div>
      ))}
    </div>
  );
};

export default MainMenu;
