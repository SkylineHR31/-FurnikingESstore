import { gql } from "@apollo/client";

export const GET_REVIEWERS = gql`
  query users {
    users {
      name
      company {
        name
      }
      posts {
        body
      }
    }
  }
`;
