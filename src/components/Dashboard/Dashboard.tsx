import Grid from "@mui/material/Grid"
import { Box } from "@mui/material"

import { SeaConditions } from "./SeaConditions"
import { TideCard } from "./TideCard"
import { WeatherCard } from "./WeatherCard"
import Typography from "@mui/joy/Typography/Typography"
import { ChevronDown } from "lucide-react"

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





        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            mb: 1,
            ml: 3,
          }}
        >
          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
              }}
            >
              <Typography
                sx={{
                  fontSize: 16,
                  fontWeight: 300,
                  fontFamily: '"Raleway", "Inter", sans-serif',

                }}
              >
                Hoje, 22 ter. 2026
              </Typography>

              <ChevronDown size={18} />
            </Box>


            <Typography
              sx={{
                fontSize: 12,
                color: "text.secondary",
                fontWeight: 200,
                fontFamily: '"Raleway", "Inter", sans-serif',

              }}
            >
              Atualizado às 12:34
            </Typography>
          </Box>

          <Box
            sx={{
              px: 2,
              py: 0.7,
              borderRadius: "999px",
              backgroundColor: "#59C14D",
              color: "white",
              fontSize: 12,
              fontWeight: 600,
              mr: 3,
              fontFamily: '"Raleway", "Inter", sans-serif',

            }}
          >
            Ótimo para surf!
          </Box>
        </Box>




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
                temp={25}
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
                temp={27}
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
              borderRadius: 2,
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
              borderRadius: 2,
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