import {
  DataSchemaStep1,
  DataSchemaStep2,
  DataSchemaStep3,
  DataSchemaStep4,
} from "../common";

export type FormDataMei = {
  [key: string]: any;
  step1?: FormDataType1;
  step2?: FormDataType2;
  step3?: FormDataType3;
  step4?: FormDataType4;
};

export type StepPropsAll = {
  nextStep: (data: any) => void;
  previousStep?: (data: FormDataMei) => void;
};

// type FormDataType1 = DataSchemaStep1;
// type FormDataType2 = DataSchemaStep2;
// type FormDataType3 = DataSchemaStep3;
// type FormDataType4 = DataSchemaStep4;

type FormDataType1 = {
  id?: string;
  name?: string;
  email?: string;
  cpf?: string;
  rg?: string;
  phone?: string;
  rg_issuer?: string;
  rg_state?: string;
  mother_name?: string;
  birth_date?: string;
};

type FormDataType2 = {
  capital_value?: string;
  main_occupation?: string;
  secondary_occupation?: string;
  mode_operation?: string;
};

type FormDataType3 = {
  cep?: string;
  address?: string;
  neighborhood?: string;
  city?: string;
  state?: string;
  number?: string;
  complement?: string;
  same_address?: string;
  gov_password?: string;
  confirm_password?: string;
};

type FormDataType4 = {
  payment_method?: string;
  terms_accepted?: boolean;
  card?: {
    card_number?: string;
    card_name?: string;
    cpf?: string;
    installments?: number;
    expiration_date?: string;
    cvv?: string;
  };
  pix?: {
    payer_CPF?: string;
  };
};
