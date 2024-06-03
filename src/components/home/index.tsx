"use client";
import { Link } from "react-router-dom";
import { TbLock } from "react-icons/tb";

export function HomePage() {
  return (
    <>
      <div className="w-full h-full  bg-blue-700 pt-24 pb-24 flex justify-center items-center custom-margin">
        <div className="w-full h-auto  m-auto flex flex-row justify-center gap-4  custom-container">
          <div className="w-[650px] flex flex-col  gap-8  custom-h1 px-2 ">
            <h1 className="text-white font-bold text-5xl w-full  ">
              Abertura de CNPJ MEI online
            </h1>
            <p className="text-white font-medium text-base ">
              Abra um CNPJ MEI e desfrute dos benefícios de ser seu próprio
              chefe. Simplificado, rápido e acessível. Comece hoje mesmo!
            </p>
          </div>

          <div className="w-[600px] flex flex-col bg-[#00BF00] rounded-lg p-5 px-12 mr-2  custom-h1 ">
            <div className="w-full flex justify-center items-center">
              <h1 className="font-bold text-white text-4xl">Abrir seu MEI</h1>
            </div>

            <div className="w-full  flex items-center justify-center mt-7">
              <p className="text-white font-medium w-full">
                Aqui seus dados estão seguros e serão utilizados para fins de
                uso interno em nossa plataforma.
                <TbLock color="white" fontSize="large" />
              </p>
            </div>
            <div className="w-full flex justify-center items-center mt-5">
              <Link to="/abrir-mei/formulario/">
                <button className="bg-[#FFEC00] px-12 py-2 rounded-lg text-blue-600 text-lg font-bold hover:bg-yellow-50  ">
                  ABRIR MEI
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-full  bg-red-400 pt-24 pb-24 flex justify-center items-center custom-margin">
        <div className="w-full h-auto  m-auto flex flex-row justify-center gap-4  custom-container">
          <div>
            <div className="max-w-xl p-6 bg-white border border-gray-200 rounded-lg shadow  dark:border-gray-700">
              <div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                  Quem pode abrir um MEI?
                </h5>
              </div>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Existem alguns pré-requisitos para se formalizar como MEI
                (Microempreendedor Individual).
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>
                  Ser maior de 18 anos (ou ter entre 16 – 18 anos e/ou ser
                  emancipado)
                </li>
                <li>Atuar com uma das atividades permitidas pelo MEI</li>
                <li>
                  Faturamento limitado a R$ 81.000,00 por ano (receita bruta)
                </li>
                <li>
                  Não participar como sócio, administrador ou titular de outra
                  empresa
                </li>
                <li>Não ter empregado ou ter no máximo um</li>
              </ul>

              <p className="mb-3 mt-4 font-normal text-gray-700 dark:text-gray-400">
                E aí, se encaixa nos pré-requisitos? Então você pode ser MEI!
                Faça a abertura do seu CNPJ MEI agora mesmo.
              </p>
              <div className="bg-red-600 flex items-center justify-center">
                <a
                  href="#"
                  className="inline-flex items-center px-8 py-2 text-sm font-medium text-center justify-center text-white bg-[#00BF00] rounded-lg hover:bg-[#00bf00c8] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                >
                  ABRIR MEI
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className="max-w-2xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Quem pode abrir um MEI?
                </h5>
              </div>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Existem alguns pré-requisitos para se formalizar como MEI
                (Microempreendedor Individual).
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Abrir Mei
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
