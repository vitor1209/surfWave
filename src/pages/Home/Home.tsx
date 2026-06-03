import { Button } from "@/components/Button/Button"
import CardInfo from "@/components/cardInfo/CardInfo"
import { Dashboard } from "@/components/Dashboard/Dashboard"
import { Container, Grid, Stack, Typography } from "@mui/material"
import { Book, Clock, Heart } from "lucide-react"
import Flutuanteicon from "@/components/Icone/Icone"

export const Home = () => {

  return (
    
    <Container
      maxWidth="lg"
      sx={{
        py: { xs: 5, md: 8 },
        display: "flex",
        flexDirection: "column",
        gap: { xs: 6, md: 10 },
      }}
    >
      <Stack
        spacing={2}
        sx={{
          alignItems: "center",
          textAlign: "center",
          mx: "auto",
          maxWidth: 820,
        }}
      >
        <Flutuanteicon />
        <Typography variant="h2" sx={{ fontSize: { xs: "3.2rem", md: "4.8rem" }}}>
          Sinta a liberdade das ondas
        </Typography>

        <Typography variant="subtitle1" color="text.secondary" sx={{ maxWidth: 680 }}>
          Venha descobrir a magia do surf. Das primeiras remadas ao primeiro tubo, estamos aqui para guiar sua jornada com aulas, aluguel e experiências na praia.
        </Typography>

        <Button tamanho="lg" espacamento={24} icon={Book} href="/aulas" >
          Comece agora
        </Button>
      </Stack>

      <Grid container spacing={3} sx={{ justifyContent: "center" }}>
        <Grid size={{ xs: 12, md: 4 }}>
          <CardInfo
            color="blue"
            icon={Book}
            name="Agendamento de aulas"
            tamanho="md"
            valor="Do iniciante ao avançado, com acompanhamento pensado para cada fase."
          />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <CardInfo
            color="green"
            icon={Clock}
            name="Horários flexíveis"
            tamanho="md"
            valor="Escolha o melhor horário para aproveitar o mar sem complicação."
          />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <CardInfo
            color="orange"
            icon={Heart}
            name="Comunidade ativa"
            tamanho="md"
            valor="Conecte-se com pessoas que compartilham a mesma energia do surf."
          />
        </Grid>
      </Grid>

      <Stack spacing={2.5} sx={{
        alignItems: "center",
        textAlign: "center",
      }}>
        <Stack spacing={1} sx={{ maxWidth: 760, }}>
          <Typography variant="h2" sx={{ fontSize: { xs: "2.9rem", md: "3.8rem" } }}>
            Previsão do tempo e mar
          </Typography>


          <Typography variant="subtitle1" color="text.secondary">
            Confira como está o tempo agora e nos próximos dias. Descubra o melhor momento para cair de cabeça no mar.
          </Typography>
        </Stack>

        <Dashboard />
      </Stack>
    </Container>
  )
}
