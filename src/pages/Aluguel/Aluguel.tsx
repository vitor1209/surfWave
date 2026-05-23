import { Grid } from "@mui/material"
import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material"

import { Search } from "lucide-react"
import { useAluguel } from "./Aluguel.hook"
import ProductCard from "@/components/Card/Card"

export const Aluguel = () => {
  const {
    search,
    setSearch,

    activeCategory,
    setActiveCategory,

    filteredEquipment,

    categories,

    handleReserve,
  } = useAluguel()

  return (
    <Container
      maxWidth="lg"
      sx={{
        py: 6,
      }}
    >
      <Stack spacing={4} sx={{
        py: 6,
        alignItems:"center",
        justifyContent:"center",
      }}>
        <TextField
          fullWidth
          placeholder="Buscar equipamentos..."
          variant="outlined"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          slotProps={{
            input: {
              startAdornment: (
                <Search
                  size={20}
                  style={{
                    marginRight: 12,
                    color: "#9ca3af",
                  }}
                />
              ),
            },
          }}
          sx={{
            mx: "auto",
            maxWidth:"80%",

            "& .MuiOutlinedInput-root": {
              borderRadius: "12px",
              backgroundColor: "rgba(0, 0, 0, 0.05)",
            },
          }}
        />

        <Stack
          direction="row"
          spacing={2}
          sx={{
            gap: 1,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={
                activeCategory === category.id
                  ? "contained"
                  : "outlined"
              }
              onClick={() => setActiveCategory(category.id)}
              sx={{
                fontWeight: 600,
                textTransform: "none",
                borderRadius: "15px",

                borderColor: "#2563eb",

                backgroundColor:
                  activeCategory === category.id
                    ? "#2563eb"
                    : "transparent",

                color:
                  activeCategory === category.id
                    ? "#fff"
                    : "#2563eb",
              }}
            >
              {category.label}
            </Button>
          ))}
        </Stack>

        <Grid container spacing={3}>
          {filteredEquipment.length > 0 ? (
            filteredEquipment.map((equipment) => (
              <Grid
                key={equipment.id}
                size={{
                  xs: 12,
                  sm: 6,
                  md: 4,
                }}
              >
                <ProductCard
                  image={equipment.image}
                  id={equipment.id}
                  name={equipment.name}
                  lugar={equipment.label}
                  descricao={equipment.description}
                  preco={equipment.price}
                  tipoCard="Produto"
                  onReserve={handleReserve}
                />
              </Grid>
            ))
          ) : (
            <Grid size={12}>
              <Box
                sx={{
                  py: 6,
                  textAlign: "center",
                }}
              >
                <Typography color="text.secondary">
                  Nenhum equipamento encontrado
                </Typography>
              </Box>
            </Grid>
          )}
        </Grid>
      </Stack>
    </Container>
  )
}