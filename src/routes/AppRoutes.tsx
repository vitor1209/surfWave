import { Navigate, Route, Routes } from "react-router-dom"
import { Container } from "@/components/Layout/Container"
import { Home } from "@/pages/Home/Home"

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

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}