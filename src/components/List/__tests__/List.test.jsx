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
import { initialState as filter } from "../../../redux/reducers/filter";
import { TodoPriorityValues } from "../../../generated/graphql";
import {
  lowPriorTodo,
  normalPriorTodo,
  mocks as okMocks,
  errorMock,
  emptyMock,
  undefinedMock,
} from "../../../utils/test-utils";

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

const renderComponent = (mocks = okMocks, props = initialProps) =>
  render(
    <MockedProvider
      mocks={mocks}
      addTypename={false}
      defaultOptions={{
        watchQuery: { fetchPolicy: "no-cache" },
        query: { fetchPolicy: "no-cache" },
      }}
    >
      <List {...props} />
    </MockedProvider>
  );

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
    expect(screen.getByText(lowPriorTodo.title)).toBeInTheDocument();
    expect(screen.getByText(normalPriorTodo.title)).toBeInTheDocument();
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
    renderComponent(undefined, enabledFilterProps);
    await waitForElementToBeRemoved(screen.getByRole("progressbar"));
    expect(screen.getByText(lowPriorTodo.title)).toBeInTheDocument();
    expect(screen.queryByText(normalPriorTodo.title)).not.toBeInTheDocument();
  });

  it("shows 'nothing to show' message when todos array is empty", async () => {
    const enabledFilterHighPriority = {
      ...filter,
      master: {
        status: true,
      },
      priority: {
        status: true,
        value: [TodoPriorityValues.High],
      },
    };
    const enabledFilterProps = {
      ...initialProps,
      filter: enabledFilterHighPriority,
    };
    const { container } = renderComponent(emptyMock, enabledFilterProps);
    await waitForElementToBeRemoved(screen.getByRole("progressbar"));
    expect(container).toMatchSnapshot();
    expect(screen.getByText(/nothing to show/i)).toBeInTheDocument();
  });

  it("shows error message", async () => {
    const { container } = renderComponent(errorMock);
    await waitForElementToBeRemoved(screen.getByRole("progressbar"));
    expect(container).toMatchSnapshot();
    expect(screen.getByText(/error/i)).toBeInTheDocument();
  });

  it("should render without error if 'todos' is undefined", async () => {
    renderComponent(undefinedMock);
    await waitForElementToBeRemoved(screen.getByRole("progressbar"));
  });

  it("should render without error if 'data' is undefined", async () => {
    renderComponent(undefinedMock);
    await waitForElementToBeRemoved(screen.getByRole("progressbar"));
  });
});
