import { type SelectProps as RootSelectProps } from "@mui/material"
import type { Control, FieldValues, Path } from "react-hook-form"

export interface SelectProps<TFieldValues extends FieldValues>
    extends Omit<StyledSelectProps, "name" | "erro"> {
    erro?: string
    name: Path<TFieldValues>
    control: Control<TFieldValues>
    placeholder?: string
}

export interface StyledSelectProps extends Omit<RootSelectProps, "error" | "placeholder"> {
    padding?: string
    erro?: string
    tamanho?: "sm" | "md"
    bgcolor?: string
    height?: number
    ladoSeta?: "esquerda" | "direita"
}
