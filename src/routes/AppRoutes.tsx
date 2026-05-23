import { Navigate, Route, Routes } from "react-router-dom"
import { Container } from "@/components/Layout/Container"
import { Home } from "@/pages/Home/Home"
import { Galeria } from "@/pages/Galeria/Galeria"
import { Aluguel } from "@/pages/Aluguel/Aluguel"

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Container
            title="Bem-vindo"
            subtitle="Estrutura inicial da aplicação"
          >
            <Home />
          </Container>
        }
      />
      <Route
        path="/galeria"
        element={
          <Container
            title="Galeria de Fotos"
            subtitle="Confira os melhores momentos das nossas aulas, eventos e a beleza natural da nossa praia."
          >
            <Galeria />
          </Container>
        }
      />
      <Route
        path="/aluguel"
        element={
          <Container
            title="Aluguel Equipamentos"
            subtitle="Alugue pranchas, wetsuits e acessórios. Retirada na loja ou delivery na praia."
          >
            <Aluguel />
          </Container>
        }
      />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
