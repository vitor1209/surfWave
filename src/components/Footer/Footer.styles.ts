import type { SxProps, Theme } from "@mui/material"

export const footerRootSx: SxProps<Theme> = {
  width: "100%",
  background: "#F7E2B3",
  marginTop: "auto",
  borderTop: "1px solid rgba(0, 0, 0, 0.08)",
  boxShadow: "0 -8px 32px rgba(0, 0, 0, 0.04)",
  backdropFilter: "blur(4px)",
}

export const footerContentSx: SxProps<Theme> = {
  px: { xs: 2, sm: 3, md: 6 },
  py: { xs: 4, sm: 5, md: 6 },
  maxWidth: "1400px",
  mx: "auto",
  width: "100%",
}

export const footerGridSx: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(3, 1fr)" },
  gap: { xs: 3, sm: 4, md: 5 },
  mb: { xs: 3, sm: 4, md: 5 },
}

export const footerSectionSx: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: 1.5,
}

export const footerBrandSx: SxProps<Theme> = {
  fontSize: { xs: "24px", sm: "28px", md: "32px" },
  fontWeight: 700,
  color: "rgba(0, 0, 0, 0.87)",
  letterSpacing: "-0.5px",
  background: "linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.7) 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  mb: 0.5,
}

export const footerDescriptionSx: SxProps<Theme> = {
  fontSize: { xs: "13px", sm: "14px", md: "15px" },
  color: "rgba(0, 0, 0, 0.65)",
  lineHeight: 1.6,
  fontWeight: 400,
  mt: 0.5,
}

export const footerTitleSx: SxProps<Theme> = {
  fontSize: { xs: "15px", sm: "16px", md: "17px" },
  fontWeight: 600,
  color: "rgba(0, 0, 0, 0.87)",
  textTransform: "uppercase",
  letterSpacing: "0.5px",
  mb: 1,
}

export const footerLinkSx: SxProps<Theme> = {
  fontSize: { xs: "13px", sm: "14px", md: "15px" },
  color: "rgba(0, 0, 0, 0.65)",
  cursor: "pointer",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  textDecoration: "none",
  display: "inline-block",
  "&:hover": {
    color: "rgba(0, 0, 0, 0.87)",
  },
}

export const footerContactItemSx: SxProps<Theme> = {
  display: "flex",
  alignItems: "flex-start",
  gap: 1.5,
  fontSize: { xs: "13px", sm: "14px", md: "15px" },
  color: "rgba(0, 0, 0, 0.65)",
  lineHeight: 1.6,
}

export const footerContactIconSx: SxProps<Theme> = {
  fontSize: { xs: "18px", sm: "20px", md: "22px" },
  minWidth: "24px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}

export const socialIconsSx: SxProps<Theme> = {
  display: "flex",
  gap: 2,
  mt: 1.5,
  alignItems: "center",
}

export const socialButtonSx: SxProps<Theme> = {
  width: { xs: "40px", sm: "44px", md: "48px" },
  height: { xs: "40px", sm: "44px", md: "48px" },
  borderRadius: "50%",
  background: "linear-gradient(135deg, #D4AF37 0%, #C9A227 100%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  fontSize: { xs: "18px", sm: "20px", md: "22px" },
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  boxShadow: "0 4px 12px rgba(212, 175, 55, 0.25)",
  border: "none",
  "&:hover": {
    boxShadow: "0 6px 20px rgba(212, 175, 55, 0.35)",
    transform: "translateY(-2px)",
  },
  "&:active": {
    transform: "translateY(0)",
    boxShadow: "0 2px 8px rgba(212, 175, 55, 0.2)",
  },
}

export const footerDividerSx: SxProps<Theme> = {
  width: "100%",
  height: "1px",
  background: "linear-gradient(90deg, transparent 0%, rgba(0, 0, 0, 0.1) 50%, transparent 100%)",
  mb: { xs: 2.5, sm: 3, md: 3.5 },
  transformOrigin: "center",
}

export const footerCopyrightSx: SxProps<Theme> = {
  fontSize: { xs: "12px", sm: "13px", md: "14px" },
  color: "rgba(0, 0, 0, 0.55)",
  textAlign: "center",
  fontWeight: 400,
  letterSpacing: "0.2px",
}
