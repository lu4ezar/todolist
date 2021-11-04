import { gql } from "@apollo/client";
import type { DocumentNode } from "graphql";
import { TodoFragments, ChecklistFragments } from "./fragments";

export const GET_CHECKLISTS: DocumentNode = gql`
  query GetChecklists {
    checklists {
      ...ChecklistAllFields
    }
  }
  ${ChecklistFragments.allFields}
`;

export const GET_CHECKLIST: DocumentNode = gql`
  query GetChecklist($id: ID!) {
    checklist(id: $id) {
      ...ChecklistAllFields
    }
  }
  ${ChecklistFragments.allFields}
`;

export const GET_TODO: DocumentNode = gql`
  query GetTodo($id: ID!) {
    todo(id: $id) {
      ...TodoAllFields
    }
  }
  ${TodoFragments.allFields}
`;

export const GET_TODOS: DocumentNode = gql`
  query GetTodos {
    todos {
      ...TodoAllFields
    }
  }
  ${TodoFragments.allFields}
`;

export const GET_ALL: DocumentNode = gql`
  query getAll {
    todos {
      ...TodoAllFields
    }
    checklists {
      ...ChecklistAllFields
    }
  }
  ${TodoFragments.allFields}
  ${ChecklistFragments.allFields}
`;
