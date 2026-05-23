import { AppBar, styled } from "@mui/material"

export const HeaderContainer = styled(AppBar)(() => ({
    top: 0,
    position: "fixed",
    minHeight: 70,
    paddingInline: "5%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#5491ED",
    color: "#86B2F3",
}))
