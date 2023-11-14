const { gql } = require("graphql-tag");

const typeDefs = gql`
  type User {
    _id: ID!
    firstName: String
    lastName: String
    email: String!
    events: [Event]
  }

  type Event {
    _id: ID!
    createdBy: User
    name: String!
    description: String
    date: String!
    time: String
    location: String!
  }

  input EventInput {
    name: String
    description: String
    date: String
    time: String
    location: String
  }

  type Query {
    users: [User!]!
    user(userId: ID!): User!
    events: [Event!]!
    me: User
  }

  type Mutation {
  addUser(
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  ): AuthResponse
  addEvent(input: EventInput!): Event!
  updateUser(
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  ): User
  updateEvent(events: String!, input: EventInput!): User
  login(email: String!, password: String!): AuthResponse
}

type AuthResponse {
  success: Boolean!
  message: String!
  token: String
  user: User
}
`;

module.exports = typeDefs;
