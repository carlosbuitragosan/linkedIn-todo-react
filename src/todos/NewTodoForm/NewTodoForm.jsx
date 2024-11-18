import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../../redux/todosSlice";

function NewTodoForm() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      dispatch(createTodo(inputValue));
      setInputValue("");
    }
  };

  return (
    <div className="new-todo-form">
      <form onSubmit={handleSubmit}>
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
      </form>
    </div>
  );
}

export default NewTodoForm;
