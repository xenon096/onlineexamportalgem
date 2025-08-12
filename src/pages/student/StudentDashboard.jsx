import React from 'react';
import { Link } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { results } from '../../data/results';
import { exams } from '../../data/exams';

const ScoreTrendChart = () => {
  const data = results.map(result => {
    const exam = exams.find(exam => exam.id === result.examId);
    const scoreValue = parseInt(result.score.split('/')[0]);
    return {
      name: exam ? exam.name : 'Unknown Exam',
      score: scoreValue,
    };
  });

  return (
    <div className="bg-gray-900 rounded-lg shadow-md p-6 col-span-1 md:col-span-2 lg:col-span-3 bg-gradient-to-t from-gray-800 to-slate-700 transform hover:scale-105 transition duration-300 ease-in-out">
      <h2 className="text-2xl font-semibold text-blue-500 mb-4">Score Trend</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="score" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

const StudentDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 py-4">
        <h1 className="text-3xl font-bold mb-8">Student Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link to="/student/enrolled-courses">
            <div className="bg-gray-900 rounded-lg shadow-md p-6 transform hover:scale-110 transition duration-300 ease-in-out bg-gradient-to-t from-purple-500 to-slate-700">
              <h2 className="text-2xl font-semibold text-blue-500 mb-4">My Courses</h2>
              <p className="text-gray-300">View your enrolled courses.</p>
            </div>
          </Link>
          <Link to="/student/upcoming-exams">
            <div className="bg-gray-900 rounded-lg shadow-md p-6 transform hover:scale-110 transition duration-300 ease-in-out bg-gradient-to-t from-purple-500 to-slate-700">
              <h2 className="text-2xl font-semibold text-blue-500 mb-4">Upcoming Exams</h2>
              <p className="text-gray-300">Check for upcoming exams.</p>
            </div>
          </Link>
          <Link to="/student/analytics">
            <div className="bg-gray-900 rounded-lg shadow-md p-6 transform hover:scale-110 transition duration-300 ease-in-out bg-gradient-to-t from-purple-500 to-slate-700">
              <h2 className="text-2xl font-semibold text-blue-500 mb-4">My Results</h2>
              <p className="text-gray-300">View your exam results.</p>
            </div>
          </Link>
          <ScoreTrendChart />
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;