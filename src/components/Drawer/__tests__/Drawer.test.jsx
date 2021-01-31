/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Drawer from "../Drawer";
import Filter from "../../Filter";

const props = {
  side: "left",
  open: true,
  toggleDrawer: jest.fn(),
  children: <Filter />,
};

jest.mock("../../Filter", () => ({
    __esModule: true,
    default: () => <div />,
  }));

describe("Drawer", () => {
  it("renders as expected", () => {
    const { container } = render(<Drawer {...props} />);
    expect(container).toMatchSnapshot();
  });
  it("renders Close button which calls toggleDrawer function", () => {
    render(<Drawer {...props} />);
    userEvent.click(screen.getByTitle(/close/i));
    expect(props.toggleDrawer).toBeCalled();
  });
});
