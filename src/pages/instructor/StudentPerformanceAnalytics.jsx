import React from 'react';
import { Link } from 'react-router-dom';
import { studentProfile } from '../../data/studentProfile';
import { results } from '../../data/results';
import { exams } from '../../data/exams';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const StudentPerformanceAnalytics = ({ instructorExams }) => {
  // In a real app, you would fetch a list of students
  const students = [studentProfile];

  const getScorePercentage = (score) => {
    if (!score) return 0;
    const [achieved, total] = score.split('/').map(Number);
    return (achieved / total) * 100;
  };

  const studentData = students.map(student => {
    const studentResults = results.filter(result => result.userId === student.id && instructorExams.some(exam => exam.id === result.examId));
    const totalScore = studentResults.reduce((acc, result) => acc + getScorePercentage(result.score), 0);
    const avgScore = studentResults.length > 0 ? totalScore / studentResults.length : 0;

    return {
      ...student,
      avgScore,
      isAtRisk: avgScore < 70, // Example at-risk condition
    };
  }).sort((a, b) => b.avgScore - a.avgScore); // Student Ranking

  const examNames = [...new Set(instructorExams.map(exam => exam.name))];
  const chartData = examNames.map(examName => {
    const dataPoint = { name: examName };
    students.forEach(student => {
      const result = results.find(r => {
        const exam = exams.find(e => e.id === r.examId);
        return r.userId === student.id && exam.name === examName;
      });
      dataPoint[student.name] = result ? getScorePercentage(result.score) : null;
    });
    return dataPoint;
  });

  return (
    <div className="bg-gray-900 rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold text-blue-500 mb-4">Individual Student Performance</h2>
      <div>
        <h3 className="text-xl font-semibold mb-2">Student Ranking</h3>
        <ul className="space-y-2">
          {studentData.map((student, index) => (
            <li key={student.id} className="flex justify-between">
              <span>{index + 1}. {student.name}</span>
              <span>{student.avgScore.toFixed(2)}%</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-2">Performance Trends</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            {students.map(student => (
              <Line key={student.id} type="monotone" dataKey={student.name} stroke={`#${Math.floor(Math.random()*16777215).toString(16)}`} />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-2">At-Risk Students</h3>
        <ul className="space-y-2">
          {studentData.filter(student => student.isAtRisk).map(student => (
            <li key={student.id}>
              <Link to={`/instructor/student-performance/${student.id}`} className="text-red-400 hover:underline">
                {student.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StudentPerformanceAnalytics;
