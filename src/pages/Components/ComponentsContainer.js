import React from "react";

const ComponentsContainer = ({ children, title, id, ...rest }) => {
  return (
    <div className="m-4 border-b border-black">
      <div id={id} className="m-3 pb-1">
        <h1 className="font-medium text-lg my-2">{title}</h1>
        <div className="flex items-end flex-wrap">{children}</div>
      </div>
    </div>
  );
};

export default ComponentsContainer;
