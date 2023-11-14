import { gql } from '@apollo/client';

// Creating the log-in mutation
export const LOGIN = `#graphql
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
            }
        }
    }
`;

export const SIGNUP = gql`
  mutation signup($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    addUser(
      firstName: $firstName,
      lastName: $lastName,
      email: $email,
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;
