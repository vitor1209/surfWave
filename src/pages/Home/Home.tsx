import { Container, Stack, Typography } from "@mui/material"
import { useHome } from "@/pages/Home/Home.hook"

export const Home = () => {
  const { title, subtitle } = useHome()

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Stack spacing={1.5}>
        <Typography variant="h4" fontWeight={600}>
          {title}
        </Typography>
        <Typography color="text.secondary">{subtitle}</Typography>
      </Stack>
    </Container>
  )
}
