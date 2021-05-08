import React from "react";
import { Link } from "react-router-dom";
import { CheckBox, Rating } from "../../components";
const Layout3 = ({ children, childrenClassName }) => {
  const categories = [
    { text: "Category name", link: "/", number: "320" },
    { text: "Category name", link: "/", number: "320" },
    { text: "Category name", link: "/", number: "32" },
    { text: "Category name", link: "/", number: "3" },
  ];
  return (
    <div className="flex w-full flex-col xl:py-16 xl:px-11 md:py-8 md:px-6 p-4 md:flex-row md:mb-3 justify-between">
      <div className="w-auto flex-col mb-3 hidden md:flex md:w-1/4 md:mr-8">
        <div className="w-full mb-12">
          <h4 className="font-semibold text-lg mb-4">Categories</h4>
          <div className="-mb-3">
            {categories.map((el, index) => (
              <Link key={index} to={el.link}>
                <div className="flex justify-between my-3 hover:underline hover:text-C2-default transition-all ease-linear duration-300">
                  <div className="font-normal text-sm">{el.text}</div>
                  <div className="text-xs text-C2-default px-2 rounded bg-C1-E flex items-center justify-center">
                    {el.number}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="w-full mb-12">
          <h4 className="font-semibold text-lg mb-4">Brands</h4>
          <div className="-mb-3">
            <CheckBox selected={true} text="some text here" className="my-2" />
            <CheckBox selected={true} text="some text here" className="my-2" />
            <CheckBox selected={true} text="some text here" className="my-2" />
            <CheckBox selected={true} text="some text here" className="my-2" />
          </div>
        </div>
        <div className="w-full mb-12">
          <h4 className="font-semibold text-lg mb-4">Rating</h4>
          <Rating rating={5} className="" />
        </div>
      </div>

      <div className={"flex-1 " + childrenClassName}>{children}</div>
    </div>
  );
};

export default Layout3;
