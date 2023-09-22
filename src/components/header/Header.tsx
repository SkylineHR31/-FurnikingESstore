import React, { useState } from "react";
import {
  Container,
  Typography,
  Select,
  MenuItem,
  SelectChangeEvent,
  Grid,
} from "@mui/material";

// icons
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";

// components
import SiteLogo from "../siteLogo/SiteLogo";
import SearchBar from "../searchBar/SearchBar";

// assets
import Logo from "../../assets/Logo-svg.svg";

// styled
import {
  HeaderTop,
  HeaderTopContainer,
  HeaderTopLeft,
  HeaderTopRight,
  Input,
  LoginLink,
  StyledHeader,
} from "./styled";
import { currencyItems } from "./constants";
import UserControls from "../UserControls/UserControls";

const Header: React.FC = (): JSX.Element => {
  const [currency, setCurrency] = useState("USD");

  const changeCurrencyHandler = (event: SelectChangeEvent): void => {
    setCurrency(event.target.value as string);
  };

  return (
    <StyledHeader component="header">
      <HeaderTop>
        <HeaderTopContainer maxWidth="lg">
          <Grid container>
            <HeaderTopLeft item xs={12} md={6}>
              <Typography variant="subtitle1" component="span">
                Welcome to our online shop
              </Typography>
            </HeaderTopLeft>
            <HeaderTopRight item xs={12} md={6}>
              <Select
                id="currencyCheckerId"
                labelId="currencyCheckerIdLabel"
                value={currency}
                onChange={changeCurrencyHandler}
                IconComponent={ExpandMoreIcon}
                input={<Input />}
                className="header-currency-select"
              >
                {currencyItems.map((item) => {
                  return (
                    <MenuItem key={item.text} value={item.value}>
                      {item.text}
                    </MenuItem>
                  );
                })}
              </Select>
              <HorizontalRuleIcon
                sx={{
                  transform: "rotate(90deg)",
                  mr: "12px",
                }}
              />
              <LoginLink href="#">Login or Sign up</LoginLink>
            </HeaderTopRight>
          </Grid>
        </HeaderTopContainer>
      </HeaderTop>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={3}>
            <SiteLogo imageUrl={Logo} />
          </Grid>
          <Grid item xs={6}>
            <SearchBar />
          </Grid>
          <Grid item xs={3}>
            <UserControls />
          </Grid>
        </Grid>
      </Container>
    </StyledHeader>
  );
};

export default Header;
