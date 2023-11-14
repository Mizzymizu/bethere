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
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  server.applyMiddleware({ app, path: '/graphql' });

  db.once('open', () => {
    // Serve the React app from the 'build' directory
    app.use(express.static(path.join(__dirname, 'build')));

    // Serve the app's HTML file at the root path
    app.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });

    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });
};

startApolloServer();
