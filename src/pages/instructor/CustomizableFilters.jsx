import React from 'react';
import { exams } from '../../data/exams';
import { studentGroups } from '../../data/studentGroups';

const CustomizableFilters = ({ instructorExams }) => {
  const handleExport = () => {
    // In a real app, this would trigger a download of the report
    console.log('Exporting report...');
  };

  return (
    <div className="bg-gray-900 rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold text-blue-500 mb-4">Customizable Views and Filters</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-lg font-semibold mb-2">Filter by Exam</label>
          <select className="w-full p-2 rounded bg-gray-700">
            <option value="">All Exams</option>
            {instructorExams.map(exam => (
              <option key={exam.id} value={exam.id}>{exam.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-lg font-semibold mb-2">Filter by Student Group</label>
          <select className="w-full p-2 rounded bg-gray-700">
            <option value="">All Groups</option>
            {studentGroups.map(group => (
              <option key={group.id} value={group.id}>{group.name}</option>
            ))}
          </select>
        </div>
        <button
          onClick={handleExport}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Export Report (PDF)
        </button>
      </div>
    </div>
  );
};

export default CustomizableFilters;