import { users } from './mockData';

export const getLoggedInUser = () => {
  // For now, let's assume the logged-in user is instructor.java@example.com
  return users.find(user => user.email === 'instructor.java@example.com');
};
