import React, { useState } from 'react';
import AdminLayout from './AdminLayout';
import { allQuestions } from '../../data/questions';
import { users } from '../../data/mockData';

const ManageQuestions = () => {
  const [questionList, setQuestionList] = useState(Object.values(allQuestions).flat());
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredQuestions = questionList.filter(question =>
    question.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getCreatorName = (question) => {
    // This is a mock implementation. In a real app, you would have creator information in the question object.
    if (question.category === 'React') {
        return users.find(user => user.email === 'instructor.java@example.com').name;
    } else if (question.category === 'Python') {
        return users.find(user => user.email === 'instructor.python@example.com').name;
    }
    return 'Admin';
  }

  const handleDelete = (questionId) => {
    // Here you would typically make an API call to delete the question
    setQuestionList(questionList.filter(question => question.id !== questionId));
    console.log('Deleted question with id:', questionId);
  };

  return (
    <AdminLayout>
      <h1 className="text-4xl font-bold mb-10">Manage Questions</h1>
      <div className="mb-6 flex justify-between">
        <input
          type="text"
          placeholder="Search by question text"
          value={searchTerm}
          onChange={handleSearch}
          className="bg-gray-700 text-white p-2 rounded w-1/3"
        />
      </div>
      <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
        <table className="min-w-full bg-gray-800 rounded-2xl">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-600 text-left">QuestionID</th>
              <th className="py-2 px-4 border-b border-gray-600 text-left">Text</th>
              <th className="py-2 px-4 border-b border-gray-600 text-left">Category</th>
              <th className="py-2 px-4 border-b border-gray-600 text-left">Difficulty</th>
              <th className="py-2 px-4 border-b border-gray-600 text-left">Creator</th>
              <th className="py-2 px-4 border-b border-gray-600 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredQuestions.map(question => (
              <tr key={question.id}>
                <td className="py-2 px-4 border-b border-gray-600">{question.id}</td>
                <td className="py-2 px-4 border-b border-gray-600">{question.text}</td>
                <td className="py-2 px-4 border-b border-gray-600">{question.category}</td>
                <td className="py-2 px-4 border-b border-gray-600">{question.difficulty}</td>
                <td className="py-2 px-4 border-b border-gray-600">{getCreatorName(question)}</td>
                <td className="py-2 px-4 border-b border-gray-600">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-3 rounded mr-2">Edit</button>
                  <button onClick={() => handleDelete(question.id)} className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded">Delete</button>
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