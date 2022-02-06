import React, { useContext } from "react";

import Logo from "./HeaderLogo";
import Navigation from "./Navigation";
import HeaderButton from "./HeaderButton";
import HeaderMenu from "./HeaderMenu";
import { SectionContext } from "../../Context/SectionContext";
const Header = () => {
  const [ref, inView] = useContext(SectionContext);
  return (
    <header className={inView ? "header-dark" : "header"}>
      <Logo inView={inView} />
      <Navigation inView={inView} />
      <HeaderButton />
      <HeaderMenu inView={inView} />
    </header>
  );
};

export default Header;
