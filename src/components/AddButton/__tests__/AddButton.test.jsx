/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { render, fireEvent } from "@testing-library/react";
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
    const container = render(<AddButton {...props} />);
    const addButton = container.getByTitle(/add/i);
    fireEvent.click(addButton);
    expect(props.setMode).toBeCalled();
  });
});
