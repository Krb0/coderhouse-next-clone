import React from "react";

const Button = ({ title, width, extra }) => {
  return (
    <button
      className={` bg-primary w-[${
        width ? width : "100%"
      }] font-black select-none ${extra ? extra : ""} text-black p-4 `}
    >
      {title ? title : "Submit"}
    </button>
  );
};

export default Button;
