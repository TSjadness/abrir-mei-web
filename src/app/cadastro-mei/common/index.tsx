import { z } from "zod";

const noNumericChars = z.string().refine((value) => !/\d/.test(value), {
  message: "Não é permitido caracteres numéricos",
});

const user = z
  .object({
    name: z.string().min(1,'NOME OBRIGATORIO'),
  })
  .required();

export const dataSchemaStep1 = z.object({
  // name: z.string().max(100).optional(),
  // name: noNumericChars,
  name: user,
  email: z.string().max(100).optional(),
  // cpf: z.string().max(14).optional(),
  cpf: z
    .string()
    .min(14, { message: "CPF deve ter no mínimo 14 caracteres" })
    .max(14, { message: "CPF deve ter no máximo 14 caracteres" }),
  rg: z.string().max(20).optional(),
  phone: z.string().max(15).optional(),
  rg_issuer: z.string().max(10).optional(),
  rg_state: z.string().optional(),
  mother_name: z.string().max(100).optional(),

  birth_date: z.string().max(10).optional(),
});
export type DataSchemaStep1 = z.infer<typeof dataSchemaStep1>;


export const dataSchemaStep2 = z.object({
  // capital_value: z.string().optional(),
  // main_occupation: z.string().optional(),
  // secondary_occupation: z.string().optional(),
  // mode_operation: z.string().optional(),
   capital_value: z.string().nonempty("Valor do Capital Social é obrigatório"),
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




export const cadastroMeiSchema = z.object({
  capital_value: z.string().min(1,"Valor do Capital Social é obrigatório"),
  main_occupation: z
    .string()
    .nonempty("Ocupação Principal da Empresa é obrigatória"),
  secondary_occupation: z
    .string()
    .nonempty("Escolha a Ocupação Secundária é obrigatória"),
  mode_operation: z.string().nonempty("Forma de atuação é obrigatória"),
});