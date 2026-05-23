import Grid from "@mui/material/Grid"
import { Box } from "@mui/material"

import { SeaConditions } from "./SeaConditions"
import { TideCard } from "./TideCard"
import { WeatherCard } from "./WeatherCard"

export const Dashboard = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <Box
        sx={{
          p: 3,
          borderRadius: 4,
          backgroundColor: "#F9E7C9",
        }}
      >
        <Grid
          container
          spacing={3}
          sx={{
            justifyContent: "center",
          }}
        >
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <WeatherCard
                temp={28}
                label="Umidade"
                subtitle="90%"
              />
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <WeatherCard
                temp={28}
                label="Ensolarado"
                subtitle="Vento 18km/h"
              />
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <WeatherCard
                temp={28}
                label="UV"
                subtitle="8"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              height: "100%",
              borderRadius: 4,
              backgroundColor: "#FFF8ED",
            }}
          >
            <SeaConditions />
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              height: "100%",
              borderRadius: 4,
              backgroundColor: "#FFF8ED",
            }}
          >
            <TideCard />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}