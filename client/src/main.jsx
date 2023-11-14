import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache, createHttpLink, ApolloLink } from '@apollo/client';
import { onError } from '@apollo/client/link/error';  // Import onError from @apollo/client/link/error
import ErrorBoundary from './components/ErrorBoundary';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.error(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
    });
  }
  if (networkError) console.error(`[Network error]: ${networkError}`);
});

const authLink = new ApolloLink((operation, forward) => {
  // Retrieve the token from wherever you store it (e.g., localStorage)
  const token = localStorage.getItem('token');

  // Add the token to the headers
  operation.setContext(({ headers }) => ({
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }));

  return forward(operation);
});

const client = new ApolloClient({
  link: ApolloLink.from([errorLink, authLink, httpLink]),  // Combine the links
  cache: new InMemoryCache(),
});

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <ErrorBoundary>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </ErrorBoundary>
  </React.StrictMode>
);

export default client;