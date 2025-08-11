import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AdminLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Here you would typically clear any authentication tokens or user session data
    navigate('/');
  };

  return (
    <div className="flex bg-gray-800 min-h-screen text-white">
      <div className={`bg-gray-900 transition-all duration-300 ${isSidebarOpen ? 'w-64 p-5' : 'w-0'} overflow-hidden`}>
        <h2 className="text-3xl font-bold mb-10 ">Admin Menu</h2>
        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-4 text-blue-500">Management</h3>
          <ul className="space-y-3 px-4">
            <li><Link to="/admin/manage-instructors" className="block hover:text-blue-400">Manage Instructors</Link></li>
            <li><Link to="/admin/manage-courses" className="block hover:text-blue-400">Manage Courses</Link></li>
            <li><Link to="/admin/manage-exams" className="block hover:text-blue-400">Manage Exams</Link></li>
            <li><Link to="/admin/manage-questions" className="block hover:text-blue-400">Manage Questions</Link></li>
            <li><Link to="/admin/manage-users" className="block hover:text-blue-400">Manage Users</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4 text-2xl text-blue-500">Analytics</h3>
          <ul className="space-y-3">
            <li><Link to="/admin/analytics" className="block hover:text-blue-400 px-4">View Analytics</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="flex-1 flex flex-col">
        <header className="bg-gray-700 shadow-md p-4 flex justify-between items-center">
          <div className="flex items-center">
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-white focus:outline-none mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
              </svg>
            </button>
            <Link to="/admin/dashboard" className="text-xl font-bold">Admin Dashboard</Link>
          </div>
          <button 
            onClick={handleLogout} 
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          >
            Logout
          </button>
        </header>
        
        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
