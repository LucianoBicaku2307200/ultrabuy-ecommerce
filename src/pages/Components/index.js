import { Modal, Button, Input, Select, SelectNumber } from "../../components";
import ComponentsContainer from "./ComponentsContainer";
import Link from "./Link";

import IconLeft from "../../images/svg/ic-chevron-left.svg";
import IconRight from "../../images/svg/ic-chevron-right.svg";
import Envelope from "../../images/svg/ic-contact-mail.svg";

const index = () => {
  return (
    <div className="flex">
      <div className="m-4 w-4/5">
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
          />
          <Input
            label="Label"
            placeholder="Input value"
            error={true}
            errorMessage="error message"
            icon={Envelope}
          />
          <Input
            label="Label"
            placeholder="Input value"
            // classLabel=""
            // classInput=""
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
      </div>
      <div className="bg-gray-400 fixed p-2 right-0 top-0 w-3/12 min-h-screen">
        <Link id="#modals" content="Modal" />
        <Link id="#buttons" content="Buttons" />
        <Link id="#inputs" content="Inputs" />
        <Link id="#selects" content="Selects" />
      </div>
    </div>
  );
};

export default index;
