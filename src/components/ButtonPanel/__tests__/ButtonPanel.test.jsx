/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ButtonPanel from "../ButtonPanel";
import { TodoStatusValues } from "../../../generated/graphql";

const props = {
  todo: {
    id: 0,
    status: TodoStatusValues.Active,
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
    render(<ButtonPanel {...props} />);
    userEvent.click(screen.getByTitle(/view/i));
    expect(props.showTodo).toBeCalledWith(props.todo.id, "view");
  });

  it("calls editTodo prop function", () => {
    render(<ButtonPanel {...props} />);
    userEvent.click(screen.getByTitle(/edit/i));
    expect(props.showTodo).toBeCalledWith(props.todo.id, "edit");
  });

  it("calls toggleTodo prop function", () => {
    render(<ButtonPanel {...props} />);
    userEvent.click(screen.getByTitle(/mark as completed/i));
    expect(props.toggle).toBeCalled();
  });

  it("calls deleteTodo prop function", () => {
    render(<ButtonPanel {...props} />);
    userEvent.click(screen.getByTitle(/delete/i));
    expect(props.deleteTodo).toBeCalled();
  });

  it("renders empty checkbox button when todo has 'active' status", () => {
    const { container } = render(<ButtonPanel {...props} />);
    expect(container).toMatchSnapshot();
  });

  it("renders checked checkbox button when todo has 'completed' status", () => {
    const completedTodoProps = {
      ...props,
      todo: {
        id: "1",
        status: TodoStatusValues.Completed,
      },
    };
    const { container } = render(<ButtonPanel {...completedTodoProps} />);
    expect(container).toMatchSnapshot();
  });
});
