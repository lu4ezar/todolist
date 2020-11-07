import React from "react";
import userEvent from "@testing-library/user-event";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "../../../utils/test-utils";

import App from "../App";

describe("App", () => {
  it("should render without error", () => {
    render(<App />);
  });
  it("should show and hide side panel on button click", async () => {
    render(<App />);
    expect(screen.queryByText(/filter/i)).not.toBeInTheDocument();
    userEvent.click(screen.getByRole("button", { name: /menu/i }));
    expect(screen.getByText(/filter/i)).toBeInTheDocument();
    userEvent.click(screen.getByRole("button", { name: /close/i }));
    await waitForElementToBeRemoved(screen.getByText(/filter/i));
    expect(screen.queryByText(/filter/i)).not.toBeInTheDocument();
  });
});
