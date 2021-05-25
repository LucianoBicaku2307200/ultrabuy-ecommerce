import React from "react";
import Lottie from "../../components/LottieAnimation";

import Animation1 from "../../images/anim_json/404_astro.json";
import Animation2 from "../../images/anim_json/404_better_4sec.json";
import Animation3 from "../../images/anim_json/404_better_5sec.json";
import Animation4 from "../../images/anim_json/404_planet.json";
import Animation5 from "../../images/anim_json/404_space_cluster.json";

const index = () => {
  const title = "Oh no, the page was not found";

  return (
    <>
      <div className="flex flex-col justify-center cursor-pointer">
        <Lottie animation={Animation1} title={title} />
        <Lottie animation={Animation2} title={title} />
        <Lottie animation={Animation3} title={title} />
        <Lottie animation={Animation4} title={title} />
        <Lottie animation={Animation5} title={title} />
      </div>
    </>
  );
};

export default index;
