import { useState } from "react";
import ArrowDown from "../../images/svg/ic-chevron-down.svg";
import ArrowUp from "../../images/svg/ic-chevron-top.svg";

const Dropdown = ({
  className,
  titleContent,
  listContent,
  error,
  errorMessage,
  listClassName,
  titleClassName,
}) => {
  const [show, setShow] = useState(false);
  const [categoryValue, setCategoryValue] = useState(titleContent);

  return (
    <div className="flex">
      <div className="flex justify-center">
        <div className={"justify-center relative " + className}>
          <div
            className={
              "flex items-center justify-between border rounded border-gray-300 w-40 cursor-pointer " +
              titleClassName
            }
            onClick={() => setShow(!show)}
          >
            <p className="text-black mx-auto py-3 text-md font-semibold leading-3 tracking-normal">
              {categoryValue}
            </p>
            <div className="flex cursor-pointer text-C2-B">
              {show ? (
                <img className="mr-3 w-4 h-4" src={ArrowUp} alt="" />
              ) : (
                <img className="mr-3 w-4 h-4" src={ArrowDown} alt="" />
              )}
            </div>
          </div>
          {show && (
            <div className={"flex h-auto z-50 " + listClassName}>
              <ul className="z-50 flex flex-col transition duration-900 bg-white shadow rounded-lg mt-2 w-full absolute">
                {listContent.map((value, index, { length }) => (
                  <li
                    key={index}
                    className={`cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-C2-default hover:text-white rounded px-3 font-normal ${
                      (index === 0 ? " rounded-tr-lg rounded-tl-lg " : "") +
                      (index + 1 === length
                        ? " rounded-br-lg rounded-bl-lg "
                        : "") +
                      listClassName
                    }`}
                    onClick={() => setCategoryValue(value)}
                  >
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Dropdown;
