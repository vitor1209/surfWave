import type { RentalEquipment } from "../Aluguel/Aluguel.types"

export type UseReservaAluguelReturn = {
  equipment: RentalEquipment | null
  handleBack: () => void
  handleReserve: () => void
}
