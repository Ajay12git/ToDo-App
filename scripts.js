const API_URL = 'http://localhost:3000/todos';

const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

async function fetchTodos() {
  const res = await fetch(API_URL);
  const todos = await res.json();
  renderTodos(todos);
}

function renderTodos(todos) {
  todoList.innerHTML = '';
  todos.forEach(todo => {
    const li = document.createElement('li');
    li.className = todo.completed ? 'completed' : '';
    li.innerHTML = `
      <span>${todo.text}</span>
      <div>
        <button class="toggle-btn">✔</button>
        <button class="delete-btn">🗑</button>
      </div>
    `;
    todoList.appendChild(li);

    li.querySelector('.toggle-btn').onclick = async () => {
      await fetch(`${API_URL}/${todo.id}`, { method: 'PUT' });
      fetchTodos();
    };

    li.querySelector('.delete-btn').onclick = async () => {
      await fetch(`${API_URL}/${todo.id}`, { method: 'DELETE' });
      fetchTodos();
    };
  });
}

addBtn.onclick = async () => {
  if (!input.value.trim()) return;
  await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text: input.value })
  });
  input.value = '';
  fetchTodos();
};

// Initial load
fetchTodos();
