import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import AdminLayout from './AdminLayout';

// Mock Data
const studentData = [
  { id: 1, name: 'Alice Smith', email: 'alice@example.com', examsTaken: 5, avgScore: 88 },
  { id: 2, name: 'Bob Johnson', email: 'bob@example.com', examsTaken: 3, avgScore: 76 },
  { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', examsTaken: 8, avgScore: 92 },
  { id: 4, name: 'Diana Prince', email: 'diana@example.com', examsTaken: 6, avgScore: 85 },
];

const examPerformanceData = [
  { name: 'Java', students: 80, avgScore: 85, passRate: 92 },
  { name: 'C', students: 55, avgScore: 78, passRate: 88 },
  { name: 'Python', students: 95, avgScore: 91, passRate: 98 },
  { name: 'React', students: 70, avgScore: 82, passRate: 90 },
];

const overallStats = {
  totalStudents: 200,
  totalExamsTaken: 550,
  averageScore: 85,
  overallPassRate: 93,
};

const passFailData = [
  { name: 'Pass', value: overallStats.overallPassRate },
  { name: 'Fail', value: 100 - overallStats.overallPassRate },
];

const COLORS = ['#A10559','#663047'];

const Analytics = () => {
  return (
    <AdminLayout>
      <h1 className="text-4xl font-bold mb-10">Student Analytics</h1>

      {/* Overall Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="bg-gray-700 p-6 rounded-lg shadow-xl text-left transform hover:scale-110 transition duration-300 ease-in-out bg-gradient-to-t from-purple-500 to-slate-700">
          <h3 className="text-xl font-semibold text-blue-500 mb-2">Total Students</h3>
          <p className="text-3xl font-bold">{overallStats.totalStudents}</p>
        </div>
        <div className="bg-gray-700 p-6 rounded-lg shadow-xl text-left transform hover:scale-110 transition duration-300 ease-in-out bg-gradient-to-t from-purple-500 to-slate-700">
          <h3 className="text-xl font-semibold text-blue-500 mb-2">Exams Taken</h3>
          <p className="text-3xl font-bold">{overallStats.totalExamsTaken}</p>
        </div>
        <div className="bg-gray-700 p-6 rounded-lg shadow-xl text-left transform hover:scale-110 transition duration-300 ease-in-out bg-gradient-to-t from-purple-500 to-slate-700">
          <h3 className="text-xl font-semibold text-blue-500 mb-2">Average Score</h3>
          <p className="text-3xl font-bold">{overallStats.averageScore}%</p>
        </div>
        <div className="bg-gray-700 p-6 rounded-lg shadow-xl text-left transform hover:scale-110 transition duration-300 ease-in-out bg-gradient-to-t from-purple-500 to-slate-700">
          <h3 className="text-xl font-semibold text-blue-500 mb-2">Overall Pass Rate</h3>
          <p className="text-3xl font-bold">{overallStats.overallPassRate}%</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        {/* Student Performance Table */}
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg bg-gradient-to-t from-purple-500 to-slate-700">
          <h3 className="text-2xl font-bold mb-4 text-blue-500">Student Performance</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-violet-400 rounded-2xl">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b border-gray-600 text-stone-800 text-left">Name</th>
                  <th className="py-2 px-4 border-b border-gray-600 text-left text-stone-800">Exams Taken</th>
                  <th className="py-2 px-4 border-b border-gray-600 text-left text-stone-800">Avg. Score</th>
                </tr>
              </thead>
              <tbody>
                {studentData.map(student => (
                  <tr key={student.id}>
                    <td className="py-2 px-4 border-b border-gray-600 text-stone-800">{student.name}</td>
                    <td className="py-2 px-4 border-b border-gray-600 text-stone-800">{student.examsTaken}</td>
                    <td className="py-2 px-4 border-b border-gray-600 text-stone-800">{student.avgScore}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pass/Fail Rate Pie Chart */}
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg bg-gradient-to-t from-purple-500 to-slate-700">
          <h3 className="text-2xl font-bold mb-4 text-blue-500">Overall Pass/Fail Rate</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={passFailData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#601A36" label>
                {passFailData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Exam Performance Bar Chart */}
      <div className="bg-gray-700 p-6 rounded-lg shadow-lg bg-gradient-to-t from-purple-500 to-slate-700">
        <h3 className="text-2xl font-bold mb-6">Exam Performance</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={examPerformanceData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#" />
            <XAxis dataKey="name" stroke="#000000" />
            <YAxis stroke="#000000" />
            <Tooltip contentStyle={{ backgroundColor: '#2D3748', border: '1px solid #4A5568' }} />
            <Legend />
            <Bar dataKey="students" fill="#667EEA" name="Students" />
            <Bar dataKey="avgScore" fill="#ED64A6" name="Avg Score (%)" />
            <Bar dataKey="passRate" fill="#620436" name="Pass Rate (%)" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </AdminLayout>
  );
};

export default Analytics;
