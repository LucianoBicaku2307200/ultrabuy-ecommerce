import {
  Button,
  CheckBox,
  Input,
  Modal,
  Search,
  SearchWithDropdown,
  Select,
  SelectNumber,
  Dropdown,
  Tag,
  CardSmall,
  CardBig,
} from "../../components";
import IconLeft from "../../images/svg/ic-chevron-left.svg";
import IconRight from "../../images/svg/ic-chevron-right.svg";
import Envelope from "../../images/svg/ic-contact-mail.svg";
import ComponentsContainer from "./ComponentsContainer";
import Link from "./Link";
import Img from "../../images/png/product_image_test.jpg";
import DropDown from "../../components/SearchWithDropdown/DropDown";

const index = () => {
  return (
    <div className="flex">
      <div className="m-4 w-9/12">
        <ComponentsContainer title="Modals" id="modals">
          <Modal title="Bigus Dickus" />
        </ComponentsContainer>
        <ComponentsContainer title="Buttons" id="buttons">
          <Button
            className="text-black border border-C2-default rounded px-12 py-4 hover:shadow-none"
            content="Disabled button"
            onClick={() => console.log(1)}
            icon={IconLeft}
            iconPosition="left"
            disabled={true}
          />
          <Button
            className="text-black border border-C2-default rounded px-4 py-2 hover:bg-C2-default hover:text-white"
            content="Disabled button"
            icon={IconRight}
            iconPosition="right"
          />
        </ComponentsContainer>
        <ComponentsContainer title="Inputs" id="inputs">
          <Input
            label="Label"
            placeholder="Input value"
            error={false}
            errorMessage="error message"
            classInput="px-4 py-2"
          />
          <Input
            label="Label"
            placeholder="Input value"
            error={true}
            errorMessage="error message"
            icon={Envelope}
            classInput="px-4 py-2"
          />
          <Input
            label="Label"
            placeholder="Input value"
            // classLabel=""
            classInput="px-4 py-2"
            // error={false}
            // errorMessage="error message"
            icon={Envelope}
            iconPosition="right"
            className="w-1/3"
            // error={false}
          />
        </ComponentsContainer>
        <ComponentsContainer title="Selects" id="selects">
          <Select
            label="Label"
            placeholder="Input value"
            error={false}
            errorMessage="error message"
            // checkedValue=""
            values={["value1", "value2", "value3"]}
            onChange={(value) => console.log(value)}
          />
          <SelectNumber
            placeholder="Input value"
            error={true}
            checkedValue="Nmb"
            values={["Pcs", "Kg", "Nmb"]}
            onChange={(value) => console.log(value)}
          />
        </ComponentsContainer>
        <ComponentsContainer title="Search" id="Search">
          <SearchWithDropdown classSearch="w-80 pl-6" />
          <Search />
        </ComponentsContainer>
        <ComponentsContainer title="Tags" id="Tags">
          <Tag
            value="Tag1"
            color={"red"}
            onClick={() => console.log("13213")}
            displayIcon={true}
            wrapperClassName="px-2 py-1 rounded-lg bg-C1-E cursor-pointer"
            textClassName="mr-2"
          />
        </ComponentsContainer>
        <ComponentsContainer title="CheckBoxes" id="CheckBoxes">
          <CheckBox selected={true} text="some text here" />
          <CheckBox selected={true} />
        </ComponentsContainer>
        <ComponentsContainer title="Dropdown" id="Dropdown">
          <Dropdown
            titleContent="Options"
            listContent={["Account", "Settings", "Log out"]}
          />
        </ComponentsContainer>
        <ComponentsContainer title="Product cards" id="productCards">
          <div className="w-full flex flex-wrap -mx-4">
            <CardSmall
              classNameCard="w-full md:w-1/2 lg:w-1/3 xl:w-1/4"
              title="Product Name"
              description="Space for a small product description"
              rating={null}
              price="36.99"
              currency="All"
              previousPrice="40.99"
              loading={true}
              redirectUrl="/"
              imageUrl={Img}
            />
            <CardSmall
              classNameCard="w-full md:w-1/2 lg:w-1/3 xl:w-1/4"
              title="Product Name"
              description="Space for a small product description"
              rating="3.4"
              price="36.99"
              currency="All"
              previousPrice="40.99"
              loading={false}
              redirectUrl="/"
              imageUrl={Img}
            />
            <CardSmall
              classNameCard="w-full md:w-1/2 lg:w-1/3 xl:w-1/4"
              title="Product Name"
              description="Space for a small product description"
              rating="3.7"
              price="36.99"
              currency="All"
              previousPrice="40.99"
              loading={false}
              redirectUrl="/"
              imageUrl={Img}
            />
            <CardSmall
              classNameCard="w-full md:w-1/2 lg:w-1/3 xl:w-1/4"
              title="Product Name"
              description="Space for a small product description"
              rating="1.4"
              price="36.99"
              currency="All"
              previousPrice="40.99"
              loading={false}
              redirectUrl="/"
              imageUrl={Img}
            />
            <CardSmall
              classNameCard="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 border border-C1-D h-full p-4 relative rounded-xl w-full"
              title="Product Name"
              description="Space for a small product description"
              rating={null}
              price="36.99"
              currency="All"
              previousPrice="40.99"
              loading={true}
              redirectUrl="/"
              imageUrl={Img}
            />
            <CardSmall
              classNameCard="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 border border-C1-D h-full p-4 relative rounded-xl w-full"
              title="Product Name"
              description="Space for a small product description"
              rating="3.4"
              price="36.99"
              currency="All"
              previousPrice="40.99"
              loading={false}
              redirectUrl="/"
              imageUrl={Img}
            />
            <CardBig
              classNameCard="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 border border-C1-D h-full p-4 relative rounded-xl w-full"
              title="Product Name"
              description="Space for a small product description"
              rating="3.4"
              price="36.99"
              currency="All"
              previousPrice="40.99"
              loading={false}
              redirectUrl="/"
              imageUrl={Img}
            />
          </div>
        </ComponentsContainer>
      </div>
      <div className="bg-gray-400 fixed p-2 right-0 top-0 w-3/12 min-h-screen">
        <Link id="#modals" content="Modal" />
        <Link id="#buttons" content="Buttons" />
        <Link id="#inputs" content="Inputs" />
        <Link id="#selects" content="Selects" />
        <Link id="#Search" content="Search" />
        <Link id="#Tags" content="Tags" />
        <Link id="#CheckBoxes" content="CheckBoxes" />
        <Link id="#Dropdown" content="DropDown" />
        <Link id="#productCards" content="Product cards" />
      </div>
    </div>
  );
};

export default index;
