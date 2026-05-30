import {
  Container,
  Stack,
} from "@mui/material"

import { useAulas } from "./Aulas.hook"
import { FormAula } from "@/components/FormAula/FormAula"

export const Aulas = () => {
  useAulas()

  return (
    <Container
      maxWidth="lg"
      sx={{
        py: 4,
      }}
    >
      <Stack>
        <FormAula />
      </Stack>
    </Container>
  )
}