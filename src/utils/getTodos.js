// @flow
import { useQuery } from "@apollo/client";
import { GET_TODOS } from "../apollo/queries";
import type { Todos } from "../types/todos";

const useGetTodosQuery = (): {
  loading: boolean,
  error: Error,
  todos: Todos,
} => {
  const { loading, error, todos } = useQuery<Todos>(GET_TODOS);
  return {
    loading,
    error,
    todos,
  };
};

export default useGetTodosQuery;