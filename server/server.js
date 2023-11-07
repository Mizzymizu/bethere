import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import path from 'path';
import connectDB from './config/connection';
import { typeDefs, resolvers } from './schemas';
import { authMiddleware } from './utils/auth';

//----------------------8<----------------------------

// This sets up the Express app 

const app = express();
const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const user = authMiddleware(req);
    return { user };
  },
  introspection: true,
});

//----------------------8<----------------------------

// This sets up Apollo Server

async function startApolloServer() {
  await server.start();
  server.applyMiddleware({ app, path: '/graphql' });
}

startApolloServer().then(async () => {
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  }
  connectDB.on('error', (error) => {
    console.error(`MongoDB connection error: ${error}`);
  });
  connectDB.once('open', () => {
    console.log('Connected to MongoDB');
  });


  // Middleware stuff for later
  

  app.listen(PORT, () => {
    console.log(`🌍 Server is listening on http://localhost:${PORT}`);
    console.log(`🚀 GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
