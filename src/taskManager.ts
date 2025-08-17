import { Task } from './task';

export function addTask(taskList: Task[], title: string): Task[] {
  const newTask: Task = { id: taskList.length + 1, title, status: 'todo' };
  return [...taskList, newTask];
}

export function changeTaskStatus(
  taskList: Task[],
  taskId: number,
  newStatus: 'todo' | 'in-progress' | 'done'
): Task[] {
  return taskList.map(task =>
    task.id === taskId ? { ...task, status: newStatus } : task
  );
}

export function listTasksByStatus(taskList: Task[], status: 'todo' | 'in-progress' | 'done'): Task[] {
  return taskList.filter(task => task.status === status);
}

export function getTaskInfo(task: Task): string {
  return `Task ${task.id}: ${task.title} - Status: ${task.status}`;
}