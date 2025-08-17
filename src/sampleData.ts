import { Task } from './task';

export const firstTask: Task = { id: 1, title: "Learn TypeScript basics", status: 'todo' };
export const secondTask: Task = { id: 2, title: "Build a simple app", status: 'in-progress' };
export const thirdTask: Task = { id: 3, title: "Deploy to production", status: 'done' };

export const mixedTasks: Task[] = [firstTask, secondTask, thirdTask];