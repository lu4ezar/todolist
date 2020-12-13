import { useApolloClient, useQuery, useMutation, gql } from "@apollo/client";
import {
  CREATE_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
} from "./mutations";
import { GET_TODO, GET_TODOS } from "./queries";

export const useCreateTodo = ({ title, description, completed, priority }) => {
  const [createTodo] = useMutation(CREATE_TODO, {
    variables: {
      input: {
        title,
        description,
        completed,
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

export const useUpdateTodo = ({
  id,
  title,
  description,
  completed,
  priority,
}) => {
  const [updateTodo] = useMutation(UPDATE_TODO, {
    variables: {
      input: {
        id,
        title,
        description,
        completed,
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

export const useToggle = (id) => {
  const client = useApolloClient();
  const todo = client.readFragment({
    id: `Todo:${id}`,
    fragment: gql`
      fragment Todo on Todo {
        completed
      }
    `,
  });
  const [updateTodo] = useMutation(TOGGLE_TODO, {
    variables: {
      id,
    },
    optimisticResponse: {
      __typename: "Mutation",
      toggleTodo: {
        id,
        __typename: "Todo",
        completed: !todo.completed,
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

export const useGetTodos = () => {
  const { data: { todos } = {}, loading, error } = useQuery(GET_TODO);
  return {
    todos,
    loading,
    error,
  };
};

export const useGetCompletedCount = () => {
  const client = useApolloClient();
  const todos = client.readQuery(GET_TODOS);
  return todos?.filter((todo) => !!todo.completed).length || 0;
};

export const useGetExpiredCount = () => {
  const client = useApolloClient();
  const todos = client.readQuery(GET_TODOS);
  return todos?.filter((todo) => todo.expires > Date.now()).length || 0;
};
