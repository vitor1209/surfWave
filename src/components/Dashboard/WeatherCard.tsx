import { Box, Typography } from "@mui/material"
import { Sun } from "lucide-react"

interface WeatherCardProps {
  temp: number | string
  label?: string
  subtitle?: string
}

export const WeatherCard = ({ temp, label, subtitle }: WeatherCardProps) => {
  return (
    
    
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0.5 }}>

      <Box sx={{
        bgcolor: "transparent",
        borderRadius: 2,
      }}>
        <Sun size={36} color="#F59E0B" />
      </Box>

      <Typography sx={{ fontSize: 28, fontWeight: 600 }}>{temp}°</Typography>
      {label && <Typography sx={{ fontSize: 14 }}>{label}</Typography>}
      {subtitle && <Typography color="text.secondary" sx={{ fontSize: 12 }}>{subtitle}</Typography>}
    </Box>
  )
}