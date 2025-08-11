import React from 'react';
import { getLoggedInUser } from '../../data/auth';

const MySubject = () => {
  const instructor = getLoggedInUser();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">My Subject</h1>
      <p className="text-xl">You are assigned to the subject: <strong>{instructor.subject}</strong></p>
    </div>
  );
};

export default MySubject;