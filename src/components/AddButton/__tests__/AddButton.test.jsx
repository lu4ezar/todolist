/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddButton from "../AddButton";

const props = {
  setMode: jest.fn(),
};

describe("Add Button", () => {
  it("renders as expected", () => {
    const { container } = render(<AddButton {...props} />);
    expect(container).toMatchSnapshot();
  });
  it("calls setMode prop function", () => {
    render(<AddButton {...props} />);
    userEvent.click(screen.getByTitle(/add/i));
    expect(props.setMode).toBeCalled();
  });
});
