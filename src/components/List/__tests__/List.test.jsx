/* eslint-disable react/jsx-props-no-spreading */
// @flow
import React from "react";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import List from "../List";
import { GET_TODOS } from "../../../apollo/queries";
import { initialState as filter } from "../../../redux/reducers/filter";
import {
  TodoStatusValues,
  TodoPriorityValues,
} from "../../../generated/graphql";
import type { Todo } from "../../../generated/graphql";

const todo1: Todo = {
  id: "1",
  title: "hope",
  description: "wisdom",
  status: TodoStatusValues.Active,
  priority: TodoPriorityValues.Normal,
  created: "yesterday",
};
const todo2 = {
  id: "2",
  title: "bliss",
  description: "glory",
  status: TodoStatusValues.Active,
  priority: TodoPriorityValues.Normal,
  created: "yesterday",
};

const initialProps = {
  deleteTodo: jest.fn(),
  filter,
  handleClick: jest.fn(),
  onDragEnd: jest.fn(),
  setMode: jest.fn(),
  showMessage: jest.fn(),
  showTodo: jest.fn(),
  toggleTodo: jest.fn(),
};

export const initialMock = {
  request: {
    query: GET_TODOS,
    variables: {},
  },
  result: {
    data: {
      todos: [todo1, todo2],
    },
  },
};

const renderComponent = (mocks = initialMock, props = initialProps) => {
  return render(
    <MockedProvider mocks={[mocks]} addTypename={false}>
      <List {...props} />
    </MockedProvider>
  );
};

describe("List", () => {
  it("renders in loading state initially", () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("renders list of todos after loading", async () => {
    const { container } = renderComponent();
    await waitForElementToBeRemoved(screen.getByRole("progressbar"));
    expect(container).toMatchSnapshot();
    expect(screen.getByText(todo1.title)).toBeInTheDocument();
    expect(screen.getByText(todo2.title)).toBeInTheDocument();
  });

  it("filters list if filter is enabled", async () => {
    const enabledFilterLowPriority = {
      ...filter,
      master: {
        status: true,
      },
      priority: {
        status: true,
        value: [TodoPriorityValues.Low],
      },
    };
    const enabledFilterProps = {
      ...initialProps,
      filter: enabledFilterLowPriority,
    };
    const lowPriorityTodo = {
      ...todo1,
      priority: TodoPriorityValues.Low,
    };
    const normalPriorityTodo = todo2;
    const mock = {
      ...initialMock,
      result: {
        data: {
          todos: [lowPriorityTodo, normalPriorityTodo],
        },
      },
    };

    renderComponent(mock, enabledFilterProps);
    await waitForElementToBeRemoved(screen.getByRole("progressbar"));
    expect(screen.getByText(lowPriorityTodo.title)).toBeInTheDocument();
    expect(
      screen.queryByText(normalPriorityTodo.title)
    ).not.toBeInTheDocument();
  });

  it("shows 'nothing to show' message when todos array is empty", async () => {
    const emptyArrayMock = {
      ...initialMock,
      result: {
        data: {
          todos: [],
        },
      },
    };
    const { container } = renderComponent(emptyArrayMock);
    await waitForElementToBeRemoved(screen.getByRole("progressbar"));
    expect(container).toMatchSnapshot();
    expect(screen.getByText(/nothing to show/i)).toBeInTheDocument();
  });

  it("shows error message", async () => {
    const errorMock = {
      ...initialMock,
      data: null,
      error: new Error("network error"),
    };
    const { container } = renderComponent(errorMock);
    await waitForElementToBeRemoved(screen.getByRole("progressbar"));
    expect(container).toMatchSnapshot();
    expect(screen.getByText(/error/i)).toBeInTheDocument();
  });

  it("should render without error if 'todos' is undefined", async () => {
    const undefinedTodosMock = {
      ...initialMock,
      result: {
        data: {
          todos: undefined,
        },
      },
    };
    renderComponent(undefinedTodosMock);
    await waitForElementToBeRemoved(screen.getByRole("progressbar"));
  });

  it("should render without error if 'data' is undefined", async () => {
    const undefinedDataMock = {
      ...initialMock,
      result: {
        data: undefined,
      },
    };
    renderComponent(undefinedDataMock);
    await waitForElementToBeRemoved(screen.getByRole("progressbar"));
  });
});
