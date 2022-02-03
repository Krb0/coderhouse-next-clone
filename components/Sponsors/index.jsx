import React from "react";
import Testimonials from "./Testimonials";
import Perks from "./Perks";
import Experts from "./Experts";
const Sponsors = () => {
  return (
    <article className="md:px-[8%] bg-dark ">
      <Testimonials />
      <Perks />
      <Experts />
    </article>
  );
};

export default Sponsors;
