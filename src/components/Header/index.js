import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Button from "../Button";
import SearchWithDropdown from "../SearchWithDropdown";

import Person from "../../images/svg/ic-person.svg";
import Basket from "../../images/svg/ic-basket.svg";
import Burger from "../../images/svg/ic-hamburger.svg";
import Ex from "../../images/svg/ic-actions-close.svg";
import { useHistory } from "react-router";

const Header = () => {
  const history = useHistory();
  const [show, setShow] = useState(false);

  function handleClick() {
    history.push("/home");
  }
  return (
    <>
      <div className="py-5 lg:py-10 px-6 lg:px-16 flex justify-between">
        <div className="flex justify-center md:justify-start md:w-1/4 w-full lg:ml-0 lg:pb-0 lg:pr-0 md:pr-5">
          <div
            className="w-full lg:text-3xl text-2xl font-extrabold py-2 cursor-pointer filter hover:drop-shadow-2xl transition ease-linear duration-200"
            onClick={handleClick}
          >
            UltraBuy
          </div>

          <div className="flex md:hidden w-1/2 justify-end">
            <Button
              className="-mr-3 -mb-4"
              icon={Burger}
              onClick={() => setShow(true)}
            />
          </div>
        </div>
        <div className="hidden md:flex justify-center xl:max-w-xl lg:w-1/2 items-center">
          <SearchWithDropdown
            classContainer="rounded-xl flex w-full"
            classSearch="flex md:pl-3 w-full"
            classDropdwon="z-50"
          />
        </div>
        <div className="hidden md:flex justify-end md:w-1/4 lg:mr-0 items-center">
          <div className="flex justify-between">
            <Button
              className="rounded px-2 py-2 border-2 border-transparent hover:border-gray-600 hover:shadow-md transition-all ease-linear duration-300"
              onClick={() => console.log(1)}
              icon={Person}
            />

            <Button
              className="rounded px-2 py-2 border-2 border-transparent hover:border-gray-600 hover:shadow-md transition-all ease-linear duration-300"
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
            <div className="fixed inset-y-0 right-0 sm:w-3/4 w-full flex z-40">
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
                      className="pr-2 pt-5"
                      icon={Ex}
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
                      <div className="flex justify-center self-center py-3 md:w-3/4 w-full">
                        <SearchWithDropdown
                          classContainer="rounded-xl w-full"
                          classSearch="flex pl-3 w-full"
                          classDropdwon="z-50"
                        />
                      </div>

                      <div className="py-3 z-20">
                        <Button
                          className="rounded px-2 py-2 border-2 border-transparent hover:border-gray-600 hover:shadow-md transition-all ease-linear duration-300"
                          icon={Person}
                          iconPosition="left"
                          content="Account"
                          onClick={() => console.log(1)}
                        />
                      </div>
                      <div className="sm:-mr-1 py-3 z-20">
                        <Button
                          className="rounded px-2 py-2 border-2 border-transparent hover:border-gray-600 hover:shadow-md transition-all ease-linear duration-300"
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
