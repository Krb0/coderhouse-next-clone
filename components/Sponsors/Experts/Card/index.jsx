import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
const Card = ({ name, img, country, position, company }) => {
  return (
    <motion.div className="h-full min-w-[310px] flex flex-col items-center card-gradient  ">
      <div className="relative  h-32 w-32 mt-4">
        <Image
          alt="expert"
          layout="fill"
          src={img}
          className="rounded-full"
          objectFit="cover"
          objectPosition={"center"}
          draggable="false"
        />
      </div>
      <h2 className="text-xl mt-6 text-white text-[18px] font-bold inner-block flex items-center gap-2 ">
        <div className="relative h-[19px] w-[22px] ">
          <Image
            src={country}
            layout="fill"
            objectFit="contain"
            alt="country flag"
          />
        </div>
        {name}
      </h2>
      <span className="mt-6 text-white text-[14px] ">{position}</span>
      <div className="px-6 bg-white rounded-full mt-6">
        <div className="relative h-[40px] w-[120px] ">
          <Image
            src={company}
            layout="fill"
            objectFit="contain"
            alt="company"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
