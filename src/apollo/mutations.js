// @flow
import { gql } from "@apollo/client";
import type { OperationComponent } from "@apollo/client";

export const CREATE_TODO: OperationComponent<Response> = gql`
  mutation createTodo($input: CreateTodoInput!) {
    createTodo(input: $input) {
      id
      title
    }
  }
`;
export const UPDATE_TODO: OperationComponent<Response> = gql`
  mutation updateTodo($id: ID!, $input: UpdateTodoInput!) {
    updateTodo(id: $id, input: $input) {
      title
    }
  }
`;
export const DELETE_TODO: OperationComponent<Response> = gql`
  mutation deleteTodo($id: ID!) {
    deleteTodo(id: $id) {
      title
    }
  }
`;
