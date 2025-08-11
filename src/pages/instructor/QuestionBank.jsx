import React, { useState } from 'react';
import { allQuestions } from '../../data/questions';
import { Link } from 'react-router-dom';
import { getLoggedInUser } from '../../data/auth';

const QuestionBank = () => {
  const instructor = getLoggedInUser();
  const [questions, setQuestions] = useState(Object.values(allQuestions).flat().filter(q => q.category === instructor.subject));
  const [filters, setFilters] = useState({
    difficulty: '',
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const filteredQuestions = questions.filter(question => {
    return (
      (filters.difficulty ? question.difficulty === filters.difficulty : true)
    );
  });

  const difficulties = [...new Set(questions.map(q => q.difficulty))];


  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Question Bank</h1>
        <Link to="/instructor/add-question" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
          Add New Question
        </Link>
      </div>
      <div className="flex space-x-4 mb-4">
        <select name="difficulty" onChange={handleFilterChange} className="p-2 rounded bg-gray-700">
          <option value="">All Difficulties</option>
          {difficulties.map(difficulty => (
            <option key={difficulty} value={difficulty}>{difficulty}</option>
          ))}
        </select>
      </div>
      <div className="space-y-4">
        {filteredQuestions.map(question => (
          <div key={question.id} className="bg-gray-700 rounded-lg shadow p-4">
            <p className="font-semibold">{question.text}</p>
            <div className="flex space-x-4 mt-2">
              <span className="text-sm text-gray-400">Category: {question.category}</span>
              <span className="text-sm text-gray-400">Difficulty: {question.difficulty}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionBank;
