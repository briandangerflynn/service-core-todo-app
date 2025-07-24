import { render, fireEvent, screen } from "@testing-library/react";
import TodoApp from "./TodoApp";

test("adds a todo and displays it", () => {
  render(<TodoApp />);

  const input = screen.getByTestId("todo-input");
  const list = screen.getByTestId("todo-list");

  fireEvent.change(input, { target: { value: "Buy milk" } });
  fireEvent.submit(input);

  expect(list.textContent).toContain("Buy milk");
  expect(input.value).toBe("");
});

test("does not add empty or whitespace-only todos", () => {
  render(<TodoApp />);

  const input = screen.getByTestId("todo-input");
  const list = screen.getByTestId("todo-list");

  fireEvent.change(input, { target: { value: "   " } });
  fireEvent.submit(input);

  expect(list.children.length).toBe(0);
});
