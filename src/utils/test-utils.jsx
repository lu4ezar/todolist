import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { GraphQLError } from "graphql";
import { GET_TODOS, GET_TODO, GET_ALL } from "../apollo/queries";
import { PriorityValues } from "../generated/graphql";
import type { Todo } from "../generated/graphql";
// import { TOGGLE_TODO } from "../apollo/mutations/todo";

export const lowPriorTodo: Todo = {
  __typename: "Todo",
  id: "1",
  title: "hope",
  description: "wisdom",
  completed: false,
  priority: PriorityValues.Low,
  created: "yesterday",
};

export const normalPriorTodo: Todo = {
  __typename: "Todo",
  id: "2",
  title: "bliss",
  description: "glory",
  completed: false,
  priority: PriorityValues.Normal,
  created: "yesterday",
};

export const normalPriorChecklist: Checklist = {
  __typename: "Checklist",
  id: "3",
  title: "blister",
  description: "inglorious",
  completed: false,
  priority: PriorityValues.Normal,
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
  // {
  //   request: {
  //     query: GET_CHECKLISTS,
  //   },
  //   result: {
  //     data: {
  //       checklists: [normalPriorChecklist],
  //     },
  //   },
  // },
  {
    request: {
      query: GET_ALL,
    },
    result: {
      data: {
        todos: [lowPriorTodo, normalPriorTodo],
        checklists: [normalPriorChecklist],
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
  {
    request: {
      query: GET_ALL,
    },
    error: new GraphQLError("Error!"),
  },
  // {
  //   request: {
  //     mutation: TOGGLE_TODO,
  //     variables: {
  //       id: normalPriorTodo.id,
  //     },
  //   },
  //   result: {
  //     data: {
  //       todo: normalPriorTodo,
  //     },
  //   },
  // },
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

function render(ui, { initialState, ...renderOptions } = {}) {
  function Wrapper({ children }: { children: React.Node }) {
    return (
      <MockedProvider
        mocks={mocks}
        addTypename={false}
        defaultOptions={{
          watchQuery: { fetchPolicy: "no-cache" },
          query: { fetchPolicy: "no-cache" },
        }}
      >
        {children}
      </MockedProvider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };
