import React from "react";
import { useDispatch } from "react-redux";
import {
  markTodoAsCompleted,
  undoTodoCompletion,
  removeTodo,
} from "../../redux/todosSlice";

function TodoListItem({ todo }) {
  const dispatch = useDispatch();

  return (
    <div className="todo-item-container">
      <h3>{todo.text}</h3>
      <div className="buttons-container">
        {!todo.isCompleted ? (
          <button
            type="button"
            className="completed-button"
            onClick={() => dispatch(markTodoAsCompleted(todo.id))}
          >
            Mark as Completed
          </button>
        ) : (
          <div>
            <span>Completed</span>
            <button
              type="button"
              className="undo-completed"
              onClick={() => dispatch(undoTodoCompletion(todo.id))}
            >
              Undo
            </button>
          </div>
        )}
        <button
          type="button"
          className="remove-button"
          onClick={() => dispatch(removeTodo(todo.id))}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default TodoListItem;
