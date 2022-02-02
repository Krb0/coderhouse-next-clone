import React from "react";
import MenuLogo from "@heroicons/react/outline/MenuAlt1Icon";
const HeaderMenu = () => {
  return (
    <div className="xl:hidden col-span-3 flex justify-end items-center">
      <MenuLogo className=" h-10 text-white" />
    </div>
  );
};

export default HeaderMenu;
