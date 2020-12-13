// @flow
import { gql } from "@apollo/client";
import type { DocumentNode } from "graphql";

const FRAGMENT_TODO_ALL_FIELDS: DocumentNode = gql`
  fragment TodoAllFields on Todo {
    id
    title
    description
    completed
    priority
    created
  }
`;

export default FRAGMENT_TODO_ALL_FIELDS;
