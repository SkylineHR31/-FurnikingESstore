import { Container, Grid } from "@mui/material";
import React from "react";

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import {
  CategoriesWrapper,
  GridContainer,
  NavWrapper,
  StyledAppBar,
  StyledIconButton,
  StyledIconButtonText,
  StyledLink,
  StyledToolbar,
  Wrapper,
} from "./styled";
import { navLinkList } from "./constants";

const NavigationBar: React.FC = (): JSX.Element => {
  return (
    <nav>
      <Wrapper>
        <Container maxWidth="lg">
          <StyledAppBar position="static">
            <StyledToolbar>
              <GridContainer container>
                <Grid item xs={3}>
                  <CategoriesWrapper>
                    <StyledIconButton
                      size="large"
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                      disableRipple={true}
                    >
                      <MenuOutlinedIcon sx={{ mr: 2 }} />
                      <StyledIconButtonText>
                        ALL COLLECTIONS
                      </StyledIconButtonText>
                    </StyledIconButton>
                  </CategoriesWrapper>
                </Grid>
                <Grid item xs={9}>
                  <NavWrapper>
                    {navLinkList.map((link) => {
                      return (
                        <StyledLink key={link} href="#">
                          {link}
                        </StyledLink>
                      );
                    })}
                  </NavWrapper>
                </Grid>
              </GridContainer>
            </StyledToolbar>
          </StyledAppBar>
        </Container>
      </Wrapper>
    </nav>
  );
};

export default NavigationBar;
