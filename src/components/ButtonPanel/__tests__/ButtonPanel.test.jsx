/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import userEvent from "@testing-library/user-event";
// import { MockedProvider } from "@apollo/client/testing";
import {
  render,
  screen,
  // mocks
} from "../../../utils/test-utils";
import ButtonPanel from "../ButtonPanel";

const props = {
  entity: {
    id: "2",
    completed: false,
  },
  showTodo: jest.fn(),
  edit: jest.fn(),
  toggle: jest.fn(),
};

// const renderComponent = () =>
//   render(
//     <MockedProvider mocks={mocks} addTypename={false}>
//       <ButtonPanel {...props} />
//     </MockedProvider>
//   );

describe("Button Panel", () => {
  it.only("renders as expected", () => {
    const { container } = render(<ButtonPanel {...props} />);
xdescribe("Button Panel", () => {
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
    userEvent.click(screen.getByTitle(/completed/i));
    expect(props.toggle).toBeCalled();
  });

  it("calls deleteTodo function", () => {
    render(<ButtonPanel {...props} />);
    const deleteTodo = jest.fn();
    userEvent.click(screen.getByTitle(/delete/i));
    expect(deleteTodo).toBeCalled();
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
        status: "Completed",
      },
    };
    const { container } = render(<ButtonPanel {...completedTodoProps} />);
    expect(container).toMatchSnapshot();
  });
});
