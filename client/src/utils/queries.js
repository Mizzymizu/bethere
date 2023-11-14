// Query for all Users
export const QUERY_USERS = `#graphql
    query users($events: String!) {
        users(events: $events) {
            _id
            firstName
            lastName
            email
            events {
                name
            }
        }
    }
`

export const QUERY_USER = `#graphql
    query user($userId: ID!) {
        user(userId: $userId) {
            _id
            firstName
            lastName
            email
            events {
                name
            }
        }
    }
`

export const QUERY_EVENTS = `#graphql
    query events {
        _id
        name
        description
        date
        time
        location
    }
`