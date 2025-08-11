import React from 'react';
import { Link } from 'react-router-dom';

const StudentDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 py-4">
        <h1 className="text-3xl font-bold mb-8">Student Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link to="/student/enrolled-courses">
            <div className="bg-gray-900 rounded-lg shadow-md p-6 transform hover:scale-110 transition duration-300 ease-in-out bg-gradient-to-t from-purple-500 to-slate-700">
              <h2 className="text-2xl font-semibold text-blue-500 mb-4">My Courses</h2>
              <p className="text-gray-300">View your enrolled courses.</p>
            </div>
          </Link>
          <Link to="/student/upcoming-exams">
            <div className="bg-gray-900 rounded-lg shadow-md p-6 transform hover:scale-110 transition duration-300 ease-in-out bg-gradient-to-t from-purple-500 to-slate-700">
              <h2 className="text-2xl font-semibold text-blue-500 mb-4">Upcoming Exams</h2>
              <p className="text-gray-300">Check for upcoming exams.</p>
            </div>
          </Link>
          <Link to="/student/analytics">
            <div className="bg-gray-900 rounded-lg shadow-md p-6 transform hover:scale-110 transition duration-300 ease-in-out bg-gradient-to-t from-purple-500 to-slate-700">
              <h2 className="text-2xl font-semibold text-blue-500 mb-4">My Results</h2>
              <p className="text-gray-300">View your exam results.</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;