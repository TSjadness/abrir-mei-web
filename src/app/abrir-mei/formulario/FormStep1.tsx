import React from "react";
import { dataSchemaStep1, DataSchemaStep1 } from "./common";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

interface Step1Props extends StepProps {
  data: any;
}

const FormStep1: React.FC<Step1Props> = ({ nextStep, data }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DataSchemaStep1>({ resolver: zodResolver(dataSchemaStep1) });

  const onSubmit = (data: any) => {
    nextStep(data);
    console.log(data, "step1");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-5">
        <div className="text-3xl font-bold mb-10">
          <h2>Informações Pessoais</h2>
        </div>
      </div>
      <div className="space-y-8 pt-2 ">
        <div className="mb-7 flex flex-row justify-between gap-5 items-center">
          <div className=" w-full">
            <label htmlFor="" className="font-bold">
              Nome Completo <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              id="name"
              placeholder="Digite seu nome completo"
              className="w-full border border-neutral-200 dark:border-neutral-700 rounded-md p-2"
              {...register("name")}
            />
          </div>

          <div className=" w-full">
            <label htmlFor="" className="font-bold">
              Endereço de e-mail <span className="text-red-700">*</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="Digite seu e-mail"
              className="w-full border border-neutral-200 dark:border-neutral-700 rounded-md p-2"
              {...register("email")}
            />
          </div>
        </div>

        <div className="mb-7 flex flex-row justify-between gap-5 items-center">
          <div className=" w-full">
            <label htmlFor="" className="font-bold">
              CPF <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              id="name"
              placeholder="Digite seu CPF"
              className="w-full border border-neutral-200 dark:border-neutral-700 rounded-md p-2"
              {...register("name")}
            />
          </div>

          <div className=" w-full">
            <label htmlFor="" className="font-bold">
              Número de Telefone (WhatsApp){" "}
              <span className="text-red-700">*</span>
            </label>
            <input
              type="tel"
              id="email"
              placeholder="(99) 9 9999-9999"
              className="w-full border border-neutral-200 dark:border-neutral-700 rounded-md p-2"
              {...register("email")}
            />
          </div>
        </div>

        <div className="mb-7 flex flex-row justify-between gap-5 items-center">
          <div className=" w-full">
            <label htmlFor="" className="font-bold">
              RG / Identidade <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              id="name"
              placeholder="Digite seu RG"
              className="w-full border border-neutral-200 dark:border-neutral-700 rounded-md p-2"
              {...register("name")}
            />
          </div>

          <div className=" w-full">
            <label htmlFor="" className="font-bold">
              Órgão Emissor do RG
              <span className="text-red-700">*</span>
            </label>
            <select className="w-full border border-neutral-200 dark:border-neutral-700 rounded-md p-2">
              <option value="">Selecione</option>
              <option value="">SSP</option>
              <option value="">DETRAN</option>
              <option value="">Outros</option>
            </select>
          </div>

          <div className=" w-full">
            <label htmlFor="" className="font-bold">
              Estado de Emissão <span className="text-red-700">*</span>
            </label>
            <select className="w-full border border-neutral-200 dark:border-neutral-700 rounded-md p-2">
              <option value="">Selecione</option>
              <option value="">AC</option>
              <option value="">AL</option>
              <option value="">AP</option>
              <option value="">AM</option>
              <option value="">BA</option>
              <option value="">CE</option>
              <option value="">DF</option>
              <option value="">ES</option>
              <option value="">GO</option>
              <option value="">MA</option>
              <option value="">MT</option>
              <option value="">MS</option>
              <option value="">MG</option>
              <option value="">PA</option>
              <option value="">PB</option>
              <option value="">PR</option>
              <option value="">PE</option>
              <option value="">PI</option>
              <option value="">RJ</option>
              <option value="">RN</option>
              <option value="">RS</option>
              <option value="">RO</option>
              <option value="">RR</option>
              <option value="">SC</option>
              <option value="">SP</option>
              <option value="">SE</option>
              <option value="">TO</option>
            </select>
          </div>
        </div>

        <div className="mb-7 flex flex-row justify-between gap-5 items-center">
          <div className=" w-full">
            <label htmlFor="" className="font-bold">
              Nome completo da Mãe <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              id="name"
              placeholder="Digite seu RG"
              className="w-full border border-neutral-200 dark:border-neutral-700 rounded-md p-2"
              {...register("name")}
            />
          </div>

          <div className=" w-full">
            <label htmlFor="" className="font-bold">
              Data de Nascimento
              <span className="text-red-700">*</span>
            </label>
            <input
              type="date"
              id="email"
              placeholder="Digite sua data de nascimento"
              className="w-full border border-neutral-200 dark:border-neutral-700 rounded-md p-2"
              {...register("email")}
            />
          </div>
        </div>
      </div>

      {/* final */}
      <div className="w-full mt-5 pt-2 border-b border-neutral-200 dark:border-neutral-700 mb-5"></div>
      <div className="flex justify-end">
        <div className="space-x-5 space-y-5">
          <button
            className="bg-[#1EA230] px-8 py-2 hover:opacity-50 text-neutral-50 font-bold"
            type="submit"
          >
            Próximo
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormStep1;
