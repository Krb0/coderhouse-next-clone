import React from "react";

const MainLeft = () => {
  return (
    <article className=" w-[80%] xl:w-[50%] min-w-[200px] xl:pl-[15%] py-16 flex flex-col">
      <div className="flex flex-col w-[80%] sm:w-[100%] text-center sm:text-left items-center sm:items-start self-center">
        <h2 className="break-words text-white font-bold text-[32px] sm:text-[48px]">
          Unite a la comunidad de aprendizaje online en vivo más grande de
          Latinoamérica
        </h2>
        <hr className="w-8 h-0.5 sm:h-1  sm:w-14  mt-8 bg-primary border-none  " />
        <p className="text-lightgray-200 mt-4 mb-12 w-[100%]  text-[12px] sm:text-[15px] break-words">
          Clases online en vivo dictadas por expertos de la industria, enfoque
          100% práctico, mentorías personalizadas y acceso a una comunidad de
          +65.000 estudiantes.
        </p>
      </div>
      <div className="flex w-100 flex-col sm:items-start">
        <div className="flex flex-col items-center ">
          <button className="bg-primary font-black select-none text-black p-4 w-[190px] scale-75 sm:scale-100 text-[14px] ">
            Ver todos los cursos
          </button>
          <span className="block text-lightgray-100 text-xs italic ">
            Calidad 100% asegurada
          </span>
        </div>
      </div>
    </article>
  );
};

export default MainLeft;
