import Grid from "@mui/material/Grid"

import {
  Box,
  Container,
  Stack,
  Typography,
} from "@mui/material"

import { LevelCard } from "@/components/LevelCard"
import { SchedulingForm } from "@/components/SchedulingForm"

import { useAulas } from "./Aulas.hook"
import { LEVELS_DATA } from "./Aulas.utils"

export const Aulas = () => {
  const {
    expandedCard,

    schedulingOpen,

    selectedLevel,

    handleToggleCard,

    handleOpenScheduling,

    handleCloseScheduling,
  } = useAulas()

  return (
    <Container
      maxWidth="lg"
      sx={{
        py: 4,
      }}
    >
      <Grid container spacing={4}>
        <Grid
          size={{
            xs: 12,
            md: 4,
          }}
        >
          <Stack spacing={2}>
            {LEVELS_DATA.map((level) => (
              <Box
                key={level.id}
                onClick={() => {
                  handleToggleCard(level.id)

                  handleOpenScheduling(
                    level.title
                  )
                }}
              >
                <LevelCard
                  level={level.id}
                  title={level.title}
                  subtitle={level.subtitle}
                  price={level.price}
                  hours={level.hours}
                  description={level.description}
                  benefits={level.benefits}
                  isExpanded={
                    expandedCard === level.id
                  }
                  onToggle={() =>
                    handleToggleCard(level.id)
                  }
                />
              </Box>
            ))}
          </Stack>
        </Grid>

        <Grid
          size={{
            xs: 12,
            md: 8,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {schedulingOpen ? (
              <SchedulingForm
                open={schedulingOpen}
                onClose={handleCloseScheduling}
                level={selectedLevel}
              />
            ) : (
              <Box
                sx={{
                  display: {
                    xs: "none",
                    md: "flex",
                  },

                  alignItems: "center",

                  justifyContent: "center",

                  minHeight: 600,

                  borderRadius: 2,

                  backgroundColor:
                    "rgba(0, 0, 0, 0.02)",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    textAlign: "center",
                  }}
                >
                  Selecione um nível para agendar
                  sua aula
                </Typography>
              </Box>
            )}
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}