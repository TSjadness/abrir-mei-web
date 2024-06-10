import React, { useEffect } from "react";
import { dataSchemaStep1, DataSchemaStep1 } from "./common";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { allMasks } from "@/utils/masks";

interface Step1Props extends StepProps {
  data: any;
}

const FormStep1: React.FC<Step1Props> = ({ nextStep, data }) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<DataSchemaStep1>({ resolver: zodResolver(dataSchemaStep1) });

  const cpfValue = watch("cpf");
  const rgValue = watch("rg");
  const phoneValue = watch("phone");

  useEffect(() => {
    setValue("cpf", allMasks.maskCPF(cpfValue));
    setValue("rg", allMasks.maskRG(rgValue));
    setValue("phone", allMasks.maskPhone(phoneValue));
  }, [cpfValue, rgValue, phoneValue, setValue]);

  const onSubmit = (data: any) => {
    nextStep(data);
    console.log(data, "step1");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="">
      <div className="mb-5">
        <div className="text-3xl font-bold mb-10 custom-step">
          <h2>Informações Pessoais</h2>
        </div>
      </div>
      <div className="space-y-8 pt-2  ">
        <div className="mb-7 flex flex-row justify-between gap-5 items-center custom-step">
          <div className=" w-full">
            <label htmlFor="" className="font-bold">
              Nome Completo <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              id="name"
              placeholder="Digite seu nome completo"
              className="w-full border border-neutral-200 dark:border-neutral-700 rounded-md p-2"
              {...(register("name") ?? "")}
            />
            {errors.name && (
              <span className="text-red-600">{errors.name.message}</span>
            )}
          </div>

          <div className=" w-full">
            <label htmlFor="" className="font-bold">
              Endereço de e-mail <span className="text-red-700">*</span>
            </label>
            <input
              id="email"
              placeholder="Digite seu e-mail"
              className="w-full border border-neutral-200 dark:border-neutral-700 rounded-md p-2"
              {...register("email")}
            />
            {errors.email && (
              <span className="text-red-600">{errors.email.message}</span>
            )}
          </div>
        </div>

        <div className="mb-7 flex flex-row justify-between gap-5 items-center custom-step">
          <div className=" w-full">
            <label htmlFor="" className="font-bold">
              CPF <span className="text-red-700">*</span>
            </label>
            <input
              id="cpf"
              placeholder="Digite seu CPF"
              {...register("cpf")}
              className="w-full border border-neutral-200 dark:border-neutral-700 rounded-md p-2"
            />
          </div>

          <div className=" w-full">
            <label htmlFor="" className="font-bold">
              Número de Telefone (WhatsApp){" "}
              <span className="text-red-700">*</span>
            </label>
            <input
              id="phone"
              placeholder="(79) 9 9999-9999"
              maxLength={15}
              {...register("phone")}
              className="w-full border border-neutral-200 dark:border-neutral-700 rounded-md p-2"
            />
          </div>
        </div>

        <div className="mb-7 flex flex-row justify-between gap-5 items-center custom-step">
          <div className=" w-full">
            <label htmlFor="" className="font-bold">
              RG / Identidade <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              id="rg"
              placeholder="Digite seu RG"
              className="w-full border border-neutral-200 dark:border-neutral-700 rounded-md p-2"
              {...register("rg")}
            />
          </div>

          <div className=" w-full">
            <label htmlFor="" className="font-bold">
              Órgão Emissor do RG <span className="text-red-700">*</span>
            </label>
            <select
              id="rgIssuer"
              {...register("rgIssuer")}
              className="w-full border border-neutral-200 dark:border-neutral-700 rounded-md p-2"
            >
              <option value="">Selecione</option>
              <option value="SSP">SSP</option>
              <option value="DETRAN">DETRAN</option>
              <option value="Outros">Outros</option>
            </select>
          </div>

          <div className=" w-full">
            <label htmlFor="" className="font-bold">
              Estado de Emissão <span className="text-red-700">*</span>
            </label>
            <select
              id="rgState"
              {...register("rgState")}
              className="w-full border border-neutral-200 dark:border-neutral-700 rounded-md p-2"
            >
              <option value="">Selecione</option>
              <option value="Acre">AC</option>
              <option value="Alagoas">AL</option>
              <option value="Amapá">AP</option>
              <option value="Amazonas">AM</option>
              <option value="Bahia">BA</option>
              <option value="Ceará">CE</option>
              <option value="Distrito Federal">DF</option>
              <option value="Espírito Santo">ES</option>
              <option value="Goiás">GO</option>
              <option value="Maranhão">MA</option>
              <option value="Mato Grosso">MT</option>
              <option value="Mato Grosso do Sul">MS</option>
              <option value="Minas Gerais">MG</option>
              <option value="Pará">PA</option>
              <option value="Paraíba">PB</option>
              <option value="Paraná">PR</option>
              <option value="Pernambuco">PE</option>
              <option value="Piauí">PI</option>
              <option value="Rio de Janeiro">RJ</option>
              <option value="Rio Grande do Norte">RN</option>
              <option value="Rio Grande do Sul">RS</option>
              <option value="Rondônia">RO</option>
              <option value="Roraima">RR</option>
              <option value="Santa Catarina">SC</option>
              <option value="São Paulo">SP</option>
              <option value="Sergipe">SE</option>
              <option value="Tocantins">TO</option>
            </select>
          </div>
        </div>

        <div className="mb-7 flex flex-row justify-between gap-5 items-center custom-step">
          <div className=" w-full">
            <label htmlFor="" className="font-bold">
              Nome completo da Mãe <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              id="motherName"
              placeholder="Digite o nome completo da sua mãe"
              className="w-full border border-neutral-200 dark:border-neutral-700 rounded-md p-2"
              {...register("motherName")}
            />
          </div>

          <div className=" w-full">
            <label htmlFor="" className="font-bold">
              Data de Nascimento <span className="text-red-700">*</span>
            </label>
            <input
              type="date"
              id="birthDate"
              placeholder="Digite sua data de nascimento"
              className="w-full border border-neutral-200 dark:border-neutral-700 rounded-md p-2"
              {...register("birthDate")}
            />
          </div>
        </div>
      </div>

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
