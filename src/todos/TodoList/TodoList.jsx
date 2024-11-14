import React from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoListItem from "../TodoListItem/TodoListItem";
import NewTodoForm from "../NewTodoForm/NewTodoForm";
import { removeTodo } from "../../redux/todosSlice";

function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="list-wrapper">
      <NewTodoForm />
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.text}
          removeTodo={() => dispatch(removeTodo({ text: todo.text }))}
        />
      ))}
    </div>
  );
}

export default TodoList;
