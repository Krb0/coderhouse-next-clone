import React from "react";

const HeaderButton = () => {
  return (
    <div className="hidden col-span-0 xl:flex xl:col-span-1   justify-end">
      <button className="bg-primary font-black select-none text-black p-4 w-[150px] ">
        Ver cursos
      </button>
    </div>
  );
};

export default HeaderButton;
