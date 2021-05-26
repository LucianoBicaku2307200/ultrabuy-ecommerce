import { RadioGroup } from "@headlessui/react";
import { Input, RadioGr } from "../../components";

import VISA from "../../images/svg/VISA.svg";
import MC from "../../images/svg/mc.svg";
import PayPal from "../../images/svg/PayPal 1.svg";
import Checked from "../../images/svg/ic-actions-select-filled.svg";

const RadioGPay = () => {
  return (
    <>
      <RadioGr>
        <RadioGroup.Option
          value="Card"
          className={({ checked }) =>
            `flex flex-row h-max w-full justify-between border border-C1-C rounded-lg px-5 py-2 cursor-pointer focus:outline-none
                  ${checked ? " border-C2-default bg-gray-50 " : " bg-C1-F "}`
          }
        >
          {({ checked }) => (
            <div className="flex flex-col w-full">
              <div className="flex items-center">
                <div className="flex items-center w-1/2">
                  <div
                    className={`${
                      checked
                        ? "bg-C2-default  border-C2-B "
                        : " bg-transparent border-C1-D "
                    } border-2 transition duration-200 ease-linear outline-none focus:outline-none inline-flex items-center h-5 rounded-full w-5`}
                  >
                    <img
                      className={`${
                        checked ? " opacity-100 " : " opacity-0 "
                      } inline-block transition duration-200 ease-linear outline-none focus:outline-none`}
                      src={Checked}
                      alt=""
                    />
                  </div>
                  <div className="pl-5 font-medium">Credit or Debit Card</div>
                </div>
                <div className="flex items-center w-1/2 justify-end">
                  <img className="px-2" src={VISA} alt="" />
                  <img src={MC} alt="" />
                </div>
              </div>

              {checked ? (
                <>
                  <div className="flex py-3 justify-center">
                    <Input
                      label="Card number"
                      placeholder="Card number"
                      errore={false}
                      type="text"
                      className="rounded-lg flex h-full w-full"
                      classLabel="-mb-px ml-px"
                      classInput="h-10 px-4 w-full rounded-lg focus:outline-none focus-within:border-C2-default text-gray-700 bg-gray-200"
                      classInputInside="w-full bg-gray-200"
                    />
                  </div>
                  <div className="flex flex-row py-3 gap-x-4 justify-between">
                    <div className="flex w-3/4">
                      <Input
                        label="Card holder"
                        placeholder="Card holder"
                        errore={false}
                        type="text"
                        className="rounded-lg flex h-full w-full"
                        classLabel="-mb-px ml-px"
                        classInput="h-10 px-4 w-full rounded-lg focus:outline-none focus-within:border-C2-default text-gray-700 bg-gray-200"
                        classInputInside="w-full bg-gray-200"
                      />
                    </div>
                    <div className="flex flex-row gap-x-3">
                      <Input
                        label="Expiration date"
                        placeholder="DD/MM/YY"
                        errore={false}
                        type="text"
                        className="rounded-lg flex h-full w-full"
                        classLabel="-mb-px ml-px"
                        classInput="h-10 px-4 w-max rounded-lg focus:outline-none focus-within:border-C2-default text-gray-700 bg-gray-200"
                        classInputInside="w-20 bg-gray-200"
                      />

                      <Input
                        label="CVC"
                        placeholder="CVC"
                        errore={false}
                        type="text"
                        className="rounded-lg flex h-full w-full"
                        classLabel="-mb-px ml-px"
                        classInput="h-10 px-4 w-max rounded-lg focus:outline-none text-gray-700 focus-within:border-C2-default bg-gray-200"
                        classInputInside="w-8 bg-gray-200"
                      />
                    </div>
                  </div>
                </>
              ) : null}
            </div>
          )}
        </RadioGroup.Option>
        <RadioGroup.Option
          value="PayPal"
          className={({ checked }) =>
            `flex flex-row h-max w-full justify-between border border-C1-C rounded-lg px-5 py-2 cursor-pointer focus:outline-none
                  ${checked ? " border-C2-default bg-gray-50 " : " bg-C1-F "}`
          }
        >
          {({ checked }) => (
            <div className="flex flex-col w-full">
              <div className="flex items-center">
                <div className="flex items-center w-1/2">
                  <div
                    className={`${
                      checked
                        ? "bg-C2-default  border-C2-B "
                        : " bg-transparent border-C1-D "
                    } border-2 transition duration-200 ease-linear outline-none focus:outline-none inline-flex items-center h-5 rounded-full w-5`}
                  >
                    <img
                      className={`${
                        checked ? " opacity-100 " : " opacity-0 "
                      } inline-block transition duration-200 ease-linear outline-none focus:outline-none`}
                      src={Checked}
                      alt=""
                    />
                    <div className="pl-6 font-medium">PayPal</div>
                  </div>
                </div>
                <div className="flex justify-end w-1/2">
                  <img src={PayPal} alt="" />
                </div>
              </div>
              {checked ? (
                <>
                  <div className="flex py-3 justify-center">
                    PayPal Button here
                  </div>
                </>
              ) : null}
            </div>
          )}
        </RadioGroup.Option>
      </RadioGr>
    </>
  );
};
export default RadioGPay;
