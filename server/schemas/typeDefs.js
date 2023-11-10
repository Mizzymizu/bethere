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
        # addEventMessage(eventMessages: String!, eventId: String!): EventMessage # might not include this afterall
        updateUser(firstName: String!, lastName: String!, email: String!, password: String!): User
        # updateEvent(eventName: String!, eventDescription: String, eventDate: String!, eventTime: String!, eventLocation: String!): Event
        login(email: String!, password: String!): Auth
    }

    # Create Query
        # user: User
        # event(user: ID, events: String): Event
        # eventMessage(user: ID, eventMessage): [EventMessage] 
    # Create Mutations
        # addUser
        # addEvent
        # addEventMessage
        # updateUser
        # updateEvent
        # login

`

module.exports = typeDefs;