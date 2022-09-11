import React, { Key } from "react";
import Carousel from "react-material-ui-carousel";
import { Box } from "@mui/material";
import ReviewsCarouselItem from "./ReviewsCarouselItem";
import { useQuery } from "@apollo/client";
import { GET_REVIEWERS, IUsersData } from "../../apollo/usersReview";

// assets
import avatar from "../../assets/reviewAvatar.jpg";

const ReviewsCarousel: React.FC = () => {
  const { loading, error, data } = useQuery<IUsersData>(GET_REVIEWERS);
  console.log(data);

  if (loading) {
    console.log("load");
  }
  if (error) {
    console.log(`${error.message}`);
  }

  return (
    <Box>
      {!!data && (
        <Carousel
          sx={{
            p: "44px 0 0",
          }}
          autoPlay={true}
          stopAutoPlayOnHover={true}
          interval={5000}
          animation={"slide"}
          swipe={true}
          navButtonsAlwaysVisible={true}
          indicators={false}
        >
          {data.users.map((user: any, i: Key) => (
            <ReviewsCarouselItem
              key={i}
              avatarUrl={avatar}
              review={user.posts[0].body}
              name={user.name}
              company={user.company.name}
            />
          ))}
        </Carousel>
      )}
    </Box>
  );
};

export default ReviewsCarousel;
