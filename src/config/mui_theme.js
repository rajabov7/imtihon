
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000", 
    },
    secondary: {
      main: "#ffffff", 
    },
    grey: {
      100: "#f5f5f5",
      300: "#dcdcdc",
      600: "#666666",
    },
    footer: {
      bg: "#f2f2f2f2",
      text: "#666666", 
      link: "#000000", 
    },
    text: {
      primary: "#000000",
      secondary: "#555555",
    },
  },

  typography: {
    fontFamily: "'Inter', sans-serif",

    h1: {
      fontFamily: "'Integral CF', sans-serif",
      fontWeight: 800,
      fontSize: "3rem",
      lineHeight: 1.2,
    },

    h2: {
      fontFamily: "'Integral CF', sans-serif",
      fontWeight: 700,
      fontSize: "2.5rem",
      lineHeight: 1.2,
    },

    h6: {
      fontFamily: "'Integral CF', sans-serif",
      fontWeight: 700,
      fontSize: "16px",
    },

    body1: {
      fontFamily: "'Inter', sans-serif",
      fontSize: "1rem",
      lineHeight: 1.6,
      color: "#555555",
    },

    footerTitle: {
      fontFamily: "'Integral CF', sans-serif",
      fontWeight: 600,
      fontSize: "14px",
      letterSpacing: "1px",
    },

    footerText: {
      fontFamily: "'Inter', sans-serif",
      fontSize: "14px",
      color: "#666666",
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "50px",
          textTransform: "none",
          fontWeight: 600,
          padding: "10px 24px",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: "50px",
          "& .MuiOutlinedInput-root": {
            borderRadius: "50px",
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          padding: "8px",
          "&:hover": {
            backgroundColor: "#f5f5f5",
          },
        },
      },
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
