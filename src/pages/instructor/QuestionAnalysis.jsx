import React from 'react';
import { allQuestions } from '../../data/questions';
import { results } from '../../data/results';

const QuestionAnalysis = ({ instructorQuestions }) => {
  const questionPerformance = instructorQuestions.map(question => {
    // In a real app, you would have more detailed result data to do this properly
    const correctAnswers = results.length * Math.random(); // Mock data
    const totalAnswers = results.length;
    const percentageCorrect = (correctAnswers / totalAnswers) * 100;

    return {
      ...question,
      percentageCorrect,
      difficultyIndex: 1 - (percentageCorrect / 100),
    };
  });

  const topicPerformance = [...new Set(instructorQuestions.map(q => q.category))].map(categoryName => {
      const categoryQuestions = questionPerformance.filter(q => q.category === categoryName);
      const avgCorrect = categoryQuestions.length > 0
        ? categoryQuestions.reduce((acc, q) => acc + q.percentageCorrect, 0) / categoryQuestions.length
        : 0;
      return {
        name: categoryName,
        avgCorrect,
      };
  });


  return (
    <div className="bg-gray-900 rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold text-blue-500 mb-4">Question and Topic Analysis</h2>
      <div>
        <h3 className="text-xl font-semibold mb-2">Question-wise Analysis</h3>
        <ul className="space-y-2">
          {questionPerformance.map(question => (
            <li key={question.id}>
              <p>{question.text}</p>
              <p className="text-sm text-gray-400">
                Correct: {question.percentageCorrect.toFixed(2)}% | Difficulty Index: {question.difficultyIndex.toFixed(2)}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-2">Topic-wise Breakdown</h3>
        <ul className="space-y-2">
          {topicPerformance.map(topic => (
            <li key={topic.name} className="flex justify-between">
              <span>{topic.name}</span>
              <span>{topic.avgCorrect.toFixed(2)}% avg. correct</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QuestionAnalysis;
