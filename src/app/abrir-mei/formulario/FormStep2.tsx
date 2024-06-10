import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { DataSchemaStep2, dataSchemaStep2 } from "./common";

interface Step2Props extends StepProps {
  data: any;
}

const FormStep2: React.FC<Step2Props> = ({ nextStep, previousStep, data }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<DataSchemaStep2>({ resolver: zodResolver(dataSchemaStep2) });

  const onSubmit = (data: any) => {
    nextStep(data);
    console.log(data, "step2");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="min-h-[26rem]">
      <div className="mb-5">
        <div className="text-3xl font-bold mb-10 custom-step">
          <h2>Dados CNPJ</h2>
        </div>
      </div>
      <div className="space-y-8 pt-2 ">
        <div className="mb-7 flex flex-row justify-between gap-5 items-center custom-step">
          <div className=" w-full">
            <label htmlFor="" className="font-bold">
              Valor do Capital Social <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              id="name2"
              placeholder="Digite o valor do capital social"
              className="w-full border border-neutral-200 dark:border-neutral-700 rounded-md p-2"
            />
          </div>

          <div className=" w-full">
            <label htmlFor="" className="font-bold">
              Ocupação Principal da Empresa{" "}
              <span className="text-red-700">*</span>
            </label>

            <select
              id="email2"
              className="w-full border border-neutral-200 dark:border-neutral-700 rounded-md p-2"
            >
              <option value="comercio">Comércio</option>
              <option value="servicos">Serviços</option>
              <option value="industria">Indústria</option>
            </select>
          </div>
        </div>

        <div className="mb-7 flex flex-row justify-between gap-5 items-center custom-step">
          <div className=" w-full">
            <label htmlFor="" className="font-bold">
              Escolha a Ocupação Secundária{" "}
              <span className="text-red-700">*</span>
            </label>
            <select
              id="email"
              className="w-full border border-neutral-200 dark:border-neutral-700 rounded-md p-2"
            >
              <option value="comercio">Comércio</option>
              <option value="servicos">Serviços</option>
              <option value="industria">Indústria</option>
            </select>
          </div>

          <div className=" w-full">
            <label htmlFor="" className="font-bold">
              Forma de atuação <span className="text-red-700">*</span>
            </label>

            <select className="w-full border border-neutral-200 dark:border-neutral-700 rounded-md p-2">
              <option value="comercio">Comércio</option>
              <option value="servicos">Serviços</option>
              <option value="industria">Indústria</option>
            </select>
          </div>
        </div>
      </div>
      {/* final */}
      <div className="w-full mt-5  pt-2 border-b border-neutral-200 dark:border-neutral-700 mb-5"></div>
      <div className="flex justify-end">
        <div className="space-x-5 space-y-5">
          <button
            type="button"
            onClick={previousStep}
            className="bg-[#1EA230] px-8 py-2 hover:opacity-50 text-neutral-50 font-bold"
          >
            Voltar
          </button>
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

export default FormStep2;
