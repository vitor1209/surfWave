import { ButtonBase, styled } from "@mui/material"

export const ButtonVariants = styled(ButtonBase, {
    shouldForwardProp: (prop) => prop !== "tamanho" && prop !== "espacamento" && prop !== "variante",
})<{
    tamanho: "sm" | "md" | "lg" | "xl"
    espacamento: number
    to?: string
    href?: string
    variante:
        | "ButtonBlue"
        | "ButtonLinkBlack"
        | "ButtonLinkWhite"
        | "ButtonOrange"
        | "ButtonRed"
        | "ButtonLinkRed"
        | "ButtonGray"
        | "ButtonWhite"
}>(({ tamanho, espacamento, variante }) => {
    const sizeMap = {
        sm: { height: 30, fontSize: 14 },
        md: { height: 37, fontSize: 17 },
        lg: { height: 44, fontSize: 15 },
        xl: { height: 51, fontSize: 24.2 },
    }

    const { height, fontSize } = sizeMap[tamanho] || sizeMap["md"]

    return {
        width: "auto",
        minHeight: height,
        paddingInline: espacamento,
        fontSize,
        overflow: "hidden",
        fontFamily: '"Raleway", "Inter", sans-serif',
        borderRadius: 8,
        fontWeight: 500,
        alignItems: "center",
        gap: 10,
        transition: "opacity 0.5s",
        textDecoration: "none",
        color: "inherit",
        "&:hover": { filter: "brightness(80%)" },
        "&:disabled, &.disabled": {
            opacity: 0.8,
            background: "grey !important",
            color: "white !important",
            cursor: "not-allowed",
            pointerEvents: "none",
        },
        ...(variante === "ButtonBlue" && {
            backgroundColor: "#72A6F3",
            color: "#FFFFFF",
            transition: " 0.5s",
        }),
        ...(variante === "ButtonLinkBlack" && {
            background: "transparent",
            color: "Black",
            "&:hover": { opacity: 0.5 },
        }),
        ...(variante === "ButtonLinkWhite" && {
            background: "transparent",
            color: "#FFFFFF",
            "&:hover": { opacity: 0.5 },
        }),

        ...(variante === "ButtonOrange" && {
            backgroundColor: "#F54900",
            color: "#FFFFFF",
            transition: " 0.5s",
        }),
        ...(variante === "ButtonRed" && {
            backgroundColor: "#D4183D",
            color: "#FFFFFF",
            transition: " 0.5s",
        }),
        ...(variante === "ButtonLinkRed" && {
            background: "transparent",
            color: "#D4183D",
            "&:hover": { opacity: 0.5 },
        }),
        ...(variante === "ButtonGray" && {
            backgroundColor: "#ccccccff",
            color: "#000",
            transition: " 0.5s",
        }),
        ...(variante === "ButtonWhite" && {
            backgroundColor: "#fff",
            border: "solid 1px #0000001A",
            color: "#000",
            transition: " 0.5s",
        }),
    }
})
