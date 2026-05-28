import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { faker } from "@faker-js/faker"

import {
  EquipmentCategory,
  type CategoryFilter,
  type RentalEquipment,
  type UseAluguelReturn,
} from "./Aluguel.types"

faker.seed(42)
const imagensEquipamentos = {
  pranchas: [
    "/images/prancha1.jpg",
    "/images/prancha2.jpg",
    "/images/prancha3.jpg",
  ],

  roupas: [
    "/images/wetsuit1.jpg",
    "/images/wetsuit2.jpg",
    "/images/wetsuit3.jpg",
  ],

  acessorios: [
    "/images/acessorio1.jpg",
    "/images/acessorio2.jpg",
    "/images/acessorio3.jpg",
  ],
  praia: [
  "/images/praia1.jpg",
  "/images/cadeira.jpg",
  "/images/cooler.jpg",
],
}

const nomesEquipamentos = {
  pranchas: [
    "Prancha Longboard Clássica",
    "Prancha Shortboard Pro",
    "Prancha Funboard",
  ],

  roupas: [
    "Wetsuit 3/2mm Fullsuit",
    "Wetsuit Shorty 2mm",
    "Leash Premium 6'",
  ],

  acessorios: [
    "Capa da Prancha",
    "Lycra UV Protection",
    "Prancha Soft Top Iniciante",
  ],
  praia: [
  "Guarda-sol Premium",
  "Cadeira de Praia Reclinável",
  "Cooler Térmico",
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
  {
   id: EquipmentCategory.PRAIA,
    label: "Praia",
  },
]

const itensInclusos = [
  "Prancha completa",
  "Parafina inclusa",
  "Capa de proteção",
  "Quilhas montadas",
  "Leash de segurança",
  "Kit de reparo rápido",
]

const condicoesLocacao = [
  "Documento com foto necessário",
  "Caucao de R$ 200 (devolvido na entrega)",
  "Devolução até as 18h do último dia",
  "Retirada mediante assinatura",
  "Atraso sujeito a taxa adicional",
]

const criarEquipamentos = (): RentalEquipment[] => {
  const equipamentos: RentalEquipment[] = []

  Object.entries(nomesEquipamentos).forEach(([category, names]) => {
    names.forEach((name) => {
      equipamentos.push({
        id: faker.string.uuid(),

        name,

        category: category as RentalEquipment["category"],

        description: faker.lorem.sentence(),

        price: faker.number.int({
          min: 15,
          max: 100,
        }),

        image:
          imagensEquipamentos[
          category as keyof typeof imagensEquipamentos
          ][names.indexOf(name)],

        label: category.charAt(0).toUpperCase() + category.slice(1),
        includes: faker.helpers
          .shuffle(itensInclusos)
          .slice(0, 4),
        conditions: faker.helpers
          .shuffle(condicoesLocacao)
          .slice(0, 3),
      })
    })
  })

  return equipamentos
}

export const allEquipment = criarEquipamentos()

export const useAluguel = (): UseAluguelReturn => {
  const navigate = useNavigate()
  const [busca, setBusca] = useState("")

  const [categoriaAtiva, setCategoriaAtiva] =
    useState<EquipmentCategory>(EquipmentCategory.TODOS)

  const equipamentosFiltrados = allEquipment.filter((item) => {
    const matchesCategory =
      categoriaAtiva === EquipmentCategory.TODOS ||
      item.category === categoriaAtiva

    const matchesSearch =
      item.name.toLowerCase().includes(busca.toLowerCase()) ||
      item.description.toLowerCase().includes(busca.toLowerCase())

    return matchesCategory && matchesSearch
  })

  const handleReservar = (id: string) => {
    const equipamento = allEquipment.find((item) => item.id === id)

    if (!equipamento) return

    navigate(`/aluguel/reserva/${id}`)
  }

  return {
    busca,
    setBusca,

    categoriaAtiva,
    setCategoriaAtiva,

    equipamentosFiltrados,

    categories,

    handleReservar,
  }
}