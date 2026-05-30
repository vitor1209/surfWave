import { Box, Stack } from "@mui/material"
import { motion, type Variants } from "framer-motion"

import { useContainer } from "@/components/Layout/Container.hook"
import { Footer } from "@/components/Footer"

import {
  headerSx,
  headerContentSx,
  titleSx,
  subtitleSx,
  waveContainerSx,
  contentAreaSx,
  headerBrandSx,
} from "@/components/Layout/Container.styles"

import type { ContainerProps } from "@/components/Layout/Container.types"

import { Header } from "../Header/Header"
import { Button } from "../Button/Button"

const MotionBox = motion.create(Box)

const navegacaoPrincipal = [
  { label: "Início", to: "/" },
  { label: "Aulas", to: "/aulas" },
  { label: "Aluguel", to: "/aluguel" },
  { label: "Galeria", to: "/galeria" },
]

const Wave = ({ duration = 8, opacity = 1 }: { duration?: number; opacity?: number }) => (
  <motion.div
    style={{
      position: "absolute",
      bottom: -1, // mata a linha feia
      left: 0,
      width: "100%",
      height: "100%",
      overflow: "hidden",
      opacity,
      pointerEvents: "none",
    }}
  >
    <svg
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "block",
      }}
    >
      <motion.path
        fill="#fff8ee"
        d="
          M0,250
          C120,230 240,270 360,250
          C480,230 600,270 720,250
          C840,230 960,270 1080,250
          C1200,230 1320,270 1440,250
          L1440,320 L0,320 Z
        "
        animate={{
          pathLength: [1, 1], // 👈 trava qualquer interpolação estranha
          x: [0, 0], // 👈 garante que nunca anda pro lado
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </svg>
  </motion.div>
)

export const Container = ({
  title,
  subtitle,
  children,
}: ContainerProps) => {
  useContainer()

  const variacaoContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const variacaoItem: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <Stack
      sx={{
        minHeight: "100vh",
        flexDirection: "column",
      }}
    >
      <Header
        start={
          <Stack direction="row" spacing={3}>
            <Box sx={headerBrandSx}>
              SurfWave
            </Box>
          </Stack>
        }
      >
        {navegacaoPrincipal.map((item) => (
          <Button
            key={item.to}
            variante="ButtonLinkWhite"
            tamanho="sm"
            to={item.to}
          >
            {item.label}
          </Button>
        ))}
      </Header>

      <Box component="header" sx={headerSx}>
        <MotionBox
          sx={headerContentSx}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            style={{
              margin: 0,
              padding: 0,
            }}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
          >
            <Box component="span" sx={titleSx}>
              {title}
            </Box>
          </motion.h1>

          <motion.p
            style={{
              margin: 0,
              padding: 0,
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: "easeOut",
            }}
          >
            <Box component="span" sx={subtitleSx}>
              {subtitle}
            </Box>
          </motion.p>
        </MotionBox>

        <Box sx={waveContainerSx}>
          <Wave duration={6} opacity={1} />
          <Wave duration={8} opacity={0.35} />
        </Box>
      </Box>

      <Box component="section" sx={contentAreaSx}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variacaoContainer}
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <motion.div variants={variacaoItem}>
            <Box
              sx={{
                width: "100%",
                height: "100%",
              }}
            >
              {children}
            </Box>
          </motion.div>
        </motion.div>
      </Box>

      <Footer />
    </Stack>
  )
}