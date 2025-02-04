import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App.js";

/**
 * @test Ensures the Home page renders correctly by default.
 */
test("renders Home page by default", () => {
  render(<App />);
  expect(screen.getByText(/GitHub Explorer/i)).toBeInTheDocument();
});



