import React from "react";
import RocketIcon from "../../../assets/images/Quality.svg";
import ListingIcon from "../../../assets/images/Education.svg";
import CoursesIcon from "../../../assets/images/Courses.svg";
import PerkItem from "./PerkItem";
const Perks = () => {
  const perksData = [
    {
      icon: CoursesIcon,
      title: "+90% de cursos terminados",
      description:
        "Todos online en vivo, vs. 3 a 6% en plataformas de cursos pregrabados.",
    },
    {
      icon: ListingIcon,
      title: "Educación a precios accesibles",
      description:
        "Diseñamos la CoderBeca para que la educación sea accesible para todas las personas.",
    },
    {
      icon: RocketIcon,
      title: "Contenidos de alta calidad",
      description:
        "Desarrollamos nuestros cursos y carreras con las mejores empresas y profesionales del mercado.",
    },
  ];
  return (
    <section className="bg-primary  w-100% grid grid-cols-3  px-[7%] gap-14 py-[4%] ">
      {perksData.map((data) => (
        <PerkItem key={data.title} {...data} />
      ))}
    </section>
  );
};

export default Perks;
