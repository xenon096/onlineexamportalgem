import React from 'react';
import { Link } from 'react-router-dom';
import { studentProfile } from '../../data/studentProfile';

const ViewStudents = () => {
  // In a real app, you would fetch a list of students
  const students = [studentProfile];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">View Students</h1>
      <div className="space-y-4">
        {students.map(student => (
          <div key={student.id} className="bg-gray-700 rounded-lg shadow p-4 flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold">{student.name}</h2>
              <p className="text-gray-400">{student.username}</p>
            </div>
            <Link to={`/instructor/student-performance/${student.id}`} className="text-blue-400 hover:underline">
              View Performance
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewStudents;