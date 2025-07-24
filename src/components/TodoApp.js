import React, { useState } from "react";

export default function TodoApp() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmed = inputValue.trim();
    if (!trimmed) return;

    setTodos([...todos, trimmed]);
    setInputValue("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          data-testid="todo-input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a todo"
        />
        <button type="submit">Add</button>
      </form>

      <ul data-testid="todo-list">
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}