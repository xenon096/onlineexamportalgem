import React from 'react';
import { users } from '../../data/mockData';
import { exams } from '../../data/exams';
import { allQuestions } from '../../data/questions';

const SystemMetricsWidget = () => {
  const totalUsers = users.length;
  const totalExams = exams.length;
  const totalQuestions = Object.values(allQuestions).flat().length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      <div className="bg-gray-700 p-6 rounded-lg shadow-xl text-center">
        <h3 className="text-xl font-semibold text-blue-500 mb-2">Total Users</h3>
        <p className="text-3xl font-bold">{totalUsers}</p>
      </div>
      <div className="bg-gray-700 p-6 rounded-lg shadow-xl text-center">
        <h3 className="text-xl font-semibold text-blue-500 mb-2">Total Exams</h3>
        <p className="text-3xl font-bold">{totalExams}</p>
      </div>
      <div className="bg-gray-700 p-6 rounded-lg shadow-xl text-center">
        <h3 className="text-xl font-semibold text-blue-500 mb-2">Total Questions</h3>
        <p className="text-3xl font-bold">{totalQuestions}</p>
      </div>
    </div>
  );
};

export default SystemMetricsWidget;
