const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('./config/database');
const typeDefinitions = require('./modules/graphqlSchema');
const resolvers = require('./modules/resolver');
const port = process.env.PORT || 3000;
const path = require('path');

const publicPath = path.join(__dirname, '..', 'dist');

const server = new ApolloServer({ typeDefs: typeDefinitions, resolvers });

const app = express();
app.use(express.static(publicPath));

server.applyMiddleware({ app });

app.get('*', (req, res) => {
  res.sendfile(path.join(publicPath, 'index.html'));
});

app.listen({ port }, () => {
  console.log(`Client running on http://localhost:${port}`);
  console.log(`Server running on http://localhost:${port}${server.graphqlPath}`);
});
