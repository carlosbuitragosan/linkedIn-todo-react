import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    createTodo: (state, action) => {
      state.todos.push({ text: action.payload.text });
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(
        (todo) => todo.text !== action.payload.text,
      );
    },
  },
});

export const { createTodo, removeTodo } = todosSlice.actions;

export default todosSlice.reducer;
