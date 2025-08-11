import React from 'react';
import UpcomingExamsWidget from './UpcomingExamsWidget';
import RecentResultsWidget from './RecentResultsWidget';
import PendingTasksWidget from './PendingTasksWidget';
import QuickLinksWidget from './QuickLinksWidget';

const InstructorDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 py-4">
        <h1 className="text-3xl font-bold mb-8">Instructor Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <UpcomingExamsWidget />
          <RecentResultsWidget />
          <PendingTasksWidget />
          <QuickLinksWidget />
        </div>
      </div>
    </div>
  );
};

export default InstructorDashboard;