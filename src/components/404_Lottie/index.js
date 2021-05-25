import React from "react";
import Lottie from "lottie-react-web";
import animation from "../../images/anim_json/404_err.json";

const Animation_404 = ({ x, y }) => {
  return (
    <div className="flex justify-center w-full h-1/2 bg-red-400">
      <Lottie
        options={{
          animationData: animation,
          loop: true,
          autoplay: true,
        }}
        ariaRole=""
        title="Oh no the page was not found"
      />
    </div>
  );
};

export default Animation_404;
