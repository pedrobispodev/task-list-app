import { addTask, toggleTask, deleteTask, clearCompleted } from './state.js';
import { saveTasks } from './storage.js';
import { renderTasks, getTaskElement } from './render.js';
import { getTasks } from './state.js';

const form = document.getElementById('task-form');
const input = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const clearBtn = document.getElementById('clear-completed');

export function initEvents() {
  form.addEventListener('submit', handleAdd);
  taskList.addEventListener('change', handleToggle);
  taskList.addEventListener('click', handleDelete);
  clearBtn.addEventListener('click', handleClearCompleted);
}

function handleAdd(e) {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;

  addTask(text);
  saveTasks(getTasks());
  renderTasks();
  input.value = '';
  input.focus();
}

function handleToggle(e) {
  if (e.target.type !== 'checkbox') return;
  
  const li = e.target.closest('li');
  if (!li) return;
  
  const id = li.dataset.id;
  toggleTask(id);
  saveTasks(getTasks());
  renderTasks();
}

function handleDelete(e) {
  const deleteBtn = e.target.closest('button[aria-label="Excluir tarefa"]');
  if (!deleteBtn) return;
  
  const li = deleteBtn.closest('li');
  if (!li) return;
  
  const id = li.dataset.id;
  deleteTask(id);
  saveTasks(getTasks());
  renderTasks();
}

function handleClearCompleted() {
  clearCompleted();
  saveTasks(getTasks());
  renderTasks();
}