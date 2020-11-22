import { ApolloClient } from "@apollo/client";
import cache from "./cache";

const uri =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development"
    ? "http://127.0.0.1:4000/graphql"
    : "https://todo-gql-server.herokuapp.com/graphql";

const client = new ApolloClient({
  uri,
  cache,
  connectToDevTools: true,
});

export default client;
