import React from 'react';
import { exams } from '../../data/exams';
import { getLoggedInUser } from '../../data/auth';
import { allQuestions } from '../../data/questions';

const MonitorExams = () => {
  const instructor = getLoggedInUser();
  const instructorCourses = Object.values(allQuestions).flat().filter(q => q.category === instructor.subject).map(q => {
    const exam = Object.entries(allQuestions).find(([key, value]) => value.includes(q));
    return exams.find(e => e.name === exam[0]);
  }).filter(Boolean);

  const instructorExamIds = [...new Set(instructorCourses.map(course => course.id))];
  const instructorExams = exams.filter(exam => instructorExamIds.includes(exam.id));

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Monitor Live Exams</h1>
      <div className="space-y-4">
        {instructorExams.map(exam => (
          <div key={exam.id} className="bg-gray-700 rounded-lg shadow p-4">
            <h2 className="text-xl font-semibold">{exam.name}</h2>
            {/* Add real-time monitoring data here */}
            <p className="text-gray-400">Real-time monitoring data will be displayed here.</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonitorExams;