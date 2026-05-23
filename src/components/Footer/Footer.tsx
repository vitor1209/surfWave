import { Box } from "@mui/material"
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
  const navigationLinks = [
    { label: "Início", href: "/" },
    { label: "Aulas", href: "/aulas" },
    { label: "Aluguel", href: "/aluguel" },
    { label: "Galeria", href: "/galeria" },
  ]

  const contactInfo = {
    address: "Praia Belas Ondas, 123",
    email: "contato@surfwave.com",
    phone: "(48) 99999-9999",
  }

  const socialLinks = [
    { name: "Instagram", icon: "📷", url: "#" },
    { name: "Twitter", icon: "𝕏", url: "#" },
    { name: "YouTube", icon: "▶️", url: "#" },
  ]

  return (
    <Box component="footer" sx={footerRootSx}>
      <Box sx={footerContentSx}>
        {/* Main Grid Content */}
        <Box sx={footerGridSx}>
          {/* Left Column - Brand */}
          <Box sx={footerSectionSx}>
            <Box sx={footerBrandSx}>SurfWave</Box>
            <Box sx={footerDescriptionSx}>
              Transformando sonhos em realidade nas ondas desde 2010. Venha
              fazer parte da nossa família surfista.
            </Box>

            {/* Social Icons */}
            <Box sx={socialIconsSx}>
              {socialLinks.map((social) => (
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
                    sx={{
                      ...socialButtonSx,
                      transition: "transform 150ms ease, opacity 200ms ease",
                      '&:hover': { transform: 'scale(1.08)' },
                      '&:active': { transform: 'scale(0.95)' },
                    }}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        window.open(social.url)
                      }
                    }}
                  >
                    {social.icon}
                  </Box>
                </a>
              ))}
            </Box>
          </Box>

          {/* Center Column - Navigation */}
          <Box sx={footerSectionSx}>
            <Box sx={footerTitleSx}>Navegação</Box>
            {navigationLinks.map((link) => (
              <Box
                component="a"
                key={link.label}
                href={link.href}
                sx={{
                  ...footerLinkSx,
                  display: 'block',
                  transition: 'transform 200ms ease',
                  '&:hover': { transform: 'translateX(4px)' },
                }}
              >
                {link.label}
              </Box>
            ))}
          </Box>

          {/* Right Column - Contact */}
          <Box sx={footerSectionSx}>
            <Box sx={footerTitleSx}>Contato</Box>

            <Box sx={footerContactItemSx}>
              <Box sx={footerContactIconSx}>📍</Box>
              <Box>{contactInfo.address}</Box>
            </Box>

            <Box sx={footerContactItemSx}>
              <Box sx={footerContactIconSx}>✉️</Box>
              <Box
                component="a"
                href={`mailto:${contactInfo.email}`}
                sx={{
                  color: "rgba(0, 0, 0, 0.65)",
                  textDecoration: "none",
                  cursor: "pointer",
                  transition: "color 0.3s, transform 120ms ease",
                  '&:hover': { color: 'rgba(0, 0, 0, 0.85)', transform: 'translateX(4px)' },
                }}
              >
                {contactInfo.email}
              </Box>
            </Box>

            <Box sx={footerContactItemSx}>
              <Box sx={footerContactIconSx}>☎️</Box>
              <Box
                component="a"
                href={`tel:${contactInfo.phone}`}
                sx={{
                  color: "rgba(0, 0, 0, 0.65)",
                  textDecoration: "none",
                  cursor: "pointer",
                  transition: "color 0.3s, transform 120ms ease",
                  '&:hover': { color: 'rgba(0, 0, 0, 0.85)', transform: 'translateX(4px)' },
                }}
              >
                {contactInfo.phone}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Divider */}
      <Box sx={footerDividerSx} />

      {/* Copyright */}
      <Box>
        <Box sx={footerCopyrightSx}>
          © 2026 WaveSurf. Todos os direitos reservados.
        </Box>
      </Box>
    </Box>
  )
}
