import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    createTodo: (state, action) => {
      const exists = state.some((todo) => todo.text === action.payload.text);
      if (!exists) {
        state.push({ text: action.payload.text, isCompleted: false });
      }
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.text !== action.payload.text);
    },
    markAsCompleted: (state, action) => {
      const todo = state.find((todo) => todo.text === action.payload.text);
      if (todo) {
        todo.isCompleted = true;
      }
    },
    undoCompleted: (state, action) => {
      const todo = state.find((todo) => todo.text === action.payload.text);
      if (todo && todo.isCompleted) {
        todo.isCompleted = false;
      }
    },
  },
});

export const { createTodo, removeTodo, markAsCompleted, undoCompleted } =
  todosSlice.actions;

export default todosSlice.reducer;
