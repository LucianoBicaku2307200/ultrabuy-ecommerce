import React from "react";
import { Header, Footer } from "../../components";
import Lottie from "../../components/404_Lottie";

const index = () => {
  return (
    <div>
      <Header />
      <div className="relative bg-purple-500 flex justify-center">
        <Lottie x={"80%"} y={"auto"} />
      </div>
      <Footer />
    </div>
  );
};

export default index;
