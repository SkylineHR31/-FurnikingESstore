import { gql } from "@apollo/client";

interface IUser {
  name: string;
  company: {
    name: string;
  };
  posts: [
    {
      body: string;
    }
  ];
}

export interface IUsersData {
    users: IUser[]
}

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
