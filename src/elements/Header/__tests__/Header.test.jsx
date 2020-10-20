
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { render } from "@testing-library/react";
import Header from "../Header";

const props = {
	variant: "h3",
	text: "Header text prop"
};

describe("Header", () => {
  it("renders as expected", () => {
    const {container} = render(<Header {...props} />);
    expect(container).toMatchSnapshot();
  });
  it("renders right header tag", () => {
    const {container} = render(<Header {...props} />);
    const headerHtmlTag = container.querySelector(props.variant);
    expect(headerHtmlTag).toBeInTheDocument();
  });
  it("renders passed text", () => {
    const container = render(<Header {...props} />);
    expect(container.getByText(props.text)).toBeInTheDocument();
  });
});
