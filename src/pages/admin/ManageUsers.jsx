import React, { useState } from 'react';
import AdminLayout from './AdminLayout';

const users = [
  { id: 1, name: 'Alice Smith', email: 'alice@example.com', courses: ['React', 'Python'] },
  { id: 2, name: 'Bob Johnson', email: 'bob@example.com', courses: ['C', 'Java'] },
  { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', courses: ['React', 'Java'] },
];

const ManageUsers = () => {
  const [selectedCourse, setSelectedCourse] = useState('all');

  const filteredUsers = selectedCourse === 'all'
    ? users
    : users.filter(user => user.courses.includes(selectedCourse));

  return (
    <AdminLayout>
      <h1 className="text-4xl font-bold mb-10">Manage Users</h1>
      <div className="mb-6">
        <label htmlFor="courseFilter" className="text-lg mr-4">Filter by course:</label>
        <select
          id="courseFilter"
          className="bg-gray-700 text-white p-2 rounded"
          onChange={e => setSelectedCourse(e.target.value)}
          value={selectedCourse}
        >
          <option value="all">All</option>
          <option value="React">React</option>
          <option value="C">C</option>
          <option value="Python">Python</option>
          <option value="Java">Java</option>
        </select>
      </div>
      <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
        <table className="min-w-full bg-gray-800 rounded-2xl">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-600 text-left">Name</th>
              <th className="py-2 px-4 border-b border-gray-600 text-left">Email</th>
              <th className="py-2 px-4 border-b border-gray-600 text-left">Registered Courses</th>
              <th className="py-2 px-4 border-b border-gray-600 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map(user => (
              <tr key={user.id}>
                <td className="py-2 px-4 border-b border-gray-600">{user.name}</td>
                <td className="py-2 px-4 border-b border-gray-600">{user.email}</td>
                <td className="py-2 px-4 border-b border-gray-600">{user.courses.join(', ')}</td>
                <td className="py-2 px-4 border-b border-gray-600">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-3 rounded mr-2">Edit</button>
                  <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
};

export default ManageUsers;
