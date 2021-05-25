import React from "react";
import { Route } from "react-router-dom";
import { Button, Input, CheckBox } from "../../components";

import Envelope from "../../images/svg/ic-contact-mail.svg";
import Lock from "../../images/svg/ic-security-locked.svg";
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
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold pb-5 md:pb-4 lg:pb-8 xl:pb-14">
              Welcome Back!
            </h1>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
              Login To Your Account
            </h3>
          </div>

          <div className="flex flex-col w-full px-5 sm:px-8 lg:px-7 xl:px-6 pt-4 mt-7 sm:mt-10">
            <div className="flex pt-2 sm:pt-4 justify-center w-full">
              <Input
                label="Email"
                placeholder="Email address"
                errore={false}
                icon={Envelope}
                type="email"
                className="rounded-lg flex h-full w-full"
                classLabel="text-lg font-semibold fleading-tight -mb-1"
                classInput="h-10 px-2 w-full rounded mt-2 focus:outline-none shadow text-gray-700 bg-white"
                classInputInside="w-full"
              />
            </div>
            <div className="flex pt-2 sm:pt-4 justify-center w-full">
              <Input
                label="Password"
                placeholder="Password"
                errore={false}
                overflow-auto
                icon={Lock}
                type="password"
                className="rounded-lg flex h-full w-full"
                classLabel="text-lg font-semibold fleading-tight -mb-1 mt-3"
                classInput="h-10 px-2 w-full rounded mt-2 focus:outline-none shadow text-gray-700 bg-white"
                classInputInside="w-full"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-start md:items-center justify-between sm:mb-10 md:pb-6 lg:pb-8 md:pt-2 px-5 md:px-8 lg:px-7 xl:px-6">
            <div className="flex py-3">
              <Button
                className="hover:underline text-white md:text-base sm:text-sm text-xs px-2 py-1"
                content="Forgot your password?"
              />
            </div>
            <div className="flex mt-4 pb-2 sm:pb-0 sm:mb-0 sm:py-2 pl-1">
              <CheckBox
                text="Remember Me"
                className="bg-white"
                checkBg="bg-blue-500 border-C2-B"
              />
            </div>
          </div>

          <div className="flex flex-col items-center px-5 sm:px-8 lg:px-7 xl:px-6 mb-8 sm:mb-6 md:mb-4 lg:mb-0">
            <Button
              className="w-full bg-white hover:bg-gray-200 text-C2-default sm:px-8 px-2 py-3 text-base"
              content="Login"
            />
            <div className="pt-7 sm:pt-16 md:pt-8 text-sm md:text-base text-center flex items-center">
              Don’t have an account?{" "}
              <Route
                render={({ history }) => (
                  <Button
                    className="md:text-base text-sm w-fit-content hover:shadow-none hover:underline px-2"
                    content="Sign Up"
                    onClick={() => {
                      history.push("/signup");
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
