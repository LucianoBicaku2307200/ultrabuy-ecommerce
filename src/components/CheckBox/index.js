import React, { useState } from "react";
import { Switch } from "@headlessui/react";
import Checked from "../../images/svg/checked.svg";
const CheckBox = ({ selected, text }) => {
  const [enabled, setEnabled] = useState(selected);
  return (
    <div className="flex items-center p-1">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${
          enabled ? "bg-C2-default  border-C2-B" : "bg-transparent border-C1-D "
        } relative border-2 transition duration-200 ease-linear outline-none focus:outline-none inline-flex items-center h-5 rounded-sm w-5`}
      >
        <img
          className={`${
            enabled ? "opacity-100" : "opacity-0"
          } inline-block transition duration-200 ease-linear outline-none focus:outline-none`}
          src={Checked}
          alt=""
        />
      </Switch>
      <div className="ml-2">{text}</div>
    </div>
  );
};

export default CheckBox;