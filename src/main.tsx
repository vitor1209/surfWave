import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { CssBaseline } from "@mui/material"
import { ThemeProvider, THEME_ID } from "@mui/material/styles"
import { CssVarsProvider } from "@mui/joy/styles"
import { theme } from "@/lib/theme/theme"
import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./routes/AppRoutes"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CssVarsProvider>
      <ThemeProvider theme={{ [THEME_ID]: theme }}>
        <CssBaseline />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </CssVarsProvider>
  </StrictMode>,

)
