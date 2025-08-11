import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { exams } from '../../data/exams';

const EditExam = () => {
  const { examId } = useParams();
  const navigate = useNavigate();
  const [examDetails, setExamDetails] = useState(null);

  useEffect(() => {
    const examToEdit = exams.find(exam => exam.id === parseInt(examId));
    if (examToEdit) {
      setExamDetails(examToEdit);
    }
  }, [examId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setExamDetails({ ...examDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically make an API call to update the exam data
    console.log('Exam details updated:', examDetails);
    navigate('/instructor/view-exams');
  };

  if (!examDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Edit Exam</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-lg font-semibold mb-2">Title</label>
          <input
            type="text"
            name="name"
            value={examDetails.name}
            onChange={handleInputChange}
            className="w-full p-2 rounded bg-gray-700"
            required
          />
        </div>
        <div>
          <label className="block text-lg font-semibold mb-2">Description</label>
          <textarea
            name="description"
            value={examDetails.description || ''}
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
              value={examDetails.duration || ''}
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
              value={examDetails.totalMarks || ''}
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
              value={examDetails.startDate || ''}
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
              value={examDetails.endDate || ''}
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
          Update Exam
        </button>
      </form>
    </div>
  );
};

export default EditExam;
