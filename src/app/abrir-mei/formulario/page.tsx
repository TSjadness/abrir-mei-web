"use client";

import { useState } from "react";
import FormStep1 from "./FormStep1";
import FormStep2 from "./FormStep2";
import FormStep3 from "./FormStep3";
import FormStep4 from "./FormStep4";


const Formulario: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormDataMei>({});

  const nextStep = (data: any) => {
    setFormData((prev) => ({ ...prev, [`step${step}`]: data }));
    setStep((prev) => prev + 1);
  };

  const previousStep = () => {
    setStep((prev) => prev - 1);
  };

  const sendData = (data: any) => {
    console.log(data + "enviado");
  };

  return (
    <>
      <div
        className={`nc-PageAddListing1 px-4 max-w-3xl mx-auto pb-24 pt-14 sm:py-24 lg:pb-32`}
      >
        {/* <div className="mb-9">
          <h1 className="text-3xl font-bold">Cadastro MEI</h1>
           <div>
            <span className="text-4xl font-semibold">{step}</span>
            <span className="text-lg text-neutral-500 dark:text-neutral-400">
              / 4
            </span>
          </div>
        </div> */}
        <div className="space-y-11">
          <div className="listingSection__wrap">
            {step === 1 && (
              <FormStep1 nextStep={nextStep} data={formData["step1"]} />
            )}
            {step === 2 && (
              <FormStep2
                nextStep={nextStep}
                previousStep={previousStep}
                data={formData["step2"]}
              />
            )}
            {step === 3 && (
              <FormStep3
                nextStep={nextStep}
                previousStep={previousStep}
                data={formData["step3"]}
              />
            )}

            {step === 4 && (
              <FormStep4
                setStep={setStep}
                nextStep={nextStep}
                formData={formData}
                previousStep={previousStep}
                step={step}
                sendData={sendData}
                setFormData={setFormData}
                data={formData["step4"]}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Formulario;