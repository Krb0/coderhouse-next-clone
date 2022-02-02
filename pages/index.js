import Head from "next/head";
import Image from "next/image";
import Logo from "../assets/images/Logo.svg";
import ChevronDown from "@heroicons/react/outline/ChevronDownIcon";
import UserIcon from "../assets/images/User.svg";
import CoderImg from "../assets/images/Coder.svg";
import MenuLogo from "@heroicons/react/outline/MenuAlt1Icon";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Coderhouse | Aprendé haciendo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="sticky top-0 z-50 grid grid-cols-4 bg-dark shadow-xl py-8 items-center px-8">
        <div className="h-9 relative max-w-[200px] col-span-1 ">
          <Image
            className="select-none cursor-pointer"
            src={Logo}
            layout="fill"
            alt="Logo"
          />
        </div>

        <nav className="hidden col-span-0 xl:flex xl:col-span-2 h-9 relative  font-normal text-white space-x-6 items-center justify-center text-[18px]  nav-list ">
          <div className="flex space-x-2">
            <span>Cursos y Carreras</span>
            <ChevronDown className="w-5" />
          </div>
          <div className="flex space-x-2">
            <span>Comunidad</span>
            <ChevronDown className="w-5" />
          </div>
          <span>Para empresas</span>
          <span>Nosotros</span>
          <div className="flex space-x-2 items-center ">
            <div className="w-5 h-5">
              <Image src={UserIcon} alt="User Icon"></Image>
            </div>
            <span>Plataforma</span>
          </div>
        </nav>
        <div className="hidden col-span-0 xl:flex xl:col-span-1   justify-end">
          <button className="text-black p-4 bg-primary w-[150px] font-black select-none ">
            Ver cursos
          </button>
        </div>
        <div className="xl:hidden col-span-3 flex justify-end items-center">
          <MenuLogo className=" h-10 text-white" />
        </div>
      </header>
      <div className="w-100 bg-dark h-screen grid grid-cols-2">
        <div className="col-span-1 pl-80 py-16">
          <h2 className="break-words text-white font-bold text-[48px]">
            Unite a la comunidad de aprendizaje online en vivo más grande de
            Latinoamérica
          </h2>
          <div className="w-14 h-1 mt-8 bg-primary" />
          <p className="text-lightgray-200   my-4 w-[656px] font-[15px] leading-[23px] ">
            Clases online en vivo dictadas por expertos de la industria, enfoque
            100% práctico, mentorías personalizadas y acceso a una comunidad de
            +65.000 estudiantes.
          </p>
          <button className="text-black p-4 bg-primary w-[190px] font-black select-none ">
            Ver todos los cursos
          </button>
          <span className="block text-lightgray-100 text-xs italic ml-5 mt-5 ">
            Calidad 100% asegurada
          </span>
        </div>
        <div className="col-span-1 ">
          <div className="relative h-[440px] w-[650px] ml-44 my-20 shadow-primary">
            <Image
              className="  bg-transparent"
              src={CoderImg}
              layout="fill"
              alt="Coder banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
