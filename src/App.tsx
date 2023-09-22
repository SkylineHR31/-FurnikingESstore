import React from "react";
import theme from "./layout/customTheme";
import { ThemeProvider } from "@mui/material/styles";

import Wrapper from "./components/wrapper/Wrapper";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper></Wrapper>
    </ThemeProvider>
  );
}

export default App;
