import { Box, Typography, Stack } from "@mui/material"
import { Container } from "@/components/Layout"

export const Home = () => {
  return (
    <Container
      title="Página inicial"
      subtitle="Rotas configuradas com sucesso"
    >
      <Stack
        spacing={3}
        sx={{
          maxWidth: "800px",
          mx: "auto",
        }}
      >
        <Box>
          <Typography variant="h5" fontWeight={600} mb={1}>
            Bem-vindo ao SurfWave
          </Typography>
          <Typography color="text.secondary">
            A estrutura base de rotas foi configurada com sucesso. O sistema
            está pronto para receber novas páginas e componentes.
          </Typography>
        </Box>

        <Box>
          <Typography variant="h6" fontWeight={600} mb={1}>
            O que foi implementado?
          </Typography>
          <ul style={{ margin: "0 0 0 20px", paddingLeft: 0 }}>
            <li>
              <Typography component="span" color="text.secondary">
                Estrutura modular de rotas com React Router
              </Typography>
            </li>
            <li>
              <Typography component="span" color="text.secondary">
                Layout global com Container animado
              </Typography>
            </li>
            <li>
              <Typography component="span" color="text.secondary">
                Animações de ondas usando Framer Motion
              </Typography>
            </li>
            <li>
              <Typography component="span" color="text.secondary">
                Design responsivo com MUI v7
              </Typography>
            </li>
            <li>
              <Typography component="span" color="text.secondary">
                Path alias @ para imports internos
              </Typography>
            </li>
          </ul>
        </Box>
      </Stack>
    </Container>
  )
}
