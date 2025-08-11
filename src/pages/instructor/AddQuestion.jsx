import React, { useState } from 'react';
import { getLoggedInUser } from '../../data/auth';

const AddQuestion = () => {
  const instructor = getLoggedInUser();
  const [questionDetails, setQuestionDetails] = useState({
    text: '',
    category: instructor.subject,
    difficulty: 'Easy',
    correctAnswer: '',
    options: ['', '', ''],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setQuestionDetails({ ...questionDetails, [name]: value });
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...questionDetails.options];
    newOptions[index] = value;
    setQuestionDetails({ ...questionDetails, options: newOptions });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically make an API call to save the question data
    console.log('Question details submitted:', questionDetails);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Add Question</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-lg font-semibold mb-2">Question Text</label>
          <textarea
            name="text"
            value={questionDetails.text}
            onChange={handleInputChange}
            className="w-full p-2 rounded bg-gray-700"
            rows="4"
            required
          ></textarea>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-lg font-semibold mb-2">Category</label>
            <input
              type="text"
              name="category"
              value={questionDetails.category}
              disabled
              className="w-full p-2 rounded bg-gray-600 cursor-not-allowed"
            />
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2">Difficulty</label>
            <select
              name="difficulty"
              value={questionDetails.difficulty}
              onChange={handleInputChange}
              className="w-full p-2 rounded bg-gray-700"
            >
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block text-lg font-semibold mb-2">Options</label>
          {questionDetails.options.map((option, index) => (
            <input
              key={index}
              type="text"
              value={option}
              onChange={(e) => handleOptionChange(index, e.target.value)}
              className="w-full p-2 rounded bg-gray-700 mb-2"
              required
            />
          ))}
        </div>
        <div>
          <label className="block text-lg font-semibold mb-2">Correct Answer</label>
          <input
            type="text"
            name="correctAnswer"
            value={questionDetails.correctAnswer}
            onChange={handleInputChange}
            className="w-full p-2 rounded bg-gray-700"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          Add Question
        </button>
      </form>
    </div>
  );
};

export default AddQuestion;