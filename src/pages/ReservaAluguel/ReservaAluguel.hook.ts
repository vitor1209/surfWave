import { useNavigate, useParams } from "react-router-dom"

import { allEquipment } from "../Aluguel/Aluguel.hook"
import type { UseReservaAluguelReturn } from "./ReservaAluguel.types"

export const useReservaAluguel = (): UseReservaAluguelReturn => {
  const navigate = useNavigate()
  const { id } = useParams()

  const equipment =
    allEquipment.find((item) => item.id === id) ?? null

  const handleBack = () => {
    navigate("/aluguel")
  }

  const handleReserve = () => {
    if (!equipment) {
      return
    }

    alert(`Reserva de "${equipment.name}" realizada com sucesso!`)
  }

  return {
    equipment,
    handleBack,
    handleReserve,
  }
}
