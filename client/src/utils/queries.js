import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query allUsers {
    users {
      _id
      name
      email
      churches
      smallGroups
      groups
    }
  }
`;
