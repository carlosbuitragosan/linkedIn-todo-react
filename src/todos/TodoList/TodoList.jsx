import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoListItem from "../TodoListItem/TodoListItem";
import NewTodoForm from "../NewTodoForm/NewTodoForm";
import { fetchTodos } from "../../redux/todosSlice";

function TodoList() {
  const dispatch = useDispatch();
  const { todos, loading, error } = useSelector((state) => state);
  console.log("todos:", todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  if (loading.fetch) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!Array.isArray(todos)) return <p>no todos available.</p>;

  return (
    <div className="list-wrapper">
      <NewTodoForm />

      {todos.length > 0 ? (
        todos.map((todo) => <TodoListItem todo={todo} key={todo.id} />)
      ) : (
        <p>no todos found.</p>
      )}
    </div>
  );
}

export default TodoList;
