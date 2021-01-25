// @flow
import { gql } from "@apollo/client";
import type { DocumentNode } from "graphql";

type FragmentsType = {|
  [FragmentName: string]: DocumentNode,
|};

export const TodoFragments: FragmentsType = {
  allFields: gql`
    fragment TodoAllFields on Todo {
      id
      title
      description
      completed
      priority
      created
      __typename
    }
  `,
  completed: gql`
    fragment TodoCompleted on Todo {
      completed
    }
  `,
};

export const ChecklistFragments: FragmentsType = {
  allFields: gql`
    fragment ChecklistAllFields on Checklist {
      id
      title
      description
      owner
      completed
      priority
      created
      __typename
      todos {
        ...TodoAllFields
      }
    }
    ${TodoFragments.allFields}
  `,
  completed: gql`
    fragment ChecklistCompleted on Checklist {
      completed
    }
  `,
};
