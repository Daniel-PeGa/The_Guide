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
  mutation addChurch($churchName: String!) {
    addChurch(churchName: $churchName) {
      _id
      churchName
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($churchId: ID!, $commentText: String!) {
    addComment(churchId: $churchId, commentText: $commentText) {
      _id
      churchName
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