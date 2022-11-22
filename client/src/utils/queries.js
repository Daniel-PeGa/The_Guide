import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      church {
        _id
        churchText
        createdAt
      }
    }
  }
`;

export const QUERY_CHURCH = gql`
  query getChurch {
    church {
      _id
      churchText
      username
      createdAt
      comments {
        _id
        commentText
        username
        createdAt
      }
    }
  }
`;

export const QUERY_ME = gql`
{
  me {
    _id
    username
    email
    churches {
      churchId
      churchText
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
}
`;

