import React, { useEffect, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { DataSchemaStep3, dataSchemaStep3 } from "../common";
import { allMasks } from "@/utils/masks";
import axios from "axios";
import { StepPropsAll } from "./types";

interface Step3Props extends StepPropsAll {
  data: any;
}

const FormStep3: React.FC<Step3Props> = ({ nextStep, previousStep, data }) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<DataSchemaStep3>({ resolver: zodResolver(dataSchemaStep3) });
  const [cepData, setCepData] = useState({});

  const fetchCEPData = async (cep: any) => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      const data = response.data;
      setCepData(data);
      setValue("address", data.logradouro || "");
      setValue("neighborhood", data.bairro || "");
      setValue("city", data.localidade || "");
      setValue("state", data.uf || "");
    } catch (error) {
      console.error("Erro ao buscar dados do CEP:", error);
    }
  };

  const onSubmit = (data: any) => {
    nextStep(data);
    console.log(data, "step3");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-5">
        <div className="text-3xl font-bold mb-10 custom-step">
          <h2>Endereço Pessoal</h2>
        </div>
      </div>
      <div className="space-y-8 pt-2 ">
        <div className="mb-7 flex flex-row justify-between gap-5 items-center custom-step">
          <div className="w-full">
            <label htmlFor="" className="font-bold">
              CEP<span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              id="cep"
              onChange={(e) => fetchCEPData(e.target.value)}
              placeholder="00000-000"
              className="w-full border border-neutral-200 dark:border-neutral-700 rounded-md p-2"
            />
          </div>

          <div className=" w-full">
            <label htmlFor="" className="font-bold">
              Cidade<span className="text-red-700">*</span>
            </label>

            <input
              type="text"
              id="city"
              placeholder="Digite a sua cidade"
              className="w-full border border-neutral-200 dark:border-neutral-700 rounded-md p-2"
              {...register("city")}
            />
          </div>

          <div className=" w-full">
            <label className="font-bold">
              Bairro<span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              id="neighborhood"
              placeholder="Digite seu bairro"
              className="w-full border border-neutral-200 dark:border-neutral-700 rounded-md p-2"
              {...register("neighborhood")}
            />
          </div>
        </div>

        <div className="mb-7 flex flex-row justify-between gap-5 items-center custom-step">
          <div className=" w-full">
            <label htmlFor="" className="font-bold">
              Endereço <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              id="address"
              placeholder="Digite seu endereço"
              className="w-full border border-neutral-200 dark:border-neutral-700 rounded-md p-2"
              {...register("address")}
            />
          </div>

          <div className=" w-full">
            <label htmlFor="" className="font-bold">
              Número<span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              id="number"
              {...register("number")}
              placeholder="Digite o número"
              className="w-full border border-neutral-200 dark:border-neutral-700 rounded-md p-2"
            />
          </div>

          <div className="w-full">
            <label htmlFor="" className="font-bold">
              Estado<span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              id="state"
              placeholder="Digite o estado"
              className="w-full border border-neutral-200 dark:border-neutral-700 rounded-md p-2"
              {...register("state")}
            />
          </div>
        </div>

        <div className="mb-7 flex flex-row justify-between gap-5 items-center custom-step">
          <div className=" w-full">
            <label htmlFor="" className="font-bold">
              Complemento <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              id="complement"
              {...register("complement")}
              placeholder="Digite o complemento"
              className="w-full border border-neutral-200 dark:border-neutral-700 rounded-md p-2"
            />
          </div>
        </div>

        <div className="mb-7 flex flex-row justify-between gap-5 items-center custom-step">
          <div className=" w-full">
            <label htmlFor="" className="font-bold">
              Seu endereço pessoal é o mesmo que o comercial?{" "}
              <span className="text-red-700">*</span>
            </label>
            <select
              id="same_address"
              className="w-full border border-neutral-200 dark:border-neutral-700 rounded-md p-2"
              {...register("same_address")}
            >
              <option value="sim">Sim</option>
              <option value="nao">Não</option>
            </select>
          </div>
        </div>

        <div className="mb-7 flex flex-row justify-between gap-5 items-center custom-step">
          <div className=" w-full">
            <label htmlFor="" className="font-bold">
              Senha GOV.BR / Brasil Cidadão (Se não possui, deixe em branco)
              <span className="text-red-700">*</span>
            </label>
            <input
              type="password"
              id="gov_password"
              {...register("gov_password")}
              placeholder="Digite a senha"
              className="w-full border border-neutral-200 dark:border-neutral-700 rounded-md p-2"
            />
          </div>
        </div>

        <div className="mb-7 flex flex-row justify-between gap-5 items-center custom-step">
          <div className=" w-full">
            <label htmlFor="" className="font-bold">
              Confirme a Senha GOV.BR / Brasil Cidadão (Se não possui, deixe em
              branco)
              <span className="text-red-700">*</span>
            </label>
            <input
              type="password"
              id="confirm_password"
              {...register("confirm_password")}
              placeholder="Digite a senha"
              className="w-full border border-neutral-200 dark:border-neutral-700 rounded-md p-2"
            />
          </div>
        </div>
      </div>
      {/* final */}
      <div className="w-full mt-5 pt-2 border-b border-neutral-200 dark:border-neutral-700 mb-5"></div>
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

export default FormStep3;
