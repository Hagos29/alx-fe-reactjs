import { render, screen, fireEvent } from "@testing-library/react";
import TodoApp from "./TodoApp";

test("renders initial todos", () => {
  render(<TodoApp />);
  
  expect(screen.getByText("Learn React")).toBeInTheDocument();
  expect(screen.getByText("Build a project")).toBeInTheDocument();
  expect(screen.getByText("Review code")).toBeInTheDocument();
});

test("adds a new todo", () => {
  render(<TodoApp />);
  
  const input = screen.getByRole("textbox");
  const addButton = screen.getByText("Add");
  
  fireEvent.change(input, { target: { value: "Write tests" } });
  fireEvent.click(addButton);
  
  expect(screen.getByText("Write tests")).toBeInTheDocument();
});

test("toggles a todo", () => {
  render(<TodoApp />);
  
  const todoItem = screen.getByText("Learn React");
  
  fireEvent.click(todoItem);
  
  expect(todoItem).toHaveClass("line-through");
  
  fireEvent.click(todoItem);
  
  expect(todoItem).not.toHaveClass("line-through");
});

test("deletes a todo", () => {
  render(<TodoApp />);
  
  // Select the todo and its delete button
  const todoItem = screen.getByText("Learn React");
  const deleteButton = todoItem.nextSibling; // Assuming delete button is next to the text
  
  // Click the delete button
  fireEvent.click(deleteButton);
  
  // Ensure the todo is removed from the document
  expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
});
