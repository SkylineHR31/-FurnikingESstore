import React from "react";
import { Grid } from "@mui/material";

// components
import Header from "../header/Header";
import HomePage from "../../pages/Home";
import { StyledGrid } from "./styled";

const Wrapper: React.FC = (): JSX.Element => {
  return (
    <StyledGrid container direction="column" spacing={3}>
      <Grid item xs={12}>
        <Header></Header>
      </Grid>
      <Grid item xs={12}>
        <HomePage></HomePage>
      </Grid>
    </StyledGrid>
  );
};

export default Wrapper;
