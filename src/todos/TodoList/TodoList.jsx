import React from "react";
import TodoListItem from "../TodoListItem/TodoListItem";
import NewTodoForm from "../NewTodoForm/NewTodoForm";

function TodoList({ todos = [] }) {
  return (
    <div className="list-wrapper">
      <NewTodoForm />
      {todos.map((todo) => (
        <TodoListItem todo={todo} key={todo.text} />
      ))}
    </div>
  );
}

export default TodoList;
