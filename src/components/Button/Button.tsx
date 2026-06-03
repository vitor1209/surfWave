import type { ButtonProp } from "./Button.types"
import type { ComponentProps } from "react"
import { Link } from "react-router-dom"
import * as Component from "./Button.styled"

type RouterLinkAdapterProps = Omit<ComponentProps<typeof Link>, "to"> & {
    href?: string
}

const RouterLinkAdapter = ({ href, ...props }: RouterLinkAdapterProps) => {
    return <Link to={href ?? ""} {...props} />
}

export const Button = ({
    variante = "ButtonBlue",
    tamanho,
    loading,
    disabled,
    children,
    espacamento,
    icon: Icon,
    ladoIcon = "esquerda",
    to,
    href,
    ...props
}: ButtonProp) => {
    const iconSizeMap = {
        sm: 15,
        md: 20,
        lg: 25,
        xl: 30,
    }

    const iconSize = iconSizeMap[tamanho] || 20
    const destination = to ?? href

    return (
        <Component.ButtonVariants
            disabled={disabled || loading}
            LinkComponent={destination ? RouterLinkAdapter : undefined}
            href={destination}
            variante={variante}
            tamanho={tamanho}
            espacamento={espacamento || 0}
            {...props}
        >
            {ladoIcon == "esquerda" && Icon && <Icon size={iconSize} />}
            {<span>{children}</span>}
            {ladoIcon == "direita" && Icon && <Icon size={iconSize} />}
        </Component.ButtonVariants>
    )
}