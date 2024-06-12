import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { DataSchemaStep2, dataSchemaStep2 } from "../common";
import { StepPropsAll } from "./types";

interface Step2Props extends StepPropsAll {
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
              id=" capital_value"
              placeholder="Digite o valor do capital social"
              className="w-full border border-neutral-200 dark:border-neutral-700 rounded-md p-2"
              {...register("capital_value")}
            />
            {errors. capital_value && (
              <span className="text-red-600">
                {errors. capital_value.message}
              </span>
            )}
          </div>

          <div className=" w-full">
            <label htmlFor="" className="font-bold">
              Ocupação Principal da Empresa{" "}
              <span className="text-red-700">*</span>
            </label>

            <select
              id=" main_occupation"
              className="w-full border border-neutral-200 dark:border-neutral-700 rounded-md p-2"
              {...register("main_occupation")}
            >
              <option value="">Selecionar</option>
              <option value="Abatedor(a) De Aves Com Comercialização do Produto Independente">
                Abatedor(a) De Aves Com Comercialização do Produto Independente
              </option>
              <option value="Acabador(a) De Calçados">
                Acabador(a) De Calçados
              </option>
            </select>
            {errors. main_occupation && (
              <span className="text-red-600">
                {errors. main_occupation.message}
              </span>
            )}
          </div>
        </div>

        <div className="mb-7 flex flex-row justify-between gap-5 items-center custom-step">
          <div className=" w-full">
            <label htmlFor="" className="font-bold">
              Escolha a Ocupação Secundária{" "}
              <span className="text-red-700">*</span>
            </label>
            <select
              id="secondary_occupation"
              className="w-full border border-neutral-200 dark:border-neutral-700 rounded-md p-2"
              {...register("secondary_occupation")}
            >
              <option value="">Selecionar</option>
              <option value="Abatedor(a) De Aves Com Comercialização do Produto Independente">
                Abatedor(a) De Aves Com Comercialização do Produto Independente
              </option>
              <option value="Acabador(a) De Calçados">
                Acabador(a) De Calçados
              </option>
            </select>
            {errors.secondary_occupation && (
              <span className="text-red-600">
                {errors.secondary_occupation.message}
              </span>
            )}
          </div>

          <div className=" w-full">
            <label htmlFor="" className="font-bold">
              Forma de atuação <span className="text-red-700">*</span>
            </label>

            <select
              id="mode_operation"
              {...register("mode_operation")}
              className="w-full border border-neutral-200 dark:border-neutral-700 rounded-md p-2"
            >
              <option value="">Selecionar</option>
              <option value="Máquinas Automáticas">Máquinas Automáticas</option>
              <option value="Estabelecimento Fixo">Estabelecimento Fixo</option>
              <option value="Internet">Internet</option>
              <option value="Em Local Fixo Fora da Loja">
                Em Local Fixo Fora da Loja
              </option>
              <option value="Correio">Correio</option>
              <option value="Porta a Porta">Porta a Porta</option>
              <option value="Postos Móveis ou por Ambulante">
                Postos Móveis ou por Ambulante
              </option>
              <option value="Televenda">Televenda</option>
            </select>
            {errors.mode_operation && (
              <span className="text-red-600">
                {errors.mode_operation.message}
              </span>
            )}
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
