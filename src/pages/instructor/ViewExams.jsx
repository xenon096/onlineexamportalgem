import React, { useState } from 'react';
import { exams as initialExams } from '../../data/exams';
import { Link } from 'react-router-dom';
import { getLoggedInUser } from '../../data/auth';
import { allQuestions } from '../../data/questions';

const ViewExams = () => {
  const instructor = getLoggedInUser();
  const instructorQuestions = Object.values(allQuestions).flat().filter(q => q.category === instructor.subject);
  const instructorExamNames = [...new Set(instructorQuestions.map(q => Object.entries(allQuestions).find(([key, value]) => value.includes(q))?.[0]))];
  const [exams, setExams] = useState(initialExams.filter(exam => instructorExamNames.includes(exam.name)));

  const handleDelete = (examId) => {
    // Here you would typically make an API call to delete the exam
    setExams(exams.filter(exam => exam.id !== examId));
    console.log('Deleted exam with id:', examId);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">View/Edit Exams</h1>
      <div className="space-y-4">
        {exams.map(exam => (
          <div key={exam.id} className="bg-gray-700 rounded-lg shadow p-4 flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold">{exam.name}</h2>
              <p className="text-gray-400">Course ID: {exam.courseId}</p>
            </div>
            <div className="space-x-4">
              <Link to={`/instructor/edit-exam/${exam.id}`} className="text-blue-400 hover:underline">Edit</Link>
              <button onClick={() => handleDelete(exam.id)} className="text-red-400 hover:underline">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewExams;