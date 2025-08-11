import React, { useState } from 'react';
import { enrolledCourses } from '../../data/enrolledCourses.js';
import { exams } from '../../data/exams.js';

const EnrolledCourses = () => {
  const [openCourse, setOpenCourse] = useState(null);

  const handleCourseClick = (courseId) => {
    setOpenCourse(openCourse === courseId ? null : courseId);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Enrolled Courses</h1>
      <div>
        {enrolledCourses.map(course => (
          <div key={course.id} className="mb-4">
            <div onClick={() => handleCourseClick(course.id)} className=" rounded-lg shadow-md p-4 bg-gradient-to-t from-purple-500 to-slate-700 cursor-pointer">
              <h2 className="text-xl font-semibold">{course.name}</h2>
            </div>
            {openCourse === course.id && (
              <div className="p-4 ">
                <h3 className="text-lg font-semibold mb-2 text-blue-500">Exams</h3>
                <ul>
                  {exams
                    .filter(exam => exam.courseId === course.id)
                    .map(exam => (
                      <li key={exam.id} className={`p-2 ${exam.attempted ? 'text-green-600' : 'text-red-600'}`}>
                        {exam.name} - {exam.attempted ? 'Attempted' : 'Not Attempted'}
                      </li>
                    ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnrolledCourses;