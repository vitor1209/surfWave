import type { RentalEquipment } from "@/pages/Aluguel/Aluguel.types"

export type UseReservaAluguelReturn = {
  equipment: RentalEquipment | null
  handleBack: () => void
}
