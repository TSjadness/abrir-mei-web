import React, { useState } from "react";
import { DataSchemaStep3, dataSchemaStep3 } from "./common";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import InputMask from "react-input-mask"; 

interface Props {
  register: any;
  setValue: any;
}

const StepAddress = ({ register, setValue }: Props) => {
  const {
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<DataSchemaStep3>({ resolver: zodResolver(dataSchemaStep3) });

  const [cepData, setCepData] = useState({});

  const fetchCEPData = async (cep: string) => {
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

  return (
    <div>
      <div className="mb-5">
        <div className="text-3xl font-bold mb-10 custom-step">
          <h2>Endereço Pessoal</h2>
        </div>
      </div>

      <div className="space-y-8 pt-2 ">
        <div className="mb-7 flex flex-row justify-between gap-5 items-center custom-step">
          <div className="w-full">
            <label htmlFor="cep" className="font-bold">
              CEP<span className="text-red-700">*</span>
            </label>
            <InputMask
              mask="99999-999"
              id="cep"
              onChange={(e) => fetchCEPData(e.target.value)}
              placeholder="00000-000"
              className="w-full border border-neutral-200 dark:border-neutral-700 rounded-md p-2"
            />
          </div>
          <div className=" w-full">
            <label htmlFor="city" className="font-bold">
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
            <label htmlFor="address" className="font-bold">
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
            <label htmlFor="number" className="font-bold">
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
            <label htmlFor="state" className="font-bold">
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
            <label htmlFor="complement" className="font-bold">
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
            <label htmlFor="same_address" className="font-bold">
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
            <label htmlFor="gov_password" className="font-bold">
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
            <label htmlFor="confirm_password" className="font-bold">
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
    </div>
  );
};

export default StepAddress;
