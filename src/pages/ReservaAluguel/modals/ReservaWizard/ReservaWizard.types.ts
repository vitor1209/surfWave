import type { z } from "zod"
import type { RentalEquipment } from "@/pages/Aluguel/Aluguel.types"
import type { reservaWizardSchema } from "./ReservaWizard.schema"

export type ReservaWizardStep = 1 | 2 | 3 | 4

export type ReservaWizardFormValues = z.infer<typeof reservaWizardSchema>

export type ReservaWizardProps = {
  open: boolean
  onClose: () => void
  equipment: RentalEquipment
}
