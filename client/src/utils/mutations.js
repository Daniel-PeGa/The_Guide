import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_CHURCH = gql`
  mutation addChurch($churchText: String!) {
    addChurch(churchText: $churchText) {
      _id
      ChurchText
      username
      denomination
      short_description
      comments {
        _id
        commentText
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($churchId: ID!, $commentText: String!) {
    addComment(churchId: $churchId, commentText: $commentText) {
      _id
      churchText
      username
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;