import React, { useState } from 'react';
import AdminLayout from './AdminLayout';
import { exams } from '../../data/exams';
import { users } from '../../data/mockData';

const ManageExams = () => {
  const [examList, setExamList] = useState(exams);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredExams = examList.filter(exam =>
    exam.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getCreatorName = (exam) => {
    // This is a mock implementation. In a real app, you would have creator information in the exam object.
    if (exam.name.toLowerCase().includes('react')) {
        return users.find(user => user.email === 'instructor.java@example.com').name;
    } else if (exam.name.toLowerCase().includes('python')) {
        return users.find(user => user.email === 'instructor.python@example.com').name;
    }
    return 'Admin';
  }

  const handleDelete = (examId) => {
    // Here you would typically make an API call to delete the exam
    setExamList(examList.filter(exam => exam.id !== examId));
    console.log('Deleted exam with id:', examId);
  };

  return (
    <AdminLayout>
      <h1 className="text-4xl font-bold mb-10">Manage Exams</h1>
      <div className="mb-6 flex justify-between">
        <input
          type="text"
          placeholder="Search by exam name"
          value={searchTerm}
          onChange={handleSearch}
          className="bg-gray-700 text-white p-2 rounded w-1/3"
        />
      </div>
      <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
        <table className="min-w-full bg-gray-800 rounded-2xl">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-600 text-left">ExamID</th>
              <th className="py-2 px-4 border-b border-gray-600 text-left">Title</th>
              <th className="py-2 px-4 border-b border-gray-600 text-left">Creator</th>
              <th className="py-2 px-4 border-b border-gray-600 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredExams.map(exam => (
              <tr key={exam.id}>
                <td className="py-2 px-4 border-b border-gray-600">{exam.id}</td>
                <td className="py-2 px-4 border-b border-gray-600">{exam.name}</td>
                <td className="py-2 px-4 border-b border-gray-600">{getCreatorName(exam)}</td>
                <td className="py-2 px-4 border-b border-gray-600">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-3 rounded mr-2">Edit</button>
                  <button onClick={() => handleDelete(exam.id)} className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded">Delete</button>
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