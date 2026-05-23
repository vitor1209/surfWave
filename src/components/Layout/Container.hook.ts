import { useEffect } from "react"
import { globalStyles } from "@/components/Layout/Container.styles"

export const useContainer = () => {
  useEffect(() => {
    const styleId = "container-global-styles"
    const existingStyle = document.getElementById(styleId)

    if (!existingStyle) {
      const style = document.createElement("style")
      style.id = styleId
      style.innerHTML = globalStyles
      document.head.appendChild(style)
    }

    return () => {
      const style = document.getElementById(styleId)
      if (style && style.parentNode) {
        style.parentNode.removeChild(style)
      }
    }
  }, [])
}
