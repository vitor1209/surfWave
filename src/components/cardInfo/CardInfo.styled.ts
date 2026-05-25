import { Card, Stack, styled } from "@mui/material"
import type { Theme } from "@mui/material/styles"

const CARD_BACKGROUND = "#FFF4DB"
type CardInfoTamanho = "md" | "lg"
type CardInfoCor = "blue" | "green" | "purple" | "orange"

const ICON_BACKGROUND_MAP: Record<CardInfoCor, string> = {
    blue: "linear-gradient(135deg, #2D6CDF 0%, #184B9B 100%)",
    green: "linear-gradient(135deg, #1E9E62 0%, #0F7444 100%)",
    purple: "linear-gradient(135deg, #7453F5 0%, #4D2CCB 100%)",
    orange: "linear-gradient(135deg, #F08A24 0%, #C56410 100%)",
} as const

export const CardInfo = styled(Card, {
    shouldForwardProp: (prop: string) => prop !== "tamanho",
})<{
    tamanho: CardInfoTamanho
}>(({ theme, tamanho }: { theme: Theme; tamanho: CardInfoTamanho }) => {
    const sizeMap: Record<CardInfoTamanho, { height: string; width: string }> = {
        md: { height: "9.5rem", width: "22rem" },
        lg: { height: "10rem", width: "19rem" },
    }

    const { height, width } = sizeMap[tamanho]

    return {
        width,
        height,
        padding: tamanho === "lg" ? "1.5rem 1.75rem" : "7rem 1.5rem",
        display: "flex",
        flex: "1",
        position: "relative",
        borderRadius: "32px",
        backgroundColor: CARD_BACKGROUND,
        border: "none",
        boxSizing: "border-box",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        textAlign: "center",
        fontSize: "1rem",
        color: "#18324C",
        gap: tamanho === "lg" ? "0.85rem" : "0.7rem",
        transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
        boxShadow: "0 1px 0 rgba(24, 50, 76, 0.02)",

        "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 10px 24px rgba(45, 108, 223, 0.12)",
        },

        [theme.breakpoints.down("sm")]: {
            width: tamanho === "md" ? "14rem" : "15rem",
            height: tamanho === "md" ? "7.5rem" : "8rem",
            fontSize: "0.9rem",
            padding: "1rem",
            borderRadius: "28px",
        },
    }
})

export const StackIcon = styled(Stack, {
    shouldForwardProp: (prop: string) => prop !== "colorKey",
})<{
    colorKey: CardInfoCor
}>(({ theme, colorKey }: { theme: Theme; colorKey: CardInfoCor }) => {
    return {
        background: ICON_BACKGROUND_MAP[colorKey],
        borderRadius: "50%",
        padding: "0.6rem",
        height: "5rem",
        width: "5rem",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        flexShrink: 0,

        [theme.breakpoints.down("sm")]: {
            height: "3.1rem",
            width: "3.1rem",
            padding: "0.45rem",
        },
    }
})
