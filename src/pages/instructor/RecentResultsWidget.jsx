import React from 'react';
import { results } from '../../data/results';
import { exams } from '../../data/exams';
import { getLoggedInUser } from '../../data/auth';
import { allQuestions } from '../../data/questions';

const RecentResultsWidget = () => {
  const instructor = getLoggedInUser();
  const instructorCourses = Object.values(allQuestions).flat().filter(q => q.category === instructor.subject).map(q => {
    const exam = Object.entries(allQuestions).find(([key, value]) => value.includes(q));
    return exams.find(e => e.name === exam[0]);
  }).filter(Boolean);

  const instructorExamIds = [...new Set(instructorCourses.map(course => course.id))];

  const recentResults = results
    .filter(result => instructorExamIds.includes(result.examId))
    .slice(0, 3)
    .map(result => {
      const exam = exams.find(e => e.id === result.examId);
      return {
        ...result,
        examName: exam ? exam.name : 'Unknown Exam',
      };
    });

  return (
    <div className="bg-gray-900 rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold text-blue-500 mb-4">Recent Results</h2>
      <ul className="space-y-2">
        {recentResults.map(result => (
          <li key={result.id}>
            {result.examName}: {result.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentResultsWidget;