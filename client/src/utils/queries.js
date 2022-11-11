import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query allUsers {
    users {
      _id
      username
      email
      churches
      smallGroups
      groups
    }
  }
`;

export const GET_ME = gql`
{
  me {
    _id
    username
    email
    churches {
      churchId
      churchName
      denomination
    }
    smallGroups {
      smGroupName
      short_description
      day
    }
    groups {
      groupName
      short_desctiprion
      day
    }
  }
}`