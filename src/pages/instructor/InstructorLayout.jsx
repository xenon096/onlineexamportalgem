import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const InstructorLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="flex min-h-screen bg-gray-800 text-white">
      <div className={`bg-gray-900 transition-all duration-300 ${isSidebarOpen ? 'w-64 p-5' : 'w-0'} overflow-hidden`}>
        <h2 className="text-2xl font-bold mb-10">Instructor Menu</h2>
        <ul className="space-y-3">
          <li><Link to="/instructor/my-subject" className="block hover:text-blue-400">My Subject</Link></li>
          <li><Link to="/instructor/analytics" className="block hover:text-blue-400">Analytics</Link></li>
          <li><Link to="/instructor/view-exams" className="block hover:text-blue-400">View/Edit Exams</Link></li>
          <li><Link to="/instructor/assign-exam" className="block hover:text-blue-400">Assign Exam</Link></li>
          <li><Link to="/instructor/monitor-exams" className="block hover:text-blue-400">Monitor Exams</Link></li>
        </ul>
      </div>

      <div className="flex-1 flex flex-col">
        <header className="bg-gray-700 shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center">
                <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-white focus:outline-none mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                </button>
                <Link to="/instructor/dashboard" className="text-2xl font-bold">Dashboard</Link>
              </div>
              <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                Logout
              </button>
            </div>
          </div>
        </header>
        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default InstructorLayout;
