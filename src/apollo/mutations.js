// @flow
import { gql } from "@apollo/client";
import type { DocumentNode } from "graphql";
import FRAGMENT_TODO_ALL_FIELDS from "./fragments";

export const CREATE_TODO: DocumentNode = gql`
  mutation createTodo($input: CreateTodoInput!) {
    createTodo(input: $input) {
      ...TodoAllFields
    }
  }
  ${FRAGMENT_TODO_ALL_FIELDS}
`;
export const UPDATE_TODO: DocumentNode = gql`
  mutation updateTodo($id: ID!, $input: UpdateTodoInput!) {
    updateTodo(id: $id, input: $input) {
      ...TodoAllFields
    }
  }
  ${FRAGMENT_TODO_ALL_FIELDS}
`;

// export const TOGGLE_TODO: DocumentNode = gql`
//   mutation updateTodo($id: ID!, $input: UpdateTodoInput!) {
//     updateTodo(id: $id, input: $input) {
//       id
//       title
//       description
//       status
//       priority
//       created
//     }
//   }
// `;

export const DELETE_TODO: DocumentNode = gql`
  mutation deleteTodo($id: ID!) {
    deleteTodo(id: $id) {
      id
      title
    }
  }
`;
