import React from "react";
import Image from "next/image";
import RocketIcon from "../../../assets/images/Quality.svg";
import ListingIcon from "../../../assets/images/Education.svg";
import CoursesIcon from "../../../assets/images/Courses.svg";
const Perks = () => {
  return (
    <section className="bg-primary h-40 w-100% grid grid-cols-3 ">
      <div className="col-span-1 flex flex-col justify-start ">
        <div className="relative h-6 w-6">
          <Image src={CoursesIcon} alt="Courses completed" />
        </div>
        <h3>Title</h3>
        <span>lorem ipsum jkksk sjdkajskd lskdlaksdj dkasdjkasldsa </span>
        <span>Fuente: Andreesen test </span>
      </div>

      <div className="col-span-1 flex flex-col justify-start ">
        <div className="relative h-6 w-6">
          <Image src={ListingIcon} alt="Courses completed" />
        </div>
        <h3>Title</h3>
        <span>lorem ipsum jkksk sjdkajskd lskdlaksdj dkasdjkasldsa </span>
        <span>Fuente: Andreesen test </span>
      </div>

      <div className="col-span-1 flex flex-col justify-start ">
        <div className="relative h-6 w-6">
          <Image src={RocketIcon} alt="Courses completed" />
        </div>
        <h3>Title</h3>
        <span>lorem ipsum jkksk sjdkajskd lskdlaksdj dkasdjkasldsa </span>
        <span>Fuente: Andreesen test </span>
      </div>
    </section>
  );
};

export default Perks;
