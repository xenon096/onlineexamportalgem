import React from 'react';
import { useParams } from 'react-router-dom';
import { studentProfile } from '../../data/studentProfile';
import { enrolledCourses } from '../../data/enrolledCourses';

const ViewStudentProfile = () => {
  const { studentId } = useParams();
  const student = studentProfile; // In a real app, you would fetch the student by id

  const getCourseDetails = (courseId) => {
    return enrolledCourses.find(course => course.id === courseId);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Student Profile</h1>
      <div>
        <p className="text-lg mb-2"><span className="font-semibold">Name:</span> {student.name}</p>
        <p className="text-lg mb-2"><span className="font-semibold">Username/Email:</span> {student.username}</p>
        <p className="text-lg mb-4"><span className="font-semibold">Education Qualification:</span> {student.education}</p>

        <div>
          <h2 className="text-2xl font-bold mt-8 mb-4">Enrolled Courses</h2>
          {student.enrolledCourses.map(courseId => {
            const course = getCourseDetails(courseId);
            return (
              <div key={courseId} className="p-4 bg-gray-700 rounded-lg shadow mb-4">
                <h3 className="text-xl font-semibold">{course.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ViewStudentProfile;
