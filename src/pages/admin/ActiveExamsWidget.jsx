import React from 'react';
import { exams } from '../../data/exams';

const ActiveExamsWidget = () => {
  const activeExams = exams.filter(exam => !exam.attempted);

  return (
    <div className="bg-gray-700 p-6 rounded-lg shadow-xl">
      <h3 className="text-xl font-semibold text-blue-500 mb-4">Active Exams</h3>
      <ul className="space-y-2">
        {activeExams.map(exam => (
          <li key={exam.id}>{exam.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ActiveExamsWidget;
