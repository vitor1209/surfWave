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
    busca,
    setBusca,

    categoriaAtiva,
    setCategoriaAtiva,

    equipamentosFiltrados,

    categories,

    handleReservar,
  } = useAluguel()

  return (
    <Container
      maxWidth="lg"
      sx={{
        py: 6,
      }}
    >
      <Stack
        spacing={4}
        sx={{
          py: 6,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TextField
          fullWidth
          placeholder="Buscar equipamentos..."
          variant="outlined"
          value={busca}
          onChange={(event) => setBusca(event.target.value)}
          slotProps={{
            input: {
              startAdornment: (
                <Search
                  size={20}
                  style={{
                    marginRight: 12,
                    color: "#52697F",
                  }}
                />
              ),
            },
          }}
          sx={{
            mx: "auto",
            maxWidth: "80%",

            "& .MuiOutlinedInput-root": {
              borderRadius: "16px",
              backgroundColor: "rgba(24, 50, 76, 0.04)",
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
                categoriaAtiva === category.id
                  ? "contained"
                  : "outlined"
              }
              onClick={() => setCategoriaAtiva(category.id)}
              sx={{
                fontWeight: 600,
                textTransform: "none",
                borderRadius: "999px",

                borderColor: "primary.main",

                backgroundColor:
                  categoriaAtiva === category.id
                    ? "primary.main"
                    : "transparent",

                color:
                  categoriaAtiva === category.id
                    ? "#fff"
                    : "primary.main",
              }}
            >
              {category.label}
            </Button>
          ))}
        </Stack>

        <Grid container spacing={3}>
          {equipamentosFiltrados.length > 0 ? (
            equipamentosFiltrados.map((equipamento) => (
              <Grid
                key={equipamento.id}
                size={{
                  xs: 12,
                  sm: 6,
                  md: 4,
                }}
              >
                <ProductCard
                  image={equipamento.image}
                  id={equipamento.id}
                  name={equipamento.name}
                  lugar={equipamento.label}
                  descricao={equipamento.description}
                  preco={equipamento.price}
                  tipoCard="Produto"
                  onReserve={handleReservar}
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