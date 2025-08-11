import React from 'react';
import { useParams } from 'react-router-dom';
import { studentProfile } from '../../data/studentProfile';
import { results } from '../../data/results';
import { exams } from '../../data/exams';
import { allQuestions } from '../../data/questions';
import { getLoggedInUser } from '../../data/auth';

const StudentPerformance = () => {
  const { studentId } = useParams();
  const student = studentProfile; // In a real app, you would fetch the student by id

  const instructor = getLoggedInUser();
  const instructorCourses = Object.values(allQuestions).flat().filter(q => q.category === instructor.subject).map(q => {
    const exam = Object.entries(allQuestions).find(([key, value]) => value.includes(q));
    return exams.find(e => e.name === exam[0]);
  }).filter(Boolean);

  const instructorExamIds = [...new Set(instructorCourses.map(course => course.id))];

  const studentResults = results.filter(result => result.userId === student.id && instructorExamIds.includes(result.examId));

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Student Performance: {student.name}</h1>
      <div className="space-y-8">
        {studentResults.map(result => {
          const exam = exams.find(e => e.id === result.examId);
          const examQuestions = allQuestions[exam.name] || [];
          return (
            <div key={result.id} className="bg-gray-700 rounded-lg shadow p-6">
              <h2 className="text-2xl font-semibold mb-4">{exam.name}</h2>
              <p className="text-lg mb-2">Score: {result.score}</p>
              <div>
                <h3 className="text-xl font-semibold mb-2">Exam Analysis</h3>
                {examQuestions.map(question => (
                  <div key={question.id} className="mb-2">
                    <p>{question.text}</p>
                    {/* In a real app, you would have the student's answer and show if it was correct */}
                    <p className="text-green-400">Correct Answer: {question.correctAnswer}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StudentPerformance;