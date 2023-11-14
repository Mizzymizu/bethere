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
