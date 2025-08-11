import React, { useState } from 'react';
import AdminLayout from './AdminLayout';

const exams = [
  { id: 1, name: 'React Basics', course: 'React' },
  { id: 2, name: 'React Advanced', course: 'React' },
  { id: 3, name: 'C Fundamentals', course: 'C' },
  { id: 4, name: 'C Data Structures', course: 'C' },
  { id: 5, name: 'Python for Beginners', course: 'Python' },
  { id: 6, name: 'Python Web Development', course: 'Python' },
  { id: 7, name: 'Java Core Concepts', course: 'Java' },
  { id: 8, name: 'Java Spring Framework', course: 'Java' },
];

const ManageExams = () => {
  const [selectedCourse, setSelectedCourse] = useState('all');

  const filteredExams = selectedCourse === 'all'
    ? exams
    : exams.filter(exam => exam.course === selectedCourse);

  return (
    <AdminLayout>
      <h1 className="text-4xl font-bold mb-10">Manage Exams</h1>
      <div className="mb-6">
        <label htmlFor="courseFilter" className="text-lg mr-4">Filter by course:</label>
        <select
          id="courseFilter"
          className="bg-gray-700 text-white p-2 rounded"
          onChange={e => setSelectedCourse(e.target.value)}
          value={selectedCourse}
        >
          <option value="all">All</option>
          <option value="React">React</option>
          <option value="C">C</option>
          <option value="Python">Python</option>
          <option value="Java">Java</option>
        </select>
      </div>
      <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
        <table className="min-w-full bg-gray-800 rounded-2xl">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-600 text-left">Exam Name</th>
              <th className="py-2 px-4 border-b border-gray-600 text-left">Course</th>
              <th className="py-2 px-4 border-b border-gray-600 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredExams.map(exam => (
              <tr key={exam.id}>
                <td className="py-2 px-4 border-b border-gray-600">{exam.name}</td>
                <td className="py-2 px-4 border-b border-gray-600">{exam.course}</td>
                <td className="py-2 px-4 border-b border-gray-600">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-3 rounded mr-2">Edit</button>
                  <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
};

export default ManageExams;
