import type { Dispatch, SetStateAction } from "react"

export const EquipmentCategory = {
  TODOS: "todos",
  PRANCHAS: "pranchas",
  ROUPAS: "roupas",
  ACESSORIOS: "acessorios",
} as const

export type EquipmentCategory =
  (typeof EquipmentCategory)[keyof typeof EquipmentCategory]

export type RentalEquipment = {
  id: string
  name: string
  category: EquipmentCategory
  description: string
  price: number
  image: string
  label: string
}

export type CategoryFilter = {
  id: EquipmentCategory
  label: string
}

export type EquipmentCardProps = {
  equipment: RentalEquipment
  onReserve: (id: string) => void
}

export type UseAluguelReturn = {
  search: string
  setSearch: Dispatch<SetStateAction<string>>
  activeCategory: EquipmentCategory
  setActiveCategory: Dispatch<SetStateAction<EquipmentCategory>>
  filteredEquipment: RentalEquipment[]
  categories: CategoryFilter[]
  handleReserve: (id: string) => void
}