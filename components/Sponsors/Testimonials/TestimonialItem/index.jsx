import React from "react";
import Image from "next/image";
import OpeningQuotes from "../../../../assets/images/opening-quotes.svg";
import ClosingQuotes from "../../../../assets/images/closing-quotes.svg";
const TestimonialItem = ({ name, icon, message }) => {
  return (
    <div className="col-span-4 sm:col-span-2 xl:col-span-1 flex flex-col">
      <span className=" h-[100%] text-white text-center text-[15px] ">
        <div className="relative aspect-square h-4 mr-1  inline-block">
          <Image alt="Opening quotes" src={OpeningQuotes} layout="fill" />
        </div>
        {message}
        <div className="relative aspect-square h-4 ml-1 inline-block">
          <Image alt="Closing quotes" src={ClosingQuotes} layout="fill" />
        </div>
      </span>

      <div className="">
        <Image alt={name} src={icon} layout="responsive" />
      </div>
      <hr className="sm:hidden w-full h-5 mt-1 bg-[#222222] border-none  self-center " />
    </div>
  );
};

export default TestimonialItem;
