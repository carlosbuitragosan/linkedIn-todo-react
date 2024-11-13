import React, { useState } from "react";

function NewTodoForm() {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="new-todo-form">
      <input
        type="text"
        className="new-todo-input"
        placeholder="New todo"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit" className="new-todo-button">
        Create Todo
      </button>
    </div>
  );
}

export default NewTodoForm;
