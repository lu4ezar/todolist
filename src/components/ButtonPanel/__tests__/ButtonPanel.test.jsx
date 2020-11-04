/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ButtonPanel from "../ButtonPanel";

const props = {
  todo: {
    id: 0,
    status: "",
  },
  showTodo: jest.fn(),
  edit: jest.fn(),
  toggle: jest.fn(),
  deleteTodo: jest.fn(),
};

describe("Button Panel", () => {
  it("renders as expected", () => {
    const { container } = render(<ButtonPanel {...props} />);
    expect(container).toMatchSnapshot();
  });
  it("calls showTodo prop function", () => {
    const container = render(<ButtonPanel {...props} />);
    const viewButton = container.getByTitle(/view/i);
    fireEvent.click(viewButton);
    expect(props.showTodo).toBeCalledWith(props.todo.id, "view");
  });

  it("calls editTodo prop function", () => {
    const container = render(<ButtonPanel {...props} />);
    const editButton = container.getByTitle(/edit/i);
    fireEvent.click(editButton);
    expect(props.showTodo).toBeCalledWith(props.todo.id, "edit");
  });

  it("calls toggleTodo prop function", () => {
    const container = render(<ButtonPanel {...props} />);
    const toggleButton = container.getByTitle(/completed/i);
    fireEvent.click(toggleButton);
    expect(props.toggle).toBeCalled();
  });

  it("calls deleteTodo prop function", () => {
    const container = render(<ButtonPanel {...props} />);
    const deleteButton = container.getByTitle(/delete/i);
    fireEvent.click(deleteButton);
    expect(props.deleteTodo).toBeCalled();
  });
});
