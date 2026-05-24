import { Box } from "@mui/material"
import { Globe, Mail, MapPin, Phone, PlayCircle, Share2 } from "lucide-react"
import {
  footerRootSx,
  footerContentSx,
  footerGridSx,
  footerSectionSx,
  footerBrandSx,
  footerDescriptionSx,
  footerTitleSx,
  footerLinkSx,
  footerContactItemSx,
  footerContactIconSx,
  socialIconsSx,
  socialButtonSx,
  footerDividerSx,
  footerCopyrightSx,
} from "@/components/Footer/Footer.styles"

export const Footer = () => {
  const linksNavegacao = [
    { label: "Início", href: "/" },
    { label: "Aulas", href: "/aulas" },
    { label: "Aluguel", href: "/aluguel" },
    { label: "Galeria", href: "/galeria" },
  ]

  const informacoesContato = {
    address: "Praia Belas Ondas, 123",
    email: "contato@surfwave.com",
    phone: "(48) 99999-9999",
  }

  const linksSociais = [
    { name: "Rede social", icon: Share2, url: "#" },
    { name: "Portal", icon: Globe, url: "#" },
    { name: "Vídeos", icon: PlayCircle, url: "#" },
  ]

  return (
    <Box component="footer" sx={footerRootSx}>
      <Box sx={footerContentSx}>
        <Box sx={footerGridSx}>
          <Box sx={footerSectionSx}>
            <Box sx={footerBrandSx}>SurfWave</Box>
            <Box sx={footerDescriptionSx}>
              Transformando dias comuns em experiências memoráveis no mar desde 2010.
            </Box>

            <Box sx={socialIconsSx}>
              {linksSociais.map((social) => {
                const IconeSocial = social.icon

                return (
                  <a
                    key={social.name}
                    href={social.url}
                    aria-label={social.name}
                    style={{ textDecoration: "none" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Box
                      component="div"
                      sx={socialButtonSx}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          window.open(social.url)
                        }
                      }}
                    >
                      <IconeSocial size={20} strokeWidth={2.2} />
                    </Box>
                  </a>
                )
              })}
            </Box>
          </Box>

          <Box sx={footerSectionSx}>
            <Box sx={footerTitleSx}>Navegação</Box>
            {linksNavegacao.map((link) => (
              <Box
                component="a"
                key={link.label}
                href={link.href}
                sx={{
                  ...footerLinkSx,
                  display: "block",
                  transition: "transform 200ms ease",
                  "&:hover": { transform: "translateX(4px)" },
                }}
              >
                {link.label}
              </Box>
            ))}
          </Box>

          <Box sx={footerSectionSx}>
            <Box sx={footerTitleSx}>Contato</Box>

            <Box sx={footerContactItemSx}>
              <Box sx={footerContactIconSx}>
                <MapPin size={18} />
              </Box>
              <Box>{informacoesContato.address}</Box>
            </Box>

            <Box sx={footerContactItemSx}>
              <Box sx={footerContactIconSx}>
                <Mail size={18} />
              </Box>
              <Box
                component="a"
                href={`mailto:${informacoesContato.email}`}
                sx={{
                  color: "rgba(24, 50, 76, 0.72)",
                  textDecoration: "none",
                  cursor: "pointer",
                  transition: "color 0.3s, transform 120ms ease",
                  "&:hover": { color: "#18324C", transform: "translateX(4px)" },
                }}
              >
                {informacoesContato.email}
              </Box>
            </Box>

            <Box sx={footerContactItemSx}>
              <Box sx={footerContactIconSx}>
                <Phone size={18} />
              </Box>
              <Box
                component="a"
                href={`tel:${informacoesContato.phone}`}
                sx={{
                  color: "rgba(24, 50, 76, 0.72)",
                  textDecoration: "none",
                  cursor: "pointer",
                  transition: "color 0.3s, transform 120ms ease",
                  "&:hover": { color: "#18324C", transform: "translateX(4px)" },
                }}
              >
                {informacoesContato.phone}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box sx={footerDividerSx} />

      <Box>
        <Box sx={footerCopyrightSx}>
          © 2026 WaveSurf. Todos os direitos reservados.
        </Box>
      </Box>
    </Box>
  )
}
