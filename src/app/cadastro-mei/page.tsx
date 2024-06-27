"use client";
import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import EtapaDadosUsuario from "@/app/cadastro-mei/EtapaDadosUsuario";
import EtapaDadosCNPJ from "@/app/cadastro-mei/EtapaDadosCNPJ";
import EtapaDadosEndereço from "@/app/cadastro-mei/EtapaDadosEndereço";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import EtapaPagamentos from "./EtapaPagamentos";
import { schema } from "./common";
import { Oval } from "react-loader-spinner";

const getEtapaSchema = (etapa: any) => {
  switch (etapa) {
    case 1:
      return schema.pick({
        name: true,
        email: true,
        cpf: true,
        rg: true,
        phone: true,
        rg_issuer: true,
        rg_state: true,
        mother_name: true,
        birth_date: true,
      });
    case 2:
      return schema.pick({
        capital_value: true,
        main_occupation: true,
        secondary_occupation: true,
        mode_operation: true,
      });
    case 3:
      return schema.pick({
        address: true,
        neighborhood: true,
        city: true,
        state: true,
        number: true,
        complement: true,
        alt_cep: true,
        alt_address: true,
        alt_neighborhood: true,
        alt_city: true,
        alt_state: true,
        alt_number: true,
        alt_complement: true,
        same_address: true,
        gov_password: true,
        confirm_password: true,
      });
    case 4:
      return schema.pick({
        payment_method: true,
        terms_accepted: true,
        card: true,
        pix: true,
      });
    default:
      return schema;
  }
};

function FormularioMei() {
  const [etapaAtual, setEtapaAtual] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const router = useRouter();
  const methods = useForm({
    resolver: zodResolver(schema),
  });

  const {
    handleSubmit,
    trigger,
    setValue,
    watch,
    formState: { errors },
  } = methods;

  const submitForm = (data: any) => {
    const submitData = new FormData();
    submitData.append("data", JSON.stringify(data));
    console.log(submitData);
    console.log(data, "data");
    setSubmitted(true);

    toast.success("Formulário cadastrado com sucesso!", {
      autoClose: 2000,
    });
    //  setTimeout(() => {
    //    router.push("/confirmacao-de-pagamento");
    //  }, 2000);
  };

  const proximoEtapa = async () => {
    const etapaSchema = getEtapaSchema(etapaAtual);
    const result = await trigger(Object.keys(etapaSchema.shape));

    if (!result) {
      Object.values(errors).forEach((error) => {
        toast.error(String(error?.message) ?? "error gerado.");
      });
      return;
    }
    if (etapaAtual === 3) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setEtapaAtual(etapaAtual + 1);
        window.scrollTo(0, 0);
      }, 2000);
    } else {
      setEtapaAtual(etapaAtual + 1);
      window.scrollTo(0, 0);
    }

    // if (result) {
    //   if (etapaAtual < 4) {
    //     setEtapaAtual(etapaAtual + 1);
    //   }
    // }
  };

  const voltarEtapa = () => {
    if (etapaAtual > 1) {
      setEtapaAtual(etapaAtual - 1);
    }
  };

  const handleTermsCheckboxChange = (checked: boolean) => {
    setTermsAccepted(checked);
  };

  return (
    <FormProvider {...methods}>
      <div className="flex justify-center items-start min-h-screen pb-24 pt-14 sm:py-24 lg:pb-32">
        <div className="w-full max-w-7xl m-5">
          <div className="p-6 rounded-lg shadow-sm shadow-gray-500 form-animation w-full">
            {loading && (
              <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50 h-screen w-screen">
                <Oval
                  height={80}
                  width={80}
                  color="#1EA230"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                  ariaLabel="oval-loading"
                  secondaryColor="#d3d3d3"
                  strokeWidth={2}
                  strokeWidthSecondary={2}
                />
              </div>
            )}
            <form onSubmit={handleSubmit(submitForm)}>
              <div className="mb-9 flex items-center justify-start bg-custom-gradient py-4 rounded-md pl-4">
                <h1 className="text-2xl font-bold text-white">
                  ABERTURA DO CNPJ MEI
                </h1>
              </div>

              <div className="space-y-11">
                {etapaAtual === 1 && <EtapaDadosUsuario />}
                {etapaAtual === 2 && <EtapaDadosCNPJ />}
                {etapaAtual === 3 && <EtapaDadosEndereço />}
                {etapaAtual === 4 && (
                  <EtapaPagamentos
                    termsAccepted={termsAccepted}
                    onTermsCheckboxChange={handleTermsCheckboxChange}
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
            </form>
          </div>
        </div>
      </div>
    </FormProvider>
  );
}

export default FormularioMei;
