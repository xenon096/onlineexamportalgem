import React from 'react';

const SystemPerformanceWidget = () => {
  return (
    <div className="bg-gray-700 p-6 rounded-lg shadow-xl">
      <h3 className="text-xl font-semibold text-blue-500 mb-4">System Performance</h3>
      <div>
        <p>Server Status: <span className="text-green-500">Online</span></p>
        <p>Database Connection: <span className="text-green-500">Connected</span></p>
      </div>
    </div>
  );
};

export default SystemPerformanceWidget;
