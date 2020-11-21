/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MockedProvider } from "@apollo/client/testing";
import ButtonPanel from "../ButtonPanel";
import { mocks } from "../../../utils/test-utils";

const props = {
  todo: {
    id: 0,
    status: "",
  },
  showTodo: jest.fn(),
  edit: jest.fn(),
  toggle: jest.fn(),
};

const renderComponent = () =>
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <ButtonPanel {...props} />
    </MockedProvider>
  );

describe("Button Panel", () => {
  it("renders as expected", () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });
  it("calls showTodo prop function", () => {
    renderComponent();
    userEvent.click(screen.getByTitle(/view/i));
    expect(props.showTodo).toBeCalledWith(props.todo.id, "view");
  });

  it("calls editTodo prop function", () => {
    renderComponent();
    userEvent.click(screen.getByTitle(/edit/i));
    expect(props.showTodo).toBeCalledWith(props.todo.id, "edit");
  });

  it("calls toggleTodo prop function", () => {
    renderComponent();
    userEvent.click(screen.getByTitle(/completed/i));
    expect(props.toggle).toBeCalled();
  });

  xit("calls deleteTodo function", () => {
    renderComponent();
    const deleteTodo = jest.fn();
    userEvent.click(screen.getByTitle(/delete/i));
    expect(deleteTodo).toBeCalled();
  });
});
