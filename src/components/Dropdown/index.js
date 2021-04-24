import { useState } from "react";

const Dropdown = ({
  titleContent,
  titleClassName,
  listContent,
  listClassName,
}) => {
  const [show, setShow] = useState(false);

  return (
    <div className="flex w-auto">
      <div className="flex justify-center">
        <div className="relative">
          <div
            className={
              "bg-white flex items-center justify-between border rounded border-gray-300 w-max cursor-pointer " +
              titleClassName
            }
            onClick={() => setShow(!show)}
          >
            <p className="text-black ml-2 py-3 text-md font-semibold leading-3 tracking-normal">
              {titleContent}
            </p>
            <div className="flex cursor-pointer text-C2-B">
              {show ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className=" icon icon-tabler icon-tabler-chevron-up"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-chevron-up"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <polyline points="6 15 12 9 18 15" />
                </svg>
              )}
            </div>
          </div>
          {show && (
            <div className={"flex h-auto z-50 " + listClassName}>
              <ul className="z-50 flex flex-col transition duration-900 bg-white shadow rounded-lg mt-2 w-max absolute">
                <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-C2-default hover:text-white rounded rounded-tr-lg rounded-tl-lg px-3 font-normal">
                  Interface Settings
                </li>
                <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-C2-default hover:text-white rounded px-3 font-normal">
                  Notifications
                </li>
                <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-C2-default hover:text-white rounded px-3 font-normal">
                  Account Data
                </li>
                <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-C2-default hover:text-white rounded rounded-br-lg rounded-bl-lg px-3 font-normal">
                  Sign Out
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Dropdown;
