import { useApolloClient, useQuery, useMutation } from "@apollo/client";
import { CREATE_TODO, UPDATE_TODO, DELETE_TODO } from "./mutations";
import { GET_TODO, GET_TODOS } from "./queries";
// import { TodoStatusValues } from "../generated/graphql";

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
      const todos = [...cachedTodos, newTodo];
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
    update(
      cache,
      {
        data: {
          deleteTodo: { id: removedTodoId },
        },
      }
    ) {
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
  const { data: { todo } = {}, loading, error } = useQuery(GET_TODO, {
    variables: {
      id,
    },
    skip: !id,
  });
  return {
    todo,
    loading,
    error,
  };
};

export const useToggle = (id, status) => {
  // const client = useApolloClient();
  /* const { todo } = useQuery(GET_TODO,{
    variables: {
      id
    }
  }); */
  // const { todo = {} } = useGetTodo(id);
  // alert(todo);
  /* const newStatus =
    todo?.status === TodoStatusValues.COMPLETED
      ? TodoStatusValues.ACTIVE
      : TodoStatusValues.COMPLETED;
  */
  const [updateTodo] = useMutation(UPDATE_TODO, {
    variables: {
      id,
      input: {
        status,
      },
    },
  });
  return { toggleTodo: updateTodo };
};

export const useReorder = () => {
  const client = useApolloClient();
  function onDragEnd(result: DropResult): void {
    const { source, destination } = result;
    const { todos } = client.readQuery({ query: GET_TODOS });
    if (!destination) {
      return todos;
    }
    if (source.index === destination.index) {
      return todos;
    }
    const arr = [...todos];
    const [removed] = arr.splice(source.index, 1);
    arr.splice(destination.index, 0, removed);
    client.writeQuery({
      query: GET_TODOS,
      data: {
        todos: arr,
      },
    });
    return arr;
  }
  return onDragEnd;
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