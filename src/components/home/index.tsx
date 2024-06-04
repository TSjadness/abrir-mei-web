"use client";
import { Link } from "react-router-dom";
import { TbLock } from "react-icons/tb";
import Image from "next/image";
import logo from "../../images/logo-personagem.jpg";
import foto from "../../images/foto-negocios.jpg";
import { FaSellsy,FaChartBar,FaRegHandshake,FaRegStickyNote,FaPeopleArrows,FaLandmark,FaCalculator  } from "react-icons/fa";
import { FaRegMoneyBill1 } from "react-icons/fa6";


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
                <button className="bg-[#FFEC00] px-12 py-2 rounded-lg text-blue-600 text-lg font-bold hover:text-black hover:scale-110">
                  ABRIR MEI
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-full  bg-white pt-24 pb-24 flex justify-center items-center custom-margin ">
        <div className="w-full h-auto  m-auto flex flex-row justify-center gap-4  custom-container custom-reverse">
          <div>
            <div className="max-w-xl p-6 bg-white custom-card ">
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
              <div className="flex items-center ">
                <a
                  href="/abrir-mei/formulario/"
                  className="inline-flex items-center px-10 py-2 text-sm font-medium text-center justify-center text-white bg-[#00BF00] rounded-lg hover:bg-[#397c2c] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                >
                  ABRIR MEI
                </a>
              </div>
            </div>
          </div>

          <div className="h-[100%] pr-2 pl-2 custom-image">
            <div className="max-w-3xl p-0  w-full">
              <Image
                src={logo}
                width={600}
                alt="Abrir-mei-personagem"
                className="h-[100%]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-full  bg-[#F3F3F3] pt-24 pb-24 flex justify-center items-center custom-margin ">
        <div className="w-full h-auto  m-auto flex flex-row justify-center gap-4  custom-container ">
          <div>
            <div className="max-w-xl p-4  custom-card ">
              <div>
                <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 ">
                  Vantagens Para Profissionais E Para Negócios
                </h5>
              </div>
              <div className="max-w-4xl p-0  w-full mt-5">
                <Image
                  src={foto}
                  width={600}
                  alt="Abrir-mei-personagem"
                  className="h-[100%] rounded-2xl"
                />
              </div>
            </div>
          </div>

          <div className="h-[100%] pr-2 pl-2 custom-image mt-12">
            <div className="max-w-2xl p-0  w-full">
              <div className="grid grid-cols-2 md:grid-cols-2 gap-5  w-full">
                <div
                  className="flex flex-col items-start justify-center custom-grid
                "
                >
                  <div>
                    <FaSellsy className="text-4xl" color="#40c0cb" />
                  </div>
                  <h1 className="text-[#114463] text-xl font-semibold">
                    Escale Suas Vendas
                  </h1>
                  <p className="text-gray-400 text-sm">
                    Abra o MEI em poucos passos e escale sua empresa
                  </p>
                </div>

                <div
                  className=" flex flex-col items-start justify-center custom-grid
                "
                >
                  <div>
                    <FaChartBar className="text-4xl" color="#40c0cb" />
                  </div>
                  <h1 className="text-[#114463] text-xl font-semibold">
                    Clientes Com Resultados
                  </h1>
                  <p className="text-gray-400 text-sm">
                    Nossos clientes conseguem ter resultado rapidamente
                  </p>
                </div>


                 <div
                  className="flex flex-col items-start justify-center custom-grid
                "
                >
                  <div>
                    <FaRegHandshake className="text-4xl" color="#40c0cb" />
                  </div>
                  <h1 className="text-[#114463] text-xl font-semibold">
                    Benefícios Com INSS
                  </h1>
                  <p className="text-gray-400 text-sm">
                    Você pode ter esses benefícios com sua MEI
                  </p>
                </div>



                <div
                  className="flex flex-col items-start justify-center custom-grid
                "
                >
                  <div>
                    <FaRegStickyNote className="text-4xl" color="#40c0cb" />
                  </div>
                  <h1 className="text-[#114463] text-xl font-semibold">
                    Emita Notas Fiscais
                  </h1>
                  <p className="text-gray-400 text-sm">
                    Emita notas fiscais com seu CNPJ
                  </p>
                </div>


                 <div
                  className="flex flex-col items-start justify-center custom-grid
                "
                >
                  <div>
                    <FaRegMoneyBill1 className="text-4xl" color="#40c0cb" />
                  </div>
                  <h1 className="text-[#114463] text-xl font-semibold">
                    Empréstimos
                  </h1>
                  <p className="text-gray-400 text-sm">
                    Com um CNPJ, você terá acesso a mais empréstimos
                  </p>
                </div>

                <div
                  className="flex flex-col items-start justify-center custom-grid
                "
                >
                  <div>
                    <FaPeopleArrows className="text-4xl" color="#40c0cb" />
                  </div>
                  <h1 className="text-[#114463] text-xl font-semibold">
                    Promoção De Parcerias
                  </h1>
                  <p className="text-gray-400 text-sm">
                    Você consegue parcerias com outros CNPJ
                  </p>
                </div>


                <div
                  className="flex flex-col items-start justify-center custom-grid
                "
                >
                  <div>
                    <FaLandmark  className="text-4xl" color="#40c0cb" />
                  </div>
                  <h1 className="text-[#114463] text-xl font-semibold">
                    Conta PJ
                  </h1>
                  <p className="text-gray-400 text-sm">
                    PJ com gerenciamento em qualquer banco
                  </p>
                </div>


                  <div
                  className="flex flex-col items-start justify-center custom-grid
                "
                >
                  <div>
                    <FaCalculator className="text-4xl" color="#40c0cb" />
                  </div>
                  <h1 className="text-[#114463] text-xl font-semibold">
                    Não Gaste Com Contador
                  </h1>
                  <p className="text-gray-400 text-sm">
                    Por aqui, tudo é mais fácil e conseguido pela palma da sua mão.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
