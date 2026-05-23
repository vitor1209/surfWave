export type LevelType =
  | "iniciante"
  | "intermediario"
  | "avancado"

export type LevelData = {
  id: LevelType
  title: string
  subtitle: string
  price: number
  hours: number
  description: string
  benefits: string[]
}

export type UseAulasReturn = {
  expandedCard: string
  schedulingOpen: boolean
  selectedLevel: string

  handleToggleCard: (id: string) => void
  handleOpenScheduling: (levelTitle: string) => void
  handleCloseScheduling: () => void
}