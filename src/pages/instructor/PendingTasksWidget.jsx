import React from 'react';

const PendingTasksWidget = () => {
  const tasks = [
    { id: 1, text: 'Grade subjective questions for "React Basics" exam' },
    { id: 2, text: 'Review student feedback for "Advanced Python Test"' },
    { id: 3, text: 'Approve new questions in the question bank' },
  ];

  return (
    <div className="bg-gray-900 rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold text-blue-500 mb-4">Pending Tasks</h2>
      <ul className="space-y-2">
        {tasks.map(task => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default PendingTasksWidget;
