import { z } from "zod"

export const reservaWizardSchema = z.object({
  deliveryType: z.enum(["retirar", "delivery"]),

  fullName: z
    .string()
    .trim()
    .min(1, "Nome obrigatorio"),

  phone: z
    .string()
    .trim()
    .min(1, "Telefone obrigatorio"),

  email: z
    .string()
    .trim()
    .email("E-mail invalido"),

  notes: z
    .string()
    .trim()
    .optional(),

  paymentMethod: z.enum(["retirada"]),
})

export type ReservaWizardFormValues =
  z.infer<typeof reservaWizardSchema>