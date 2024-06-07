"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DataSchemaStep4, dataSchemaStep4 } from "./common";

interface Step4Props extends StepProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  formData: FormDataMei;
  setFormData: React.Dispatch<React.SetStateAction<FormDataMei>>;
  step: number;
  sendData: (data: any) => void;
  data: any;
}

const FormStep4: React.FC<Step4Props> = ({
  setStep,
  previousStep,
  formData,
  setFormData,
  step,
  sendData,
  data,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DataSchemaStep4>({
    resolver: zodResolver(dataSchemaStep4),
    defaultValues: data?.step4 || {},
  });

  const onSubmit = async (dataStep4: any) => {
    try {
      setIsLoading(true);

      const updatedFormData = {
        ...formData,
        step4: dataStep4,
      };

      const submitData = new FormData();
      submitData.append("data", JSON.stringify(updatedFormData));

      console.log(submitData, "envi1");
      console.log(updatedFormData, "envi2");
      console.log(dataStep4, "step4");

      if (sendData) {
        sendData(submitData);

        toast.success("Formulário cadastrado com sucesso!", {
          autoClose: 2000,
        });
      }

      setIsLoading(false);
    } catch (error) {
      toast.error("Erro ao fazer cadastrado", {
        autoClose: 2000,
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-5">
        <div className="text-2xl font-semibold mb-10">
          <h2>Pagamentos</h2>
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
              id="name4"
              placeholder="Digite seu nome completo"
              className="w-full border border-neutral-200 dark:border-neutral-700 rounded-md p-2"
              {...register("name4", {
                onChange: handleInputChange,
              })}
            />
          </div>

          <div className=" w-full">
            <label htmlFor="">
              Endereço de e-mail <span className="text-red-700">*</span>
            </label>
            <input
              type="email"
              id="email4"
              placeholder="Digite seu e-mail"
              className="w-full border border-neutral-200 dark:border-neutral-700 rounded-md p-2"
              {...register("email4", {
                onChange: handleInputChange,
              })}
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
            className="bg-red-100 hover:bg-red-200 text-neutral-50"
            type="submit"
            disabled={isLoading}
          >
            {!isLoading ? (
              "Finalizar Cadastro"
            ) : (
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-red-200"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              </div>
            )}
          </button>
        </div>
      </div>
      <ToastContainer />
    </form>
  );
};

export default FormStep4;

