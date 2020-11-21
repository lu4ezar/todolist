import { ApolloClient} from "@apollo/client";
import cache from "./cache.js";

const client = new ApolloClient({
  uri: "https://todo-gql-server.herokuapp.com/graphql",
  cache,
  connectToDevTools: true,
});

export default client;
