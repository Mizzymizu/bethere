import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import ErrorBoundary from './components/ErrorBoundary';

const client = new ApolloClient({
  link: createHttpLink,
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