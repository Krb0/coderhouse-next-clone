import React from "react";
import Image from "next/image";
import CoderImg from "../../assets/images/Main/Coder.png";
const MainRight = () => {
  return (
    <article className="w-[80%] xl:w-[35%] min-w-[200px] mx-auto">
      <section className="relative w-full h-full my-20 ">
        <Image
          className="  bg-transparent"
          src={CoderImg}
          priority={true}
          layout="responsive"
          alt="Coder banner"
        />
      </section>
    </article>
  );
};

export default MainRight;
