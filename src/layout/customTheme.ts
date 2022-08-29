import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#7AC751",
      light: "#a1de81",
      dark: "#396b1e",
      contrastText: "#fff",
    },
    secondary: {
      main: "#F7F8FA",
      light: "#E5E5E5",
      dark: "#C2C2C2",
      contrastText: "#555555",
    },
    background: {
      default: "#E5E5E5",
    },
  },
  spacing: [0, 4, 8, 16, 32, 64],
  typography: {
    fontFamily: ["Rubik", "sans-serif"].join(","),
  },
});

export default theme;
