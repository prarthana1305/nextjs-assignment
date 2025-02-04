'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function TodoList() {
  const [tasks, setTasks] = useState([
    { id: 1, task: 'Task 1' },
    { id: 2, task: 'Task 2' },
    { id: 3, task: 'Task 3' },
    { id: 4, task: 'Task 4' }
  ]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      const newId = tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1;
      setTasks([...tasks, { id: newId, task: newTask }]);
      setNewTask('');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="w-full max-w-md bg-gray p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-black">To-Do List</h2>

        <form onSubmit={handleAddTask} className="mb-6">
          <div className="flex gap-2">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-400 text-black"
              placeholder="Enter new task"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Add
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <Link
            href="/todo"
            className="inline-block bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
          >
            View All Tasks
          </Link>
        </div>
      </div>
    </div>
  );
}
