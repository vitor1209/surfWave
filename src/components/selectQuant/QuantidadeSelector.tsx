import { Button, Stack, Typography } from "@mui/material"
import { Minus, Plus } from "lucide-react"
import type { QuantidadeSelectorProps } from "./QuantidadeSelector.types";

export const QuantidadeSelector = ({ txt, quantidade, onIncrease, onDecrease }: QuantidadeSelectorProps) => {
  const estiloBotao = {
    minWidth: 40,
    width: 40,
    height: 40,
    borderRadius: "10px",
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
    color: "#333",
    "&:hover": {
      backgroundColor: "#fafafa",
      boxShadow: "0 2px 6px rgba(0,0,0,0.12)",
    },
  }

    return (
    <Stack sx={{ mt: 3, mb: 3, display: "flex", flexDirection: "row", alignItems: "center", gap: 3 }}>
      {txt ? <Typography variant="body1">{txt}</Typography> : null}

      <Button onClick={onDecrease} sx={estiloBotao}>
        <Minus size={18} strokeWidth={2} />
      </Button>

      <Typography variant="body1">{quantidade}</Typography>

      <Button onClick={onIncrease} sx={estiloBotao}>
        <Plus size={18} strokeWidth={2} />
      </Button>
    </Stack>
  )
}
