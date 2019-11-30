const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('./config/database');
const typeDefinitions = require('./modules/graphqlSchema');
const resolvers = require('./modules/resolver');

const server = new ApolloServer({ typeDefinitions, resolvers });

const app = express();

server.applyMiddleware({ app });

app.listen({ port: 3000 }, () => {
  console.log(`Server running on http://localhost:${port}${server.graphqlPath}`);
});
