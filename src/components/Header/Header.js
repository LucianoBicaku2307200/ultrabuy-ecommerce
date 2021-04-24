import Input from "../../components/Inputs";
import Button from "../../components/Button";

import Search from "../../images/svg/ic-search.svg";
import Person from "../../images/svg/ic-person.svg";
import Basket from "../../images/svg/ic-basket.svg";

const Header = () => (
  <div className="my-8 px-6 flex flex-col sm:flex-row items-center w-full justify-between">
    <div className="flex items-center sm:ml-10">
      <div className="text-3xl font-extrabold">UltraBuy</div>
    </div>
    <div className="flex items-center">
      <Input
        dropdown={true}
        dropdownTitle="All categories"
        titleClassName="border-none -ml-2 mr-2 rounded-lg"
        placeholder="Search products, categories..."
        icon={Search}
        iconPosition="right"
        classInput="h-10 px-2 w-full rounded mt-2 focus:outline-none shadow text-gray-700"
      />
    </div>
    <div className="hidden sm:flex items-center">
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
