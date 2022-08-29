import React from "react";
import { Link, Typography } from "@mui/material";
import { ILogo } from "./types";


const SiteLogo: React.FC<ILogo> = ({imageUrl}) => {
  return (
    <Link
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "6px",
        textDecoration: "none",
        color: "secondary.contrastText",
      }}
      href="#"
    >
      <img src={imageUrl} alt="logotype" />
      <Typography fontWeight={500} variant="h5" component="span">
        Furniking
      </Typography>
    </Link>
  );
};

export default SiteLogo;