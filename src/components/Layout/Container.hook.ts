import { useEffect } from "react"
import { globalStyles } from "@/components/Layout/Container.styles"

export const useContainer = () => {
  useEffect(() => {
    const identificadorEstilo = "container-global-styles"
    const estiloExistente = document.getElementById(identificadorEstilo)

    if (!estiloExistente) {
      const estilo = document.createElement("style")
      estilo.id = identificadorEstilo
      estilo.innerHTML = globalStyles
      document.head.appendChild(estilo)
    }

    return () => {
      const estilo = document.getElementById(identificadorEstilo)
      if (estilo && estilo.parentNode) {
        estilo.parentNode.removeChild(estilo)
      }
    }
  }, [])
}
