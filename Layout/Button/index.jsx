import React from "react";

const Button = ({ title, width, extra }) => {
  return (
    <button
      className={`text-black p-4 bg-primary w-[${
        width ? width : "100%"
      }] font-black select-none ${extra ? extra : ""} `}
    >
      {title ? title : "Submit"}
    </button>
  );
};

export default Button;
