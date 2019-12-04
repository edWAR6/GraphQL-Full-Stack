import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  url: 'http://localhost:3000/graphql'
});

export default client;
