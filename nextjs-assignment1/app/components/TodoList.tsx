'use client';

import React, { Component } from 'react';

export default class TodoList extends Component {
  state = {
    tasks: [],
  };

  async componentDidMount() {
    try {
      const response = await fetch('http://localhost:5000/todos');
      const data = await response.json();
      this.setState({ tasks: data });
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  }

  render() {
    const { tasks } = this.state;

    return (
      <div className="flex items-center justify-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div className="w-full max-w-md bg-gray p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-black">To-Do List</h2>

          <div className="space-y-4">
            {/* Check if tasks are available, then render */}
            {tasks.length === 0 ? (
              <div className="text-black">No tasks available.</div>
            ) : (
              tasks.map((task: { id: string; tasks: string; completed: boolean }) => (
                <div key={task.id} className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                  <span className="text-sm font-medium text-black">{task.tasks}</span>
                  {/* Optionally show task completion status */}
                  <span className={`ml-2 ${task.completed ? 'text-green-500' : 'text-red-500'}`} />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    );
  }
}
