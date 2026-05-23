import { SxProps, Theme } from "@mui/material"

export const headerSx: SxProps<Theme> = {
  position: "relative",
  minHeight: "100vh",
  background: "linear-gradient(135deg, #4A90E2 0%, #357ABD 100%)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  pb: 0,
}

export const headerContentSx: SxProps<Theme> = {
  textAlign: "center",
  color: "white",
  zIndex: 2,
  position: "relative",
}

export const titleSx: SxProps<Theme> = {
  fontSize: {
    xs: "2.5rem",
    sm: "3.5rem",
    md: "4.5rem",
  },
  fontWeight: 300,
  letterSpacing: "0.15em",
  mb: 1,
  textTransform: "uppercase",
  animation: "fadeInDown 0.8s ease-in-out",
}

export const subtitleSx: SxProps<Theme> = {
  fontSize: {
    xs: "0.9rem",
    sm: "1rem",
    md: "1.1rem",
  },
  fontWeight: 400,
  letterSpacing: "0.1em",
  color: "rgba(255, 255, 255, 0.9)",
  textTransform: "uppercase",
  animation: "fadeInUp 0.8s ease-in-out 0.2s both",
}

export const waveContainerSx: SxProps<Theme> = {
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  width: "100%",
  height: "120px",
  overflow: "hidden",
  zIndex: 1,
}

export const waveSx: SxProps<Theme> = {
  position: "absolute",
  bottom: 0,
  left: 0,
  width: "200%",
  height: "100%",
  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 1200 120' preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z' fill='%23F5E6D3'/%3E%3C/svg%3E")`,
  backgroundSize: "50% 100%",
  backgroundRepeat: "repeat-x",
  animation: "wave 15s linear infinite",
}

export const contentAreaSx: SxProps<Theme> = {
  flex: 1,
  width: "100%",
  backgroundColor: "#F5E6D3",
  position: "relative",
  pt: {
    xs: 6,
    sm: 8,
    md: 10,
  },
  pb: {
    xs: 6,
    sm: 8,
    md: 10,
  },
  px: {
    xs: 2,
    sm: 4,
    md: 6,
  },
}

export const globalStyles = `
  @keyframes wave {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  html, body, #root {
    margin: 0;
    padding: 0;
    height: 100%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
