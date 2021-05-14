import { Menu, Transition } from "@headlessui/react";
import React from "react";
import DownIcon from "../../images/svg/ic-chevron-down.svg";
import { useHistory } from "react-router-dom";
const DropDown = ({ classDropdown, values, categorie }) => {
  const history = useHistory();
  return (
    <Menu as="div" className={"flex " + classDropdown}>
      {({ open }) => (
        <div className="cursor-pointer flex relative">
          <Menu.Button
            as="button"
            className="flex items-center outline-none justify-between focus:outline-none"
          >
            <div className="font-medium text-sm">{categorie}</div>
            <img className="ml-2" src={DownIcon} alt="" />
          </Menu.Button>
          <Transition
            show={open}
            className="absolute top-full left-0 z-30 w-36 bg-C1-E outline-none focus:outline-none"
            enter="transform transition duration-100"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transform duration-200 transition ease-in-out"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Menu.Items as="div">
              {values.map((value, index) => (
                <Menu.Item key={index}>
                  {({ active }) => (
                    <div
                      className={
                        (active ? "bg-C2-C text-white " : "") +
                        "px-4 py-2 text-sm outline-none focus:outline-none"
                      }
                      onClick={() => history.push(value)}
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

export default DropDown;
