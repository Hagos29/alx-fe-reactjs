import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

// Test to verify initial render
it("renders the TodoList component with initial todos", () => {
  render(<TodoList />);
  
  // Check if initial todos are in the document
  expect(screen.getByText("Learn React")).toBeInTheDocument();
  expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
  
  // Ensure input field and add button are present
  expect(screen.getByPlaceholderText("Add a new task")).toBeInTheDocument();
  expect(screen.getByText("Add")).toBeInTheDocument();
});

// Test to verify adding a new todo
it("allows users to add a new todo", () => {
  render(<TodoList />);
  
  const input = screen.getByPlaceholderText("Add a new task");
  const addButton = screen.getByText("Add");

  fireEvent.change(input, { target: { value: "New Todo" } });
  fireEvent.click(addButton);

  expect(screen.getByText("New Todo")).toBeInTheDocument();
});

// Test to verify toggling a todo
it("allows users to toggle a todo's completion status", () => {
  render(<TodoList />);
  
  const todoItem = screen.getByText("Learn React");
  fireEvent.click(todoItem);

  expect(todoItem).toHaveClass("line-through text-gray-500");
  
  fireEvent.click(todoItem);
  expect(todoItem).not.toHaveClass("line-through text-gray-500");
});

// Test to verify deleting a todo
it("allows users to delete a todo", () => {
  render(<TodoList />);
  
  const todoItem = screen.getByText("Learn React");
  const deleteButton = todoItem.nextSibling;

  fireEvent.click(deleteButton);

  expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
});
