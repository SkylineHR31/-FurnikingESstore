import { Avatar, Paper, Typography } from "@mui/material";
import React from "react";

const ReviewsCarouselItem: React.FC<IReviewItem> = ({
  avatarUrl,
  review,
  name,
  company,
}) => {
  console.log;
  return (
    <Paper
      sx={{
        boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.05)",
        backgroundColor: "secondary.main",
        borderRadius: "8px",
        position: "relative",
        display: "flex",
        flexFlow: "column",
        alignItems: "center",
        p: "80px 125px 47px",
        color: "secondary.contrastText",
        maxWidth: "820px",
        m: "0 auto"
      }}
    >
      <Avatar
        sx={{
          position: "absolute",
          top: "-44px",
          width: "88px",
          height: "88px",
        }}
        alt={name}
        src={avatarUrl}
      />
      <Typography
        textAlign="center"
        fontFamily="inherit"
        variant="subtitle1"
        component="p"
        mb={4}
      >
        {review}
      </Typography>
      <Typography
        textAlign="center"
        fontSize="1.5rem"
        fontFamily="inherit"
        variant="h6"
        component="span"
        fontWeight={600}
      >
        {name}
      </Typography>
      <Typography
        textAlign="center"
        fontFamily="inherit"
        variant="subtitle2"
        component="span"
      >
        {company}
      </Typography>
    </Paper>
  );
};

export default ReviewsCarouselItem;

export interface IReviewItem {
  avatarUrl: string;
  review: string;
  name: string;
  company: string;
}
