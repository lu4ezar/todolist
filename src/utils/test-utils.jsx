import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { GraphQLError } from "graphql";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { GET_TODOS, GET_TODO } from "../apollo/queries";
import { TodoStatusValues, TodoPriorityValues } from "../generated/graphql";
import type { Todo } from "../generated/graphql";
import reducer from "../redux/reducers";

export const lowPriorTodo: Todo = {
  id: "1",
  title: "hope",
  description: "wisdom",
  status: TodoStatusValues.Active,
  priority: TodoPriorityValues.Low,
  created: "yesterday",
};

export const normalPriorTodo: Todo = {
  id: "2",
  title: "bliss",
  description: "glory",
  status: TodoStatusValues.Active,
  priority: TodoPriorityValues.Normal,
  created: "yesterday",
};

export const mocks = [
  {
    request: {
      query: GET_TODOS,
    },
    result: {
      data: {
        todos: [lowPriorTodo, normalPriorTodo],
      },
    },
  },
  {
    request: {
      query: GET_TODO,
      variables: {
        id: "1",
      },
    },
    result: {
      data: {
        todo: normalPriorTodo,
      },
    },
  },
  {
    request: {
      query: GET_TODO,
      variables: {
        id: null,
      },
    },
    result: {
      data: {
        todo: null,
      },
    },
  },
];

export const emptyMock = [
  {
    request: {
      query: GET_TODOS,
    },
    result: {
      data: {
        todos: [],
      },
    },
  },
];

export const errorMock = [
  {
    request: {
      query: GET_TODOS,
    },
    error: new GraphQLError("Error!"),
  },
];

export const undefinedMock = [
  {
    request: {
      query: GET_TODOS,
    },
    result: { data: undefined },
  },
];

function render(
  ui,
  {
    initialState,
    store = createStore(reducer, initialState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }: { children: React.Node }) {
    return (
      <MockedProvider mocks={mocks} addTypename={false}>
        <Provider store={store}>{children}</Provider>
      </MockedProvider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };
