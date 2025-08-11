import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { exams } from '../../data/exams';
import { results } from '../../data/results';
import { getLoggedInUser } from '../../data/auth';
import { allQuestions } from '../../data/questions';
import StudentPerformanceAnalytics from './StudentPerformanceAnalytics';
import QuestionAnalysis from './QuestionAnalysis';
import CustomizableFilters from './CustomizableFilters';

const Analytics = () => {
  const instructor = getLoggedInUser();
  // Filter exams based on instructor's subject
  const instructorQuestions = Object.values(allQuestions).flat().filter(q => q.category === instructor.subject);
  const instructorExamNames = [...new Set(instructorQuestions.map(q => Object.entries(allQuestions).find(([key, value]) => value.includes(q))?.[0]))];
  const instructorExams = exams.filter(exam => instructorExamNames.includes(exam.name));
  const instructorExamIds = instructorExams.map(exam => exam.id);

  const examResults = results.filter(result => instructorExamIds.includes(result.examId));

  const getScorePercentage = (score) => {
    if (!score) return 0;
    const [achieved, total] = score.split('/').map(Number);
    return (achieved / total) * 100;
  };

  const overallPerformanceData = instructorExams.map(exam => {
    const examScores = examResults.filter(result => result.examId === exam.id).map(result => getScorePercentage(result.score));
    const avgScore = examScores.length > 0 ? examScores.reduce((a, b) => a + b, 0) / examScores.length : 0;
    const passCount = examScores.filter(score => score >= 70).length;
    const passRate = examScores.length > 0 ? (passCount / examScores.length) * 100 : 0;

    return {
      name: exam.name,
      avgScore,
      passRate,
    };
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Instructor Analytics</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-gray-900 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-blue-500 mb-4">Overall Class Performance</h2>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={overallPerformanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="avgScore" fill="#8884d8" name="Average Score (%)" />
              <Bar dataKey="passRate" fill="#82ca9d" name="Pass Rate (%)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <StudentPerformanceAnalytics instructorExams={instructorExams} />
        <QuestionAnalysis instructorQuestions={instructorQuestions} />
        <CustomizableFilters instructorExams={instructorExams} />
      </div>
    </div>
  );
};

export default Analytics;