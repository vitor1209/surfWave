import { useState } from "react"
import { faker } from "@faker-js/faker"

import {
  EquipmentCategory,
  type CategoryFilter,
  type RentalEquipment,
  type UseAluguelReturn,
} from "./Aluguel.types"

faker.seed(42)

const equipmentNames = {
  pranchas: [
    "Prancha Longboard Clássic",
    "Prancha Shortboard Pro",
    "Prancha Funboard",
  ],

  roupas: [
    "Wetsuit 3/2mm Fullsuit",
    "Wetsuit Shorty 2mm",
    "Leash Premium 6'",
  ],

  acessorios: [
    "Capa do Prancha",
    "Lycra UV Protection",
    "Prancha Soft Top Iniciante",
  ],
}

const categories: CategoryFilter[] = [
  {
    id: EquipmentCategory.TODOS,
    label: "Todos",
  },

  {
    id: EquipmentCategory.PRANCHAS,
    label: "Pranchas",
  },

  {
    id: EquipmentCategory.ROUPAS,
    label: "Roupas",
  },

  {
    id: EquipmentCategory.ACESSORIOS,
    label: "Acessórios",
  },
]

const createEquipment = (): RentalEquipment[] => {
  const equipment: RentalEquipment[] = []

  Object.entries(equipmentNames).forEach(([category, names]) => {
    names.forEach((name) => {
      equipment.push({
        id: faker.string.uuid(),

        name,

        category: category as RentalEquipment["category"],

        description: faker.lorem.sentence(),

        price: faker.number.int({
          min: 15,
          max: 100,
        }),

        image: faker.image.urlPicsumPhotos({
          width: 300,
          height: 300,
        }),

        label: category.charAt(0).toUpperCase() + category.slice(1),
      })
    })
  })

  return equipment
}

const allEquipment = createEquipment()

export const useAluguel = (): UseAluguelReturn => {
  const [search, setSearch] = useState("")

  const [activeCategory, setActiveCategory] =
    useState<EquipmentCategory>(EquipmentCategory.TODOS)

  const filteredEquipment = allEquipment.filter((item) => {
    const matchesCategory =
      activeCategory === EquipmentCategory.TODOS ||
      item.category === activeCategory

    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase())

    return matchesCategory && matchesSearch
  })

  const handleReserve = (id: string) => {
    const equipment = allEquipment.find((item) => item.id === id)

    if (!equipment) return

    alert(`Reserva de "${equipment.name}" realizada com sucesso!`)
  }

  return {
    search,
    setSearch,

    activeCategory,
    setActiveCategory,

    filteredEquipment,

    categories,

    handleReserve,
  }
}