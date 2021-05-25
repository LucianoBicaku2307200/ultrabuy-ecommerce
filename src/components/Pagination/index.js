import React from "react";
import Button from "../Button";
import RightIcon from "../../images/svg/ic-chevron-right.svg";
const Pagination = () => {
  return (
    <div className="flex justify-between items-center w-full py-4 px-11">
      <div className="flex -mx-1 items-center">
        <span className=" font-normal text-C1-C px-1">Page:</span>
        <button className="px-2 hover:text-C2-default transition-all ease-linear duration-300 outline-none border-none focus:outline-none">
          1
        </button>
        <button className="px-2 hover:text-C2-default transition-all ease-linear duration-300 outline-none border-none focus:outline-none">
          2
        </button>
        <button className="px-2 hover:text-C2-default transition-all ease-linear duration-300 outline-none border-none focus:outline-none">
          3
        </button>
        <button className="px-2 hover:text-C2-default transition-all ease-linear duration-300 outline-none border-none focus:outline-none">
          4
        </button>
      </div>

      <Button
        content="NextPage"
        icon={RightIcon}
        className="bg-C2-default text-white text-sm font-bold py-3 px-4 border-2 border-C2-B  transition-all ease-linear duration-300 hover:text-black hover:bg-transparent hover:border-C1-C"
      />

      <div>
        <span className=" bg-C2-E text-C2-default font-semibold px-2 mr-1 rounded-md">
          198
        </span>
        <span className="text-C1-C font-normal">articles</span>
      </div>
    </div>
  );
};

export default Pagination;