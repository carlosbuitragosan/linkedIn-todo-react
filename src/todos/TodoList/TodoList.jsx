import React from "react";
import { useSelector } from "react-redux";
import TodoListItem from "../TodoListItem/TodoListItem";
import NewTodoForm from "../NewTodoForm/NewTodoForm";

function TodoList() {
  const todos = useSelector((state) => state.todos);

  return (
    <div className="list-wrapper">
      <NewTodoForm />
      {todos.map((todo) => (
        <TodoListItem todoText={todo} key={todo.text} />
      ))}
    </div>
  );
}

export default TodoList;
