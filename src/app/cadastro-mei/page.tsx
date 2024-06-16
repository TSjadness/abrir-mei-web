"use client";
import React, { useState } from "react";
import StepUserData from "@/app/cadastro-mei/formUserData";
import StepCNPJData from "@/app/cadastro-mei/formCNPJData";
import StepAddressData from "@/app/cadastro-mei/formAddressData";
import StepPaymentData from "@/app/cadastro-mei/formPaymentData";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function FormularioMei() {
  const [etapaAtual, setEtapaAtual] = useState(1);
  const { register, handleSubmit, setValue, watch } = useForm();
  const [termsAccepted, setTermsAccepted] = useState(false);

  

  const card_information = {card_number: watch("card.card_number"), card_name: watch("card.card_name"), cpf: watch("card.cpf"), installments: watch("card.installments"), expiration_date: watch("card.expiration_date"), cvv: watch("card.cvv")};

  const submitForm = (data: any) => {
     if (!termsAccepted) { 
      toast.error("Por favor, aceite os termos e condições para continuar.");
      return;
    }
    const submitData = new FormData();
    submitData.append("data", JSON.stringify(data));
    console.log(submitData);
    console.log(data, "data");
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
    <div className="flex justify-center items-center px-4 max-w-3xl mx-auto pb-24 pt-14 sm:py-24 lg:pb-32 ">
      <div className="bg-white p-6 rounded-lg shadow-sm shadow-gray-500  form-animation">
        <form onSubmit={handleSubmit(submitForm)}>
          <div className="mb-9 flex items-center justify-star bg-custom-gradient py-4 rounded-md pl-4 ">
            <h1 className="text-2xl font-bold text-white">
              ABERTURA DO CNPJ MEI
            </h1>
          </div>
          <div className="space-y-11">
            {etapaAtual === 1 && <StepUserData register={register} />}
            {etapaAtual === 2 && <StepCNPJData register={register} />}
            {etapaAtual === 3 && (
              <StepAddressData register={register} setValue={setValue} />
            )}
            {etapaAtual === 4 && (
              <StepPaymentData
                register={register}
                setTermsAccepted={setTermsAccepted}
                card_information={card_information}
              />
            )}
            <div className="flex justify-end">
              <div className="space-x-5 space-y-5">
                {etapaAtual > 1 && (
                  <button
                    type="button"
                    onClick={voltarEtapa}
                    className="bg-[#1EA230] px-8 py-2 hover:opacity-50 text-neutral-50 font-bold rounded-md"
                  >
                    Voltar
                  </button>
                )}
                {etapaAtual < 4 && (
                  <button
                    type="button"
                    onClick={proximoEtapa}
                    className="bg-[#1EA230] px-8 py-2 hover:opacity-50 text-neutral-50 font-bold rounded-md"
                  >
                    Próximo
                  </button>
                )}
                {etapaAtual === 4 && (
                  <button
                    type="submit"
                    disabled={!termsAccepted}
                    className={`bg-[#1EA230] px-8 py-2 hover:opacity-50 text-neutral-50 font-bold rounded-md ${
                      !termsAccepted ? "cursor-not-allowed opacity-50" : ""
                    }`}
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
    </div>
  );
}

export default FormularioMei;
