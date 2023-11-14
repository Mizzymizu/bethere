// Mutation to add a user
export const ADD_USER = `#graphql
    mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
        addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
            firstName
            lastName
            email
            password
        }
    }
`

// Mutation to add an event
export const ADD_EVENT = `#graphql
    mutation addEvent($input: EventInput!) {
        addEvent(input: $input) {
            name
            description
            date
            time
            location
        }
    }
`

// Mutation to update the User 
export const UPDATE_USER = `#graphql
    mutation updateUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
        updateUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
            firstName
            lastName
            email
            password
        }
    }
`

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
