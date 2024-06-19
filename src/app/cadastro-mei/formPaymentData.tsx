import React, { useEffect, useState } from "react";
import { CiCreditCard1 } from "react-icons/ci";
import { FaPix } from "react-icons/fa6";
import InputMask from "react-input-mask";

interface Props {
  register: any;
  card_information: any;
  setTermsAccepted: React.Dispatch<React.SetStateAction<boolean>>;
  

}

const StepPayments = ({
  register,
  setTermsAccepted,
  card_information,
}: Props) => {
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);

  const handleCheckboxChange = (method: string) => {
    setPaymentMethod(method);
  };
  const handleTermsCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTermsAccepted(e.target.checked);
  };

  return (
    <div>
      <div className="mb-5">
        <div className="text-xl font-semibold custom-step text-blue-500">
          <h2>Pagamentos</h2>
        </div>
        <div
          className="w-full pt-2 mb-5 border-b-2"
          style={{ borderColor: "rgba(2, 108, 135, var(--tw-bg-opacity))" }}
        ></div>
      </div>

      <div className="space-y-8 pt-2 ">
        <div className="mb-7 flex flex-row justify-between gap-5 items-center"></div>

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
            <label htmlFor="" className="font-medium text-xl">
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

        <div className="mb-4 flex flex-col justify-between gap-3 items-center">
          <div className="w-full">
            <div className=" w-full flex gap-2">
              <input
                type="checkbox"
                name="terms_accepted"
                className=" text-2xl"
                onChange={handleTermsCheckboxChange}
              />
              <label htmlFor="">
                Li e concordo com os{" "}
                <a href="" className="cursor-pointer underline text-blue-700">
                  termos e condições
                </a>
              </label>
            </div>
          </div>
        </div>

        <div className="mb-4 flex flex-col justify-between gap-3 items-center ">
          <label className=" w-full font-bold text-lg">
            Escolha a forma de pagamento
          </label>

          <div className=" w-full">
            <div className="w-auto flex flex-row items-center gap-5 custom-payments">
              <div
                onClick={() => handleCheckboxChange("card")}
                className={`w-full flex gap-2 rounded-2xl border-2 p-2 cursor-pointer ${
                  paymentMethod === "card"
                    ? "bg-blue-500 text-white"
                    : "bg-white"
                }`}
              >
                <input
                  type="radio"
                  name="payment_method"
                  value="card"
                  checked={paymentMethod === "card"}
                  onChange={() => handleCheckboxChange("card")}
                />
                <label
                  htmlFor="card"
                  className="font-semibold flex flex-row items-center gap-5 cursor-pointer"
                >
                  <CiCreditCard1 /> Cartão de Crédito{" "}
                </label>
              </div>

              <div
                onClick={() => handleCheckboxChange("pix")}
                className={`w-full flex gap-2 rounded-2xl border-2 p-2 cursor-pointer  ${
                  paymentMethod === "pix"
                    ? "bg-blue-500 text-white"
                    : "bg-white"
                }`}
              >
                <input
                  type="radio"
                  name="payment_method"
                  value="pix"
                  checked={paymentMethod === "pix"}
                  onChange={() => handleCheckboxChange("pix")}
                />
                <label
                  htmlFor="pix"
                  className="font-semibold flex flex-row items-center gap-5 cursor-pointer"
                >
                  <FaPix /> Pix
                </label>
              </div>
              {/* <div
                onClick={() => handleCheckboxChange("pix")}
                className={`w-full flex items-center gap-2 rounded-2xl border-2 p-2 cursor-pointer ${
                  paymentMethod === "pix"
                    ? "bg-[#1EA230] text-white"
                    : "bg-white"
                }`}
              >
                <input
                  type="radio"
                  name="payment_method"
                  value="pix"
                  checked={paymentMethod === "pix"}
                  onChange={() => handleCheckboxChange("pix")}
                  className="radio-input"
                />
                <span className="radio-dot"></span>{" "}
                <label
                  htmlFor="pix"
                  className="font-semibold flex flex-row items-center gap-5 cursor-pointer"
                >
                  <FaPix /> Pix
                </label>
              </div> */}
            </div>
          </div>
        </div>

        {paymentMethod === "card" && (
          <div className="flex flex-col gap-4 ">
            <div className=" flex flex-row gap-4 custom-payments-card">
              <div className="w-full">
                <div className="w-full">
                  <label htmlFor="card_number" className="text-gray-700">
                    Número do Cartão <span className="text-red-700">*</span>
                  </label>
                  <InputMask
                    mask="9999.9999.9999.9999"
                    maskChar=""
                    //type="text"
                    id="card_number"
                    name="card_number"
                    // value={cardNumber}
                    placeholder="0000.0000.0000.0000"
                    {...register("card.card_number")}
                    className="w-full border border-neutral-200 dark:border-neutral-700 rounded-md p-2"
                  />
                </div>

                <div className="w-full">
                  <label htmlFor="card_name" className="text-gray-700">
                    Nome impresso no Cartão{" "}
                    <span className="text-red-700">*</span>
                  </label>
                  <input
                    type="text"
                    id="card_name"
                    name="cardName"
                    placeholder="Digite o nome aqui"
                    {...register("card.card_name")}
                    className="w-full border border-neutral-200 dark:border-neutral-700 rounded-md p-2"
                  />
                </div>

                <div className="w-full">
                  <label htmlFor="expiration_date" className="text-gray-700">
                    Validade <span className="text-red-700">*</span>
                  </label>
                  <InputMask
                    mask="99/99"
                    maskChar=""
                    id="expiration_date"
                    placeholder="MM/AA"
                    {...register("card.expiration_date")}
                    className="w-full border border-neutral-200 dark:border-neutral-700 rounded-md p-2"
                  />
                </div>

                <div className="w-full">
                  <label htmlFor="cvv" className="text-gray-700">
                    CVV <span className="text-red-700">*</span>
                  </label>
                  <InputMask
                    mask="999"
                    maskChar=""
                    id="cvv"
                    placeholder="000"
                    {...register("card.cvv")}
                    className="w-full border border-neutral-200 dark:border-neutral-700 rounded-md p-2"
                  />
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-700 to-blue-900 w-[45rem] p-5 rounded-lg m-2 text-white custom-template shadow-lg">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xl font-semibold">
                    Cartão de Crédito
                  </span>
                  <CiCreditCard1 size={30} />
                </div>
                <div className="mb-4">
                  <span className="block text-sm">Número do Cartão</span>
                  <span className="text-lg font-mono">
                    {card_information?.card_number || "0000 0000 0000 0000"}
                  </span>
                </div>
                <div className="mb-4 w-58">
                  <span className="block text-sm ">Nome do Titular</span>
                  <span className="text-lg break-all  ">
                    {card_information?.card_name || "NOME DO TITULAR"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <div>
                    <span className="block text-sm">Validade</span>
                    <span className="text-lg">
                      {card_information?.expiration_date || "MM/AA"}
                    </span>
                  </div>
                  <div>
                    <span className="block text-sm">CVV</span>
                    <span className="text-lg">
                      {card_information?.cvv || "000"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="installments" className="text-gray-700">
                Quantidade de Parcelas <span className="text-red-700">*</span>
              </label>
              <select
                id="installments"
                {...register("card.installments")}
                className="w-full border border-neutral-200 dark:border-neutral-700 rounded-md p-2"
              >
                <option value="1x R$ 193,00">1x R$ 193,00</option>
                <option value="2x R$ 100,85">2x R$ 100,85</option>
                <option value="3x R$ 68,22">3x R$ 68,22</option>
                <option value="4x R$ 51,91">4x R$ 51,91</option>
                <option value="5x R$ 42,13">5x R$ 42,13</option>
                <option value="6x R$ 35,62">6x R$ 35,62</option>
                <option value="7x R$ 30,9">7x R$ 30,97</option>
                <option value="8x R$ 27,48">8x R$ 27,48</option>
              </select>
            </div>
          </div>
        )}

        {paymentMethod === "pix" && (
          <div className="flex flex-col gap-4  p-4 rounded">
            <div>
              <label htmlFor="payer_CPF" className="text-gray-700">
                CPF do Pagador (Sem pontuação){" "}
                <span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                id="payer_CPF"
                placeholder="Digite o CPF do pagador"
                {...register("pix.payer_CPF")}
                maxLength={14}
                className="w-full border border-neutral-200 dark:border-neutral-700 rounded-md p-2"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StepPayments;
