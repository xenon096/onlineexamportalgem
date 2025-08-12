import React from 'react';

const RecentActivityLogWidget = () => {
  const activities = [
    { id: 1, text: 'New user registered: student2@example.com' },
    { id: 2, text: 'Exam created: "Advanced Java"' },
    { id: 3, text: 'System backup completed successfully' },
  ];

  return (
    <div className="bg-gray-700 p-6 rounded-lg shadow-xl">
      <h3 className="text-xl font-semibold text-blue-500 mb-4">Recent Activity Log</h3>
      <ul className="space-y-2">
        {activities.map(activity => (
          <li key={activity.id}>{activity.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivityLogWidget;
