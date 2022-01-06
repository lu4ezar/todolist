/* eslint-disable no-console */
import { ApolloClient, HttpLink, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import cache from "./cache";

const uri =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development"
    ? "http://localhost:4000/graphql"
    : "https://todo-gql-server.herokuapp.com/graphql";

const link = new HttpLink({
  uri,
  credentials: "include",
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${JSON.stringify(
          locations
        )}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const client = new ApolloClient({
  cache,
  link: from([errorLink, link]),
  connectToDevTools: true,
});

export default client;
