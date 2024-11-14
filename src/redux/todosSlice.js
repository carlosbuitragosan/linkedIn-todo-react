import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    createTodo: (state, action) => {
      const exists = state.some((todo) => todo.text === action.payload.text);
      if (!exists) {
        state.push({ text: action.payload.text });
      }
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.text !== action.payload.text);
    },
  },
});

export const { createTodo, removeTodo } = todosSlice.actions;

export default todosSlice.reducer;
