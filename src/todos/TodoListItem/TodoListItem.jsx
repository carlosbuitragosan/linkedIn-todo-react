import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo } from "../../redux/todosSlice";

function TodoListItem({ todo }) {
  const dispatch = useDispatch();

  return (
    <div className="todo-item-container">
      <h3>{todo.text}</h3>
      <div className="buttons-container">
        <button type="button" className="completed-button">
          Mark as Completed
        </button>
        <button
          type="button"
          className="remove-button"
          onClick={() => dispatch(removeTodo({ text: todo.text }))}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default TodoListItem;
