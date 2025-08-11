import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { enrolledCourses } from '../../data/enrolledCourses';
import { exams } from '../../data/exams';
import { results } from '../../data/results';

const StudentAnalytics = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const getScorePercentage = (score) => {
    if (!score) return 0;
    const [achieved, total] = score.split('/').map(Number);
    return (achieved / total) * 100;
  };

  const attemptedExams = results.map(result => {
    const exam = exams.find(e => e.id === result.examId);
    return {
      ...result,
      ...exam,
      percentage: getScorePercentage(result.score),
    };
  });

  const totalExamsAttempted = attemptedExams.length;
  const examsPassed = attemptedExams.filter(exam => exam.percentage >= 70).length;
  const examsFailed = totalExamsAttempted - examsPassed;
  const overallPassingRate = totalExamsAttempted > 0 ? (examsPassed / totalExamsAttempted) * 100 : 0;

  const courseData = enrolledCourses.map(course => {
    const courseExams = attemptedExams.filter(exam => exam.courseId === course.id);
    const avgScore = courseExams.length > 0
      ? courseExams.reduce((acc, exam) => acc + exam.percentage, 0) / courseExams.length
      : 0;
    return {
      name: course.name,
      avgScore: avgScore,
      exams: courseExams,
    };
  });

  const chartData = selectedCourse
    ? selectedCourse.exams.map(exam => ({ name: exam.name, score: exam.percentage }))
    : courseData.map(course => ({ name: course.name, score: course.avgScore }));

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Student Analytics</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {enrolledCourses.map(course => (
          <div
            key={course.id}
            onClick={() => setSelectedCourse(courseData.find(c => c.name === course.name))}
            className={`p-4 rounded-lg shadow cursor-pointer ${selectedCourse?.name === course.name ? 'bg-blue-600' : 'bg-gray-700'}`}
          >
            <h2 className="text-xl font-semibold">{course.name}</h2>
          </div>
        ))}
      </div>

      <div className="mb-8">
        <button onClick={() => setSelectedCourse(null)} className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded mb-4">
          View Overall Performance
        </button>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="score" fill="#8884d8" name={selectedCourse ? "Exam Score (%)" : "Average Score (%)"} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Overall Statistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 bg-gray-700 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Overall Passing Rate</h3>
            <p className="text-3xl font-bold">{overallPassingRate.toFixed(2)}%</p>
          </div>
          <div className="p-4 bg-gray-700 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Total Exams Attempted</h3>
            <p className="text-3xl font-bold">{totalExamsAttempted}</p>
          </div>
          <div className="p-4 bg-gray-700 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Exams Passed</h3>
            <p className="text-3xl font-bold">{examsPassed}</p>
          </div>
          <div className="p-4 bg-gray-700 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Exams Failed</h3>
            <p className="text-3xl font-bold">{examsFailed}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentAnalytics;