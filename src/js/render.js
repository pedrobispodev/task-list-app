import { getTasks, getPendingCount } from './state.js';

const taskList = document.getElementById('task-list');
const emptyState = document.getElementById('empty-state');
const stats = document.getElementById('stats');
const pendingCount = document.getElementById('pending-count');

export function renderTasks() {
  const tasks = getTasks();
  
  if (tasks.length === 0) {
    taskList.innerHTML = '';
    emptyState.classList.remove('hidden');
    stats.classList.add('hidden');
    return;
  }

  emptyState.classList.add('hidden');
  stats.classList.remove('hidden');
  pendingCount.textContent = `${getPendingCount()} ${getPendingCount() === 1 ? 'pendente' : 'pendentes'}`;

  taskList.innerHTML = tasks.map(task => `
    <li data-id="${task.id}" class="flex items-center gap-3 p-3 bg-gray-900 border border-gray-800 rounded-lg hover:border-gray-700 transition-colors ${task.completed ? 'opacity-60' : ''}">
      <input
        type="checkbox"
        class="w-5 h-5 accent-blue-500 cursor-pointer"
        ${task.completed ? 'checked' : ''}
        aria-label="${task.completed ? 'Marcar como pendente' : 'Marcar como concluída'}"
      >
      <span class="flex-1 text-left ${task.completed ? 'line-through text-gray-500' : 'text-white'} break-words">${escapeHtml(task.text)}</span>
      <button
        class="p-1.5 text-gray-500 hover:text-red-400 hover:bg-red-900/20 rounded-lg transition-colors"
        aria-label="Excluir tarefa"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
        </svg>
      </button>
    </li>
  `).join('');
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

export function getTaskElement(id) {
  return taskList.querySelector(`[data-id="${id}"]`);
}