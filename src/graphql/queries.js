import { gql } from "@apollo/client";

const GET_TODOS = gql`
  query GetTodos {
    todos {
      id
      title
    }
  }
`;

export default GET_TODOS;
