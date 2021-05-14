import { Menu, Transition } from "@headlessui/react";
import React, { useState } from "react";
import DownIcon from "../../images/svg/ic-chevron-down.svg";

const Dropdown = ({ classDropdown, values }) => {
  const [categoryValue, setCategoryValue] = useState("Categories");

  return (
    <Menu
      as="div"
      className={"border-C1-B pr-6 border-r flex w-36 " + classDropdown}
    >
      {({ open }) => (
        <div className="cursor-pointer flex w-full">
          <Menu.Button
            as="button"
            className="flex items-center outline-none w-full justify-between focus:outline-none"
          >
            <div className="font-bold text-sm ">{categoryValue}</div>
            <img className="ml-2" src={DownIcon} alt="" />
          </Menu.Button>
          <Transition
            show={open}
            className="absolute top-full left-0 w-36 z-50"
            enter="transform transition duration-250"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transform duration-200 transition ease-in-out"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Menu.Items
              as="div"
              className="bg-C1-E outline-none focus:outline-none shadow-sm rounded-lg mt-1"
            >
              {values.map((value, index, { length }) => (
                <Menu.Item key={index}>
                  {({ active }) => (
                    <div
                      className={
                        (active ? "bg-C2-C text-white " : "") +
                        (index === 0 ? " rounded-tr-lg rounded-tl-lg " : "") +
                        (index + 1 === length
                          ? " rounded-br-lg rounded-bl-lg "
                          : "") +
                        "px-4 py-2 outline-none focus:outline-none"
                      }
                      onClick={() => setCategoryValue(value)}
                    >
                      {value}
                    </div>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </div>
      )}
    </Menu>
  );
};

export default Dropdown;
