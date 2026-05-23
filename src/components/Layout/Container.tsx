import { Box, Stack } from "@mui/material"
import { motion } from "framer-motion"
import { useContainer } from "@/components/Layout/Container.hook"
import { Footer } from "@/components/Footer"
import {
  headerSx,
  headerContentSx,
  titleSx,
  subtitleSx,
  waveContainerSx,
  contentAreaSx,
} from "@/components/Layout/Container.styles"
import type { ContainerProps } from "@/components/Layout/Container.types"

const MotionBox = motion(Box)

const Wave = ({ delay, duration }: { delay: number; duration: number }) => (
  <MotionBox
    component="svg"
    viewBox="0 0 1200 120"
    preserveAspectRatio="none"
    sx={{
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "200%",
      height: "100%",
      fill: "#F5E6D3",
    }}
    animate={{
      x: [0, -600],
    }}
    transition={{
      duration,
      repeat: Infinity,
      ease: "linear",
      delay,
    }}
  >
    <path d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z" />
  </MotionBox>
)

export const Container = ({ title, subtitle, children }: ContainerProps) => {
  useContainer()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
      {/* Header Section */}
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
            transition={{ duration: 0.6, ease: "easeOut" }}
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
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <Box component="span" sx={subtitleSx}>
              {subtitle}
            </Box>
          </motion.p>
        </MotionBox>

        {/* Animated Waves */}
        <Box sx={waveContainerSx}>
          <Wave delay={0} duration={15} />
          <Wave delay={-7.5} duration={15} />
          <Wave delay={-3} duration={20} />
        </Box>
      </Box>

      {/* Content Section */}
      <MotionBox
        component="section"
        sx={contentAreaSx}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <Box sx={{ width: "100%", height: "100%" }}>
            {children}
          </Box>
        </motion.div>
      </MotionBox>

      {/* Footer */}
      <Footer />
    </Stack>
  )
}
