import React, { useContext } from "react";
import CoderBeca from "./CoderBeca";
import VideoColumn from "./VideoColumn";
import { SectionContext } from "../../Context/SectionContext";
const Education = () => {
  const [ref] = useContext(SectionContext);
  return (
    <div ref={ref}>
      <CoderBeca />
      <VideoColumn />
    </div>
  );
};

export default Education;
