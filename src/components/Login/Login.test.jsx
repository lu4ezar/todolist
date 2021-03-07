import React from "react";
import { render } from "../../utils/test-utils";

import Login from ".";

describe("Login", () => {
  it("should render without error", async () => {
    const { container } = render(<Login />);
    expect(container).toMatchSnapshot();
  });
});
