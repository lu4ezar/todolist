import React from 'react';
import { render, screen } from "../../../utils/test-utils.js";
import App from "../App";

describe("App", () => {
  it("should render without error", () => {
    render(<App />);
  });
});
