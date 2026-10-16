import { setTasks, getTasks } from './state.js';
import { loadTasks, saveTasks } from './storage.js';
import { renderTasks } from './render.js';
import { initEvents } from './events.js';

function init() {
  const saved = loadTasks();
  setTasks(saved);
  renderTasks();
  initEvents();
}

<script type="module" src="./src/js/app.js"></script>
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}