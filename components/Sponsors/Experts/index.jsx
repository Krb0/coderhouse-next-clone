import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import data from "./images";
import Card from "./Card";
const Experts = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className="sm:px-64 mt-20 pb-14">
      <motion.div
        className="h-80 overflow-hidden w-full min-w-[360px] "
        ref={carousel}
      >
        <motion.div
          className="bg-dark h-full flex gap-[50px]  "
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          {data.map((item) => (
            <Card {...item} key={item.name} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Experts;
