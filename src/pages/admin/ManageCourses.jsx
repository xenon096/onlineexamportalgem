import React from 'react';
import AdminLayout from './AdminLayout';

const courses = [
  { id: 1, name: 'React' },
  { id: 2, name: 'C' },
  { id: 3, name: 'Python' },
  { id: 4, name: 'Java' },
];

const ManageCourses = () => {
  return (
    <AdminLayout>
      <h1 className="text-4xl font-bold mb-10">Manage Courses</h1>
      <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
        <table className="min-w-full bg-gray-800 rounded-2xl">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-600 text-left">Course Name</th>
              <th className="py-2 px-4 border-b border-gray-600 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map(course => (
              <tr key={course.id}>
                <td className="py-2 px-4 border-b border-gray-600">{course.name}</td>
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

export default ManageCourses;
