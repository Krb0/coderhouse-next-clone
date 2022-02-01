import Head from "next/head";
import Image from "next/image";
import Logo from "../assets/images/Logo.svg";
import ChevronDown from "@heroicons/react/outline/ChevronDownIcon";
import UserIcon from "../assets/images/User.svg";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Coderhouse | Aprendé haciendo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="sticky top-0 z-50 grid grid-cols-4 bg-dark shadow-xl py-8 items-center px-8">
        <div className="h-9 relative max-w-[200px] col-span-1 ">
          <Image className="select-none" src={Logo} layout="fill" alt="Logo" />
        </div>

        <nav className="h-9 relative flex font-normal text-white space-x-6 items-center justify-center text-[18px] col-span-2 nav-list ">
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
        <div className="col-span-1 flex justify-end">
          <button className="text-black p-4 bg-primary w-[150px] font-bold select-none">
            Ver Cursos
          </button>
        </div>
      </header>
    </div>
  );
}
