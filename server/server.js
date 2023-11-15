const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
const { authMiddleware } = require('./utils/auth');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

const startApolloServer = async () => {
  await server.start();
  
  // Apply Apollo middleware first
  server.applyMiddleware({ app, path: '/graphql' });

// Serve the React app from the 'dist' directory
app.use(express.static(path.join(__dirname, '../client/dist')));

// Serve the app's HTML file at the root path
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});

  // Start the server after setting up middleware
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
  });

  // Ensure that the database connection is established
  db.once('open', () => {
    console.log('MongoDB database connection established successfully');
  });
};

startApolloServer();
