import React from "react";
import InfobaeIcon from "../../../assets/images/Sponsors/Testimonials/Infobae.svg";
import ClarinIcon from "../../../assets/images/Sponsors/Testimonials/Clarin.svg";
import ForbesIcon from "../../../assets/images/Sponsors/Testimonials/Forbes.svg";
import NacionIcon from "../../../assets/images/Sponsors/Testimonials/Nacion.svg";
import TestimonialItem from "./TestimonialItem";

const Testimonials = () => {
  const TestimonialsList = [
    {
      name: "Infobae",
      icon: InfobaeIcon,
      message:
        "La metodología que convierte a esta empresa en una de las más innovadoras en educación.",
    },
    {
      name: "Clarin",
      icon: ClarinIcon,
      message:
        "Cuál es la empresa que está revolucionando la educación online. ",
    },
    {
      name: "Nacion",
      icon: NacionIcon,
      message:
        "Educación online: la primera escuela 100% digital es argentina y ya está premiada.",
    },
    {
      name: "Forbes",
      icon: ForbesIcon,
      message: "Coderhouse es una de las 30 promesas del 2020.",
    },
  ];
  return (
    <section className="grid grid-cols-4 pt-12 gap-10 mb-6 ">
      {TestimonialsList.map((data) => (
        <TestimonialItem key={data.name} {...data} />
      ))}
    </section>
  );
};

export default Testimonials;
