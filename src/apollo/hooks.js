import { useQuery, useMutation } from "@apollo/client";
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
      const todos = cachedTodos.filter(({ id: _id }) => _id !== removedTodoId);
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
  const { data, loading, error } = useQuery(
    GET_TODO,
    {
      variables: {
        id,
      },
      skip: !id,
      notifyOnNetworkStatusChange: true,
    }
  );
  const { todo = {} } = data;
  return {
    todo,
    loading,
    error,
  };
};

/* export const useGetTodos = () => {
  const { data: { todo } = {}, loading, networkStatus } = useQuery(GET_TODO, {
    skip: !id,
    variables: {
      id,
    },
    notifyOnNetworkStatusChange: true,
  });
  return {
    data,
    loading: loading || networkStatus = 
}
*/
