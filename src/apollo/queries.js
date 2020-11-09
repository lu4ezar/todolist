import { gql } from "@apollo/client";
import type { DocumentNode } from "graphql";

export const GET_TODO: DocumentNode = gql`
  query GetTodo($id: ID!) {
    todo(id: $id) {
      id
      title
      description
      priority
      status
      created
    }
  }
`;

export const GET_TODOS: DocumentNode = gql`
  query GetTodos {
    todos {
      id
      title
      description
      priority
      status
      created
    }
  }
`;
