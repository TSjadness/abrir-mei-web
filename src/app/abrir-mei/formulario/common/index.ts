import { z } from "zod";

export const dataSchemaStep1 = z.object({
  name: z.string().min(1, "Nome obrigatório"),
  email: z.string().min(1, "E-mail obrigatório").email("E-mail inválido"),
});
export type DataSchemaStep1 = z.infer<typeof dataSchemaStep1>;

export const dataSchemaStep2 = z.object({
  name2: z.string().min(1, "Nome obrigatório"),
  email2: z.string().min(1, "E-mail obrigatório").email("E-mail inválido"),
});
export type DataSchemaStep2 = z.infer<typeof dataSchemaStep2>;



export const dataSchemaStep3 = z.object({
  name3: z.string().min(1, "Nome obrigatório"),
  email3: z.string().min(1, "E-mail obrigatório").email("E-mail inválido"),
});
export type DataSchemaStep3 = z.infer<typeof dataSchemaStep3>;



export const dataSchemaStep4 = z.object({
  name4: z.string().min(1, "Nome obrigatório"),
  email4: z.string().min(1, "E-mail obrigatório").email("E-mail inválido"),
});

export type DataSchemaStep4 = z.infer<typeof dataSchemaStep4>;