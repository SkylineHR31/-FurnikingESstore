import React from "react";
import theme from "./layout/customTheme";
import { ThemeProvider } from "@mui/material/styles";
import { Grid } from "@mui/material";

// components
import Header from "./components/header/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        direction="column"
        columnSpacing={4}
        sx={{
          fontFamily: "Rubik, sans-serif",
        }}
      >
        <Grid item xs={12}>
          <Header></Header>
        </Grid>
      </Grid>
      {/* 
      <Button color="secondary" variant="contained">Secondary</Button> */}
    </ThemeProvider>
  );
}

export default App;
