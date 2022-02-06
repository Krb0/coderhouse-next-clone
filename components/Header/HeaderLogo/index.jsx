import React from "react";
import Image from "next/image";
import LogoIcon from "../../../assets/images/Header/Logo.svg";
import LogoDark from "../../../assets/images/Header/Logo_dark.svg";
const HeaderLogo = ({ inView }) => {
  return (
    <div className="h-9 relative max-w-[200px] col-span-1 ">
      <Image
        className="select-none cursor-pointer"
        src={inView ? LogoDark : LogoIcon}
        layout="fill"
        alt="Logo"
      />
    </div>
  );
};

export default HeaderLogo;
