export const DELIVERY_FEE = 25

export const STORE_ADDRESS = {
  title: "Endereco da loja",
  line1: "Rua Beira Mar, 1234 - Praia Boas Ondas",
  line2: "Seg a Dom, 7h as 18h",
}

export const DELIVERY_OPTIONS = [
  {
    value: "retirar",
    title: "Retirar na loja",
    description: "Gratis - retire seu equipamento em nossa loja",
  },
  {
    value: "delivery",
    title: "Delivery",
    description: "R$ 25,00 - Entregamos na praia ou no endereco",
  },
] as const

export const PAYMENT_OPTIONS = [
  {
    value: "retirada",
    title: "Pagamento na retirada",
    description:
      "O pagamento sera realizado no momento da retirada ou entrega. Aceitamos Pix, cartao e dinheiro.",
  },
] as const

export const formatCurrency = (value: number) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(value)
