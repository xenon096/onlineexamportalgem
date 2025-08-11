import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import AdminLayout from './AdminLayout';

const examData = [
  { name: 'React', students: 65 },
  { name: 'Python', students: 42 },
  { name: 'C', students: 78 },
  { name: 'Java', students: 55 },
];

const AdminDashboard = ({ user, onLogout }) => {
  return (
    <AdminLayout>
      

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 hover">
        <div className="bg-gray-700 p-6 rounded-lg shadow-xl text-center transform hover:scale-110 transition duration-300 ease-in-out bg-gradient-to-t from-purple-500 to-slate-700">
          <h3 className="text-xl font-semibold text-blue-500 mb-2 hover">Total Courses</h3>
          <p className="text-3xl font-bold">12</p>
        </div>
        <div className="bg-gray-700 p-6 rounded-lg shadow-xl text-center transform hover:scale-110 transition duration-300 ease-in-out bg-gradient-to-t from-purple-500 to-slate-700">
          <h3 className="text-xl font-semibold text-blue-500 mb-2">Total Exams</h3>
          <p className="text-3xl font-bold">48</p>
        </div>
        <div className="bg-gray-700 p-6 rounded-lg shadow-xl text-center transform hover:scale-110 transition duration-300 ease-in-out bg-gradient-to-t from-purple-500 to-slate-700">
          <h3 className="text-xl font-semibold text-blue-500 mb-2">Total Questions</h3>
          <p className="text-3xl font-bold">1,250</p>
        </div>
        <div className="bg-gray-700 p-6 rounded-lg shadow-xl text-center transform hover:scale-110 transition duration-300 ease-in-out bg-gradient-to-t from-purple-500 to-slate-700">
          <h3 className="text-xl font-semibold text-blue-500 mb-2">Total Students</h3>
          <p className="text-3xl font-bold">3,450</p>
        </div>
      </div>

      {/* Students per Exam Chart */}
      <div className="p-6 rounded-lg shadow-lg bg-gradient-to-t from-purple-500 to-slate-700">
        <h3 className="text-2xl font-bold mb-6 text-blue-500">Students per Exam</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={examData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#"/>
            <XAxis dataKey="name" stroke="#000000" />
            <YAxis stroke="#000000" />
            <Tooltip 
              contentStyle={{ backgroundColor: '#9866C5', border: '1px solid #000000' }} 
              labelStyle={{ color: '#311432' }} 
            />
            <Legend />
            <Bar dataKey="students" fill="#601A36" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
