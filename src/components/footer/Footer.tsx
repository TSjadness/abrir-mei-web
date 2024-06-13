import React from "react";
import logo from "../../images/logo-mei.png";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#82A0D633] shadow">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 text-white">
        <div className="sm:flex sm:items-center sm:justify-between"><a
                      href="/"
                      className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
                    >
                      <Image src={logo} className="w-60" alt="Flowbite Logo" />
                    </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-[#1EA230] sm:mb-0 ">
            <li>
              <a href="/privacidade" className="hover:underline me-4 md:me-6">
                Política de Privacidade
              </a>
            </li>
            <li>
              <a href="/fale-conosco" className="hover:underline me-4 md:me-6">
                Fale Conosco
              </a>
            </li>
            <li>
              <a href="/termos" className="hover:underline">
                Termos de Uso
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a href="/" className="hover:underline">
            Abrir Mei™
          </a>
          . Todos os direitos Reservados.
        </span>
      </div>
    </footer>
  );
}
