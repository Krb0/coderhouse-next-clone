import React from "react";
import Image from "next/image";
import Check from "../../../../assets/images/Education/check-gray.svg";
import { v4 as uuid } from "uuid";
const Section = ({ title, description, checks, id }) => {
  return (
    <div className="flex flex-col">
      <div
        className={id === 1 || id === 3 ? "section-row" : "section-row-reverse"}
      >
        <div className="w-full  sm:w-[100%] sm:pl-[5%] mx-auto ">
          <h3 className="font-bold text-[26px] sm:text-[36px] text-center break-words sm:pr-[28%] ">
            {title}
          </h3>
          <p className="sm:pr-[40%] text-[15px] sm:text-[18px] mt-4 ">
            {description}
          </p>
          <div className="flex flex-col mt-4 gap-8 text-[14px] sm:text-[18px] ">
            {checks.map((item) => {
              return (
                <span className="flex items-center gap-1" key={uuid()}>
                  <div className=" relative h-3 w-3 sm:h-4 sm:w-4">
                    <Image src={Check} layout="fill" alt="check icon" />
                  </div>
                  {item}
                </span>
              );
            })}
          </div>
          <button className="bg-primary font-black select-none text-black p-4 w-[200px] sm:w-[180px] scale-75 sm:scale-100 text-[14px] mt-4 ">
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
          className=" w-full mt-20 sm:w-[50%] sm:mt-auto"
        />
      </div>
    </div>
  );
};

export default Section;
