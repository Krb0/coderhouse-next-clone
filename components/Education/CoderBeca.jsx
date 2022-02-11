import React from "react";
import CheckIcon from "../../assets/images/Education/Check.svg";
import Image from "next/image";
const CoderBeca = () => {
  return (
    <div className=" mx-auto my-20 bg-dark w-[92%]  flex flex-col sm:flex-row px-[5%] sm:px-[12%]  py-[80px] justify-between ">
      <div className="flex flex-col  w-[100%] sm:w-[44%] justify-center text-center">
        <h3 className="tracking-[0.5rem] font-medium  sm:text-[14px]  mb-4 text-primary ">
          PREMIAMOS TU COMPROMISO
        </h3>
        <h4 className="text-white text-[30px] sm:text-[38px] font-bold ">
          ¿Qué es la CoderBeca?
        </h4>
        <p className="break-words text-white text-justify">
          La CoderBeca es una forma de ofrecer cursos de alta calidad a un
          precio accesible. Los estudiantes pagan una fracción del precio real
          del curso o carrera, a cambio de un compromiso con su propia educación
          y desarrollo profesional.
        </p>
      </div>
      <div className="flex flex-col w-[100%] my-8 sm:my-auto sm:w-[40%] justify-center ">
        <h5 className="text-white  text-[24px] font-bold text-center ">
          ¿Cómo accedo?
        </h5>
        <p className="break-words text-white my-4 ">
          El acceso a la CoderBeca es automático y para todos, solo tenés que
          cumplir con 2 requisitos una vez dentro del curso:
        </p>
        <span className="flex gap-2 text-white items-center">
          <div className="relative h-5 w-5 ">
            <Image
              src={CheckIcon}
              layout="fill"
              objectFit="cover"
              alt="check icon"
            />
          </div>
          Entregar tus proyectos prácticos en tiempo y forma
        </span>
        <span className="flex gap-2 mt-2 text-white  items-center  ">
          <div className="relative h-5 w-5 ">
            <Image
              src={CheckIcon}
              layout="fill"
              objectFit="cover"
              alt="check icon"
            />
          </div>
          Cumplir con el 85% de asistencia a las clases en vivo
        </span>
      </div>
    </div>
  );
};

export default CoderBeca;
