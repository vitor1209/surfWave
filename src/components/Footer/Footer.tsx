import { Box } from "@mui/material"
import { motion } from "framer-motion"
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

const MotionBox = motion(Box)

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

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
      <MotionBox
        sx={footerContentSx}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Main Grid Content */}
        <Box sx={footerGridSx}>
          {/* Left Column - Brand */}
          <MotionBox sx={footerSectionSx} variants={itemVariants}>
            <Box sx={footerBrandSx}>SurfWave</Box>
            <Box sx={footerDescriptionSx}>
              Transformando sonhos em realidade nas ondas desde 2010. Venha
              fazer parte da nossa família surfista.
            </Box>

            {/* Social Icons */}
            <Box sx={socialIconsSx}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  aria-label={social.name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
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
                    {social.icon}
                  </Box>
                </motion.a>
              ))}
            </Box>
          </MotionBox>

          {/* Center Column - Navigation */}
          <MotionBox sx={footerSectionSx} variants={itemVariants}>
            <Box sx={footerTitleSx}>Navegação</Box>
            {navigationLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <Box sx={footerLinkSx}>{link.label}</Box>
              </motion.a>
            ))}
          </MotionBox>

          {/* Right Column - Contact */}
          <MotionBox sx={footerSectionSx} variants={itemVariants}>
            <Box sx={footerTitleSx}>Contato</Box>

            <Box sx={footerContactItemSx}>
              <Box sx={footerContactIconSx}>📍</Box>
              <Box>{contactInfo.address}</Box>
            </Box>

            <Box sx={footerContactItemSx}>
              <Box sx={footerContactIconSx}>✉️</Box>
              <motion.a
                href={`mailto:${contactInfo.email}`}
                whileHover={{ x: 4 }}
              >
                <Box
                  sx={{
                    color: "rgba(0, 0, 0, 0.65)",
                    textDecoration: "none",
                    cursor: "pointer",
                    transition: "color 0.3s",
                    "&:hover": {
                      color: "rgba(0, 0, 0, 0.85)",
                    },
                  }}
                >
                  {contactInfo.email}
                </Box>
              </motion.a>
            </Box>

            <Box sx={footerContactItemSx}>
              <Box sx={footerContactIconSx}>☎️</Box>
              <motion.a href={`tel:${contactInfo.phone}`} whileHover={{ x: 4 }}>
                <Box
                  sx={{
                    color: "rgba(0, 0, 0, 0.65)",
                    textDecoration: "none",
                    cursor: "pointer",
                    transition: "color 0.3s",
                    "&:hover": {
                      color: "rgba(0, 0, 0, 0.85)",
                    },
                  }}
                >
                  {contactInfo.phone}
                </Box>
              </motion.a>
            </Box>
          </MotionBox>
        </Box>
      </MotionBox>

      {/* Divider */}
      <MotionBox
        sx={footerDividerSx}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />

      {/* Copyright */}
      <MotionBox
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <Box sx={footerCopyrightSx}>
          © 2026 WaveSurf. Todos os direitos reservados.
        </Box>
      </MotionBox>
    </Box>
  )
}
