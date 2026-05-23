import { HeaderContainer } from "./Header.styled.ts";
import Stack from '@mui/material/Stack';
import { Box, Drawer, IconButton, useMediaQuery, useTheme } from "@mui/material";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import type { HeaderProps } from "./Header.types.ts";

export const Header: React.FC<HeaderProps> = ({ children, end, start }) => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))
    const [openNav, setOpenNav] = useState<boolean>(false);

    const toggleDrawer = () => setOpenNav(!openNav);

    const navButtons = (
        <Stack sx={{ display: "flex", alignItems: "center", flexDirection: "column", gap: 2, p: 2 }}>
            {children}
            {end && <>{end}</>}
        </Stack>)


    return (
        <HeaderContainer className="BlueHeader">
       
            {isMobile ? (
                <>
                    <IconButton onClick={toggleDrawer}>
                        <MenuIcon size={24} />
                    </IconButton>
                    <Drawer anchor="right" open={openNav} onClose={toggleDrawer}>
                        <Box
                            sx={{
                                width: 250,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                height: "100%",
                                p: 2,
                            }}
                        >
                            {navButtons}
                        </Box>
                    </Drawer>
                </>
            ) : (
                <>
                    <>{start}</>
                    <Stack sx={{ display: "flex", flexDirection: "row", gap: 2, alignItems: "center" }}>
                        {children}
                    </Stack>
                    {end && <>{end}</>}
                </>
            )}
        </HeaderContainer>)
}