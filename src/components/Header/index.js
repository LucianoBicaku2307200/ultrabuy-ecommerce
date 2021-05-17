import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Button from "../Button";
import SearchWithDropdown from "../SearchWithDropdown";
import Search from "../Search";

import Person from "../../images/svg/ic-person.svg";
import Basket from "../../images/svg/ic-basket.svg";
import Burger from "../../images/svg/ic-hamburger.svg";

const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="py-5 px-6 flex flex-wrap justify-between">
        <div className="flex justify-center sm:justify-start lg:w-1/4 sm:w-1/2 w-full lg:ml-0 sm:pl-8 pl-2 lg:pb-0 sm:pb-2">
          <div className="lg:w-full w-1/2 text-3xl font-extrabold py-2">
            UltraBuy
          </div>
          <div className="flex sm:hidden w-1/2 justify-end">
            <Button
              className="-mr-3 -mb-4"
              icon={Burger}
              onClick={() => setShow(true)}
            />
          </div>
        </div>
        <div className="hidden sm:flex sm:justify-center lg:w-1/2 w-full sm:order-last lg:order-none">
          <SearchWithDropdown
            classContainer="z-40"
            classSearch="w-80 z-40 pl-6"
            classDropdwon="z-50"
          />
        </div>
        <div className="hidden sm:flex w-1/2 justify-end sm:items-center lg:w-1/4 lg:mr-0 sm:pr-5">
          <div className="">
            <Button
              className="rounded px-2 py-2"
              onClick={() => console.log(1)}
              icon={Person}
            />
          </div>
          <div className="sm:-mr-1">
            <Button
              className="rounded px-2 py-2"
              onClick={() => console.log(1)}
              icon={Basket}
            />
          </div>
        </div>
      </div>
      <Transition show={show} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed inset-0"
          open={show}
          onClose={setShow}
        >
          <div className="absolute inset-0 overflow-hidden">
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay
                className="absolute inset-0 bg-gray-900 bg-opacity-75 transition-opacity"
                onClick={() => setShow(false)}
              />
            </Transition.Child>
            <div className="fixed inset-y-0 right-0 w-7/12 flex z-40">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <div className="relative w-full">
                  <div className="absolute top-0 right-0 px-2 pb-2 flex">
                    <Button
                      className="pr-1 pt-8"
                      icon={Burger}
                      onClick={() => setShow(false)}
                    />
                  </div>
                  <div className="h-full flex flex-col py-3 bg-white shadow-xl overflow-y-scroll">
                    {/* head */}
                    <div className="px-4 mb-6">
                      <div className="mb-6"></div>
                    </div>
                    {/* body */}
                    <div className="flex w-full flex-col items-start px-2">
                      <div className="py-3 w-full">
                        <SearchWithDropdown
                          classContainer="flex flex-col items-center"
                          classDropdown="w-full"
                          classSearch="w-full"
                        />
                      </div>
                      <div className="py-3 w-full">
                        <SearchWithDropdown
                          classContainer="flex flex-col"
                          classDropdown="w-full"
                          classSearch="w-full"
                        />
                      </div>
                      <div className="py-3 w-full">
                        <Search className="flex justify-center flex-col w-full" />
                      </div>
                      <div className="py-3 z-20">
                        <Button
                          className="rounded px-2 py-2"
                          icon={Person}
                          iconPosition="left"
                          content="Account"
                          onClick={() => console.log(1)}
                        />
                      </div>
                      <div className="sm:-mr-1 py-3 z-20">
                        <Button
                          className="rounded px-2 py-2"
                          icon={Basket}
                          iconPosition="left"
                          content="Cart"
                          onClick={() => console.log(1)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
export default Header;
