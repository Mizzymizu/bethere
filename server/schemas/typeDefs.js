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

    # Create Query
    # Create Mutations
`

export default typeDefs;