import { useApolloClient, useQuery, useMutation } from "@apollo/client";
import { currentEntityIdVar } from "../cache";
import { TodoFragments } from "../fragments";
import {
  CREATE_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
} from "../mutations/todo";
import {
  GET_ALL,
  GET_TODO,
  GET_TODOS,
  GET_CHECKLIST,
  GET_CHECKLISTS,
} from "../queries";

export const useCreateTodo = ({ title, description, completed, priority }) => {
  const checklist = currentEntityIdVar();
  const [createTodo] = useMutation(CREATE_TODO, {
    variables: {
      input: {
        checklist,
        title,
        description,
        completed,
        priority,
      },
    },
    update(cache, { data: { createTodo: newTodo } }) {
      console.log("checklist: ", checklist);
      // const cachedQuery = cache.readQuery({
      //   query: GET_CHECKLIST,
      //   variables: { id: checklist },
      // });
      console.log(newTodo);
      console.log(
        cache.readQuery({
          query: GET_CHECKLIST,
          variables: { id: checklist },
        })
      );
      // const { todos: cachedTodos } = cachedQuery;
      // const todos = [...cachedTodos, newTodo];
      // cache.writeQuery({
      //   query: GET_CHECKLIST,
      //   data: {
      //     todos,
      //   },
      // });
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
        query: GET_CHECKLISTS,
      });
      const { checklists: cachedChecklists } = cachedQuery;
      const checklists = cachedChecklists.filter(
        ({ id: _id }) => _id !== removedTodoId
      );
      cache.writeQuery({
        query: GET_CHECKLISTS,
        data: {
          checklists,
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
    fragment: TodoFragments.completed,
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
        completed: todo ? !todo.completed : false,
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

export const useGetCompletedCount = () => {
  const client = useApolloClient();
  const queryResult = client.readQuery({ query: GET_ALL });
  if (!queryResult) {
    return 0;
  }
  let sum = 0;
  Object.keys(queryResult).forEach((entity) => {
    queryResult[entity].forEach((item) => {
      if (item.completed) {
        sum += 1;
      }
    });
  });
  return sum;
};

export const useGetExpiredCount = () => {
  const client = useApolloClient();
  const queryResult = client.readQuery({ query: GET_ALL });
  if (!queryResult) {
    return 0;
  }
  let sum = 0;
  Object.keys(queryResult).forEach((entity) => {
    queryResult[entity].forEach((item) => {
      if (item.expires > Date.now()) {
        sum += 1;
      }
    });
  });
  return sum;
};
