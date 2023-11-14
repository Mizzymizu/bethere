import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { ApolloLink } from 'apollo-link';
import ErrorBoundary from './components/ErrorBoundary';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: ApolloLink.from([httpLink]),
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