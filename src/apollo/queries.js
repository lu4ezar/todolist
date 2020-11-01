import { gql } from "@apollo/client";

export const GET_TODO = gql`
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

export const GET_TODOS = gql`
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
