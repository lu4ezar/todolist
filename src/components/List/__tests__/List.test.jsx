// @flow
import React from "react";
// import { render } from "@testing-library/react";
// screen,
// waitForElementToBeRemoved,

// import { MockedProvider } from "@apollo/client/testing";
import { DragDropContext } from "react-beautiful-dnd";
// import List from "../List";
import List from "../../../containers/List";
import { initialValue as filter } from "../../../apollo/cache";
import { PriorityValues } from "../../../generated/graphql";
import {
  lowPriorTodo,
  normalPriorTodo,
  mocks as okMocks,
  // errorMock,
  emptyMock,
  undefinedMock,
  render,
  screen,
  waitForElementToBeRemoved,
} from "../../../utils/test-utils";

const initialProps = {
  // list: ,
  loading: true,
  // error,
  // provided,
  // snapshot,
  deleteTodo: jest.fn(),
  filter,
  handleClick: jest.fn(),
  onDragEnd: jest.fn(),
  setMode: jest.fn(),
  showMessage: jest.fn(),
  showTodo: jest.fn(),
  toggleTodo: jest.fn(),
};

const renderList = (mocks = okMocks, props = initialProps) =>
  render(
    /* <MockedProvider
      mocks={okMocks}
      addTypename={false}
      defaultOptions={{
        watchQuery: { fetchPolicy: "no-cache" },
        query: { fetchPolicy: "no-cache" },
      }}
    > */
    <DragDropContext>
      {/* <DnDWrapper> */}
      <List {...props} />,{/* </DnDWrapper> */}
    </DragDropContext> /* </MockedProvider>, */,
    { mocks }
  );

xdescribe("List", () => {
  it("renders in loading state initially", () => {
    const { container } = renderList();
    /* <DragDropContext>
        <List />
      </DragDropContext> */
    expect(container).toMatchSnapshot();
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("renders list of todos after loading", async () => {
    const { container } = renderList();
    await waitForElementToBeRemoved(screen.getByRole("progressbar"));
    expect(container).toMatchSnapshot();
    expect(screen.getByText(lowPriorTodo.title)).toBeInTheDocument();
    expect(screen.getByText(normalPriorTodo.title)).toBeInTheDocument();
  });

  it("filters list if filter is enabled", async () => {
    const enabledFilterLowPriority = {
      ...filter,
      master: {
        completed: true,
      },
      priority: {
        value: [PriorityValues.Low],
      },
    };
    const enabledFilterProps = {
      ...initialProps,
      filter: enabledFilterLowPriority,
    };
    renderList(undefined, enabledFilterProps);
    await waitForElementToBeRemoved(screen.getByRole("progressbar"));
    expect(screen.getByText(lowPriorTodo.title)).toBeInTheDocument();
    expect(screen.queryByText(normalPriorTodo.title)).not.toBeInTheDocument();
  });

  it("shows 'nothing to show' message when todos array is empty", async () => {
    const enabledFilterHighPriority = {
      ...filter,
      master: {
        completed: true,
      },
      priority: {
        value: [PriorityValues.High],
      },
    };
    const enabledFilterProps = {
      ...initialProps,
      filter: enabledFilterHighPriority,
    };
    const { container } = renderList(emptyMock, enabledFilterProps);
    await waitForElementToBeRemoved(screen.getByRole("progressbar"));
    expect(container).toMatchSnapshot();
    expect(screen.getByText(/nothing to show/i)).toBeInTheDocument();
  });

  it.only("shows error message", async () => {
    const { container } = renderList();
    await waitForElementToBeRemoved(screen.getByRole("progressbar"));
    expect(container).toMatchSnapshot();
    expect(screen.getByText(/error/i)).toBeInTheDocument();
  });

  xit("should render without error if 'todos' is undefined", async () => {
    renderList(undefinedMock);
    await waitForElementToBeRemoved(screen.getByRole("progressbar"));
  });

  xit("should render without error if 'data' is undefined", async () => {
    renderList(undefinedMock);
    await waitForElementToBeRemoved(screen.getByRole("progressbar"));
  });
});
