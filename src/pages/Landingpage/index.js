//import React, { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import Background from "../../images/png/background.png";
import CoverPage from "../../images/png/Cover - 1.png";

const IndexPage = () => {
  return (
    <>
      <Header />
      <div className="relative w-full h-full">
        <div className="hidden md:flex">
          <img
            className="absolute bg-cover bg-center w-full h-full inset-0"
            src={Background}
            alt=""
          />
        </div>
        <div className="relative px-4 xl:px-0 container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 pt-16 lg:pt-36 gap-8">
          <div className="text-color">
            <h1 className="text-7xl w-1/2 xl:w-full xl:text-9xl font-black f-f-l">
              Build. Review. Ship.
            </h1>
            <div className="f-f-r text-xl lg:text-3xl pb-20 sm:pb-0 pt-10 xl:pt-20">
              <h2>The next big thing starts here.</h2>
              <h2>Get Prodify and be the first to market</h2>
              <h2> with an integrated product that you love</h2>
            </div>
            <button className="hover:opacity-90 text-xl w-full xl:text-3xl xl:w-10/12 mt-4 xl:mt-11 f-f-r py-6 bg-C2-default text-white text-bold">
              Let's Build
            </button>
          </div>
          <div className>
            <img
              className="w-full lg:-ml-16 xl:-ml-44"
              src={CoverPage}
              alt=""
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default IndexPage;
