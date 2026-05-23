import { Card, Chip, Stack, Typography } from "@mui/material"
import { CheckCircle } from "lucide-react"

export type LevelCardProps = {
  level: "iniciante" | "intermediario" | "avancado"
  title: string
  subtitle: string
  price: number
  hours: number
  description: string
  benefits: string[]
  isExpanded: boolean
  onToggle: () => void
}

const colorMap: Record<
  LevelCardProps["level"],
  {
    border: string
    light: string
  }
> = {
  iniciante: {
    border: "#22c55e",
    light: "#f0fdf4",
  },

  intermediario: {
    border: "#3b82f6",
    light: "#f0f9ff",
  },

  avancado: {
    border: "#f59e0b",
    light: "#fffbf0",
  },
}

export const LevelCard = ({
  level,
  title,
  subtitle,
  price,
  hours,
  description,
  benefits,
  isExpanded,
  onToggle,
}: LevelCardProps) => {
  const colors = colorMap[level]

  return (
    <Card
      onClick={onToggle}
      sx={{
        p: 3,
        cursor: "pointer",
        borderLeft: `6px solid ${colors.border}`,
        backgroundColor: colors.light,
        transition: "all 0.3s ease",

        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: "0 8px 16px rgba(0,0,0,0.12)",
        },
      }}
    >
      <Stack spacing={2}>
        <Stack
          direction="row"
          sx={{
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <Stack spacing={0.5}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
              }}
            >
              {title}
            </Typography>

            <Typography
              variant="caption"
              sx={{
                color: "text.secondary",
              }}
            >
              {subtitle}
            </Typography>
          </Stack>

          <Stack
            spacing={0.5}
            sx={{
              alignItems: "flex-end",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontWeight: 700,
                color: colors.border,
              }}
            >
              R$ {price.toFixed(2)}
            </Typography>

            <Chip
              label={`${hours} horas`}
              size="small"
              variant="outlined"
            />
          </Stack>
        </Stack>

        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
          }}
        >
          {description}
        </Typography>

        {isExpanded && (
          <Stack spacing={1}>
            <Typography
              variant="caption"
              sx={{
                fontWeight: 700,
              }}
            >
              Incluso:
            </Typography>

            <Stack spacing={1}>
              {benefits.map((benefit) => (
                <Stack
                  key={benefit}
                  direction="row"
                  spacing={1}
                  sx={{
                    alignItems: "center",
                  }}
                >
                  <CheckCircle
                    size={16}
                    color={colors.border}
                  />

                  <Typography variant="caption">
                    {benefit}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Stack>
        )}
      </Stack>
    </Card>
  )
}