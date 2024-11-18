import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await fetch("http://localhost:5000/todos");
  if (!response.ok) {
    throw new Error("Failed to fetch todos");
  }
  const data = await response.json();
  console.log({ data });
  return data;
});

export const createTodo = createAsyncThunk("todos/createTodo", async (text) => {
  const todo = { id: uuidv4(), text };
  const response = await fetch("http://localhost:5000/todos", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  if (!response.ok) {
    throw new Error("Failed to add todo");
  }
  const createTodo = await response.json();
  return createTodo;
});

export const markTodoAsCompleted = createAsyncThunk(
  "todos/markTodoAsCompleted",
  async (id) => {
    const response = await fetch("http://localhost:5000/todos/completed", {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    if (!response.ok) {
      throw new Error("Failed to complete todo");
    }
    return response.json();
  },
);

export const undoTodoCompletion = createAsyncThunk(
  "todos/undoTodoCompletion",
  async (id) => {
    const response = await fetch("http://localhost:5000/todos/undoCompleted", {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    if (!response.ok) {
      throw new Error("Failed to undo todo");
    }
    return response.json();
  },
);

export const removeTodo = createAsyncThunk("todos/removeTodo", async (id) => {
  const response = await fetch("http://localhost:5000/todos", {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ id }),
  });
  if (!response.ok) {
    throw new Error("Failed to remove todo.");
  }
  return id;
});

const initialState = {
  todos: [],
  loading: { fetch: false, create: false, update: false, delete: false },
  error: null,
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // FETCH TODOS
      .addCase(fetchTodos.pending, (state) => {
        state.loading.fetch = true;
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        console.log("fetchTodos action.payload", action.payload);
        state.loading.fetch = false;
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading.fetch = false;
        state.error = action.error.message;
      })

      // CREATE TODO.
      .addCase(createTodo.pending, (state, action) => {
        state.loading.create = true;
      })

      .addCase(createTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      })

      .addCase(createTodo.rejected, (state, action) => {
        state.loading.create = false;
        state.error = action.error.message;
      })

      // MARK AS COMPLETED.
      .addCase(markTodoAsCompleted.pending, (state, action) => {
        state.loading.update = true;
      })

      .addCase(markTodoAsCompleted.fulfilled, (state, action) => {
        state.loading.update = false;
        const index = state.todos.findIndex(
          (todo) => todo.id === action.payload.id,
        );
        if (index !== -1) {
          state.todos[index] = action.payload;
        }
      })

      .addCase(markTodoAsCompleted.rejected, (state, action) => {
        state.loading.update = false;
        state.error = action.error.message;
      })

      // UNDO COMPLETION.
      .addCase(undoTodoCompletion.pending, (state, action) => {
        state.loading.update = true;
      })

      .addCase(undoTodoCompletion.fulfilled, (state, action) => {
        state.loading.update = false;
        const index = state.todos.findIndex(
          (todo) => todo.id === action.payload.id,
        );
        if (index !== -1) {
          state.todos[index] = action.payload;
        }
      })

      .addCase(undoTodoCompletion.rejected, (state, action) => {
        state.loading.update = false;
        state.error = action.error.message;
      })

      // REMOVE TODO.
      .addCase(removeTodo.pending, (state, action) => {
        state.loading.delete = true;
      })

      .addCase(removeTodo.fulfilled, (state, action) => {
        state.loading.delete = false;
        state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      })

      .addCase(removeTodo.rejected, (state, action) => {
        state.loading.delete = false;
        state.error = action.error.message;
      });
  },
});

export default todosSlice.reducer;
