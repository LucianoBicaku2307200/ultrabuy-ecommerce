import React from "react";
import Lottie from "../../components/LottieAnimation";

import Animation1 from "../../images/anim_json/underconstr_billb.json";
import Animation2 from "../../images/anim_json/underconstr_monitor.json";
import Animation3 from "../../images/anim_json/underconstr_wall.json";

const UnderConstructionPage = () => {
  const title = "Soon ™";

  return (
    <>
      <div className="flex flex-col justify-center cursor-pointer">
        <Lottie animation={Animation1} title={title} />
        <Lottie animation={Animation2} title={title} looping={false} />
        <Lottie animation={Animation3} title={title} />
      </div>
    </>
  );
};

export default UnderConstructionPage;
