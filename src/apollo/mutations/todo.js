// @flow
import { gql } from "@apollo/client";
import type { DocumentNode } from "graphql";
import { ChecklistFragments, TodoFragments } from "../fragments";

export const CREATE_TODO: DocumentNode = gql`
  mutation createTodo($input: CreateTodoInput!) {
    createTodo(input: $input) {
      ...ChecklistAllFields
    }
  }
  ${ChecklistFragments.allFields}
`;
export const UPDATE_TODO: DocumentNode = gql`
  mutation updateTodo($input: UpdateTodoInput!) {
    updateTodo(input: $input) {
      ...TodoAllFields
    }
  }
  ${TodoFragments.allFields}
`;
export const TOGGLE_TODO: DocumentNode = gql`
  mutation toggleTodo($id: ID!) {
    toggleTodo(id: $id) {
      id
      title
      completed
    }
  }
`;
export const DELETE_TODO: DocumentNode = gql`
  mutation deleteTodo($id: ID!) {
    deleteTodo(id: $id) {
      id
      title
    }
  }
`;
