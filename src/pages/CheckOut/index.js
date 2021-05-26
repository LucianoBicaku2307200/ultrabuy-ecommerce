import { useState } from "react";
import { CheckBox, Button } from "../../components";
import { BillingInfo, Shipping, Payment } from "../../components";

import Guard from "../../images/svg/Vrstva 302.svg";

const clsInput =
  "h-10 px-4 w-full rounded-lg focus:outline-none focus-within:border-C2-default text-gray-700 bg-gray-200";

const Index = () => {
  return (
    <div className="flex flex-row gap-3 w-full h-max md:w-11/12 mx-auto">
      <div className="flex justify-center w-3/4 ring-2 ring-black h-full pb-5">
        <div className="flex flex-col w-11/12">
          <div className="flex pt-1">
            <BillingInfo />
          </div>

          <div className="flex pt-5">
            <Shipping />
          </div>

          <div className="flex pt-5">
            <Payment />
          </div>

          <div className="flex pt-10">
            <div className="flex flex-col items-center w-full">
              <h2 className="text-xl md:text-2xl pb-1 md:pb-2 w-full">
                Additional informations
              </h2>
              <div className="flex flex-row text-sm text-C1-C justify-between w-full">
                <h5>Need something else? We will make it for you!</h5>
                <h5>Step 4 of 5</h5>
              </div>
              <div className="flex w-full justify-center py-2">
                <label className="font-bold text-xs transition-colors duration-100 leading-normal -mb-px ml-px">
                  <textarea
                    className={clsInput}
                    rows={4}
                    cols={50}
                    resize="none"
                    placeholder="Need a specific delivery day? Sending a gitf? Let’s say ..."
                  />
                </label>
              </div>
            </div>
          </div>

          <div className="flex flex-col pt-10">
            <div className="flex flex-col items-center w-full">
              <h2 className="text-xl md:text-2xl pb-1 md:pb-2 w-full">
                Confirmation
              </h2>
              <div className="flex flex-row text-sm text-C1-C justify-between w-full">
                <h5>
                  We are getting to the end. Just few clicks and your order si
                  ready!
                </h5>
                <h5>Step 5 of 5</h5>
              </div>
              <div className="flex w-full flex-col text-sm py-2">
                <div className="flex rounded-lg h-10 ring-1 ring-C1-C bg-C1-F justify-center w-max px-2 my-2">
                  <CheckBox
                    className="bg-gray-100"
                    selected={false}
                    text="Agree with sending marketing and newsletter emails. No spam, promissed!"
                  />
                </div>
                <div className="flex rounded-lg h-10 ring-1 ring-C1-C bg-C1-F justify-center w-max px-2 my-2">
                  <CheckBox
                    className="bg-gray-100"
                    selected={false}
                    text="I agree with your terms and conditions and privacy policy."
                  />
                </div>
              </div>
            </div>
            <Button
              className="w-max border-2 border-C2-B mt-1 rounded px-6 py-4 hover:shadow-none transition duration-200 bg-C2-default hover:bg-white text-white hover:text-C2-default ease-linear"
              content="Complete Order"
            />

            <div className="flex flex-col justify-start w-2/5 pt-6">
              <img className="self-start py-2" src={Guard} alt="" />
              <div className="flex flex-col text-sm">
                <h2 className="pb-1 md:pb-2">Confirmation</h2>
                <h5 className="text-C1-C">
                  We are using the most advanced security to provide you the
                  best experience ever.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-5/12 ring-1 ring-C1-B ring-opacity-75 rounded-lg">
        <div className="flex flex-col items-center w-full pt-7 px-3">
          <h2 className="text-xl md:text-2xl pb-2 md:pb-3 w-full">
            Order Summary
          </h2>
          <div className="flex text-sm text-C1-C w-full">
            <h4>
              Price can change depending on shipping method and taxes of your
              state.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
