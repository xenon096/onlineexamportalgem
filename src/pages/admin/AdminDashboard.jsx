import React from 'react';
import AdminLayout from './AdminLayout';
import SystemMetricsWidget from './SystemMetricsWidget';
import ActiveExamsWidget from './ActiveExamsWidget';
import RecentActivityLogWidget from './RecentActivityLogWidget';
import SystemPerformanceWidget from './SystemPerformanceWidget';

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <SystemMetricsWidget />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ActiveExamsWidget />
        <RecentActivityLogWidget />
        <SystemPerformanceWidget />
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;