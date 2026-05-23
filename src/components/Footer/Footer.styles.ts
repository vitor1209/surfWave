import { SxProps, Theme } from "@mui/material"

export const footerRootSx: SxProps<Theme> = {
  backgroundColor: "#F7E2B3",
  borderTop: "1px solid rgba(0, 0, 0, 0.08)",
  boxShadow: "0 -2px 8px rgba(0, 0, 0, 0.04)",
  pt: {
    xs: 6,
    sm: 8,
    md: 10,
  },
  pb: {
    xs: 6,
    sm: 8,
    md: 10,
  },
  px: {
    xs: 2,
    sm: 4,
    md: 6,
  },
}

export const footerContentSx: SxProps<Theme> = {
  maxWidth: "1400px",
  mx: "auto",
  mb: 4,
}

export const footerGridSx: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: {
    xs: "1fr",
    sm: "1fr 1fr",
    md: "1fr 1fr 1fr",
  },
  gap: {
    xs: 4,
    sm: 6,
    md: 8,
  },
}

export const footerSectionSx: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: 2,
}

export const footerTitleSx: SxProps<Theme> = {
  fontSize: {
    xs: "1rem",
    md: "1.1rem",
  },
  fontWeight: 600,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "rgba(0, 0, 0, 0.7)",
  mb: 1,
}

export const footerBrandSx: SxProps<Theme> = {
  fontSize: {
    xs: "1.3rem",
    md: "1.5rem",
  },
  fontWeight: 500,
  letterSpacing: "0.02em",
  color: "rgba(0, 0, 0, 0.8)",
  mb: 1,
}

export const footerDescriptionSx: SxProps<Theme> = {
  fontSize: {
    xs: "0.85rem",
    md: "0.9rem",
  },
  lineHeight: 1.6,
  color: "rgba(0, 0, 0, 0.6)",
  maxWidth: "280px",
  mb: 2,
}

export const footerLinkSx: SxProps<Theme> = {
  fontSize: {
    xs: "0.9rem",
    md: "0.95rem",
  },
  color: "rgba(0, 0, 0, 0.65)",
  textDecoration: "none",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  cursor: "pointer",
  display: "inline-block",
  position: "relative",
  "&:hover": {
    color: "rgba(0, 0, 0, 0.85)",
    transform: "translateX(4px)",
  },
  "&::before": {
    content: '""',
    position: "absolute",
    bottom: "-2px",
    left: 0,
    width: 0,
    height: "1px",
    backgroundColor: "rgba(0, 0, 0, 0.65)",
    transition: "width 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  },
  "&:hover::before": {
    width: "100%",
  },
}

export const footerContactItemSx: SxProps<Theme> = {
  display: "flex",
  alignItems: "flex-start",
  gap: 1.5,
  fontSize: {
    xs: "0.85rem",
    md: "0.9rem",
  },
  color: "rgba(0, 0, 0, 0.65)",
  mb: 1.5,
}

export const footerContactIconSx: SxProps<Theme> = {
  minWidth: "20px",
  fontSize: "1.1rem",
  color: "rgba(0, 0, 0, 0.6)",
  mt: "2px",
}

export const socialIconsSx: SxProps<Theme> = {
  display: "flex",
  gap: 1,
}

export const socialButtonSx: SxProps<Theme> = {
  width: "44px",
  height: "44px",
  minWidth: "44px",
  borderRadius: "50%",
  backgroundColor: "rgba(184, 157, 106, 0.3)",
  border: "2px solid rgba(0, 0, 0, 0.1)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  fontSize: "1.3rem",
  color: "rgba(0, 0, 0, 0.65)",
  "&:hover": {
    backgroundColor: "rgba(184, 157, 106, 0.5)",
    borderColor: "rgba(0, 0, 0, 0.2)",
    transform: "translateY(-4px)",
  },
  "&:active": {
    transform: "translateY(-2px)",
  },
}

export const footerDividerSx: SxProps<Theme> = {
  width: "100%",
  height: "1px",
  backgroundColor: "rgba(0, 0, 0, 0.15)",
  my: 4,
}

export const footerCopyrightSx: SxProps<Theme> = {
  fontSize: {
    xs: "0.8rem",
    md: "0.85rem",
  },
  color: "rgba(0, 0, 0, 0.5)",
  textAlign: "center",
  letterSpacing: "0.01em",
}
