import React from "react";
import { useHistory } from "react-router";
import Lottie from "lottie-react-web";

const Animation_404 = ({ animation, title, looping }) => {
  const history = useHistory();

  function handleClick() {
    history.push("/welcome");
  }

  return (
    <div className="flex justify-center" onClick={handleClick}>
      <Lottie
        options={{
          animationData: animation,
          loop:
            looping === "" || looping === undefined || looping === null
              ? true
              : looping,
          autoplay: true,
        }}
        ariaRole=""
        title={title}
      />
    </div>
  );
};

export default Animation_404;
