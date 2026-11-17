"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#B91C1C",
    },
    secondary: {
      main: "#FCE7E7",
    },
    background: {
      default: "#FFF7F7",
      paper: "#FFFFFF",
    },
    success: {
      main: "#16A36A",
    },
    warning: {
      main: "#D99A28",
    },
    error: {
      main: "#B91C1C",
    },
  },

  typography: {
    fontFamily: "Arial, sans-serif",
    h5: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 700,
    },
  },

  shape: {
    borderRadius: 10,
  },
});

export default theme;