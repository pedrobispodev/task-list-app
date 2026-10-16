export let tasks = [];

export function getTasks() {
  return tasks;
}

export function setTasks(newTasks) {
  tasks = newTasks;
}

export function addTask(text) {
  const task = {
    id: crypto.randomUUID(),
    text: text.trim(),
    completed: false,
    createdAt: Date.now()
  };
  tasks.unshift(task);
  return task;
}

export function toggleTask(id) {
  const task = tasks.find(t => t.id === id);
  if (task) {
    task.completed = !task.completed;
    return task;
  }
  return null;
}

export function deleteTask(id) {
  const index = tasks.findIndex(t => t.id === id);
  if (index !== -1) {
    tasks.splice(index, 1);
    return true;
  }
  return false;
}

export function clearCompleted() {
  const initialLength = tasks.length;
  tasks = tasks.filter(t => !t.completed);
  return tasks.length !== initialLength;
}

export function getPendingCount() {
  return tasks.filter(t => !t.completed).length;
}