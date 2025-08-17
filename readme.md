# Task Manager (TypeScript)

A simple **TypeScript-based task management application** designed for learning and upskilling.  
This project demonstrates key TypeScript concepts such as interfaces, literal types, arrays, and type-safe functions.

---

## Features

- Define tasks with a strict **Task interface**.
- Add new tasks with automatic ID generation.
- Update task status (`todo`, `in-progress`, `done`) safely.
- List tasks filtered by status.
- Fully type-checked with TypeScript strict mode.

---

## Project Structure
task-manager/
├─ src/
│  ├─ index.ts          # Main file with example usage
│  ├─ task.ts           # Task interface
│  ├─ taskManager.ts    # Functions: addTask, changeTaskStatus, listTasksByStatus
│  └─ sampleData.ts     # Sample tasks for testing
├─ dist/                # Compiled JavaScript (generated after build)
├─ package.json
├─ tsconfig.json
└─ README.md
---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/task-manager.git
cd task-manager

2.	Install dependencies:
npm install

Build & Run
1.	Build TypeScript → Compiles .ts to .js in dist/:
npm run build
2.	Run the project:npm start

Example Output
Task 1: Learn TypeScript basics - Status: todo
Task 2: Build a simple app - Status: in-progress
Task 3: Deploy to production - Status: done

Scripts
	•	npm run build → Compile TypeScript files
	•	npm start → Run the compiled JavaScript
	•	npm test → Placeholder (no tests yet)

Learnings

This project demonstrates:
	•	How to define a TypeScript interface for structured data.
	•	Using literal types to enforce valid task statuses.
	•	Array manipulations with type safety.
	•	Writing modular and reusable functions.