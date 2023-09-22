import { styled } from "@mui/system";
import { Box, Container, Grid, InputBase, Link } from "@mui/material";

export const StyledHeader = styled(Box)(({ theme }) => ({
  paddingBottom: theme.spacing(2),
}));

export const HeaderTop = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  width: "100%",
  minHeight: 50,
  color: theme.palette.common.white,
  marginBottom: theme.spacing(4),
  paddingTop: theme.spacing(3),
}));

export const HeaderTopContainer = styled(Container)(() => ({
  minHeight: 50,
}));

export const HeaderTopLeft = styled(Grid)(() => ({
  display: "flex",
  alignItems: "center",
}));

export const HeaderTopRight = styled(Grid)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
}));

export const Input = styled(InputBase)(({ theme }) => ({
  border: "none",
  color: theme.palette.common.white,
}));

export const LoginLink = styled(Link)(({ theme }) => ({
  color: theme.palette.common.white,
}));
