import { useState } from "react"

import type { UseAulasReturn } from "./Aulas.types"

export const useAulas = (): UseAulasReturn => {
  const [expandedCard, setExpandedCard] =
    useState("iniciante")

  const [schedulingOpen, setSchedulingOpen] =
    useState(false)

  const [selectedLevel, setSelectedLevel] =
    useState("Iniciante")

  const handleOpenScheduling = (
    levelTitle: string
  ) => {
    setSelectedLevel(levelTitle)
    setSchedulingOpen(true)
  }

  const handleCloseScheduling = () => {
    setSchedulingOpen(false)
  }

  const handleToggleCard = (id: string) => {
    setExpandedCard((current) =>
      current === id ? "" : id
    )
  }

  return {
    expandedCard,

    schedulingOpen,

    selectedLevel,

    handleToggleCard,

    handleOpenScheduling,

    handleCloseScheduling,
  }
}