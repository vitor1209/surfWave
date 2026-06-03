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
import { useEffect, useRef } from "react"

const MotionBox = motion.create(Box)

const navegacaoPrincipal = [
  { label: "Início", to: "/" },
  { label: "Aulas", to: "/aulas" },
  { label: "Aluguel", to: "/aluguel" },
  { label: "Galeria", to: "/galeria" },
]

const Wave = ({ duration = 8, opacity = 1 }: { duration?: number; opacity?: number }) => {
  const pathRef = useRef<SVGPathElement>(null)

  // stateA — onda pra baixo
const stateA = "M0,80 C180,20 360,160 540,80 C720,20 900,160 1080,80 C1260,20 1350,120 1440,80 L1440,320 L0,320 Z"

// stateB — onda invertida
const stateB = "M0,160 C180,220 360,80 540,160 C720,220 900,80 1080,160 C1260,220 1350,100 1440,160 L1440,320 L0,320 Z"


  useEffect(() => {
    const el = pathRef.current
    if (!el) return

    const parsePath = (d: string) => d.match(/-?\d+\.?\d*/g)!.map(Number)
    const a = parsePath(stateA)
    const b = parsePath(stateB)

    const lerp = (x: number, y: number, t: number) => x + (y - x) * t
    const ease = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t

    let frame: number
    let t = 0

    const buildPath = (nums: number[]) => {
      let i = 0
      return stateA.replace(/-?\d+\.?\d*/g, () => String(Math.round(nums[i++] * 10) / 10))
    }

    const animate = () => {
      t += (1 / (duration * 60))
      const p = ease((Math.sin(t * Math.PI) + 1) / 2)
      el.setAttribute("d", buildPath(a.map((v, i) => lerp(v, b[i], p))))
      frame = requestAnimationFrame(animate)
    }

    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [duration])

  return (
    <motion.div style={{ position: "absolute", bottom: -1, left: 0, width: "100%", height: "100%", overflow: "hidden", opacity, pointerEvents: "none" }}>
      <svg viewBox="0 0 1440 320" preserveAspectRatio="none" style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "100%", display: "block" }}>
        <path ref={pathRef} fill="#fff8ee" d={stateA} />
      </svg>
    </motion.div>
  )
}

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
          <Wave duration={4} opacity={1} />
          <Wave duration={3} opacity={0.6} />
                    <Wave duration={2.5} opacity={0.35} />
          <Wave duration={2} opacity={0.8} />

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