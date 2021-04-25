import Input from "../Inputs";
import Button from "../Button";
import SearchWithDropdown from "../SearchWithDropdown";

import Search from "../../images/svg/ic-search.svg";
import Person from "../../images/svg/ic-person.svg";
import Basket from "../../images/svg/ic-basket.svg";

const Header = () => (
  <div className="my-8 px-6 flex flex-col flex-wrap md:flex-row items-center justify-between">
    <div className="flex justify-center md:justify-start sm:my-10 w-full md:w-1/3">
      <div className="text-3xl font-extrabold">UltraBuy</div>
    </div>
    <div className="hidden sm:flex justify-center w-1/3">
      {/*<Input
        dropdown={true}
        dropdownClassName=""
        dropdownTitle="All categories"
        titleClassName="border-none mr-2 rounded-lg"
        listContent={["Profile", "Purchases", "Settings", "Log out"]}
        placeholder="Search products, categories..."
        icon={Search}
        iconPosition="right"
        classInput="h-10 px-2 mx-auto w-full rounded mt-2 focus:outline-none shadow text-gray-700"
      />*/}
      <SearchWithDropdown
        classSearch="w-80 pl-6 z-50"
        classContainer="z-50"
        classDropdown="z-50"
      />
    </div>
    <div className="hidden md:flex md:justify-end w-1/3">
      <div className="">
        <Button
          className="rounded px-0 py-0"
          onClick={() => console.log(1)}
          icon={Person}
        />
      </div>
      <div className="sm:-mr-1">
        <Button
          className="rounded px-0 py-0"
          onClick={() => console.log(1)}
          icon={Basket}
        />
      </div>
    </div>
  </div>
);
export default Header;
