import type { SxProps } from "@mui/system"
import type { Theme } from "@mui/material/styles"

export const floatingContainer: SxProps<Theme> = {
  position: "fixed",
  right: 20,
  top: "50%",
  transform: "translateY(-50%)",
  display: "flex",
  flexDirection: "column",
  gap: 1.5,
  zIndex: 1000,
}

export const floatingButton = (
  background: string
): SxProps<Theme> => ({
  width: 48,
  height: 48,
  borderRadius: "50%",
  background,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  boxShadow: "0 4px 14px rgba(0,0,0,0.2)",
  transition: "transform 0.2s, box-shadow 0.2s",

  "&:hover": {
    transform: "scale(1.1)",
    boxShadow: "0 6px 18px rgba(0,0,0,0.28)",
  },
})

export const modalBackdrop: SxProps<Theme> = {
  position: "absolute",
  inset: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  p: 3,
  backgroundColor: "rgba(0,0,0,0.5)",
}

export const modalContent: SxProps<Theme> = {
  backgroundColor: "#fff",
  borderRadius: 3,
  p: 3,
  width: "100%",
  maxWidth: 480,
  position: "relative",
}