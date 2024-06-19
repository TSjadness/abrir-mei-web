import React from "react";
interface Props {
  register: any;
  errors: any;
}

const StepData = ({ register, errors }: Props) => {

  return (
    <div>
      <div className="mb-5">
        <div className="text-xl font-semibold custom-step text-blue-500">
          <h2>Dados CNPJ</h2>
        </div>
        <div
          className="w-full pt-2 mb-5 border-b-2"
          style={{ borderColor: "rgba(2, 108, 135, var(--tw-bg-opacity))" }}
        ></div>
      </div>
      <div className="space-y-8 pt-2 ">
        <div className="mb-7 flex flex-row justify-between gap-5 items-center custom-step">
          <div className=" w-full">
            <label htmlFor="" className=" text-gray-700">
              Valor do Capital Social <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              id=" capital_value"
              placeholder="Digite o valor do capital social"
              className="w-full border border-neutral-200 dark:border-neutral-700 rounded-md p-2"
              {...register("capital_value")}
            />
            {errors.capital_value && (
              <p className="text-red-500 text-sm mt-1">
                {errors.capital_value.message}
              </p>
            )}
          </div>

          <div className=" w-full">
            <label htmlFor="" className=" text-gray-700">
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
          </div>
        </div>

        <div className="mb-7 flex flex-row justify-between gap-5 items-center custom-step">
          <div className=" w-full">
            <label htmlFor="" className=" text-gray-700">
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
          </div>

          <div className=" w-full">
            <label htmlFor="" className=" text-gray-700">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepData;
