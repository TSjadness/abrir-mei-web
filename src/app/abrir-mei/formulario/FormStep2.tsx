import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { DataSchemaStep2, dataSchemaStep2 } from './common';

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
    console.log(data,'step2');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-5">
        <div className="text-2xl font-semibold mb-10">
          <h2>Dados CNPJ</h2>
        </div>
      </div>
      <div className="space-y-8 pt-2 ">
        <div className="mb-7 flex flex-row justify-between gap-5">
          <div className=" w-full">
            <label htmlFor="">
              Nome Completo <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              id="name2"
              placeholder="Digite seu nome completo"
              className="w-full border border-neutral-200 dark:border-neutral-700 rounded-md p-2"
              {...register('name2')}
            />
          </div>

          <div className=" w-full">
            <label htmlFor="">
              Endereço de e-mail <span className="text-red-700">*</span>
            </label>
            <input
              type="email"
              id="email3"
              placeholder="Digite seu e-mail"
              className="w-full border border-neutral-200 dark:border-neutral-700 rounded-md p-2"
               {...register('email2')}
            />
          </div>
        </div>
      </div>
      {/* final */}
      <div className="w-full pt-2 border-b border-neutral-200 dark:border-neutral-700 mb-5"></div>
      <div className="flex justify-end">
        <div className="space-x-5 space-y-5">
          <button
            type="button"
            onClick={previousStep}
            className="bg-red-700 hover:bg-red-200 text-neutral-502"
          >
            Voltar
          </button>
          <button
            className="bg-red-700 hover:bg-red-200 text-neutral-50"
            type="submit"
          >
            Próximo
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormStep2