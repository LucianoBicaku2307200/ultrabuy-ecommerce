import React, { useState } from "react";
import DownIcon from "../../images/svg/ic-chevron-down.svg";
import { Menu } from "@headlessui/react";

const DropDown = () => {
  const [categoryValue, setCategoryValue] = useState("Categories");
  const handleCaterogy = () => {
    setCategoryValue("value 1");
  };
  return (
    <Menu as="div" className="border-C1-B pr-6 border-r flex">
      <div className="relative cursor-pointer flex">
        <Menu.Button
          as="button"
          className="flex items-center outline-none focus:outline-none"
        >
          <div className="font-bold text-sm ">{categoryValue}</div>
          <img className="ml-2" src={DownIcon} alt="" />
        </Menu.Button>

        <Menu.Items
          as="div"
          className="absolute top-full w-full bg-red-400 outline-none focus:outline-none"
        >
          <Menu.Item>
            <div
              className="px-2 py-1 outline-none focus:outline-none"
              onClick={handleCaterogy}
            >
              value2
            </div>
          </Menu.Item>
          <Menu.Item>
            <div
              className="px-2 py-1 outline-none focus:outline-none"
              onClick={handleCaterogy}
            >
              value3
            </div>
          </Menu.Item>
          <Menu.Item>
            <div
              className="px-2 py-1 outline-none focus:outline-none"
              onClick={handleCaterogy}
            >
              value4
            </div>
          </Menu.Item>
        </Menu.Items>
      </div>
    </Menu>
  );
};

export default DropDown;
