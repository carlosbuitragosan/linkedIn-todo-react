import React from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoListItem from "../TodoListItem/TodoListItem";
import NewTodoForm from "../NewTodoForm/NewTodoForm";
import { removeTodo } from "../../redux/todosSlice";

function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleRemove = (todo) => {
    dispatch(removeTodo({ text: todo.text }));
  };
  return (
    <div className="list-wrapper">
      <NewTodoForm />
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.text}
          removeTodo={() => handleRemove(todo)}
        />
      ))}
    </div>
  );
}

export default TodoList;
