import type { ContactInfo } from "./SocialContact.types"

export const styles = {
  bar: {
    wrapper: "fixed right-4 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3"
  },
  
  button: {
    base: "group relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110",
    whatsapp: { background: "oklch(0.6 0.18 145)", boxShadow: "0 4px 15px oklch(0.6 0.18 145 / 0.4)" },
    instagram: { background: "linear-gradient(135deg, oklch(0.65 0.22 330), oklch(0.7 0.2 50))", boxShadow: "0 4px 15px oklch(0.65 0.22 330 / 0.4)" },
    maps: { background: "oklch(0.55 0.18 25)", boxShadow: "0 4px 15px oklch(0.55 0.18 25 / 0.4)" }
  },
  
  tooltip: {
    className: "absolute right-full mr-3 px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none",
    background: "oklch(0.2 0.03 220)",
    color: "white"
  },
  
  modal: {
    backdrop: {
      className: "fixed inset-0 z-50 flex items-center justify-center p-4",
      background: "oklch(0.1 0.02 220 / 0.9)"
    },
    content: {
      className: "relative w-full max-w-4xl rounded-3xl overflow-hidden",
      background: "white"
    },
    header: {
      className: "flex items-center justify-between p-6",
      borderBottom: "1px solid oklch(0.9 0.02 200)"
    },
    title: { className: "text-xl font-bold", color: "oklch(0.2 0.03 220)" },
    subtitle: { className: "text-sm", color: "oklch(0.5 0.04 220)" },
    closeButton: {
      className: "w-10 h-10 rounded-full flex items-center justify-center",
      background: "oklch(0.95 0.02 200)"
    },
    mapPlaceholder: {
      className: "h-96 flex items-center justify-center",
      background: "oklch(0.92 0.04 200)"
    },
    mapButton: {
      className: "inline-flex items-center gap-2 mt-4 px-6 py-2 rounded-full font-medium",
      background: "oklch(0.55 0.15 220)",
      color: "white"
    },
    infoGrid: "p-6 grid grid-cols-1 md:grid-cols-3 gap-4",
    infoItem: {
      wrapper: "flex items-center gap-3",
      iconWrapper: {
        className: "w-10 h-10 rounded-full flex items-center justify-center",
        background: "oklch(0.55 0.15 220 / 0.1)"
      },
      label: { className: "text-sm font-medium", color: "oklch(0.3 0.04 220)" },
      value: { className: "text-sm", color: "oklch(0.5 0.04 220)" }
    }
  }
} as const

export const defaultContactInfo: ContactInfo = {
  whatsappNumber: "5500999999999",
  instagramHandle: "wavesurf",
  address: "Praia do Surfista, 123 - Florianopolis, SC",
  hours: "7h as 19h",
  email: "contato@wavesurf.com",
  phone: "(48) 99999-9999"
}

export const whatsappMessage = "Ola! Gostaria de mais informacoes sobre as aulas de surf."
