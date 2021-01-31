import { ApolloClient, createHttpLink } from "@apollo/client";
import cache from "./cache";

const uri =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development"
    ? "http://localhost:4000/graphql"
    : "https://todo-gql-server.herokuapp.com/graphql";

const link = createHttpLink({
  uri,
  credentials: "include",
});

const client = new ApolloClient({
  cache,
  link,
  connectToDevTools: true,
});

export default client;
