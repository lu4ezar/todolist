// @flow
import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import List from "../../../containers/List";
import {
  lowPriorTodo,
  normalPriorTodo,
  mocks as okMocks,
  // errorMock,
  // emptyMock,
  undefinedMock,
  render,
  screen,
  waitForElementToBeRemoved,
} from "../../../utils/test-utils";

const renderList = (mocks = okMocks, props = {}) =>
  render(
    <DragDropContext onDragEnd={jest.fn()}>
      <List {...props} />,
    </DragDropContext>,
    { mocks }
  );

xdescribe("List", () => {
  it("renders in loading state initially", () => {
    const { container } = renderList();
    expect(container).toMatchSnapshot();
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("renders list of todos after loading", async () => {
    const { container } = renderList();
    await waitForElementToBeRemoved(screen.queryByRole("progressbar"));
    expect(container).toMatchSnapshot();
    expect(screen.getByText(lowPriorTodo.title)).toBeInTheDocument();
    expect(screen.getByText(normalPriorTodo.title)).toBeInTheDocument();
  });

  // it("filters list if filter is enabled", async () => {
  //   const enabledFilterLowPriority = {
  //     ...filter,
  //     master: {
  //       completed: true,
  //     },
  //     priority: {
  //       value: [PriorityValues.Low],
  //     },
  //   };
  //   const enabledFilterProps = {
  //     ...initialProps,
  //     filter: enabledFilterLowPriority,
  //   };
  //   renderList(undefined, enabledFilterProps);
  //   await waitForElementToBeRemoved(screen.queryByRole("progressbar"));
  //   expect(screen.getByText(lowPriorTodo.title)).toBeInTheDocument();
  //   expect(screen.queryByText(normalPriorTodo.title)).not.toBeInTheDocument();
  // });

  // it("shows 'nothing to show' message when todos array is empty", async () => {
  //   const enabledFilterHighPriority = {
  //     ...filter,
  //     master: {
  //       completed: true,
  //     },
  //     priority: {
  //       value: [PriorityValues.High],
  //     },
  //   };
  //   const enabledFilterProps = {
  //     ...initialProps,
  //     filter: enabledFilterHighPriority,
  //   };
  //   const { container } = renderList(emptyMock, enabledFilterProps);
  //   await waitForElementToBeRemoved(screen.queryByRole("progressbar"));
  //   expect(container).toMatchSnapshot();
  //   expect(screen.getByText(/nothing to show/i)).toBeInTheDocument();
  // });

  it.only("shows error message", async () => {
    const { container } = renderList();
    await waitForElementToBeRemoved(screen.queryByRole("progressbar"));
    expect(container).toMatchSnapshot();
    expect(screen.getByText(/error/i)).toBeInTheDocument();
  });

  // xit("should render without error if 'todos' is undefined", async () => {
  //   renderList(undefinedMock);
  //   await waitForElementToBeRemoved(screen.queryByRole("progressbar"));
  // });

  xit("should render without error if 'data' is undefined", async () => {
    renderList(undefinedMock);
    await waitForElementToBeRemoved(screen.queryByRole("progressbar"));
  });
});
