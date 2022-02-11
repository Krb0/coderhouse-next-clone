import React from "react";
import UserIcon from "../../assets/images/Header/User.svg";
import Image from "next/image";
import ChevronDown from "@heroicons/react/outline/ChevronDownIcon";
const Navigation = ({ inView }) => {
  return (
    <nav className={inView ? "navigation-dark" : "navigation"}>
      <div className="flex space-x-2">
        <span>Cursos y Carreras</span>
        <ChevronDown className="w-5" />
      </div>
      <div className="flex space-x-2">
        <span>Comunidad</span>
        <ChevronDown className="w-5" />
      </div>
      <span>Para empresas</span>
      <span>Nosotros</span>
      <div className="flex space-x-2 items-center ">
        <div className="w-5 h-5">
          <Image src={UserIcon} alt="User Icon"></Image>
        </div>
        <span>Plataforma</span>
      </div>
    </nav>
  );
};

export default Navigation;
