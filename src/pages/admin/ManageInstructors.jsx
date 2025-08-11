import React, { useState } from 'react';
import AdminLayout from './AdminLayout';

const initialInstructors = [
  { id: 1, name: 'Instructor 1', email: 'instructor1@example.com', subject: 'React' },
  { id: 2, name: 'Instructor 2', email: 'instructor2@example.com', subject: 'Python' },
  { id: 3, name: 'Instructor 3', email: 'instructor3@example.com', subject: 'Java' },
  { id: 4, name: 'Instructor 4', email: 'instructor4@example.com', subject: 'C' },
];

const ManageInstructors = () => {
  const [instructors, setInstructors] = useState(initialInstructors);

  return (
    <AdminLayout>
      <h1 className="text-4xl font-bold mb-10">Manage Instructors</h1>
      <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mb-4">Add Instructor</button>
        <table className="min-w-full bg-gray-800 rounded-2xl">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-600 text-left">Name</th>
              <th className="py-2 px-4 border-b border-gray-600 text-left">Email</th>
              <th className="py-2 px-4 border-b border-gray-600 text-left">Subject</th>
              <th className="py-2 px-4 border-b border-gray-600 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {instructors.map(instructor => (
              <tr key={instructor.id}>
                <td className="py-2 px-4 border-b border-gray-600">{instructor.name}</td>
                <td className="py-2 px-4 border-b border-gray-600">{instructor.email}</td>
                <td className="py-2 px-4 border-b border-gray-600">{instructor.subject}</td>
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

export default ManageInstructors;
