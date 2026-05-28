import type { LessonType } from "./FormAula.types"

export const styles = {
  section: {
    className: "relative py-20 px-4 md:px-8",
  },
  
  container: "max-w-7xl mx-auto",
  grid: "grid grid-cols-1 lg:grid-cols-2 gap-8",
  
  header: {
    wrapper: "text-center mb-12",
    badge: {
      className: "inline-block px-4 py-1 rounded-full text-sm font-medium mb-4",
      background: "oklch(0.65 0.18 180 / 0.15)",
      color: "oklch(0.5 0.15 180)"
    },
    title: { className: "text-3xl md:text-5xl font-bold mb-4 text-balance", color: "oklch(0.2 0.03 230)" },
    subtitle: { className: "text-lg max-w-2xl mx-auto text-pretty", color: "oklch(0.4 0.05 220)" }
  },
  
  lessonCard: {
    base: "relative p-6 rounded-2xl cursor-pointer transition-all duration-300",
    active: { background: "white", boxShadow: "0 8px 30px rgba(0,0,0,0.12)" },
    inactive: { background: "oklch(0.98 0.01 85 / 0.5)", boxShadow: "none" },
    title: { className: "text-lg font-bold", color: "oklch(0.2 0.03 230)" },
    description: { className: "text-sm mb-4", color: "oklch(0.45 0.04 220)" },
    price: { className: "text-2xl font-bold" },
    duration: { className: "block text-xs", color: "oklch(0.5 0.04 220)" }
  },
  
  bookingForm: {
    wrapper: { className: "p-8 rounded-2xl", background: "white", boxShadow: "0 8px 30px rgba(0,0,0,0.1)" },
    title: { className: "text-xl font-bold mb-6", color: "oklch(0.25 0.04 220)" },
    label: { className: "block text-sm font-medium mb-2", color: "oklch(0.35 0.04 220)" },
    input: { className: "w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none", background: "oklch(0.96 0.02 200)" },
    dayButton: { className: "flex-1 py-3 rounded-xl text-sm font-medium transition-all duration-300" },
    timeButton: { className: "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300" },
    submitButton: { className: "w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-[1.02]" },
    note: { className: "text-center text-xs mt-4", color: "oklch(0.55 0.04 220)" }
  }
} as const

export const colors = {
  teal: "oklch(0.65 0.18 180)",
  blue: "oklch(0.55 0.15 220)",
  orange: "oklch(0.7 0.18 50)"
} as const

export const weekDays = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"]

export const defaultLessonTypes: LessonType[] = [
  {
    id: "iniciante",
    title: "Iniciante",
    subtitle: "Primeira onda",
    description: "Ideal para quem nunca surfou. Aprenda as tecnicas basicas em aguas calmas.",
    duration: "2 horas",
    price: 150,
    includes: ["Prancha e equipamentos", "Instrutor exclusivo", "Fotos da aula", "Seguro"],
    schedule: ["08:00", "10:30", "14:00", "16:30"],
    color: colors.teal
  },
  {
    id: "intermediario",
    title: "Intermediario",
    subtitle: "Evolucao",
    description: "Para quem ja se levanta na prancha. Aprimore manobras e leitura das ondas.",
    duration: "2.5 horas",
    price: 200,
    includes: ["Prancha performance", "Analise de video", "Teoria avancada", "Certificado"],
    schedule: ["07:00", "10:00", "15:00"],
    color: colors.blue
  },
  {
    id: "avancado",
    title: "Avancado",
    subtitle: "Performance",
    description: "Treinamento competitivo. Manobras aereas e tecnicas de competicao.",
    duration: "3 horas",
    price: 350,
    includes: ["Equipamento profissional", "Coach certificado", "Analise detalhada", "Plano de treino"],
    schedule: ["06:00", "14:00"],
    color: colors.orange
  }
]
