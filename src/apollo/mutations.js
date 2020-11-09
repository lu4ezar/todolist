// @flow
import { gql } from "@apollo/client";
import type { DocumentNode } from "graphql";

export const CREATE_TODO: DocumentNode = gql`
  mutation createTodo($input: CreateTodoInput!) {
    createTodo(input: $input) {
      id
      title
      description
      status
      priority
      created
    }
  }
`;
export const UPDATE_TODO: DocumentNode = gql`
  mutation updateTodo($id: ID!, $input: UpdateTodoInput!) {
    updateTodo(id: $id, input: $input) {
      title
    }
  }
`;
export const DELETE_TODO: DocumentNode = gql`
  mutation deleteTodo($id: ID!) {
    deleteTodo(id: $id) {
      title
    }
  }
`;
