import React from "react";
import { Route } from "react-router-dom";
import { Button, Input } from "../../components";

import Envelope from "../../images/svg/ic-contact-mail.svg";
import Lock from "../../images/svg/ic-security-locked.svg";
import Person from "../../images/svg/ic-person.svg";
import Thing from "../../images/svg/loginscreen-thing.js";
import Logo from "../../images/svg/logo.js";

const Index = () => {
  return (
    <div className="flex min-h-screen h-full bg-C2-default min-w-screen w-full justify-center">
      <div className="hidden md:flex md:flex-col min-h-screen h-full md:w-2/5 lg:w-1/2 bg-white">
        <div className="flex flex-row justify-between items-center w-full">
          <h2 className="font-bold text-xl mx-10">
            <span className="text-C2-default">Ultra</span>
            Buy
          </h2>
          <div className="flex md:w-8 lg:w-12 xl:w-16 mx-10 py-3">
            <Logo />
          </div>
        </div>
        <div className="flex flex-col w-full justify-center my-auto">
          <div className="flex justify-center">
            <Thing />
          </div>
          <div className="text-white w-full flex justify-center pt-10 lg:pt-14">
            <h2 className="font-semibold text-lg lg:text-xl text-center text-black">
              We sell
              <span className="text-C2-default"> everything </span>
              24/7.
              <br />
              You just have to pick.
            </h2>
          </div>
        </div>
      </div>

      <div className="flex justify-center text-white h-full min-h-screen w-full sm:w-11/12 md:w-3/5 lg:w-1/2 overflow-y-auto xl:overflow-y-hidden">
        <div className="flex flex-col justify-center min-h-screen w-full sm:w-9/12 md:w-3/4 lg:w-3/4 xl:w-7/12">
          <div className="flex flex-col justify-items-center items-center py-2 sm:pb-6 md:py-6 lg:pb-8 xl:pb-10 mt-10 sm:mt-3">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold sm:pb-3 md:pb-4 lg:pb-8 xl:pb-14">
              Create an account
            </h1>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
              Sign up now
            </h3>
          </div>

          <div className="flex flex-col w-full px-5 sm:px-8 lg:px-7 xl:px-6 py-4 lg:my-5">
            <div className="flex pt-2 sm:pt-4 justify-center w-full">
              <Input
                label="Username"
                placeholder="Input your username"
                errore={false}
                icon={Person}
                className="rounded-lg flex h-full w-full"
                classLabel="text-lg font-semibold fleading-tight -mb-1"
                classInput="h-10 px-2 w-full rounded mt-2 focus:outline-none shadow text-gray-700 bg-white"
                classInputInside="w-full"
              />
            </div>
            <div className="flex pt-2 sm:pt-4 justify-center w-full">
              <Input
                label="Email"
                placeholder="Input your email"
                errore={false}
                type="email"
                icon={Envelope}
                className="rounded-lg flex h-full w-full"
                classLabel="text-lg font-semibold fleading-tight -mb-1"
                classInput="h-10 px-2 w-full rounded mt-2 focus:outline-none shadow text-gray-700 bg-white"
                classInputInside="w-full"
              />
            </div>
            <div className="flex pt-2 sm:pt-4 justify-center w-full">
              <Input
                label="Password"
                placeholder="Input your password"
                errore={false}
                icon={Lock}
                type="password"
                className="rounded-lg flex h-full w-full"
                classLabel="text-lg font-semibold fleading-tight -mb-1"
                classInput="h-10 px-2 w-full rounded mt-2 focus:outline-none shadow text-gray-700 bg-white"
                classInputInside="w-full"
              />
            </div>
            <div className="flex pt-2 sm:pt-4 justify-center w-full">
              <Input
                label="Password"
                placeholder="Input your password"
                errore={false}
                icon={Lock}
                type="password"
                className="rounded-lg flex h-full w-full mb-4"
                classLabel="text-lg font-semibold fleading-tight -mb-1"
                classInput="h-10 px-2 w-full rounded mt-2 focus:outline-none shadow text-gray-700 bg-white"
                classInputInside="w-full"
              />
            </div>
          </div>

          <div className="flex flex-col items-center px-5 sm:px-8 lg:px-7 xl:px-6 mb-8 sm:mb-6 md:mb-4 lg:mb-0 md:py-3 lg:py-5">
            <Button
              className="w-full bg-white hover:bg-gray-200 text-C2-default sm:px-8 px-2 py-3 text-base"
              content="Sign Up"
            />
            <div className="pt-7 sm:pt-16 md:pt-8 text-sm md:text-base text-center flex items-center">
              Already have an account?{" "}
              <Route
                render={({ history }) => (
                  <Button
                    className="md:text-base text-sm w-fit-content hover:shadow-none hover:underline px-2"
                    content="Log In"
                    onClick={() => {
                      history.push("/login");
                    }}
                  />
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Index;

/*

<div className="bg-C2-default sm:h-screen w-full flex overflow-auto h-auto py-10">
        <div className="flex flex-col mx-auto justify-center items-center h-full w-full">
          <div className="text-white px-0 sm:px-2 flex flex-col">
            <div className="px-2 flex flex-col items-center justify-center sm:pb-5">
              <h1 className="text-2xl sm:text-2xl xl:text-4xl font-bold leading-tight sm:py-6 sm:mt-8">
                Create an account
              </h1>
              <h3 className="text-xl sm:text-xl xl:text-3xl leading-tight sm:py-3">
                Sign Up
              </h3>
            </div>
            <div className="px-1 sm:px-6 sm:py-3 flex flex-col">
              <Input
                label="Username"
                placeholder="Input your username"
                errore={false}
                icon={Person}
                className="rounded-lg"
                classLabel="text-lg font-semibold fleading-tight mt-3"
                classInput="h-10 px-2 w-full rounded mt-2 focus:outline-none shadow text-gray-700 bg-white"
                classInputInside="w-full"
              />
              <Input
                label="Email"
                placeholder="Input your email"
                errore={false}
                type="email"
                icon={Envelope}
                className="rounded-lg"
                classLabel="text-lg font-semibold fleading-tight mt-3"
                classInput="h-10 px-2 w-full rounded mt-2 focus:outline-none shadow text-gray-700 bg-white"
                classInputInside="w-full"
              />
              <Input
                label="Password"
                placeholder="Input your password"
                errore={false}
                icon={Lock}
                type="password"
                className="rounded-lg"
                classLabel="text-lg font-semibold fleading-tight mt-3"
                classInput="h-10 px-2 w-full rounded mt-2 focus:outline-none shadow text-gray-700 bg-white"
                classInputInside="w-full"
              />
              <Input
                label="Confirm Password"
                placeholder="Confirm your password"
                errore={false}
                icon={Lock}
                type="password"
                className="rounded-lg"
                classLabel="text-lg font-semibold fleading-tight mt-3"
                classInput="h-10 px-2 w-full rounded mt-2 focus:outline-none shadow text-gray-700 bg-white"
                classInputInside="w-full"
              />
            </div>
            <div className="px-3 sm:px-6 flex flex-col items-center">
              <Button
                className="w-full bg-white hover:bg-gray-200 text-C2-default sm:px-8 sm:py-2 py-1 text-base mt-6"
                content="Sign Up"
              />
              <div className="mt-4 md:mt-16 text-xs flex items-center">
                Already have an account?{" "}
                <Route
                  render={({ history }) => (
                    <Button
                      className="text-sm w-fit-content hover:shadow-none hover:underline px-2"
                      content="Log In"
                      onClick={() => {
                        history.push("/login");
                      }}
                    />
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

*/
