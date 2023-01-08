// @flow
import { gql } from "@apollo/client";
import type { DocumentNode } from "graphql";
import { ChecklistFragments } from "../fragments";

export const CREATE_CHECKLIST: DocumentNode = gql`
  mutation createChecklist($input: CreateChecklistInput!) {
    createChecklist(input: $input) {
      ...ChecklistAllFields
    }
  }
  ${ChecklistFragments.allFields}
`;
export const UPDATE_CHECKLIST: DocumentNode = gql`
  mutation updateChecklist($input: UpdateChecklistInput!) {
    updateChecklist(input: $input) {
      ...ChecklistAllFields
    }
  }
  ${ChecklistFragments.allFields}
`;
export const TOGGLE_CHECKLIST: DocumentNode = gql`
  mutation toggleChecklist($id: ID!) {
    toggleChecklist(id: $id) {
      id
      title
      completed
    }
  }
`;
export const DELETE_CHECKLIST: DocumentNode = gql`
  mutation deleteChecklist($id: ID!) {
    deleteChecklist(id: $id) {
      id
      title
    }
  }
`;
