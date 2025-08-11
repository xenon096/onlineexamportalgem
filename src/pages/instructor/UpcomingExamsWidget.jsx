import React from 'react';
import { exams } from '../../data/exams';
import { getLoggedInUser } from '../../data/auth';
import { allQuestions } from '../../data/questions';

const UpcomingExamsWidget = () => {
  const instructor = getLoggedInUser();
  const instructorCourses = Object.values(allQuestions).flat().filter(q => q.category === instructor.subject).map(q => {
    const exam = Object.entries(allQuestions).find(([key, value]) => value.includes(q));
    return exams.find(e => e.name === exam[0]);
  }).filter(Boolean);

  const instructorExamIds = [...new Set(instructorCourses.map(course => course.id))];

  const upcomingExams = exams.filter(exam => !exam.attempted && instructorExamIds.includes(exam.id));

  return (
    <div className="bg-gray-900 rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold text-blue-500 mb-4">Upcoming Exams</h2>
      <ul className="space-y-2">
        {upcomingExams.map(exam => (
          <li key={exam.id}>{exam.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingExamsWidget;