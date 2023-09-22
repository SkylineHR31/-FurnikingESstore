import { styled } from "@mui/system";
import { Button, Box } from "@mui/material";

export const ButtonGroupWrapper = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "flex-end",
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  border: "none",
  padding: theme.spacing(1),
}));
