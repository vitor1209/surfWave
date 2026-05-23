import { z } from "zod"

export const WEEK_DAY_VALUES = [
  "seg",
  "ter",
  "qua",
  "qui",
  "sex",
  "sab",
  "dom",
] as const

export const WEEK_DAYS = [
  { label: "Seg", value: "seg" },
  { label: "Ter", value: "ter" },
  { label: "Qua", value: "qua" },
  { label: "Qui", value: "qui" },
  { label: "Sex", value: "sex" },
  { label: "Sab", value: "sab" },
  { label: "Dom", value: "dom" },
] as const

export const AVAILABLE_TIMES = [
  "09:00",
  "10:30",
  "14:00",
  "16:30",
] as const

export const schedulingFormSchema = z
  .object({
    day: z.enum(WEEK_DAY_VALUES, {
      error: "Selecione um dia",
    }),
    time: z.enum(AVAILABLE_TIMES, {
      error: "Selecione um horario",
    }),
    useCustomDate: z.boolean(),
    customDate: z.date().nullable(),
    fullName: z.string().trim().min(1, "Nome obrigatorio"),
    email: z.string().trim().email("E-mail invalido"),
    phone: z.string().trim().min(1, "Telefone obrigatorio"),
  })
  .superRefine((data, ctx) => {
    if (data.useCustomDate && !data.customDate) {
      ctx.addIssue({
        code: "custom",
        path: ["customDate"],
        message: "Selecione uma data",
      })
    }
  })

export type SchedulingFormSchema = z.infer<
  typeof schedulingFormSchema
>
