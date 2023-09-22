import { styled } from "@mui/system";
import {
  Box,
  AppBar,
  Toolbar,
  Grid,
  IconButton,
  Typography,
  Link,
} from "@mui/material";

export const Wrapper = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  backgroundColor: theme.palette.secondary.main,
}));

export const StyledAppBar = styled(AppBar)(() => ({
  backgroundColor: "transparent",
  boxShadow: "none",
  position: "static",
}));

export const StyledToolbar = styled(Toolbar)(() => ({
  alignItems: "stretch",
}));

export const GridContainer = styled(Grid)(() => ({
  alignItems: "stretch",
}));

export const CategoriesWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  display: "flex",
  alignItems: "center",
  height: "100%",
}));

export const StyledIconButton = styled(IconButton)(() => ({
  paddingLeft: "24px",
  paddingRight: "24px",
  width: "100%",
}));

export const StyledIconButtonText = styled("div")(({ theme }) => ({
  flexGrow: 1,
  fontWeight: 400,
  fontSize: theme.spacing(3),
}));

export const NavWrapper = styled(Box)(({ theme }) => ({
  padding: "0 82px",
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(5),
  height: "100%",
}));

export const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.secondary.contrastText,
  textDecoration: "none",
  textTransform: "uppercase",
}));
