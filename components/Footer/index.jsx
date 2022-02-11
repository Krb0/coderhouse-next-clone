import React from "react";
import Send from "../../assets/images/Footer/Send.svg";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="flex w-full sm:items-center py-20 bg-black  mt-6">
      <div className="mx-auto grid grid-cols-4 h-full w-full px-[10%]  ">
        <div className="col-span-2 sm:col-span-1">
          <h2 className="text-primary font-semibold text-md">Cursos</h2>
          <ul className="footer-list">
            <li>Programación</li>
            <li>Diseño UI/UX</li>
            <li>Marketing Digital</li>
            <li>Producto</li>
            <li>Data</li>
            <li>Inversiones & Finanzas</li>
            <li>Business</li>
          </ul>
        </div>
        <div className="col-span-2 sm:col-span-1">
          <h2 className="text-primary font-semibold text-md">Coders</h2>
          <ul className="footer-list">
            <li>Plataforma</li>
            <li>Preguntas frecuentes</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="col-span-2 sm:col-span-1 mt-4 sm:mt-0">
          <h2 className="text-primary font-semibold text-md">Nosotros</h2>
          <ul className="footer-list">
            <li>Botón de arrepentimiento</li>
            <li>Testimonios</li>
            <li>Alianzas</li>
            <li>Profesores</li>
            <li>Convertite en profesor</li>
            <li>Prensa</li>
            <li>Protección de Datos Personales</li>
          </ul>
        </div>
        <div className="col-span-2 sm:col-span-1 mt-4 sm:mt-0">
          <h2 className="text-primary font-semibold text-md">Equipo</h2>
          <ul className="footer-list">
            <li>Referidos</li>
            <li>Empresas</li>
            <li>Nuestra historia</li>
            <li>Trabajá con nosotros</li>
            <li>Terminos de uso</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
