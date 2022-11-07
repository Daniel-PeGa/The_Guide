import { gql } from '@apollo/client';

export const QUERY_PROFILES = gql`
  query allProfiles {
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
