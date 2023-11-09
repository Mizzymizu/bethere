const express = require('express');
// const { ApolloServer } = require('apollo-server-express');
const path = require('path');
// const { typeDefs, resolvers } = require('./schemas');

const connectDB = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   context: ({ req }) => ({ req }),
// });

// async function startApolloServer() {
//   await server.start();
//   server.applyMiddleware({ app, path: '/graphql' });
// }

// startApolloServer().then(async () => {
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  }

  connectDB(); // Call the function directly

  // Catch-all route handler
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });

  app.listen(PORT, () => {
    console.log(`🌍 Server is listening on http://localhost:${PORT}`);
    // console.log(`🚀 GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
// });