import React, { useState } from 'react';

const CreateExam = () => {
  const [examDetails, setExamDetails] = useState({
    title: '',
    description: '',
    duration: '',
    totalMarks: '',
    startDate: '',
    endDate: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setExamDetails({ ...examDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically make an API call to save the exam data
    console.log('Exam details submitted:', examDetails);
    // You could also add validation here
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Create Exam</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-lg font-semibold mb-2">Title</label>
          <input
            type="text"
            name="title"
            value={examDetails.title}
            onChange={handleInputChange}
            className="w-full p-2 rounded bg-gray-700"
            required
          />
        </div>
        <div>
          <label className="block text-lg font-semibold mb-2">Description</label>
          <textarea
            name="description"
            value={examDetails.description}
            onChange={handleInputChange}
            className="w-full p-2 rounded bg-gray-700"
            rows="4"
          ></textarea>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-lg font-semibold mb-2">Duration (in minutes)</label>
            <input
              type="number"
              name="duration"
              value={examDetails.duration}
              onChange={handleInputChange}
              className="w-full p-2 rounded bg-gray-700"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2">Total Marks</label>
            <input
              type="number"
              name="totalMarks"
              value={examDetails.totalMarks}
              onChange={handleInputChange}
              className="w-full p-2 rounded bg-gray-700"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-lg font-semibold mb-2">Start Date & Time</label>
            <input
              type="datetime-local"
              name="startDate"
              value={examDetails.startDate}
              onChange={handleInputChange}
              className="w-full p-2 rounded bg-gray-700"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2">End Date & Time</label>
            <input
              type="datetime-local"
              name="endDate"
              value={examDetails.endDate}
              onChange={handleInputChange}
              className="w-full p-2 rounded bg-gray-700"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          Create Exam
        </button>
      </form>
    </div>
  );
};

export default CreateExam;