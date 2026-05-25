import { Card, styled } from "@mui/material"

export const ProductCardStyled = styled(Card)<{ tipoCard?: string }>(({ tipoCard }) => ({
    height: tipoCard === "Horta" ? "21rem" : "28rem",
    width: 320,
    maxWidth: "100%",
    boxShadow: "0px 14px 28px rgba(0,0,0,0.08)",
    borderRadius: "24px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "space-between",
    border: "1px solid rgba(0,0,0,0.08)",
    backgroundColor: "#fff",
    transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
    position: "relative",

    "&:hover": {
        transform: "translateY(-4px)",
        boxShadow: "0px 18px 36px rgba(0,0,0,0.12)",
    },

    ".cardMedia": {
        height: "50%",
        width: "100%",
        backgroundColor: "#d9d9d9",
    },

    ".productContent": {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-between",
        width: "100%",
        gap: "0.45rem",
        padding: "1.25rem",
    },

    ".productTag": {
        color: "#6b9cff",
        letterSpacing: "0.08em",
        fontWeight: 600,
    },

    ".productTitle": {
        fontSize: "1.35rem",
        fontWeight: 700,
        color: "#111827",
    },

    ".productDescription": {
        color: "#6b7280",
        lineHeight: 1.4,
        maxHeight: "3.5rem",
        overflow: "hidden",
        textOverflow: "ellipsis",
    },

    ".productFooter": {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "0.5rem",
    },

    ".productPrice": {
        color: "#4f83ff",
        fontWeight: 700,
        fontSize: "1.45rem",

        "& span": {
            fontSize: "0.9rem",
            color: "#6b7280",
            marginLeft: "0.15rem",
        },
    },

    ".center": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        textAlign: "center",
        margin: "0 0 7% 0",
    },
    ".cardContainer": {
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "space-evenly",
        width: "100%",
        gap: "0.5rem",
        flexWrap: "wrap",
        padding: "3% 0 8% 3%",
    },

    ".inline-item": {
        flex: 1,
        textAlign: "center",
    },
}))
