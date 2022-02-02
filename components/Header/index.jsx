import React from "react";

import Logo from "./HeaderLogo";
import Navigation from "./Navigation";
import HeaderButton from "./HeaderButton";
import HeaderMenu from "./HeaderMenu";
const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-4 bg-dark shadow-xl py-8 items-center px-8">
      <Logo />
      <Navigation />
      <HeaderButton />
      <HeaderMenu />
    </header>
  );
};

export default Header;
