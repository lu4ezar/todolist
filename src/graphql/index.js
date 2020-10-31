import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://todo-gql-server.herokuapp.com/graphql",
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

export default client;
