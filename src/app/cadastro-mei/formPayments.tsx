import React, { useState } from "react";

interface Props {
  register: any;
  setTermsAccepted: React.Dispatch<React.SetStateAction<boolean>>;
}

const StepPayments = ({ register, setTermsAccepted }: Props) => {
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

        <div className="mb-4 flex flex-col justify-between gap-3 items-center">
          <label className=" w-full font-bold text-lg">
            Escolha a forma de pagamento
          </label>
          <div className="w-full flex gap-2">
            <input
              type="checkbox"
              name="payment_method"
              value="card"
              checked={paymentMethod === "card"}
              onChange={() => handleCheckboxChange("card")}
            />
            <label htmlFor="card" className="font-semibold">
              Cartão <span className="text-red-700">*</span>
            </label>
          </div>
          <div className="w-full flex gap-2">
            <input
              type="checkbox"
              name="payment_method"
              value="pix"
              checked={paymentMethod === "pix"}
              onChange={() => handleCheckboxChange("pix")}
            />
            <label htmlFor="pix" className="font-semibold">
              Pix <span className="text-red-700">*</span>
            </label>
          </div>
        </div>

        {paymentMethod === "card" && (
          <div className="flex flex-col gap-4">
            <div>
              <label htmlFor="card_number" className="font-bold">
                Número do Cartão <span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                id="card_number"
                placeholder="0000.0000.0000.0000"
                {...register("card.card_number")}
                className="w-full p-2 border"
              />
            </div>
            <div>
              <label htmlFor="card_name" className="font-bold">
                Nome impresso no Cartão <span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                id="card_name"
                placeholder="Digite o nome aqui"
                {...register("card.card_name")}
                className="w-full p-2 border"
              />
            </div>
            <div>
              <label htmlFor="cpf" className="font-bold">
                CPF <span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                id="cpf"
                placeholder="000.000.000-00"
                {...register("card.cpf")}
                className="w-full p-2 border"
              />
            </div>
            <div>
              <label htmlFor="installments" className="font-bold">
                Quantidade de Parcelas <span className="text-red-700">*</span>
              </label>
              <select
                id="installments"
                {...register("card. installments")}
                className="w-full p-2 border"
              >
                <option value="1x R$ 193,00">1x R$ 193,00</option>
                <option value="2x R$ 100,85">2x R$ 100,85 </option>
                <option value="3x R$ 68,22">3x R$ 68,22</option>
                <option value="4x R$ 51,91">4x R$ 51,91 </option>
                <option value="5x R$ 42,13">5x R$ 42,13</option>
                <option value="6x R$ 35,62">6x R$ 35,62</option>
                <option value="7x R$ 30,9">7x R$ 30,97</option>
                <option value="8x R$ 27,48">8x R$ 27,48</option>
              </select>
            </div>
            <div>
              <label htmlFor="expiration_date" className="font-bold">
                Validade <span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                id="expiration_date"
                placeholder="MM/AA"
                {...register("card.expiration_date")}
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
                {...register("card.cvv")}
                className="w-full p-2 border"
              />
            </div>
          </div>
        )}

        {paymentMethod === "pix" && (
          <div className="flex flex-col gap-4">
            <div>
              <label htmlFor="payer_CPF" className="font-bold">
                CPF do Pagador (Sem pontuação){" "}
                <span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                id="payer_CPF"
                placeholder="Digite o CPF do pagador"
                {...register("pix.payer_CPF")}
                className="w-full p-2 border"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StepPayments;
