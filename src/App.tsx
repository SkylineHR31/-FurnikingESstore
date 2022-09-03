import React from "react";
import theme from "./layout/customTheme";
import { ThemeProvider } from "@mui/material/styles";
import { Grid } from "@mui/material";

// components
import Header from "./components/header/Header";
import HomePage from "./pages/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        direction="column"
        spacing={3}
        sx={{
          fontFamily: "Rubik, sans-serif",
        }}
      >
        <Grid item xs={12}>
          <Header></Header>
        </Grid>
        <Grid item xs={12}>
          <HomePage></HomePage>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
