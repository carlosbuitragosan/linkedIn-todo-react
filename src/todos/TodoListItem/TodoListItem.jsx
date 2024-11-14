import React from "react";

function TodoListItem({ todo, removeTodo }) {
  return (
    <div className="todo-item-container">
      <h3>{todo.text}</h3>
      <div className="buttons-container">
        <button type="button" className="completed-button">
          Mark as Completed
        </button>
        <button type="button" className="remove-button" onClick={removeTodo}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default TodoListItem;
