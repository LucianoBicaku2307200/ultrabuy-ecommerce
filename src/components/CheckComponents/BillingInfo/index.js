import { useState } from "react";
import { Input, Select, CheckBox } from "../../../components";

const inputsCont = [
  {
    title: "First name",
    type: "text",
  },

  {
    title: "Last name",
    type: "text",
  },

  {
    title: "Email address",
    type: "email",
  },

  {
    title: "Phone number",
    type: "tel",
  },

  {
    title: "Address",
    type: "text",
  },

  {
    title: "Town/City",
    type: "text",
  },
];

const clsInput =
  "h-10 px-4 w-full rounded-lg focus:outline-none focus-within:border-C2-default text-gray-700 bg-gray-200";

const BillingInfo = () => {
  const [selected, setSelect] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center w-full">
        <h2 className="text-xl md:text-2xl pb-1 md:pb-2 w-full">
          Billing info
        </h2>
        <div className="flex flex-col sm:flex-row text-sm text-C1-C justify-between w-full">
          <h5>Please enter your billing info</h5>
          <h5 className="py-2 sm:py-0">Step 1 of 5</h5>
        </div>
        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-x-4 md:gap-x-8 gap-y-8 pt-8 pb-4 w-full justify-around">
          {inputsCont.map((el, index) => (
            <div key={index} className="flex justify-center">
              <Input
                label={el.title}
                placeholder={el.title}
                error={false}
                type={el.type}
                className="rounded-lg flex h-full w-full"
                classLabel="-mb-px ml-px"
                classInput={clsInput}
                classInputInside="w-full bg-gray-200"
              />
            </div>
          ))}
          <div className="flex justify-center">
            <Select
              label="State/Country"
              placeholder="Choose a state or country"
              error={false}
              errorMessage="error message"
              values={["Albania", "USA", "Italy"]}
              className="rounded-lg flex h-full w-full"
              classLabel="-mb-px ml-px"
              classSelect="h-10 px-4 w-full rounded-lg focus:outline-none bg-gray-200"
            />
          </div>
          <div className="flex justify-center">
            <Input
              label="ZIP/Postal code"
              placeholder="ZIP or postal code"
              error={false}
              overflow-auto
              type="text"
              className="rounded-lg flex h-full w-full"
              classLabel="-mb-px ml-px"
              classInput={clsInput}
              classInputInside="w-full bg-gray-200"
            />
          </div>
          <div className="flex rounded-lg h-10 ring-1 ring-C1-C bg-C1-F justify-center w-max px-3 items-center">
            <div className="flex" onClick={() => setSelect(!selected)}>
              <CheckBox className="bg-gray-100 px-px" selected={selected} />
            </div>
            <p className="flex pl-2 cursor-default">
              Ship to a different address?
            </p>
          </div>
        </div>
        {selected ? (
          <div className="flex flex-col items-center w-full border border-C1-D bg-gray-50 rounded-lg px-2">
            <h2 className="text-xl md:text-2xl py-3 md:pb-5 w-full">
              Shipping information
            </h2>
            <div className="flex flex-col sm:grid sm:grid-cols-2 gap-x-4 md:gap-x-8 gap-y-8 pt-8 pb-4 w-full justify-around">
              {inputsCont.map((el, index) => (
                <div key={index} className="flex justify-center">
                  <Input
                    label={el.title}
                    placeholder={el.title}
                    error={false}
                    type={el.type}
                    className="rounded-lg flex h-full w-full"
                    classLabel="-mb-px ml-px"
                    classInput={clsInput}
                    classInputInside="w-full bg-gray-200"
                  />
                </div>
              ))}
              <div className="flex justify-center">
                <Select
                  label="State/Country"
                  placeholder="Choose a state or country"
                  error={false}
                  errorMessage="error message"
                  values={["Albania", "USA", "Italy"]}
                  className="rounded-lg flex h-full w-full"
                  classLabel="-mb-px ml-px"
                  classSelect="h-10 px-4 w-full rounded-lg focus:outline-none bg-gray-200"
                />
              </div>
              <div className="flex justify-center">
                <Input
                  label="ZIP/Postal code"
                  placeholder="ZIP or postal code"
                  error={false}
                  overflow-auto
                  type="text"
                  className="rounded-lg flex h-full w-full"
                  classLabel="-mb-px ml-px"
                  classInput={clsInput}
                  classInputInside="w-full bg-gray-200"
                />
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};
export default BillingInfo;
