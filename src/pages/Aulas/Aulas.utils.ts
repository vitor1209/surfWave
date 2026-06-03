import type { LevelData } from "./Aulas.types"

export const LEVELS_DATA: LevelData[] = [
  {
    id: "iniciante",
    title: "Iniciante",
    subtitle: "Primeira aula",
    price: 150,
    hours: 2,

    description:
      "Ideal para quem nunca surfou! Aprenda as técnicas básicas em águas calmas.",

    benefits: [
      "Prancha e acessórios inclusos",
      "Instrutor dedicado",
      "Seguro incluído",
    ],
  },

  {
    id: "Intermediário",
    title: "Intermediário",
    subtitle: "Evolução",
    price: 200,
    hours: 2.5,

    description:
      "Para quem já sabe pegar onda. Aprimore movimentos e leitura das ondas.",

    benefits: [
      "Prancha personalizada",
      "Técnica avançada",
      "Filmagem de progresso",
    ],
  },

  {
    id: "avancado",
    title: "Avançado",
    subtitle: "Aprimoramento",
    price: 300,
    hours: 3,

    description:
      "Para quem já domina bem as ondas. Aperfeiçoe técnicas avançadas e manobras profissionais.",

    benefits: [
      "Aula privada opcional",
      "Técnicas profissionais",
      "Análise de performance",
    ],
  },
]
