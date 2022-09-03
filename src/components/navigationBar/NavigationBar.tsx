import {
  AppBar,
  Box,
  Container,
  Grid,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const NavigationBar: React.FC = () => {
  const linksStyles = {
    color: "secondary.contrastText",
    textDecoration: "none",
  };

  return (
    <nav>
      <Box sx={{ flexGrow: 1, backgroundColor: "secondary.main" }}>
        <Container maxWidth="lg">
          <AppBar
            position="static"
            sx={{
              backgroundColor: "transparent",
              boxShadow: "none",
            }}
          >
            <Toolbar
              sx={{
                alignItems: "stretch",
              }}
            >
              <Grid
                container
                sx={{
                  alignItems: "stretch",
                }}
              >
                <Grid item xs={3}>
                  <Box
                    sx={{
                      backgroundColor: "primary.main",
                      display: "flex",
                      alignItems: "center",
                      height: "100%",
                    }}
                  >
                    <IconButton
                      size="large"
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                      disableRipple={true}
                      sx={{
                        pl: "24px",
                        pr: "24px",
                        width: "100%",
                      }}
                    >
                      <MenuOutlinedIcon sx={{ mr: 2 }} />
                      <Typography
                        variant="subtitle1"
                        component="div"
                        fontWeight={400}
                        sx={{ flexGrow: 1 }}
                      >
                        ALL COLLECTIONS
                      </Typography>
                    </IconButton>
                  </Box>
                </Grid>
                <Grid item xs={9}>
                  <Box
                    sx={{
                      pl: "82px",
                      pr: "82px",
                      display: "flex",
                      alignItems: "center",
                      gap: "65px",
                      height: "100%",
                    }}
                  >
                    <Link sx={linksStyles} textTransform="uppercase" href="#">
                      Home
                    </Link>
                    <Link sx={linksStyles} textTransform="uppercase" href="#">
                      Shop
                    </Link>
                    <Link sx={linksStyles} textTransform="uppercase" href="#">
                      Blog
                    </Link>
                    <Link sx={linksStyles} textTransform="uppercase" href="#">
                      About
                    </Link>
                    <Link sx={linksStyles} textTransform="uppercase" href="#">
                      Contact us
                    </Link>
                  </Box>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
        </Container>
      </Box>
    </nav>
  );
};

export default NavigationBar;
