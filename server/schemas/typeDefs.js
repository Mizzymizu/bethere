const typeDefs = `#graphql
    type User {
        _id: ID
        firstName: String
        lastName: String
        email: String
        password: String
        events: [Event]
    }

    type Event {
        _id: ID
        eventName: String
        eventDescription: String
        eventDate: Date
        eventTime: String
        eventLocation: String
        eventAttendance: Boolean
        eventMessages: [EventMessage]
    }

    type EventMessage {
        _id: ID
        dateCreated: Date
        poster: User
        messageText: String
    }

    type Query {
        user: User
        event(user: ID, events: String): Event
        eventMessage(user: ID, eventMessage: String): [EventMessage]
    }

    type Mutation {
        addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
        addEvent(eventName: String!, eventDescription: String, eventDate: String!, eventTime: Date!, eventLocation: String!): Event
        addEventMessage(dateCreated: Date!, poster: User!, eventMessage: String!): EventMessage
        updateUser(firstName: String!, lastName: String!, email: String!, password: String!): User
        updateEvent(eventName: String!, eventDescription: String, eventDate: String!, eventTime: Date!, eventLocation: String!): Event
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