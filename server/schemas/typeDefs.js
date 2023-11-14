const typeDefs = `#graphql
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

    type EventMessage {
        _id: ID!
        dateCreated: String
        userId: User
        messageText: String
    }

    type Query {
        users: [User!]!
        user(userId: ID!): User!
        events: [Event!]!
    }

    type Auth {
        token: String!
        user: User!
    }

    type Mutation {
        addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
        addEvent(input: EventInput!): Event!
        updateUser(firstName: String!, lastName: String!, email: String!, password: String!): User
        updateEvent(events: String! input: EventInput!): User
        login(email: String!, password: String!): Auth
    }
`

module.exports = typeDefs;