import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        bookCount
        savedBooks
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        username
        bookCount
        savedBooks
      }
    }
  }
`;

export const ADD_BOOK = gql`
  mutation addSkill($bookId: Int!) {
    addSkill(bookId: $bookId) {
      _id
      name
      bookCount
      savedBooks
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeSkill($bookId: Int!) {
    removeSkill(bookId: $bookId) {
      _id
      name
      bookCount
      savedBooks
    }
  }
`;
