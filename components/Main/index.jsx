import React from "react";
import MainLeft from "./MainLeft";
import MainRight from "./MainRight";
const Main = () => {
  return (
    <main className="w-100 bg-dark flex flex-col xl:flex-row  items-center border-b-[2.5px] border-[#222222] ">
      <MainLeft />
      <MainRight />
    </main>
  );
};

export default Main;
