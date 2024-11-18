const express = require("express");
const cors = require("cors");
const boyParser = require("body-parser");

const app = express();

app.use(boyParser.json());
app.use(cors());

let todos = [];

// GET ALL TODOS
app.get("/todos", (req, res) => {
  res.json(todos);
});

// ADD NEW TODO
app.post("/todos", (req, res) => {
  const newTodo = { text: req.body.text, isCompleted: false };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// MARK AS COMPLETED
app.put("/todos/undo", (req, res) => {
  const { text } = req.body;
  const todo = todos.find((todo) => todo.text === text);
  if (todo) {
    todo.isCompleted = false;
    res.json(todo);
  } else {
    res.status(404).send("Todo not found.");
  }
});

// REMOVE TODO
app.delete("todos/", (req, res) => {
  const { text } = req.body;
  const todo = todos.find((todo) => todo.text === text);
  if (todo) {
    todos = todos.filter((todo) => todo.text !== text);
    res.status(204).send();
  } else {
    res.status(404).send("No todo found.");
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`listening on port http://localhost:${PORT}`);
});
