import { Typography, Box, Container } from "@mui/material";
import React from "react";
import ReviewsCarousel from "../../reviewsCarousel/ReviewsCarousel";

const CustomerReviewSection: React.FC = () => {
  return (
    <Box
      component="section"
      sx={{
        fontFamily: "Mulish, sans-serif",
        color: "secondary.contrastText",
        mt: 4,
        mb: 7
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          fontSize="36px"
          fontWeight={700}
          textTransform="uppercase"
          fontFamily="inherit"
          textAlign="center"
          mb={5}
        >
          What Our Customer Says
        </Typography>
        <ReviewsCarousel />
      </Container>
    </Box>
  );
};

export default CustomerReviewSection;
