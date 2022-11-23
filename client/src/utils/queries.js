import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query users($username: String!) {
    users(username: $username) {
      _id
      username
      email
      churches {
        _id
        churchName
      }
      comment {
        _id
        commentText
      }
    }
  }
`;

export const QUERY_CHURCH = gql`
  query churches {
    churches {
      _id
      churchName
      users {
        _id
        username
        email
      }
    }
  }
`;

export const QUERY_COMMENT =   gql`    
  query getComment {
      comments {
        _id
        commentText
        username
        churchName
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
}
`;

