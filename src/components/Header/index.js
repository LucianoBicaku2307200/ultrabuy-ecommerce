import Button from "../Button";
import SearchWithDropdown from "../SearchWithDropdown";

import Person from "../../images/svg/ic-person.svg";
import Basket from "../../images/svg/ic-basket.svg";
import Burger from "../../images/svg/ic-editor-block.svg";

const Header = () => (
  <div className="my-8 px-6 flex flex-wrap md:flex-row flex-col items-center justify-between">
    <div className="flex justify-center lg:justify-start pb-5 w-full lg:w-1/3">
      <div className="text-3xl font-extrabold sm:w-full w-1/2 content-center">
        UltraBuy
      </div>
      <div className="flex sm:hidden w-1/2 justify-end">
        <Button
          className="rounded px-0 py-0"
          onClick={() => alert("Still working")}
          icon={Burger}
        />
      </div>
    </div>
    <div className="hidden sm:flex md:justify-center lg:w-1/3 md:mx-0 mx-auto">
      <SearchWithDropdown
        classContainer="z-50 flex justify-center"
        classDropdown="z-50"
        classSearch="ml-3 z-50"
      />
    </div>
    <div className="hidden md:flex md:justify-end lg:w-1/3 md:w-auto">
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
