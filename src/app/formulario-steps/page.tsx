"use client";
import React, { useState } from "react";
import StepDataPersonal from "@/app/formulario-steps/formDataPersonal";
import StepData from "@/app/formulario-steps/formData";
import StepAddress from "@/app/formulario-steps/formAddress";
import StepPayments from "@/app/formulario-steps/formPayments";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function FormularioMei() {
  const [etapaAtual, setEtapaAtual] = useState(1);
  const { register, handleSubmit, setValue } = useForm();

  const submitForm = (data: any) => {
  
     const submitData = new FormData();
     submitData.append("data", JSON.stringify(data));
     console.log(submitData);
      console.log(data,"data");
     toast.success("Formulário cadastrado com sucesso!", {
       autoClose: 2000,
     });
  };

  const proximoEtapa = () => {
    if (etapaAtual < 4) {
      setEtapaAtual(etapaAtual + 1);
    }
  };

  const voltarEtapa = () => {
    if (etapaAtual > 1) {
      setEtapaAtual(etapaAtual - 1);
    }
  };

  return (
    // <div className=" flex justify-center items-center">
    //   {etapaAtual === 1 && <EtapaDadosUsuario register={register} />}
    //   {etapaAtual === 2 && <EtapaDadosBancarios register={register} />}
    //   {etapaAtual === 3 && <StepAddress register={register} />}
    //   <button onClick={proximoEtapa}>Próxima Etapa</button>
    //   {etapaAtual > 1 && <button onClick={voltarEtapa}>Voltar</button>}
    //   {etapaAtual === 3 && <button type="submit">Enviar</button>}
    // </div>
    <div className="flex justify-center items-center px-4 max-w-3xl mx-auto pb-24 pt-14 sm:py-24 lg:pb-32">
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="mb-9 flex items-center justify-center">
          <h1 className="text-3xl font-bold">ABERTURA DE MEI</h1>
        </div>
        <div className="space-y-11">
          {etapaAtual === 1 && <StepDataPersonal register={register} />}
          {etapaAtual === 2 && <StepData register={register} />}
          {etapaAtual === 3 && (
            <StepAddress register={register} setValue={setValue} />
          )}
          {etapaAtual === 4 && <StepPayments register={register} />}
          <div className="w-full mt-5 pt-2 border-b border-neutral-200 dark:border-neutral-700 mb-5"></div>
          <div className="flex justify-end">
            <div className="space-x-5 space-y-5">
              {etapaAtual > 1 && (
                <button
                  type="button"
                  onClick={voltarEtapa}
                  className="bg-[#1EA230] px-8 py-2 hover:opacity-50 text-neutral-50 font-bold"
                >
                  Voltar
                </button>
              )}
              {etapaAtual < 4 && (
                <button
                  type="button"
                  onClick={proximoEtapa}
                  className="bg-[#1EA230] px-8 py-2 hover:opacity-50 text-neutral-50 font-bold"
                >
                  Próximo
                </button>
              )}
              {etapaAtual === 4 && (
                <button
                  type="submit"
                  className="bg-[#1EA230] px-8 py-2 hover:opacity-50 text-neutral-50 font-bold"
                >
                  Enviar
                </button>
              )}
            </div>
          </div>
        </div>
        <ToastContainer />
      </form>
    </div>
  );
}

export default FormularioMei;
