import React, { useState } from "react";
import { DataSchemaStep3, dataSchemaStep3 } from "./common";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import InputMask from "react-input-mask";

interface Props {
  register: any;
  setValue: any;
}

const StepAddress = ({ register, setValue }: Props) => {
  const {
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<DataSchemaStep3>({ resolver: zodResolver(dataSchemaStep3) });

  const [cepData, setCepData] = useState({});
  const [alt_cepData, alt_setCepData] = useState({});
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);

  const fetchCEPData = async (cep: string) => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      const data = response.data;
      setCepData(data);
      setValue("address", data.logradouro || "");
      setValue("neighborhood", data.bairro || "");
      setValue("city", data.localidade || "");
      setValue("state", data.uf || "");
    } catch (error) {
      console.error("Erro ao buscar dados do CEP:", error);
    }
  };

   const fetchAltCEPData = async (alt_cep: string) => {
     try {
       const response = await axios.get(
         `https://viacep.com.br/ws/${alt_cep}/json/`
       );
       const data = response.data;
       setCepData(data);
       setValue("alt_address", data.logradouro || "");
       setValue("alt_neighborhood", data.bairro || "");
       setValue("alt_city", data.localidade || "");
       setValue("alt_state", data.uf || "");
     } catch (error) {
       console.error("Erro ao buscar dados do CEP:", error);
     }
   };


  return (
    <div>
      <div className="mb-5">
        <div className="text-xl font-bold custom-step text-blue-500">
          <h2>Endereço Pessoal</h2>
        </div>
        <div
          className="w-full pt-2 mb-5 border-b-2"
          style={{ borderColor: "rgba(2, 108, 135, var(--tw-bg-opacity))" }}
        ></div>
      </div>

      <div className="space-y-8 pt-2 ">
        <div className="mb-7 flex flex-row justify-between gap-5 items-center custom-step">
          <div className="w-full">
            <label htmlFor="cep" className=" text-gray-700">
              CEP<span className="text-red-700">*</span>
            </label>
            <InputMask
              mask="99999-999"
              id="cep"
              onChange={(e) => fetchCEPData(e.target.value)}
              placeholder="00000-000"
              className="w-full border border-neutral-200 dark:border-neutral-700 rounded-md p-2"
            />
          </div>
          <div className=" w-full">
            <label htmlFor="city" className=" text-gray-700">
              Cidade<span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              id="city"
              placeholder="Digite a sua cidade"
              className="w-full border border-neutral-200 dark:border-neutral-700 rounded-md p-2"
              {...register("city")}
            />
          </div>

          <div className=" w-full">
            <label className=" text-gray-700">
              Bairro<span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              id="neighborhood"
              placeholder="Digite seu bairro"
              className="w-full border border-neutral-200 dark:border-neutral-700 rounded-md p-2"
              {...register("neighborhood")}
            />
          </div>
        </div>

        <div className="mb-7 flex flex-row justify-between gap-5 items-center custom-step">
          <div className=" w-full">
            <label htmlFor="address" className=" text-gray-700">
              Endereço <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              id="address"
              placeholder="Digite seu endereço"
              className="w-full border border-neutral-200 dark:border-neutral-700 rounded-md p-2"
              {...register("address")}
            />
          </div>

          <div className=" w-full">
            <label htmlFor="number" className=" text-gray-700">
              Número<span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              id="number"
              {...register("number")}
              placeholder="Digite o número"
              className="w-full border border-neutral-200 dark:border-neutral-700 rounded-md p-2"
            />
          </div>

          <div className="w-full">
            <label htmlFor="state" className=" text-gray-700">
              Estado<span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              id="state"
              placeholder="Digite o estado"
              className="w-full border border-neutral-200 dark:border-neutral-700 rounded-md p-2"
              {...register("state")}
            />
          </div>
        </div>

        <div className="mb-7 flex flex-row justify-between gap-5 items-center custom-step">
          <div className=" w-full">
            <label htmlFor="complement" className=" text-gray-700">
              Complemento <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              id="complement"
              {...register("complement")}
              placeholder="Digite o complemento"
              className="w-full border border-neutral-200 dark:border-neutral-700 rounded-md p-2"
            />
          </div>
        </div>

        <div className="mb-7 flex flex-row justify-between gap-5 items-center custom-step">
          <div className=" w-full">
            <label htmlFor="same_address" className=" text-gray-700">
              Seu endereço pessoal é o mesmo que o comercial?{" "}
              <span className="text-red-700">*</span>
            </label>
            <select
              id="same_address"
              className="w-full border border-neutral-200 dark:border-neutral-700 rounded-md p-2"
              {...register("same_address")}
              onChange={(e) =>
                setShowAdditionalFields(e.target.value === "nao" ? true : false)
              }
            >
              <option value="sim">Sim</option>
              <option value="nao">Não</option>
            </select>
          </div>
        </div>

        {showAdditionalFields && (
          <>
            <div className="mb-7 flex flex-row justify-between gap-5 items-center custom-step">
              <div className="w-full">
                <label htmlFor="alt_cep" className=" text-gray-700">
                  CEP<span className="text-red-700">*</span>
                </label>
                <InputMask
                  mask="99999-999"
                  id="alt_cep"
                  onChange={(e) => fetchAltCEPData(e.target.value)}
                  placeholder="00000-000"
                  className="w-full border border-neutral-200 dark:border-neutral-700 rounded-md p-2"
                />
              </div>
              <div className="w-full">
                <label htmlFor="alt_city" className=" text-gray-700">
                  Cidade<span className="text-red-700">*</span>
                </label>
                <input
                  type="text"
                  id="alt_city"
                  placeholder="Digite a sua cidade"
                  className="w-full border border-neutral-200 dark:border-neutral-700 rounded-md p-2"
                  {...register("alt_city")}
                />
              </div>

              <div className="w-full">
                <label className=" text-gray-700">
                  Bairro<span className="text-red-700">*</span>
                </label>
                <input
                  type="text"
                  id="alt_neighborhood"
                  placeholder="Digite seu bairro"
                  className="w-full border border-neutral-200 dark:border-neutral-700 rounded-md p-2"
                  {...register("alt_neighborhood")}
                />
              </div>
            </div>

            <div className="mb-7 flex flex-row justify-between gap-5 items-center custom-step">
              <div className="w-full">
                <label
                  htmlFor="alt_address"
                  className=" text-gray-700"
                >
                  Endereço <span className="text-red-700">*</span>
                </label>
                <input
                  type="text"
                  id="alt_address"
                  placeholder="Digite seu endereço"
                  className="w-full border border-neutral-200 dark:border-neutral-700 rounded-md p-2"
                  {...register("alt_address")}
                />
              </div>

              <div className=" w-full">
                <label htmlFor="alt_number" className=" text-gray-700">
                  Número<span className="text-red-700">*</span>
                </label>
                <input
                  type="text"
                  id="alt_number"
                  {...register("alt_number")}
                  placeholder="Digite o número"
                  className="w-full border border-neutral-200 dark:border-neutral-700 rounded-md p-2"
                />
              </div>

              <div className="w-full">
                <label htmlFor="alt_state" className=" text-gray-700">
                  Estado<span className="text-red-700">*</span>
                </label>
                <input
                  type="text"
                  id="alt_state"
                  placeholder="Digite o estado"
                  className="w-full border border-neutral-200 dark:border-neutral-700 rounded-md p-2"
                  {...register("alt_state")}
                />
              </div>
            </div>

            <div className="mb-7 flex flex-row justify-between gap-5 items-center custom-step">
              <div className=" w-full">
                <label
                  htmlFor="alt_complement"
                  className=" text-gray-700"
                >
                  Complemento <span className="text-red-700">*</span>
                </label>
                <input
                  type="text"
                  id="alt_complement"
                  {...register("alt_complement")}
                  placeholder="Digite o complemento"
                  className="w-full border border-neutral-200 dark:border-neutral-700 rounded-md p-2"
                />
              </div>
            </div>
          </>
        )}

        <div className="mb-7 flex flex-row justify-between gap-5 items-center custom-step">
          <div className=" w-full">
            <label htmlFor="gov_password" className=" text-gray-700">
              Senha GOV.BR / Brasil Cidadão (Se não possui, deixe em branco)
              <span className="text-red-700">*</span>
            </label>
            <input
              type="password"
              id="gov_password"
              {...register("gov_password")}
              placeholder="Digite a senha"
              className="w-full border border-neutral-200 dark:border-neutral-700 rounded-md p-2"
            />
          </div>
        </div>

        <div className="mb-7 flex flex-row justify-between gap-5 items-center custom-step">
          <div className=" w-full">
            <label
              htmlFor="confirm_password"
              className=" text-gray-700"
            >
              Confirme a Senha GOV.BR / Brasil Cidadão (Se não possui, deixe em
              branco)
              <span className="text-red-700">*</span>
            </label>
            <input
              type="password"
              id="confirm_password"
              {...register("confirm_password")}
              placeholder="Digite a senha"
              className="w-full border border-neutral-200 dark:border-neutral-700 rounded-md p-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepAddress;
