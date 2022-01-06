import React from "react";
import userEvent from "@testing-library/user-event";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "../../../utils/test-utils";

import DnDWrapper from "../DnDWrapper";

xdescribe("App", () => {
  it("should render without error", async () => {
    render(<DnDWrapper />);
    await waitForElementToBeRemoved(screen.queryByRole("progressbar"));
  });
  it("should show and hide side panel on button click", async () => {
    render(<DnDWrapper />);
    expect(screen.queryByText(/filter/i)).not.toBeInTheDocument();
    userEvent.click(screen.getByRole("button", { name: /menu/i }));
    expect(screen.getByText(/filter/i)).toBeInTheDocument();
    userEvent.click(screen.getByRole("button", { name: /close/i }));
    await waitForElementToBeRemoved(screen.queryByText(/filter/i));
    expect(screen.queryByText(/filter/i)).not.toBeInTheDocument();
  });
});
