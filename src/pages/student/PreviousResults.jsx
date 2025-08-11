import React, { useState } from 'react';
import { enrolledCourses } from '../../data/enrolledCourses';
import { exams } from '../../data/exams';
import { results } from '../../data/results';
import StudentAnalytics from './studentAnalytics'; // Import the new component

const PreviousResults = () => {
  const [openCourseId, setOpenCourseId] = useState(null);
  const [openExamId, setOpenExamId] = useState(null);
  const [showAnalytics, setShowAnalytics] = useState(false); // State for analytics component

  const toggleCourse = (courseId) => {
    setOpenCourseId(openCourseId === courseId ? null : courseId);
    setOpenExamId(null);
  };

  const toggleExam = (examId) => {
    setOpenExamId(openExamId === examId ? null : examId);
  };

  const getAttemptedExamsForCourse = (courseId) => {
    return exams.filter(exam => exam.courseId === courseId && exam.attempted);
  };

  const getResultForExam = (examId) => {
    return results.find(result => result.examId === examId);
  };

  const getPassFailStatus = (score) => {
    if (!score) return '';
    const [achieved, total] = score.split('/').map(Number);
    const percentage = (achieved / total) * 100;
    return percentage >= 70 ? 'Pass' : 'Fail';
  };

  if (showAnalytics) {
    return <StudentAnalytics />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Previous Results</h1>
      <div className="space-y-2">
        {enrolledCourses.map(course => (
          <div key={course.id} className="bg-gray-700 rounded">
            <button
              onClick={() => toggleCourse(course.id)}
              className="w-full text-left p-4 font-semibold"
            >
              {course.name}
            </button>
            {openCourseId === course.id && (
              <div className="p-4">
                {getAttemptedExamsForCourse(course.id).length > 0 ? (
                  getAttemptedExamsForCourse(course.id).map(exam => {
                    const result = getResultForExam(exam.id);
                    const status = getPassFailStatus(result?.score);
                    return (
                      <div key={exam.id} className="bg-gray-600 rounded mt-2">
                        <button
                          onClick={() => toggleExam(exam.id)}
                          className="w-full text-left p-4 font-semibold"
                        >
                          {exam.name}
                        </button>
                        {openExamId === exam.id && (
                          <div className="p-4">
                            <p>Score: {result?.score || 'Not available'}</p>
                            <p>Status: {status}</p>
                          </div>
                        )}
                      </div>
                    );
                  })
                ) : (
                  <p>No attempted exams for this course.</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button
          onClick={() => setShowAnalytics(true)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          View Analytics
        </button>
      </div>
    </div>
  );
};

export default PreviousResults;
