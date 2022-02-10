import React from "react";
import data from "./SectionData";

import Section from "./Section";
const VideoColumn = () => {
  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-[46px] sm:text-[60px] self-center break-words sm:w-[500px] text-center ">
        Educación online que funciona
      </h2>
      {data.map((item) => (
        <Section {...item} key={item.title} />
      ))}
    </div>
  );
};

export default VideoColumn;
