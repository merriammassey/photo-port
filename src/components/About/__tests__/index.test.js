import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import About from "..";

afterEach(cleanup);

describe("About component", () => {
  // First Test
  it("renders", () => {
    //test the About component
    render(<About />);
  });
  //compare snapshopt versions of the DOM node structure
  it("matches snapshot DOM node structure", () => {
    //return snapshot of About component
    const { asFragment } = render(<About />);
    //test and compare whether the expected and actual outcomes match
    expect(asFragment()).toMatchSnapshot();
  });
});
