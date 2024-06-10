import React, { useEffect, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { DataSchemaStep3, dataSchemaStep3 } from "./common";

interface Step3Props extends StepProps {
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

  const [cep, setCep] = useState("");

  useEffect(() => {
    if (cep.length === 8) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((response) => response.json())
        .then((data) => {
          setValue("endereco", data.logradouro);
          setValue("bairro", data.bairro);
          setValue("cidade", data.localidade);
          setValue("estado", data.uf);
        })
        .catch((error) => console.error("Error : ", error));
    }
  }, [cep, setValue]);

  const handleCepChange = (event: any) => {
    const maskedCep = maskCEP(event);
    setCep(maskedCep);
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
              placeholder="00000-000"
              className="w-full border border-neutral-200 dark:border-neutral-700 rounded-md p-2"
              value={cep}
              onChange={handleCepChange}
            />
          </div>

          <div className=" w-full">
            <label htmlFor="" className="font-bold">
              Cidade<span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              id="name3"
              placeholder="Digite a sua cidade"
              className="w-full border border-neutral-200 dark:border-neutral-700 rounded-md p-2"
              {...register("cidade")}
              // {...register("name3")}
            />
          </div>

          <div className=" w-full">
            <label className="font-bold">
              Bairro<span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              id="name3"
              placeholder="Digite seu bairro"
              className="w-full border border-neutral-200 dark:border-neutral-700 rounded-md p-2"
              {...register("bairro")}
              // {...register("name3")}
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
              id="name3"
              placeholder="Digite seu endereço"
              className="w-full border border-neutral-200 dark:border-neutral-700 rounded-md p-2"
              {...register("endereco")}
              // {...register("name3")}
            />
          </div>

          <div className=" w-full">
            <label htmlFor="" className="font-bold">
              Número<span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              id="name3"
              placeholder="Digite o número"
              className="w-full border border-neutral-200 dark:border-neutral-700 rounded-md p-2"
              // {...register("name3")}
            />
          </div>

          <div className=" w-full">
            <label htmlFor="" className="font-bold">
              Estado<span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              id="name3"
              placeholder="Digite o estado"
              className="w-full border border-neutral-200 dark:border-neutral-700 rounded-md p-2"
              {...register("estado")}
              // {...register("name3")}
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
              id="name3"
              placeholder="Digite o complemento"
              className="w-full border border-neutral-200 dark:border-neutral-700 rounded-md p-2"
              // {...register("name3")}
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
              id="email3"
              className="w-full border border-neutral-200 dark:border-neutral-700 rounded-md p-2"
              // {...register("email3")}
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
              id="name3"
              placeholder="Digite a senha"
              className="w-full border border-neutral-200 dark:border-neutral-700 rounded-md p-2"
              // {...register("name3")}
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
              id="name3"
              placeholder="Digite a senha"
              className="w-full border border-neutral-200 dark:border-neutral-700 rounded-md p-2"
              // {...register("name3")}
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
