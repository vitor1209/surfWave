import type { SxProps, Theme } from "@mui/material"

export const headerSx: SxProps<Theme> = {
  position: "relative",
  minHeight: "100vh",
  background:
    "radial-gradient(circle at top, rgba(255, 255, 255, 0.14) 0%, rgba(255, 255, 255, 0) 36%), linear-gradient(135deg, #2D6CDF 0%, #184B9B 100%)",
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
  px: { xs: 2, sm: 3, md: 4 },
}

export const titleSx: SxProps<Theme> = {
  fontSize: {
    xs: "2.75rem",
    sm: "3.75rem",
    md: "5rem",
  },
  fontFamily: '"Amatica SC", cursive',
  fontWeight: 300,
  letterSpacing: "0.12em",
  mb: 1,
  textTransform: "uppercase",
  animation: "fadeInDown 0.8s ease-in-out",
}

export const subtitleSx: SxProps<Theme> = {
  fontSize: {
    xs: "0.95rem",
    sm: "1.05rem",
    md: "1.1rem",
  },
  fontFamily: '"Raleway", sans-serif',
  fontWeight: "200 !important",
  letterSpacing: "0.1em",
  color: "rgba(255, 255, 255, 0.9)",
  animation: "fadeInUp 0.8s ease-in-out 0.2s both",
}

export const waveContainerSx: SxProps<Theme> = {
  position: "absolute",
  bottom: 0,
  left: 0,
  width: "100%",
  height: "180px",
  overflow: "hidden",
  lineHeight: 0,
}


export const contentAreaSx: SxProps<Theme> = {
  flex: 1,
  width: "100%",
  background: "linear-gradient(180deg, #FFF8ED 0%, #FFFDF8 100%)",
  position: "relative",
  pt: {
    xs: 5,
    sm: 7,
    md: 9,
  },
  pb: {
    xs: 5,
    sm: 7,
    md: 9,
  },
  px: {
    xs: 2,
    sm: 4,
    md: 6,
  },
}

export const headerBrandSx: SxProps<Theme> = {
  fontSize: { xs: "24px", sm: "28px", md: "32px" },
  fontWeight: 700,
  color: "#fff",
  letterSpacing: "-0.5px",
  background: "rgba(255, 255, 255, 0.95)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  mb: 0.5,
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
    font-family: 'Raleway', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #FFFDF8;
    color: #18324C;
  }
`