import React, { useState } from "react";
import { Route } from "react-router-dom";
import { useHistory } from "react-router";
import validator from "validator";
import { Button, CheckBox, Input } from "../../components";
import passwordValidation from "../../hooks/passwordValidation/passwordValidation";

import Envelope from "../../images/svg/ic-contact-mail.svg";
import Lock from "../../images/svg/ic-security-locked.svg";
import Person from "../../images/svg/ic-person.svg";
import Thing from "../../images/svg/loginscreen-thing.js";
import Logo from "../../images/svg/logo.js";

const Index = () => {
  const [password, setPassword] = useState({
    firstPassword: "",
    secondPassword: "",
  });
  const [mailErr, setErrMail] = useState(false);
  const [passErr, setErrPass] = useState(false);

  const [validLength, hasNumber, upperCase, lowerCase, match, specialChar] =
    passwordValidation({
      firstPassword: password.firstPassword,
      secondPassword: password.secondPassword,
    });
  const setFirst = (event) => {
    setPassword({ ...password, firstPassword: event.target.value });
    validator.isStrongPassword(event.target.value)
      ? setErrPass(false)
      : setErrPass(true);
  };
  const setSecond = (event) => {
    setPassword({ ...password, secondPassword: event.target.value });
  };

  const history = useHistory();

  function handleClick() {
    history.push("/");
  }

  function policyTos() {
    history.push("/soon");
  }

  function validateEmail(val) {
    validator.isEmail(val) ? setErrMail(false) : setErrMail(true);
  }

  const inputsCont = [
    {
      title: "Username",
      placeholder: "Enter your username",
      icon: Person,
      clsInput:
        "h-10 px-2 w-full rounded mt-2 focus:outline-none shadow text-gray-700 bg-white focus-within:border-C2-B",
      type: "text",
    },

    {
      title: "Email address",
      placeholder: "Enter your email",
      icon: Envelope,
      clsInput: `h-10 px-2 w-full rounded mt-2 focus:outline-none shadow text-gray-700 bg-white ${
        mailErr ? " " : " focus-within:border-C2-B "
      }`,
      type: "email",
      onChange: (event) => validateEmail(event.target.value),
      error: mailErr,
      errorMessage: mailErr ? "Enter a valid email address" : "",
    },

    {
      title: "Password",
      placeholder: "Enter your password",
      icon: Lock,
      clsInput: `h-10 px-2 w-full rounded mt-2 focus:outline-none shadow text-gray-700 bg-white ${
        passErr ? " " : " focus-within:border-C2-B "
      }`,
      type: "password",
      onChange: setFirst,
      error: passErr,
      errorMessage: passErr ? "Enter a valid strong password" : "",
    },

    {
      title: "Confirm Password",
      placeholder: "Confirm your password",
      icon: Lock,
      clsInput: `h-10 px-2 w-full rounded mt-2 focus:outline-none shadow text-gray-700 bg-white ${
        match ? " focus-within:border-C2-B " : " "
      }`,
      type: "password",
      onChange: setSecond,
      error: match ? false : true,
      errorMessage: match ? "" : "The passwords don't match",
    },
  ];

  return (
    <div className="flex min-h-screen h-full bg-C2-default min-w-screen w-full justify-center">
      <div className="hidden md:flex md:flex-col min-h-screen md:w-2/5 lg:w-1/2 bg-white">
        <div className="flex flex-row justify-between items-center w-full">
          <h2
            className="font-bold text-xl mx-10 cursor-pointer"
            onClick={handleClick}
          >
            <span className="text-C2-default">Ultra</span>
            Buy
          </h2>
          <div
            className="flex md:w-8 lg:w-12 xl:w-16 mx-10 py-3 cursor-pointer"
            onClick={handleClick}
          >
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
            {inputsCont.map((el, index) => (
              <div
                key={index}
                className="flex pt-2 sm:pt-4 justify-center w-full"
              >
                <Input
                  label={el.title}
                  placeholder={el.placeholder}
                  error={el.error}
                  errorMessage={el.errorMessage}
                  icon={el.icon}
                  type={el.type}
                  onChange={el.onChange}
                  className="rounded-lg flex h-full w-full"
                  classLabel="text-lg font-semibold fleading-tight -mb-1"
                  classInput={el.clsInput}
                  classInputInside="w-full"
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center px-5 sm:px-8 lg:px-7 xl:px-6 mb-8 sm:mb-6 md:mb-4 md:py-2">
            <div className="flex flex-wrap flex-row text-sm py-2 items-center self-start">
              <CheckBox
                className="bg-gray-100 pl-px"
                checkBg="bg-blue-500 border-C2-B"
                selected={false}
              />
              <p className="pl-1">
                I agree with your{" "}
                <span className="underline cursor-pointer" onClick={policyTos}>
                  ToS
                </span>{" "}
                and{" "}
                <span className="underline cursor-pointer" onClick={policyTos}>
                  privacy policy
                </span>
                .
              </p>
            </div>
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
