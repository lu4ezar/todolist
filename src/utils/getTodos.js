// @flow
import { useQuery } from "@apollo/client";
import GET_TODOS from "../graphql/queries";
import type { Todos } from "../generated/graphql";

const useGetTodos = () => {
  const { loading, error, todos } = useQuery<Todos>(GET_TODOS);
  return {
    loading,
    error,
    todos,
  };
};

export default useGetTodos;
