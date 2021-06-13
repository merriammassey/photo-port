import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ContactForm from "..";

afterEach(cleanup);

describe("ContactForm component", () => {
  // First Test
  it("renders", () => {
    //test the About component
    render(<ContactForm />);
  });
  //compare snapshopt versions of the DOM node structure
  it("matches snapshot DOM node structure", () => {
    //return snapshot of About component
    const { asFragment } = render(<ContactForm />);
    //test and compare whether the expected and actual outcomes match
    expect(asFragment()).toMatchSnapshot();
  });
});
