import { gql } from "graphql-tag";

export const QUERY_USERS = gql`
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
`;

export const QUERY_USER = gql`
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
`;

export const QUERY_EVENTS = gql`
  query events {
    events {
      _id
      name
      description
      date
      time
      location
    }
  }
`;

export const QUERY_EVENT = gql`
  query event($eventId: ID!) {
    event(eventId: $eventId) {
      _id
      name
      description
      date
      time
      location
      createdBy {
        _id
        firstName
        lastName
        email
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      firstName
      lastName
    }
  }
`;
