import React, { useState } from "react";
import Button from "../Button";
export default function Modal({ title }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <Button
        className="bg-pink-500 text-white hover:bg-pink-400 font-bold uppercase text-sm shadow hover:shadow-lg"
        onClick={() => setShowModal(true)}
        content="Show Modal"
      />
      {showModal ? (
        <div>
          <div className="flex flex-wrap justify-start items-center relative z-50 outline-none focus:outline-none">
            <div className="flex w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-xl relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex justify-between items-center p-5">
                  <h3 className="text-3xl font-semibold p-3">{title}</h3>
                  <div className="w-min">
                    <Button
                      onClick={() => setShowModal(false)}
                      content={
                        <svg
                          width="25"
                          height="25"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M30.5997 30.5999L9.39966 9.3999"
                            stroke="#151515"
                            stroke-width="2.5"
                            stroke-linecap="round"
                            stroke-linejoin="bevel"
                          />
                          <path
                            d="M30.5997 9.3999L9.39966 30.5999"
                            stroke="#151515"
                            stroke-width="2.5"
                            stroke-linecap="round"
                            stroke-linejoin="bevel"
                          />
                        </svg>
                      }
                    />
                  </div>
                </div>
                {/*body*/}
                <div className="relative p-6 flex">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed p-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Turpis egestas pretium aenean pharetra. Orci eu
                    lobortis elementum nibh tellus molestie. Vulputate dignissim
                    suspendisse in est. Vel pharetra vel turpis nunc. Malesuada
                    nunc vel risus commodo. Nisi vitae suscipit tellus mauris.
                    Posuere morbi leo urna molestie at elementum eu. Urna duis
                    convallis convallis tellus. Urna molestie at elementum eu.
                    Nunc sed blandit libero volutpat.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex self-end items-end justify-end p-6 w-auto">
                  <Button
                    className="text-red-500 background-transparent shadow hover:shadow-lg"
                    onClick={() => setShowModal(false)}
                    content="Close"
                  />
                  <Button
                    className="bg-green-500 text-white hover:bg-green-600 shadow hover:shadow-lg"
                    onClick={() => setShowModal(false)}
                    content="Save Changes"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
      ) : null}
    </div>
  );
}
