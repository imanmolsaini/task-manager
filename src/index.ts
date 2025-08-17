import { addTask, changeTaskStatus, listTasksByStatus, getTaskInfo } from './taskManager';
import { mixedTasks } from './sampleData';

const todoTasks = listTasksByStatus(mixedTasks, 'todo');
console.log(todoTasks.length);
console.log(getTaskInfo(todoTasks[0]));