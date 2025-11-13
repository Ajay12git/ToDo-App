const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

const app = express();
const PORT = 3000;
const DATA_FILE = 'data.json';

app.use(cors());
app.use(express.json());

// Read todos from data.json
function readTodos() {
  if (!fs.existsSync(DATA_FILE)) return [];
  return JSON.parse(fs.readFileSync(DATA_FILE));
}

// Save todos to data.json
function saveTodos(todos) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(todos, null, 2));
}

// GET all todos
app.get('/todos', (req, res) => {
  res.json(readTodos());
});

// POST a new todo
app.post('/todos', (req, res) => {
  const todos = readTodos();
  const newTodo = { id: uuidv4(), text: req.body.text, completed: false };
  todos.push(newTodo);
  saveTodos(todos);
  res.status(201).json(newTodo);
});

// PUT toggle completed
app.put('/todos/:id', (req, res) => {
  const todos = readTodos();
  const todo = todos.find(t => t.id === req.params.id);
  if (todo) {
    todo.completed = !todo.completed;
    saveTodos(todos);
    res.json(todo);
  } else {
    res.status(404).json({ error: 'Todo not found' });
  }
});

// DELETE todo
app.delete('/todos/:id', (req, res) => {
  let todos = readTodos();
  todos = todos.filter(t => t.id !== req.params.id);
  saveTodos(todos);
  res.json({ message: 'Deleted' });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
