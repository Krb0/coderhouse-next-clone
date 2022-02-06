import React from "react";
import Image from "next/image";
import Check from "../../../../assets/images/Education/check-gray.svg";
import { v4 as uuid } from "uuid";
const Section = ({ title, description, checks, id }) => {
  return (
    <div className="flex flex-col">
      <div
        className={
          id === 1 || id === 3
            ? "flex w-[92%] mx-auto justify-between items-center sm:items-left  mt-24 flex-col sm:flex-row "
            : "flex w-[92%] mx-auto justify-between items-center sm:items-left  mt-24 flex-col sm:flex-row-reverse "
        }
      >
        <div className="w-full  sm:w-[60%] sm:pl-[5%] mx-auto ">
          <h3 className="font-bold text-[36px] break-words pr-[28%] ">
            {title}
          </h3>
          <p className="pr-[40%] text-[18px] ">{description}</p>
          <div className="flex flex-col mt-4 gap-8 text-[18px] ">
            {checks.map((item) => {
              return (
                <span className="flex items-center gap-1" key={uuid()}>
                  <div className=" relative h-4 w-4">
                    <Image src={Check} layout="fill" alt="check icon" />
                  </div>
                  {item}
                </span>
              );
            })}
          </div>
          <button className="bg-primary font-black select-none text-black p-4 w-[150px] mt-4 ">
            Ver cursos
          </button>
        </div>

        <video
          autoPlay={true}
          src={
            id === 1 || id === 3
              ? "/videos/metodologia-1.webm"
              : "/videos/metodologia-2.webm"
          }
          loop={true}
          muted
          className="w-[50%]"
        />
      </div>
    </div>
  );
};

export default Section;
