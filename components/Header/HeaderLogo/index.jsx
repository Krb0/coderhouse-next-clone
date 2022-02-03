import React from "react";
import Image from "next/image";
import LogoIcon from "../../../assets/images/Header/Logo.svg";
const HeaderLogo = () => {
  return (
    <div className="h-9 relative max-w-[200px] col-span-1 ">
      <Image
        className="select-none cursor-pointer"
        src={LogoIcon}
        layout="fill"
        alt="Logo"
      />
    </div>
  );
};

export default HeaderLogo;
