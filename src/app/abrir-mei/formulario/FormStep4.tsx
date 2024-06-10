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
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);

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
      if (!termsAccepted) {
        toast.error("Você deve aceitar os termos e condições.", {
          autoClose: 2000,
        });
        // return;
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
      }
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

  const handleCheckboxChange = (method: string) => {
    setPaymentMethod(method);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-5">
        <div className="text-3xl font-bold mb-10 custom-textStep">
          <h2>Pagamentos</h2>
        </div>
      </div>
      <div className="space-y-8 pt-2 ">
        <div className="mb-7 flex flex-row justify-between gap-5 items-center">
          <div className=" w-full flex items-center justify-center">
            <label htmlFor="" className="font-bold text-xl">
              Resumo da Abertura
            </label>
          </div>
        </div>

        <div className=" w-full  flex flex-row gap-3 custom-step">
          <div className="w-full  text-black flex flex-col items-center justify-center gap-2">
            <div className="font-bold text-xl bg-[#1EA230] w-full flex items-center justify-center">
              <label htmlFor="" className="font-bold text-white">
                Produto
              </label>
            </div>
            <div className="font-semibold">Abertura do CNPJ MEI</div>
          </div>

          <div className="w-full  text-black flex flex-col items-center justify-center gap-2">
            <div className="font-bold text-xl bg-[#1EA230] w-full flex items-center justify-center">
              <label htmlFor="" className="font-bold text-white">
                Quantidade
              </label>
            </div>
            <div className="font-semibold">1</div>
          </div>

          <div className="w-full  text-black flex flex-col items-center justify-center gap-2">
            <div className="font-bold text-xl bg-[#1EA230] w-full flex items-center justify-center">
              <label htmlFor="" className="font-bold text-white">
                Subtotal
              </label>
            </div>
            <div className="font-semibold">R$ 193,00</div>
          </div>
        </div>

        <div className=" flex flex-col justify-between gap-5 items-center">
          <div className=" w-full">
            <label htmlFor="" className="font-bold text-xl">
              Formas de pagamento
            </label>
            <div className=" text-justify flex flex-col gap-2">
              <p className="p-1">
                Após a compensação do pagamento da taxa os documentos serão
                enviados em até 5 dias úteis para o e-mail informado no
                cadastro, certifique-se que o e-mail informado esta correto.
              </p>
              <p className="p-1">
                Os seus dados pessoais serão utilizados para processar a sua
                compra, apoiar a sua experiência em todo este site e para outros
                fins descritos na nossa
              </p>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className=" w-full flex gap-2">
            <input type="checkbox" name="" value="" className=" text-2xl" />
            <label htmlFor="">
              Li e concordo com os{" "}
              <a href="" className="cursor-pointer underline text-blue-700">
                termos e condições
              </a>
            </label>
          </div>
        </div>

        <div className="mb-4 flex flex-col justify-between gap-3 items-center">
          <label className=" w-full font-bold text-lg">Escolha a forma de pagamento</label>
          <div className="w-full flex gap-2">
            <input
              type="checkbox"
              name="paymentMethod"
              value="cartao"
              checked={paymentMethod === "cartao"}
              onChange={() => handleCheckboxChange("cartao")}
            />
            <label htmlFor="cartao" className="font-semibold">
              Cartão <span className="text-red-700">*</span>
            </label>
          </div>
          <div className="w-full flex gap-2">
            <input
              type="checkbox"
              name="paymentMethod"
              value="pix"
              checked={paymentMethod === "pix"}
              onChange={() => handleCheckboxChange("pix")}
            />
            <label htmlFor="pix" className="font-semibold">
              Pix <span className="text-red-700">*</span>
            </label>
          </div>
        </div>

        {paymentMethod === "cartao" && (
          <div className="flex flex-col gap-4">
            <div>
              <label htmlFor="numeroCartao" className="font-bold">
                Número do Cartão <span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                id="numeroCartao"
                placeholder="0000.0000.0000.0000"
                // {...register("numeroCartao", { required: true })}
                className="w-full p-2 border"
              />
              {/* {errors.numeroCartao && <span>Campo obrigatório</span>} */}
            </div>
            <div>
              <label htmlFor="nomeCartao" className="font-bold">
                Nome impresso no Cartão <span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                id="nomeCartao"
                placeholder="Digite o nome aqui"
                // {...register("nomeCartao", { required: true })}
                className="w-full p-2 border"
              />
              {/* {errors.nomeCartao && <span>Campo obrigatório</span>} */}
            </div>
            <div>
              <label htmlFor="cpf" className="font-bold">
                CPF <span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                id="cpf"
                placeholder="000.000.000-00"
                // {...register("cpf", { required: true })}
                className="w-full p-2 border"
              />
            </div>
            <div>
              <label htmlFor="parcelas" className="font-bold">
                Quantidade de Parcelas <span className="text-red-700">*</span>
              </label>
              <select id="parcelas" className="w-full p-2 border">
                <option value="1">1x R$ 193,00</option>
                <option value="2">2x R$ 100,85 </option>
                <option value="3">3x R$ 68,22</option>
                <option value="4">4x R$ 51,91 </option>
                <option value="5">5x R$ 42,13</option>
                <option value="6">5x R$ 35,62</option>
                <option value="7">5x R$ 30,97</option>
                <option value="8">5x R$ 27,48</option>
              </select>
            </div>
            <div>
              <label htmlFor="validade" className="font-bold">
                Validade <span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                id="validade"
                placeholder="MM/AA"
                // {...register("validade", { required: true })}
                className="w-full p-2 border"
              />
            </div>
            <div>
              <label htmlFor="cvv" className="font-bold">
                CVV <span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                id="cvv"
                placeholder="000"
                // {...register("cvv", { required: true })}
                className="w-full p-2 border"
              />
              {/* {errors.cvv && <span>Campo obrigatório</span>} */}
            </div>
          </div>
        )}

        {paymentMethod === "pix" && (
          <div className="flex flex-col gap-4">
            <div>
              <label htmlFor="cpfPagador" className="font-bold">
                CPF do Pagador (Sem pontuação){" "}
                <span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                id="cpfPagador"
                placeholder="Digite o CPF do pagador"
                // {...register("cpfPagador", { required: true })}
                className="w-full p-2 border"
              />
              {/* {errors.cpfPagador && <span>Campo obrigatório</span>} */}
            </div>
          </div>
        )}
      </div>
      {/* final */}
      <div className="w-full mt-5 pt-2 border-b border-neutral-200 dark:border-neutral-700 mb-5 "></div>
      <div className="flex justify-end custom-stepButton">
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
            disabled={isLoading}
          >
            {!isLoading ? (
              "Finalizar"
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
