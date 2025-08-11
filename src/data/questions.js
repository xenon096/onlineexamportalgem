export const allQuestions = {
  'React Basics': [
    { id: 1, text: 'What is JSX?', options: ['JavaScript XML', 'JavaScript Extension', 'Java Syntax Extension'], correctAnswer: 'JavaScript XML', category: 'React', difficulty: 'Easy' },
    { id: 2, text: 'What are props in React?', options: ['Properties', 'Arguments', 'Parameters'], correctAnswer: 'Properties', category: 'React', difficulty: 'Easy' },
    { id: 3, text: 'What is a state in React?', options: ['A permanent storage.', 'An internal data store (object) of a component.', 'A server-side variable.'], correctAnswer: 'An internal data store (object) of a component.', category: 'React', difficulty: 'Medium' },
  ],
  'React Advanced': [
    { id: 4, text: 'What are React Hooks?', options: ['Functions that let you “hook into” React state and lifecycle features from function components.', 'A type of component.', 'A way to create classes in React.'], correctAnswer: 'Functions that let you “hook into” React state and lifecycle features from function components.', category: 'React', difficulty: 'Hard' },
    { id: 5, text: 'What is the purpose of the `useEffect` hook?', options: ['To perform side effects in function components.', 'To manage component state.', 'To handle user events.'], correctAnswer: 'To perform side effects in function components.', category: 'React', difficulty: 'Hard' },
  ],
  'C Fundamentals': [
    { id: 6, text: 'What is a pointer?', options: ['A variable that stores a memory address', 'A data type', 'A function'], correctAnswer: 'A variable that stores a memory address', category: 'C', difficulty: 'Easy' },
    { id: 7, text: 'What is the difference between `++i` and `i++`?', options: ['`++i` increments the value and then returns it, while `i++` returns the value and then increments it.', '`i++` increments the value and then returns it, while `++i` returns the value and then increments it.', 'There is no difference.'], correctAnswer: '`++i` increments the value and then returns it, while `i++` returns the value and then increments it.', category: 'C', difficulty: 'Medium' },
  ],
  'C Data Structures': [
    { id: 8, text: 'What is a linked list?', options: ['A linear data structure where elements are stored in contiguous memory locations.', 'A linear data structure where elements are not stored at contiguous memory locations.', 'A non-linear data structure.'], correctAnswer: 'A linear data structure where elements are not stored at contiguous memory locations.', category: 'C', difficulty: 'Hard' },
  ],
  'Python for Beginners': [
    { id: 9, text: 'What is the correct way to create a function in Python?', options: ['def myFunction():', 'function myFunction():', 'create myFunction():'], correctAnswer: 'def myFunction():', category: 'Python', difficulty: 'Easy' },
    { id: 10, text: 'Which keyword is used for comments in Python?', options: ['#', '//', '--'], correctAnswer: '#', category: 'Python', difficulty: 'Easy' },
  ],
  'Python Web Development': [
    { id: 11, text: 'Which of the following is a popular Python web framework?', options: ['Django', 'Rails', 'Laravel'], correctAnswer: 'Django', category: 'Python', difficulty: 'Medium' },
  ],
  'Java Core Concepts': [
    { id: 12, text: 'What is the main difference between an interface and an abstract class in Java?', options: ['An interface can only have abstract methods, while an abstract class can have both abstract and concrete methods', 'An abstract class can only have abstract methods, while an interface can have both abstract and concrete methods', 'There is no difference'], correctAnswer: 'An interface can only have abstract methods, while an abstract class can have both abstract and concrete methods', category: 'Java', difficulty: 'Hard' },
  ],
  'Java Spring Framework': [
    { id: 13, text: 'What is dependency injection?', options: ['A design pattern in which a class receives its dependencies from external sources rather than creating them itself.', 'A way to manage database connections.', 'A type of Java exception.'], correctAnswer: 'A design pattern in which a class receives its dependencies from external sources rather than creating them itself.', category: 'Java', difficulty: 'Hard' },
  ],
};
