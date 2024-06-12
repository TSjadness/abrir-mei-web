import { z } from "zod";

export const dataSchemaStep1 = z.object({
  name: z.string().max(100).optional(),
  email: z.string().max(100).optional(),
  cpf: z.string().max(14).optional(),
  rg: z.string().max(20).optional(),
  phone: z.string().max(15).optional(),
  rg_issuer: z.string().max(10).optional(),
  rg_state: z.string().optional(),
  mother_name: z.string().max(100).optional(),
  birth_date: z.string().max(10).optional(),
});
export type DataSchemaStep1 = z.infer<typeof dataSchemaStep1>;

export const dataSchemaStep2 = z.object({
  capital_value: z.string().optional(),
  main_occupation: z.string().optional(),
  secondary_occupation: z.string().optional(),
  mode_operation: z.string().optional(),
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
  same_address: z.string().optional(),
  gov_password: z.string().optional(),
  confirm_password: z.string().optional(),
});
export type DataSchemaStep3 = z.infer<typeof dataSchemaStep3>;

export const dataSchemaStep4 = z.object({
  payment_method: z.string().optional(),
  terms_accepted: z.boolean().optional(),
  cartao: z.object({
    numeroCartao: z.string().optional(),
    nomeCartao: z.string().optional(),
    cpf: z.string().optional(),
    parcelas: z.number().optional(),
    validade: z.string().optional(),
    cvv: z.string().optional(),
  }),
  pix: z.object({
    cpfPagador: z.string().optional(),
  }),
});

export type DataSchemaStep4 = z.infer<typeof dataSchemaStep4>;
