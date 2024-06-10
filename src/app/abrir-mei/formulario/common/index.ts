import { z } from "zod";

export const dataSchemaStep1 = z.object({
  // name: z.string().max(100).optional(),
  // email: z.string().email().max(100).optional(),
  name: z
    .string()
    .max(100)
    .refine((value) => !!value, {
      message: "O nome é obrigatório.",
    }),
  email: z.string().min(1, "E-mail obrigatório").email({
    message: "E-mail inválido",
  }),
  cpf: z.string().max(14).optional(),
  rg: z.string().max(20).optional(),
  phone: z.string().max(15).optional(),
  rgIssuer: z.string().max(10).optional(),
  rgState: z.string().min(1).optional(),
  motherName: z.string().max(100).optional(),
  birthDate: z.string().max(10).optional(),
});
export type DataSchemaStep1 = z.infer<typeof dataSchemaStep1>;

export const dataSchemaStep2 = z.object({
  name2: z.string().optional(),
  email2: z.string().optional(),
});
export type DataSchemaStep2 = z.infer<typeof dataSchemaStep2>;

export const dataSchemaStep3 = z.object({
  name3: z.string().optional(),
  email3: z.string().optional(),
  cep: z.string().optional(),
  endereco: z.string().optional(),
  bairro: z.string().optional(),
  cidade: z.string().optional(),
  estado: z.string().optional(),
});
export type DataSchemaStep3 = z.infer<typeof dataSchemaStep3>;

export const dataSchemaStep4 = z.object({
  name4: z.string().optional(),
  email4: z.string().optional(),
});

export type DataSchemaStep4 = z.infer<typeof dataSchemaStep4>;
