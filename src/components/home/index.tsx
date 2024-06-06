"use client";
import { Link } from "react-router-dom";
import { TbLock } from "react-icons/tb";
import Image from "next/image";
import logo from "../../images/logo-personagem.jpg";
import foto from "../../images/foto-negocios.jpg";
import {
  FaSellsy,
  FaChartBar,
  FaRegHandshake,
  FaRegStickyNote,
  FaPeopleArrows,
  FaLandmark,
  FaCalculator,
} from "react-icons/fa";
import { FaRegMoneyBill1 } from "react-icons/fa6";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";

export function HomePage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionData = [
    {
      question: "COMO EMITIR NOTA FISCAL MEI?",
      answer: `O MEI não é obrigado a emitir nota fiscal para pessoas físicas,
      em qualquer situação. Agora, em casos de venda ou prestação de
      serviços para pessoas jurídicas, é obrigatória a emissão da nota
      fiscal. Em algumas cidades do Brasil existe a possibilidade da
      emissão da Nota Fiscal Eletrônica, o que facilita bastante este
      processo. Caso você precise emitir nota fiscal, consulte a
      prefeitura da sua cidade para saber qual o procedimento na sua
      região. Se você quer começar um negócio ou já trabalha por conta
      própria e fatura até R$ 81 mil por ano, você pode ser um MEI
      (Microempreendedor Individual).`,
    },
    {
      question: "O QUE É MEI?",
      answer: `MEI significa Microeemprendedor Individual, ou seja, um
      profissional autônomo. Quando você se cadastra como um, você
      passa a ter CNPJ, ou seja, tem facilidades com a abertura de
      conta bancária, no pedido de empréstimos e na emissão de notas
      fiscais, além de ter obrigações e direitos de uma pessoa
      jurídica.`,
    },
    {
      question: "QUAIS OS BENEFÍCIOS DE SER MEI?",
      answer: (
        <ul className="list-disc pl-5">
          <li>Regularização sem Burocracia</li>
          <li>Cobertura Previdenciária</li>
          <li>Acesso a Serviços Bancários</li>
          <li>Emissão de Nota Fiscal e possibilidade de Venda</li>
        </ul>
      ),
    },
    {
      question: "QUEM PODE SER MEI?",
      answer: `Pode se formalizar como MEI todo trabalhador autônomo e dono de
      pequeno negócio que atende aos seguintes requisitos: Faturar até
      R$ 81 mil ao ano (R$ 6.750 por mês).`,
    },
    {
      question: "QUANTO CUSTA ABRIR UM MEI?",
      answer: `O nosso serviço de abertura de MEI custa apenas R$193,00.`,
    },
  ];


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
                    <FaLandmark className="text-4xl" color="#40c0cb" />
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
                    Por aqui, tudo é mais fácil e conseguido pela palma da sua
                    mão.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-auto  bg-blue-700 pt-24 pb-24 flex justify-center items-center custom-margin ">
        <div className=" w-full flex flex-col items-center justify-center gap-8 lg:flex-col">
          <div className="w-auto custom-container">
            <h1 className="text-3xl font-bold text-white ">
              Como funciona a abertura conosco?
            </h1>
          </div>

          <div className="max-w-6xl p-0 w-full pl-2 pr-2 ">
            <div className="flex flex-row gap-8 w-full custom-container">
              <div className="text-white flex flex-col items-center justify-center">
                <h1 className="text-5xl font-bold text-[#F1FF00] p-8">1</h1>
                <p className="text-base text-center font-bold">
                  Solicite o formulário no botão
                </p>
                <span className="text-center text-sm">
                  Clique em qualquer um dos botões “Abrir MEI
                </span>
              </div>

              <div className="text-white flex flex-col items-center justify-center">
                <h1 className="text-5xl font-bold text-[#F1FF00] p-8">2</h1>
                <p className="text-base text-center font-bold">
                  Preencha os dados no formulário
                </p>
                <span className="text-center text-sm">
                  Preencha o formulário que virá após o clique
                </span>
              </div>

              <div className="text-white flex flex-col items-center justify-center">
                <h1 className="text-5xl font-bold text-[#F1FF00] p-8">3</h1>
                <p className="text-base text-center font-bold w-40 sm:w-auto">
                  Conferimos os seus dados
                </p>
                <span className="text-center text-sm">
                  Assim que preenchidos, analisamos os seus dados
                </span>
              </div>

              <div className="text-white flex flex-col items-center justify-center">
                <h1 className="text-5xl font-bold text-[#F1FF00] p-8">4</h1>
                <p className="text-base text-center font-bold">
                  eu CNPJ em apenas 5 dias úteis
                </p>
                <span className="text-center text-sm">
                  Levamos 5 dias úteis para realizar a abertura
                </span>
              </div>

              <div className="text-white flex flex-col items-center justify-center">
                <h1 className="text-5xl font-bold text-[#F1FF00] p-8">5</h1>
                <p className="text-base text-center font-bold">
                  Você tera o seu CNPJ em mãos!
                </p>
                <span className="text-center text-sm">
                  Agora, poderá escalar o seu negócio
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-full bg-white pt-24 pb-24 flex flex-col justify-center items-center pr-2 pl-2">
        <div className="w-auto custom-container mb-12">
          <h1 className="text-3xl font-bold text-black">
            Perguntas Frequentes
          </h1>
        </div>

        <div className="w-[75rem] xs:w-auto lg:max-w-4xl custom-accordion">
          {accordionData.map((item, index) => (
            <div key={index}>
              <h2 id={`accordion-collapse-heading-${index + 1}`}>
                <button
                  type="button"
                  className={`flex items-center justify-between w-full p-5 font-medium text-gray-500 border ${
                    index !== accordionData.length - 1 ? "border-b-0" : ""
                  } border-gray-200 ${
                    index === 0 ? "rounded-t-xl" : ""
                  } focus:ring-4 focus:ring-gray-200 hover:bg-gray-100`}
                  onClick={() => toggleAccordion(index + 1)}
                  aria-expanded={openIndex === index + 1}
                  aria-controls={`accordion-collapse-body-${index + 1}`}
                >
                  <span>{item.question}</span>
                  <svg
                    className={`w-3 h-3 shrink-0 ${
                      openIndex === index + 1 ? "rotate-180" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <CSSTransition
                in={openIndex === index + 1}
                timeout={300}
                classNames="accordion"
                unmountOnExit
              >
                <div
                  id={`accordion-collapse-body-${index + 1}`}
                  aria-labelledby={`accordion-collapse-heading-${index + 1}`}
                >
                  <div
                    className={`p-5 border ${
                      index !== accordionData.length - 1 ? "border-b-0" : ""
                    } border-gray-200`}
                  >
                    <p className="mb-2 text-gray-500 text-justify">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </CSSTransition>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full h-auto  bg-white pt-24 pb-24 flex justify-center items-center custom-margin ">
        <div className=" flex flex-col items-center justify-center gap-8 lg:flex-col rounded-lg p-5 border-2 shadow-xl">
          <div className="w-auto custom-container">
            <h1 className="text-[#808080] font-bold text-3xl w-full">
              ESTE NÃO É UM SITE GOVERNAMENTAL!
            </h1>
          </div>

          <div className="max-w-6xl p-0 w-full pl-2 pr-2 ">
            <div className="flex flex-row gap-8 w-full items-center justify-center custom-container">
              <div className="max-w-5xl p-5 text-white flex items-center justify-center">
                <span className="text-justify text-xl text-[#808080]">
                  O serviço prestado através do site{" "}
                  <a
                    href="#"
                    className="cursor-pointer underline underline-offset-1 text-blue-500"
                  >
                    https://abrirmeionline.org
                  </a>{" "}
                  é um serviço privado e opcional. O registro MEI, baixa no CNPJ
                  do MEI e alterações no cadastro do MEI podem ser feitos
                  gratuitamente e sem o acompanhamento profissional deste site,
                  através da plataforma governamental{" "}
                  <a
                    href="https://www.gov.br/pt-br"
                    target="_blank"
                    className="cursor-pointer underline underline-offset-1 text-blue-500"
                  >
                    gov.br.
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="w-full h-full  bg-white pt-24 pb-24 flex justify-center items-center custom-final">
        <div className="w-auto h-auto m-auto flex flex-col items-center justify-center gap-4 p-8 border-2 shadow-2xl rounded-2xl  custom-container">
          <div className="w-auto flex flex-col gap-8 custom-h1 ">
            <h1 className="text-[#808080] font-bold text-3xl w-full">
              ESTE NÃO É UM SITE GOVERNAMENTAL!
            </h1>
          </div>

          <div className="max-w-5xl flex flex-col rounded-lg p-5 custom-h1  ">
            <span className="text-justify sm:text-xs">
              O serviço prestado através do site{" "}
              <a
                href="#"
                className="cursor-pointer underline underline-offset-1 text-blue-500"
              >
                https://abrirmeionline.org
              </a>{" "}
              é um serviço privado e opcional. O registro MEI, baixa no CNPJ do
              MEI e alterações no cadastro do MEI podem ser feitos gratuitamente
              e sem o acompanhamento profissional deste site, através da
              plataforma governamental{" "}
              <a
                href="https://www.gov.br/pt-br"
                target="_blank"
                className="cursor-pointer underline underline-offset-1 text-blue-500"
              >
                gov.br.
              </a>
            </span>
          </div>
        </div>
      </div> */}
    </>
  );
}
