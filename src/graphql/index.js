import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://todo-server-self.vercel.app/graphql",
  cache: new InMemoryCache(),
});

export default client;
