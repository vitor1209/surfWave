import { Box, Drawer, IconButton, Stack, useMediaQuery, useTheme } from "@mui/material"
import { MenuIcon } from "lucide-react"
import { useState } from "react"

import { HeaderContainer } from "./Header.styled"
import type { HeaderProps } from "./Header.types"

export const Header = ({ children, end, start }: HeaderProps) => {
    const tema = useTheme()
    const isMobile = useMediaQuery(tema.breakpoints.down("md"))
    const [abrirNavegacao, setAbrirNavegacao] = useState(false)

    const alternarDrawer = () => {
        setAbrirNavegacao((estadoAtual) => !estadoAtual)
    }

    const conteudoNavegacao = (
        <Stack sx={{ alignItems: "center", flexDirection: "column", gap: 2, p: 2 }}>
            {start}
            {children}
            {end}
        </Stack>
    )

    return (
        <HeaderContainer>
            {isMobile ? (
                <>
                    <IconButton aria-label="Abrir navegação" onClick={alternarDrawer} sx={{ color: "inherit" }}>
                        <MenuIcon size={24} />
                    </IconButton>
                    <Drawer anchor="right" open={abrirNavegacao} onClose={alternarDrawer}>
                        <Box
                            sx={{
                                width: 280,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "stretch",
                                justifyContent: "center",
                                height: "100%",
                                p: 3,
                                backgroundColor: "background.paper",
                            }}
                        >
                            {conteudoNavegacao}
                        </Box>
                    </Drawer>
                </>
            ) : (
                <>
                    <Box sx={{ display: "flex", alignItems: "center" }}>{start}</Box>
                    <Stack sx={{ display: "flex", flexDirection: "row", gap: 2, alignItems: "center" }}>
                        {children}
                    </Stack>
                    {end}
                </>
            )}
        </HeaderContainer>
    )
}