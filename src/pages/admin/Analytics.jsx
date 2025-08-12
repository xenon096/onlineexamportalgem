import React from 'react';
import AdminLayout from './AdminLayout';
import { users } from '../../data/mockData';
import { exams } from '../../data/exams';
import { results } from '../../data/results';
import { allQuestions } from '../../data/questions';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const Analytics = () => {
  const totalExamsTaken = results.length;
  const totalStudents = users.filter(u => u.role === 'student').length;

  const getScorePercentage = (score) => {
    if (!score) return 0;
    const [achieved, total] = score.split('/').map(Number);
    return (achieved / total) * 100;
  };

  const allScores = results.map(result => getScorePercentage(result.score));
  const averageScore = allScores.length > 0 ? allScores.reduce((a, b) => a + b, 0) / allScores.length : 0;

  const examCategories = [...new Set(Object.values(allQuestions).flat().map(q => q.category))];
  const categoryData = examCategories.map(category => {
      const categoryExams = exams.filter(exam => {
          const examQuestions = allQuestions[exam.name] || [];
          return examQuestions.some(q => q.category === category);
      });
      return {
          name: category,
          exams: categoryExams.length,
      }
  });


  return (
    <AdminLayout>
      <h1 className="text-4xl font-bold mb-10">System Analytics</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-gray-700 p-6 rounded-lg shadow-xl text-center">
          <h3 className="text-xl font-semibold text-blue-500 mb-2">Total Exams Taken</h3>
          <p className="text-3xl font-bold">{totalExamsTaken}</p>
        </div>
        <div className="bg-gray-700 p-6 rounded-lg shadow-xl text-center">
          <h3 className="text-xl font-semibold text-blue-500 mb-2">Average Score</h3>
          <p className="text-3xl font-bold">{averageScore.toFixed(2)}%</p>
        </div>
        <div className="bg-gray-700 p-6 rounded-lg shadow-xl text-center">
          <h3 className="text-xl font-semibold text-blue-500 mb-2">Total Students</h3>
          <p className="text-3xl font-bold">{totalStudents}</p>
        </div>
      </div>
      <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold mb-6">Exams per Category</h3>
        <ResponsiveContainer width="100%" height={400}>
            <BarChart data={categoryData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="exams" fill="#8884d8" name="Number of Exams" />
            </BarChart>
        </ResponsiveContainer>
      </div>
    </AdminLayout>
  );
};

export default Analytics;