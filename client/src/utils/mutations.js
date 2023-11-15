import gql from "graphql-tag";

export const ADD_USER = gql`
mutation addUser(
  $firstName: String!
  $lastName: String!
  $email: String!
  $password: String!
) {
  addUser(
    firstName: $firstName
    lastName: $lastName
    email: $email
    password: $password
  ) {
    success
    message
    token
    user {
      _id
      firstName
      lastName
      email
    }
  }
}
`;

// Mutation to add an event
export const ADD_EVENT = gql`
  mutation addEvent($input: EventInput!) {
    addEvent(input: $input) {
      name
      description
      date
      time
      location
    }
  }
`;

// Mutation to update the User
export const UPDATE_USER = gql`
  mutation updateUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    updateUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      firstName
      lastName
      email
    }
  }
`;


// Creating the log-in mutation
export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;
