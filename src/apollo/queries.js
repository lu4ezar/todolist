import { gql } from "@apollo/client";

const GET_TODOS = gql`
  query GetTodos {
    todos {
      id
      title
      description
      priority
      status
      created
    }
  }
`;

export default GET_TODOS;
