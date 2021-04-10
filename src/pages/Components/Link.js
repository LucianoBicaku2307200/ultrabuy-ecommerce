import React from "react";

const Link = ({ id, content }) => {
  return (
    <a
      href={id}
      className="border bg-white text-black px-3 py-1 rounded mx-2 my-1 inline-block"
    >
      {content}
    </a>
  );
};

export default Link;
