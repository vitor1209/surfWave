import { AppBar, styled } from "@mui/material"

export const HeaderContainer = styled(AppBar)(({ theme }) => ({
    top: 0,
    position: "fixed",
    minHeight: 78,
    paddingInline: theme.spacing(3),
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    background: "linear-gradient(135deg, rgba(45, 108, 223, 0.98) 0%, rgba(24, 75, 155, 0.98) 100%)",
    color: "#FFFFFF",
    backdropFilter: "blur(14px)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
}))
