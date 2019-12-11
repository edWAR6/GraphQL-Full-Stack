import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://apollo-app-b360.herokuapp.com/graphql'
});

export default client;
