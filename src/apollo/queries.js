import { gql } from "@apollo/client";
import type { DocumentNode } from "graphql";
import FRAGMENT_TODO_ALL_FIELDS from "./fragments";

export const GET_TODO: DocumentNode = gql`
  query GetTodo($id: ID!) {
    todo(id: $id) {
      ...TodoAllFields
    }
  }
  ${FRAGMENT_TODO_ALL_FIELDS}
`;

export const GET_TODOS: DocumentNode = gql`
  query GetTodos {
    todos {
      ...TodoAllFields
    }
  }
  ${FRAGMENT_TODO_ALL_FIELDS}
`;
