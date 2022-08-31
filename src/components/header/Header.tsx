import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  Select,
  MenuItem,
  SelectChangeEvent,
  Link,
  Grid,
  ButtonGroup,
  Button,
  Badge,
} from "@mui/material";

// icons
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

// components
import SiteLogo from "../siteLogo/SiteLogo";
import SearchBar from "../searchBar/SearchBar";

// assets
import Logo from "../../assets/Logo-svg.svg";

const Header: React.FC = () => {
  const [currency, setCurrency] = useState<string>("USD");

  const changeCurrencyHandler = (event: SelectChangeEvent): void => {
    setCurrency(event.target.value as string);
  };

  return (
    <header className="main-header">
      <Box
        sx={{
          backgroundColor: "primary.main",
          width: "100%",
          minHeight: 50,
          color: "common.white",
        }}
      >
        <Container
          sx={{
            minHeight: 50,
            mb: "20px",
          }}
          maxWidth="lg"
        >
          <Grid container>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography variant="subtitle1" component="span">
                Welcome to our online shop
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Select
                id="currencyCheckerId"
                labelId="currencyCheckerIdLabel"
                value={currency}
                onChange={changeCurrencyHandler}
                IconComponent={ExpandMoreIcon}
                sx={{
                  border: "none",
                  color: "common.white",
                }}
                className="header-currency-select"
              >
                <MenuItem value={"USD"}>English (USD)</MenuItem>
                <MenuItem value={"EUR"}>English (EUR)</MenuItem>
                <MenuItem value={"UAH"}>Ukrainian (UAH)</MenuItem>
              </Select>
              <HorizontalRuleIcon
                sx={{
                  transform: "rotate(90deg)",
                  mr: "12px",
                }}
              />
              <Link
                sx={{
                  color: "common.white",
                }}
                href="#"
              >
                Login or Sign up
              </Link>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={3}>
            <SiteLogo imageUrl={Logo}></SiteLogo>
          </Grid>
          <Grid item xs={6}>
            <SearchBar></SearchBar>
          </Grid>
          <Grid item xs={3}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <ButtonGroup
                size="large"
                variant="outlined"
                aria-label="text button group"
              >
                <Button
                  sx={{
                    border: "none",
                    pl: "8px",
                    pr: "8px",
                  }}
                >
                  <Badge badgeContent={2} color="primary">
                    <ShoppingBagOutlinedIcon
                      sx={{
                        color: "secondary.contrastText",
                      }}
                      fontSize="large"
                    />
                  </Badge>
                </Button>
                <Button
                  sx={{
                    border: "none",
                    pl: "8px",
                    pr: "8px",
                  }}
                >
                  <Badge>
                    <NotificationsNoneOutlinedIcon
                      sx={{
                        color: "secondary.contrastText",
                      }}
                      fontSize="large"
                    />
                  </Badge>
                </Button>
                <Button
                  sx={{
                    border: "none",
                    pl: "8px",
                    pr: "8px",
                  }}
                >
                  <Badge>
                    <PersonOutlineOutlinedIcon
                      sx={{
                        color: "secondary.contrastText",
                      }}
                      fontSize="large"
                    />
                  </Badge>
                </Button>
                {/* перепилить на отдельный компонент и кнопки тоже, пильнуть для бейджев стейты */}
              </ButtonGroup>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </header>
  );
};

export default Header;
