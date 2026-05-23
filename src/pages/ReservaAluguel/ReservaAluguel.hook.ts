import { useNavigate, useParams } from "react-router-dom"

import { allEquipment } from "@/pages/Aluguel/Aluguel.hook"
import type { UseReservaAluguelReturn } from "@/pages/ReservaAluguel/ReservaAluguel.types"

export const useReservaAluguel = (): UseReservaAluguelReturn => {
  const navigate = useNavigate()
  const { id } = useParams()

  const equipment =
    allEquipment.find((item) => item.id === id) ?? null

  const handleBack = () => {
    navigate("/aluguel")
  }

  return {
    equipment,
    handleBack,
  }
}
