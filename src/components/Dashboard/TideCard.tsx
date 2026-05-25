import { Box, Stack, Typography } from "@mui/material"
import { ArrowDown, ArrowUp } from "lucide-react"

interface TideCardProps {
  current?: string
  nextHigh?: string
  nextLow?: string
}

export const TideCard = ({ current = "Enchendo", nextHigh = "14:30", nextLow = "20:45" }: TideCardProps) => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography sx={{ fontSize: 18, fontWeight: 600, mb: 1 }}>Maré</Typography>

      <Box sx={{ bgcolor: "#F5E0C3", p: 2, borderRadius: 3, mb: 2, textAlign: "center" }}>
        <Typography sx={{ fontSize: 14, color: "text.secondary" }}>Maré atual</Typography>
        <Typography sx={{ fontSize: 16, fontWeight: 700 }}>{current}</Typography>
      </Box>

      <Stack direction="row" spacing={1}>
        <Box sx={{
          flex: 1, bgcolor: "#F8E9C9", p: 1.5, borderRadius: 2, textAlign: "center",
        }}>
          <Box sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 0.5,
          }}>
            <Typography sx={{ fontSize: 12 }}>Próxima maré alta</Typography>

            <ArrowUp size={18} />

          </Box>


          <Typography sx={{ fontWeight: 700 }}>{nextHigh}</Typography>
        </Box>
        <Box sx={{ flex: 1, bgcolor: "#F8E9C9", p: 1.5, borderRadius: 2, textAlign: "center" }}>
          <Box sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 0.5,
          }}>
            <Typography sx={{ fontSize: 12 }}>Próxima maré baixa</Typography>

            <ArrowDown size={18} />

          </Box>          <Typography sx={{ fontWeight: 700 }}>{nextLow}</Typography>
        </Box>
      </Stack>
    </Box>
  )
}