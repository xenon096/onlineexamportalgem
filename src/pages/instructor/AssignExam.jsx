import React, { useState } from 'react';
import { exams } from '../../data/exams';
import { studentProfile } from '../../data/studentProfile';
import { getLoggedInUser } from '../../data/auth';
import { allQuestions } from '../../data/questions';

const AssignExam = () => {
  const instructor = getLoggedInUser();
  const instructorCourses = Object.values(allQuestions).flat().filter(q => q.category === instructor.subject).map(q => {
    const exam = Object.entries(allQuestions).find(([key, value]) => value.includes(q));
    return exams.find(e => e.name === exam[0]);
  }).filter(Boolean);

  const instructorExamIds = [...new Set(instructorCourses.map(course => course.id))];
  const instructorExams = exams.filter(exam => instructorExamIds.includes(exam.id));

  const [selectedExam, setSelectedExam] = useState('');
  const [selectedStudent, setSelectedStudent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically make an API call to assign the exam
    console.log(`Assigned exam ${selectedExam} to student ${selectedStudent}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Assign Exam</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-lg font-semibold mb-2">Select Exam</label>
          <select
            value={selectedExam}
            onChange={(e) => setSelectedExam(e.target.value)}
            className="w-full p-2 rounded bg-gray-700"
            required
          >
            <option value="">Select an exam</option>
            {instructorExams.map(exam => (
              <option key={exam.id} value={exam.id}>{exam.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-lg font-semibold mb-2">Select Student</label>
          <select
            value={selectedStudent}
            onChange={(e) => setSelectedStudent(e.target.value)}
            className="w-full p-2 rounded bg-gray-700"
            required
          >
            <option value="">Select a student</option>
            {/* In a real app, you would fetch a list of students */}
            <option value={studentProfile.id}>{studentProfile.name}</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          Assign Exam
        </button>
      </form>
    </div>
  );
};

export default AssignExam;