// @flow
import { gql } from "@apollo/client";
import type { DocumentNode } from "graphql";

export const CREATE_USER: DocumentNode = gql`
  mutation createUser($input: CreateUserInput!) {
    createUser(input: $input) {
      token
    }
  }
`;

export const LOGIN_USER: DocumentNode = gql`
  mutation LoginUser($input: LoginUserInput!) {
    loginUser(input: $input) {
      token
    }
  }
`;

// export const UPDATE_USER: DocumentNode = gql`
//   mutation updateUser($input: UpdateUserInput!) {
//     updateUser(input: $input) {
//       ...UserAllFields
//     }
//   }
//   ${UserFragments.allFields}
// `;

// export const TOGGLE_USER: DocumentNode = gql`
//   mutation toggleUser($id: ID!) {
//     toggleUser(id: $id) {
//       id
//       title
//       completed
//     }
//   }
// `;

// export const DELETE_USER: DocumentNode = gql`
//   mutation deleteUser($id: ID!) {
//     deleteUser(id: $id) {
//       id
//       title
//     }
//   }
// `;
