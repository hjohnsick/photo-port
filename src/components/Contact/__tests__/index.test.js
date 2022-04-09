import React from "react";
import { render, cleanup, getByTestId } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ContactForm from "..";

afterEach(cleanup);

describe("ContactForm component", () => {
  it("renders", () => {
    render(<ContactForm />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<ContactForm />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("Contact me is visible", () => {
  it("inserts Contact me into the h1 and Submit into button", () => {
    const { getByTestId } = render(<ContactForm />);
    expect(getByTestId("Contact me")).toHaveTextContent("Contact me");
    expect(getByTestId("Submit")).toHaveTextContent("Submit");
  });
});
