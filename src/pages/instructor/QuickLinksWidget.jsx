import React from 'react';
import { Link } from 'react-router-dom';

const QuickLinksWidget = () => {
  return (
    <div className="bg-gray-900 rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold text-blue-500 mb-4">Quick Links</h2>
      <ul className="space-y-2">
        <li><Link to="/instructor/create-exam" className="hover:text-blue-400">Create New Exam</Link></li>
        <li><Link to="/instructor/question-bank" className="hover:text-blue-400">View Question Bank</Link></li>
        <li><Link to="/instructor/students" className="hover:text-blue-400">View Students</Link></li>
      </ul>
    </div>
  );
};

export default QuickLinksWidget;
