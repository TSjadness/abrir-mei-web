import { z } from "zod";


export const schema = z.object({
  product_id: z.number().optional(),
  //step1
  name: z.string().optional(),
  email: z.string().max(100).optional(),
  cpf: z.string().optional(),
  rg: z.string().max(20).optional(),
  phone: z.string().optional(),
  rg_issuer: z.string().max(20).optional(),
  rg_state: z.string().optional(),
  mother_name: z.string().max(100).optional(),
  birth_date: z.string().max(10).optional(),

  //step2
  capital_value: z.string().optional(),
  main_occupation: z.string().optional(),
  secondary_occupation: z.string().optional(),
  mode_operation: z.string().optional(),

  //step3
  cep: z.string().optional(),
  address: z.string().optional(),
  neighborhood: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  number: z.string().optional(),
  complement: z.string().optional(),
  alt_cep: z.string().optional(),
  alt_address: z.string().optional(),
  alt_neighborhood: z.string().optional(),
  alt_city: z.string().optional(),
  alt_state: z.string().optional(),
  alt_number: z.string().optional(),
  alt_complement: z.string().optional(),
  same_address: z.string().optional(),
  gov_password: z.string().optional(),
  confirm_password: z.string().optional(),

  //step4
  payment_method: z.string().optional(),
  terms_accepted: z.boolean().optional(),

  card: z
    .object({
      card_number: z.string().optional(),
      card_name: z.string().optional(),
      installments: z.string().optional(),
      expiration_date: z.string().optional(),
      cvv: z.string().optional(),
    })
    .optional(),

  pix: z
    .object({
      cpf: z.string().optional(),
    })
    .optional(),
});



















export const dataSchemaStep1 = z.object({
  name: z.string().nonempty("Campo obrigatório"),
  email: z.string().max(100).nonempty("Campo obrigatório").email("Email inválido"),
  cpf: z
    .string()
    .min(14, { message: "CPF deve ter no mínimo 14 caracteres" })
    .max(14, { message: "CPF deve ter no máximo 14 caracteres" }),
  rg: z.string().max(20).min(1, { message: "RG é obrigatório" }),
  phone: z.string().min(1, { message: "Telefone é obrigatório" }),
  rg_issuer: z.string().max(10).min(1, { message: "Órgão Emissor é obrigatório" }),
  rg_state: z.string().min(1, { message: "Estado é obrigatório" }),
  mother_name: z.string().max(100).min(1, { message: "Nome da Mãe é obrigatório" }),
  birth_date: z.string().max(10).min(1, { message: "Data de Nascimento é obrigatório" }), 
});
export type DataSchemaStep1 = z.infer<typeof dataSchemaStep1>;


export const dataSchemaStep2 = z.object({
   capital_value: z.string().min(1,"Valor do Capital Social é obrigatório"),
  main_occupation: z
    .string()
    .nonempty("Ocupação Principal da Empresa é obrigatória"),
  secondary_occupation: z
    .string()
    .nonempty("Escolha a Ocupação Secundária é obrigatória"),
  mode_operation: z.string().nonempty("Forma de atuação é obrigatória"),
});
export type DataSchemaStep2 = z.infer<typeof dataSchemaStep2>;


export const dataSchemaStep3 = z.object({
  cep: z.string().optional(),
  address: z.string().optional(),
  neighborhood: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  number: z.string().optional(),
  complement: z.string().optional(),
  alt_cep: z.string().optional(),
  alt_address: z.string().optional(),
  alt_neighborhood: z.string().optional(),
  alt_city: z.string().optional(),
  alt_state: z.string().optional(),
  alt_number: z.string().optional(),
  alt_complement: z.string().optional(),
  same_address: z.boolean().optional(),
  gov_password: z.string().optional(),
  confirm_password: z.string().optional(),
});
export type DataSchemaStep3 = z.infer<typeof dataSchemaStep3>;

export const dataSchemaStep4 = z.object({
  payment_method: z.string().optional(),
  terms_accepted: z.boolean().optional(),
  card: z.object({
    card_number: z.string().optional(),
    card_name: z.string().optional(),
    installments: z.number().optional(),
    expiration_date: z.string().optional(),
    cvv: z.string().optional(),
  }),
  pix: z.object({
    payer_CPF: z.string().optional(),
  }),
});

export type DataSchemaStep4 = z.infer<typeof dataSchemaStep4>;




