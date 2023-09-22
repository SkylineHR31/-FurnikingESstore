import { useQuery } from "@apollo/client";
import { IUsersData } from "../apollo/types";
import { GET_REVIEWERS } from "../apollo/usersReview";

export const useReviews = () => {
  const { loading, error, data } = useQuery<IUsersData>(GET_REVIEWERS);
  console.log(data);

  if (loading) {
    console.log("load");
  }
  if (error) {
    console.log(`${error.message}`);
  }
};
