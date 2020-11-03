/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Drawer from "../Drawer";
import Filter from "../../Filter";

const props = {
  side: "left",
  open: true,
  toggleDrawer: jest.fn(),
  children: <Filter />,
};

jest.mock("../../Filter", () => {
  return {
    __esModule: true,
    default: () => {
      return <div />;
    },
  };
});

describe("Drawer", () => {
  it("renders as expected", () => {
    const { container } = render(<Drawer {...props} />);
    expect(container).toMatchSnapshot();
  });
  it("renders Close button which calls toggleDrawer function", () => {
    const { getByTitle } = render(<Drawer {...props} />);
    const closeButton = getByTitle(/close/i);
    expect(closeButton).toBeInTheDocument();
    fireEvent.click(closeButton);
    expect(props.toggleDrawer).toBeCalled();
  });
});
