import type { ButtonBaseProps } from "@mui/material"
import type { LucideIcon } from "lucide-react"
import type { ReactNode } from "react"

export interface ButtonProp extends ButtonBaseProps {
    children?: ReactNode
    variante?:
        | "ButtonBlue"
        | "ButtonLinkBlack"
        | "ButtonLinkWhite"
        | "ButtonOrange"
        | "ButtonRed"
        | "ButtonLinkRed"
        | "ButtonGray"
        | "ButtonWhite"
    tamanho: "sm" | "md" | "lg" | "xl"
    espacamento?: number
    loading?: boolean
    to?: string
    href?: string
    viewTransition?: boolean
    icon?: LucideIcon
    ladoIcon?: "direita" | "esquerda"
}
