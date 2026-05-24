import { createTheme } from "@mui/material"

const azulMar = "#2D6CDF"
const azulMarEscuro = "#184B9B"
const areia = "#F6E4BC"
const areiaClara = "#FFF8ED"
const textoPrincipal = "#18324C"

export const theme = createTheme({
    palette: {
        primary: {
            main: azulMar,
            dark: azulMarEscuro,
            contrastText: "#FFFFFF",
        },
        secondary: {
            main: areia,
        },
        background: {
            default: "#FFFDF8",
            paper: "#FFFFFF",
        },
        text: {
            primary: textoPrincipal,
            secondary: "#52697F",
        },
        info: {
            main: azulMar,
        },
    },
    shape: {
        borderRadius: 16,
    },
    typography: {
        fontFamily: '"Raleway", sans-serif',
        h1: {
            fontFamily: '"Amatica SC", cursive',
        },
        h2: {
            fontFamily: '"Amatica SC", cursive',
        },
        h3: {
            fontFamily: '"Amatica SC", cursive',
        },
        h4: {
            fontFamily: '"Amatica SC", cursive',
        },
        h5: {
            fontFamily: '"Amatica SC", cursive',
        },
        h6: {
            fontFamily: '"Amatica SC", cursive',
        },
        subtitle1: {
            fontFamily: '"Raleway", sans-serif',
        },
        subtitle2: {
            fontFamily: '"Raleway", sans-serif',
        },
        button: {
            fontFamily: '"Raleway", sans-serif',
            fontWeight: 700,
            textTransform: "none",
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: "#FFFDF8",
                    color: textoPrincipal,
                },
                a: {
                    color: "inherit",
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundImage: "none",
                    boxShadow: "0 10px 30px rgba(24, 75, 155, 0.12)",
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: areiaClara,
                    borderRadius: 24,
                    border: "1px solid rgba(24, 75, 155, 0.08)",
                    boxShadow: "0 16px 40px rgba(24, 75, 155, 0.08)",
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 999,
                },
            },
        },
    },
})
