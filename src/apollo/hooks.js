import { useQuery, useMutation, NetworkStatus } from "@apollo/client";
import { CREATE_TODO, UPDATE_TODO, DELETE_TODO } from "./mutations";
import { GET_TODO, GET_TODOS } from "./queries";

export const useCreateTodo = ({ title, description, status, priority }) => {
  const [createTodo] = useMutation(CREATE_TODO, {
    variables: {
      input: {
        title,
        description,
        status,
        priority,
      },
    },
    update(cache, { data: { createTodo: newTodo } }) {
      const cachedQuery = cache.readQuery({
        query: GET_TODOS,
      });
      const { todos: cachedTodos } = cachedQuery;
      const todos = [newTodo, ...cachedTodos];
      cache.writeQuery({
        query: GET_TODOS,
        data: {
          todos,
        },
      });
    },
  });
  return { createTodo };
};

export const useUpdateTodo = ({ id, title, description, status, priority }) => {
  const [updateTodo] = useMutation(UPDATE_TODO, {
    variables: {
      input: {
        id,
        title,
        description,
        status,
        priority,
      },
    },
  });
  return { updateTodo };
};

export const useDeleteTodo = (id) => {
  const [deleteTodo] = useMutation(DELETE_TODO, {
    variables: {
      id,
    },
    update(cache, { data: { id: removedTodoId } }) {
      const cachedQuery = cache.readQuery({
        query: GET_TODOS,
      });
      const { todos: cachedTodos } = cachedQuery;
      const todos = cachedTodos.filter(({ _id }) => _id !== removedTodoId);
      cache.writeQuery({
        query: GET_TODOS,
        data: {
          todos,
        },
      });
    },
  });
  return { deleteTodo };
};

export const useGetTodo = (id) => {
  const [getTodo, { loading, error, refetch, networkStatus }] = useQuery(
    GET_TODO,
    {
      variables: {
        id,
      },
      skip: !id,
      notifyOnNetworkStatusChange: true,
    }
  );
  return {
    getTodo,
    loading: loading || networkStatus === NetworkStatus.refetch,
    error,
    refetch,
  };
};
