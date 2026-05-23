import { Navigate, Route, Routes } from "react-router-dom"
import { Container } from "@/components/Layout/Container"
import { Home } from "@/pages/Home/Home"
import { Galeria } from "@/pages/Galeria/Galeria"

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

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
