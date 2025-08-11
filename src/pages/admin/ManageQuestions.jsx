import React, { useState } from 'react';
import { allQuestions } from '../../data/questions';
import AdminLayout from './AdminLayout';

const ManageQuestions = () => {
  const [selectedExam, setSelectedExam] = useState('React Basics');
  const [questions, setQuestions] = useState(allQuestions);

  const handleExamChange = (e) => {
    setSelectedExam(e.target.value);
  };

  return (
    <AdminLayout>
      <h1 className="text-4xl font-bold mb-10">Manage Questions</h1>
      <div className="mb-6">
        <label htmlFor="examFilter" className="text-lg mr-4">Select Exam:</label>
        <select
          id="examFilter"
          className="bg-gray-700 text-white p-2 rounded"
          onChange={handleExamChange}
          value={selectedExam}
        >
          <option value="React Basics">React Basics</option>
          <option value="React Advanced">React Advanced</option>
          <option value="C Fundamentals">C Fundamentals</option>
          <option value="C Data Structures">C Data Structures</option>
          <option value="Python for Beginners">Python for Beginners</option>
          <option value="Python Web Development">Python Web Development</option>
          <option value="Java Core Concepts">Java Core Concepts</option>
          <option value="Java Spring Framework">Java Spring Framework</option>
        </select>
      </div>
      <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Questions for {selectedExam}</h2>
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mb-4">Add Question</button>
        <table className="min-w-full bg-gray-800 rounded-2xl">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-600 text-left">Question Text</th>
              <th className="py-2 px-4 border-b border-gray-600 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {(questions[selectedExam] || []).map(q => (
              <tr key={q.id}>
                <td className="py-2 px-4 border-b border-gray-600">{q.text}</td>
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

export default ManageQuestions;
