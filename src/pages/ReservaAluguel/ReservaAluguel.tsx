import { useState } from "react"
import {
  Box,
  Card,
  Stack,
  Typography,
} from "@mui/material"

import { Check, Info } from "lucide-react"

import { Button } from "@/components/Button/Button"
import { ReservaWizard } from "@/pages/ReservaAluguel/modals/ReservaWizard/ReservaWizard"
import { useReservaAluguel } from "@/pages/ReservaAluguel/ReservaAluguel.hook"

export const ReservaAluguel = () => {
  const {
    equipment,
    handleBack,
  } = useReservaAluguel()

  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  if (!equipment) {
    return (
      <Stack spacing={2} sx={{ alignItems: "center" }}>
        <Typography variant="h5">
          Equipamento nao encontrado
        </Typography>
        <Button
          onClick={handleBack}
          variante="ButtonBlue"
          tamanho="md"
          sx={{
            borderRadius: "999px",
            textTransform: "none",
            backgroundColor: "#0f4db6",
          }}
        >
          Voltar para aluguel
        </Button>
      </Stack>
    )
  }

  return (
    <Box
      sx={{
        backgroundColor: "#6ea2f7",
        borderRadius: 6,
        px: { xs: 3, md: 6 },
        py: { xs: 4, md: 6 },
        minHeight: { xs: "auto", md: 520 },
        display: "flex",
        flexDirection: "column",
        gap: { xs: 4, md: 6 },
      }}
    >
      <Box sx={{ position: "relative" }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={3}
          sx={{
            alignItems: { xs: "stretch", md: "center" },
            justifyContent: "space-evenly",
          }}
        >
          <Card
            sx={{
              width: { xs: "10%", md: 320 },
              borderRadius: 4,
              overflow: "hidden",
              boxShadow: "0 16px 30px rgba(0,0,0,0.18)",
              zIndex: 3,
            }}
          >
            <Box
              sx={{
                backgroundColor: "#d9d9d9",
                height: 200,
              }}
            />

            <Stack spacing={1.2} sx={{ p: 2.5 }}>
              <Typography
                variant="caption"
                sx={{
                  color: "#7ca6ff",
                  letterSpacing: "0.08em",
                  fontWeight: 700,
                }}
              >
                {equipment.label.toUpperCase()}
              </Typography>

              <Typography
                variant="h6"
                sx={{ fontWeight: 700 }}
              >
                {equipment.name}
              </Typography>

              <Typography
                variant="body2"
                sx={{ color: "text.secondary" }}
              >
                {equipment.description}
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  color: "#3b6edc",
                  fontWeight: 700,
                }}
              >
                R${equipment.price}/dia
              </Typography>
            </Stack>
          </Card>

          <Card
            sx={{
              flex: 4,
              minWidth: { xs: "100%", md: 360 },
              maxWidth: { xs: "100%", md: 550 },
              borderRadius: 4,
              p: 3,
              margin: { xs: 0, md: -800 },
              boxShadow: "0 16px 30px rgba(0,0,0,0.18)",
              transform: { xs: "none", md: "translateY(36px)" },
              zIndex: 1,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                textAlign: "center",
                fontWeight: 700,
                mb: 2,
              }}
            >
              Inclui
            </Typography>

            <Stack spacing={1.5}>
              {equipment.includes.map((item) => (
                <Stack
                  key={item}
                  direction="row"
                  spacing={1.5}
                  sx={{ alignItems: "center" }}
                >
                  <Box
                    sx={{
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      border: "2px solid #22c55e",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#22c55e",
                    }}
                  >
                    <Check size={18} />
                  </Box>
                  <Typography variant="body1">{item}</Typography>
                </Stack>
              ))}
            </Stack>
          </Card>
        </Stack>

        <Card
          sx={{
            position: { xs: "static", md: "absolute" },
            right: { md: 20 },
            top: { md: 230 },
            width: { xs: "100%", md: 340 },
            borderRadius: 4,
            p: 3,
            backgroundColor: "#cfe9ec",
            boxShadow: "0 16px 30px rgba(0,0,0,0.18)",
            zIndex: 4,
            marginTop: { xs: 2, md: 0 },
          }}
        >
          <Stack
            direction="row"
            spacing={1.2}
            sx={{
              alignItems: "center",
              mb: 2,
            }}
          >
            <Box
              sx={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                backgroundColor: "rgba(0,0,0,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Info size={18} />
            </Box>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              Condicoes do aluguel
            </Typography>
          </Stack>

          <Stack spacing={1.2}>
            {equipment.conditions.map((item) => (
              <Typography key={item} variant="body2">
                {item}
              </Typography>
            ))}
          </Stack>
        </Card>
      </Box>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        sx={{
          justifyContent: "flex-end",
          alignItems: { xs: "stretch", sm: "center" },
        }}
      >
        <Button
          onClick={handleBack}
          variante="ButtonLinkWhite"
          tamanho="md"
          sx={{
            borderRadius: "14px",
            px: 5,
            py: 1.2,
            textTransform: "none",
            fontWeight: 700,
            border: "1px solid #ffffff",
            color: "#ffffff",
          }}
        >
          Voltar
        </Button>

        <Button
          onClick={handleOpenModal}
          variante="ButtonBlue"
          tamanho="md"
          sx={{
            borderRadius: "14px",
            px: 5,
            py: 1.2,
            textTransform: "none",
            fontWeight: 700,
            backgroundColor: "#0f4db6",
            boxShadow: "0 14px 20px rgba(15,77,182,0.35)",
            "&:hover": {
              backgroundColor: "#0b3f96",
            },
          }}
        >
          Reservar
        </Button>
      </Stack>

      <ReservaWizard
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        equipment={equipment}
      />
    </Box>
  )
}
