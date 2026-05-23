import { Button } from "@/components/Button/Button"
import CardInfo from "@/components/cardInfo/CardInfo"
import { Dashboard } from "@/components/Dashboard/Dashboard"
import { Container, Stack, Typography } from "@mui/material"
import { Book, Clock, Heart } from "lucide-react"

export const Home = () => {

  return (
    <Container maxWidth="md" sx={{ py: 8, alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', gap: 10 }}>

      <Stack spacing={1.5} sx={{ alignItems: 'center', textAlign: 'center', width: '80%' }}>

        <Typography variant="h2" >
          Sinta a Liberdade das Ondas
        </Typography>

        <Typography variant="subtitle1" color="text.secondary">
          Venha descobrir a magia do surf. Das suas primeiras remadas até pegar seu primeiro tubo, estamos aqui para guiar sua jornada nas ondas.
        </Typography>

        <Button tamanho="lg" espacamento={20} >
          Comece Agora
        </Button>

      </Stack>


      <Stack direction={'row'} spacing={4}>
        <CardInfo color="blue" icon={Book} name="Agendamento de aulas" tamanho="md" valor="Do iniciante ao avançado, temos o programa perfeito para você." />
        <CardInfo color="blue" icon={Clock} name="Horários flexíveis" tamanho="md" valor="Do iniciante ao avançado, temos o programa perfeito para você." />
        <CardInfo color="blue" icon={Heart} name="Comunidade Ativa" tamanho="md" valor="Do iniciante ao avançado, temos o programa perfeito para você." />
      </Stack>

      <Stack sx={{ gap: 4 }}>
        <Typography variant="h2" >
          Previsão do tempo e mar
        </Typography>

        <Typography variant="subtitle1" color="text.secondary">
          Confira como está o tempo agora e nos próximos dias. Descubra o melhor momento pra cair de cabeça no mar!
        </Typography>

        <Dashboard />

      </Stack>
    </Container>
  )
}
