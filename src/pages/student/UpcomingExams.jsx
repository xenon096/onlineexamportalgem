import React from 'react';
import { exams } from '../../data/exams';
import { enrolledCourses } from '../../data/enrolledCourses';

const UpcomingExams = () => {
  const upcomingExams = exams.filter(exam => !exam.attempted);

  const examsWithCourseInfo = upcomingExams.map(exam => {
    const course = enrolledCourses.find(c => c.id === exam.courseId);
    return {
      ...exam,
      courseName: course ? course.name : 'Unknown Course'
    };
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Upcoming Exams</h1>
      {examsWithCourseInfo.length > 0 ? (
        <ul className="space-y-4">
          {examsWithCourseInfo.map(exam => (
            <li key={exam.id} className="p-4 bg-gradient-to-b from-purple-500 to-slate-700 rounded-lg shadow">
              <h2 className="text-2xl font-semibold">{exam.name}</h2>
              <p className="text-white">Course: {exam.courseName}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>You have no upcoming exams.</p>
      )}
    </div>
  );
};

export default UpcomingExams;
