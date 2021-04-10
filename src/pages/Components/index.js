import { Modal, Button, Input } from "../../components";
import ComponentsContainer from "./ComponentsContainer";
import Link from "./Link";

// import IconLeft from "../../images/svg/ic-chevron-left.svg";
// import IconRight from "../../images/svg/ic-chevron-right.svg";
// import Envelope from "../../images/svg/ic-contact-mail.svg";

const index = () => {
  return (
    <div className="flex">
      <div className="m-4 w-4/5">
        <ComponentsContainer title="Modals" id="modals">
          <Modal title="Bigus Dickus" />
        </ComponentsContainer>
        <ComponentsContainer title="Buttons" id="buttons">
          <Button
            className="text-black border border-C2-default rounded px-12 py-4"
            content="Disabled button"
            onClick={() => console.log(1)}
            icon="svg/ic-chevron-left.svg"
            iconPosition="left"
            disabled={true}
          />
          <Button
            className="text-black border border-C2-default rounded px-4 py-2 hover:bg-C2-default hover:text-white"
            content="Disabled button"
            icon="svg/ic-chevron-right.svg"
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
            icon="svg/ic-contact-mail.svg"
          />
          <Input
            label="Label"
            placeholder="Input value"
            // classLabel=""
            // classInput=""
            // error={false}
            // errorMessage="error message"
            icon="svg/ic-contact-mail.svg"
            iconPosition="right"
            className="w-1/3"
            // error={false}
          />
        </ComponentsContainer>
      </div>
      <div className="bg-gray-400 fixed p-2 right-0 top-0 w-3/12 min-h-screen">
        <Link id="#modals" content="Modal" />
        <Link id="#buttons" content="Buttons" />
        <Link id="#inputs" content="Inputs" />
      </div>
    </div>
  );
};

export default index;
