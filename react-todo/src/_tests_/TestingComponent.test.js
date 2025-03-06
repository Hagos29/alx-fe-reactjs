import { render, screen } from "@testing-library/react";
import TestingComponent from "../TestingComponent";

test("renders Testing Component", () => {
  render(<TestingComponent />);
  const element = screen.getByText(/Testing Component Loaded/i);
  expect(element).toBeInTheDocument();
});
