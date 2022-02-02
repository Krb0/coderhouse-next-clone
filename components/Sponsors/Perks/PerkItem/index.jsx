import React from "react";
import Image from "next/image";
const PerkItem = ({ title, description, icon }) => {
  return (
    <div className="col-span-3 md:col-span-1 flex flex-col  ">
      <div className="relative h-14 w-14 mb-3 ">
        <Image src={icon} alt={title} />
      </div>
      <h3 className="mb-4 text-[18px] font-bold">{title}</h3>
      <span className="text-[14px] font-extralight ">{description}</span>
    </div>
  );
};

export default PerkItem;
