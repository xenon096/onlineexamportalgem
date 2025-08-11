import React, { useState } from 'react';
import { studentProfile } from '../../data/studentProfile';
import { enrolledCourses } from '../../data/enrolledCourses';
import { exams } from '../../data/exams';

const Profile = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [profile, setProfile] = useState(studentProfile);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!profile.name) newErrors.name = 'Name is required';
    if (!profile.education) newErrors.education = 'Education Qualification is required';
    return newErrors;
  };

  const handleSave = () => {
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setIsEditMode(false);
      setErrors({});
      // Here you would typically make an API call to save the data
      console.log('Profile saved:', profile);
    }
  };

  const getCourseDetails = (courseId) => {
    return enrolledCourses.find(course => course.id === courseId);
  };

  const getRemainingExams = (courseId) => {
    const courseExams = exams.filter(exam => exam.courseId === courseId);
    const attemptedExamIds = exams.filter(exam => exam.attempted && exam.courseId === courseId).map(e => e.id);
    return courseExams.filter(exam => !attemptedExamIds.includes(exam.id));
  };

  const completedCourses = profile.enrolledCourses.filter(courseId => {
    const remainingExams = getRemainingExams(courseId);
    return remainingExams.length === 0;
  });

  const inProgressCourses = profile.enrolledCourses.filter(courseId => {
    const remainingExams = getRemainingExams(courseId);
    return remainingExams.length > 0;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Your Profile</h1>
        <button
          onClick={() => setIsEditMode(!isEditMode)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          {isEditMode ? 'Cancel' : 'Edit Profile'}
        </button>
      </div>

      {isEditMode ? (
        <div>
          <div className="mb-4">
            <label className="block text-lg font-semibold mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleInputChange}
              className="w-full p-2 rounded bg-gray-700"
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-lg font-semibold mb-2">Username/Email</label>
            <input
              type="text"
              name="username"
              value={profile.username}
              disabled
              className="w-full p-2 rounded bg-gray-600 cursor-not-allowed"
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-semibold mb-2">Education Qualification</label>
            <input
              type="text"
              name="education"
              value={profile.education}
              onChange={handleInputChange}
              className="w-full p-2 rounded bg-gray-700"
            />
            {errors.education && <p className="text-red-500">{errors.education}</p>}
          </div>
          <button
            onClick={handleSave}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          >
            Save
          </button>
        </div>
      ) : (
        <div>
          <p className="text-lg mb-2"><span className="font-semibold">Name:</span> {profile.name}</p>
          <p className="text-lg mb-2"><span className="font-semibold">Username/Email:</span> {profile.username}</p>
          <p className="text-lg mb-4"><span className="font-semibold">Education Qualification:</span> {profile.education}</p>

          <div>
            <h2 className="text-2xl font-bold mt-8 mb-4">In-Progress Courses</h2>
            {inProgressCourses.map(courseId => {
              const course = getCourseDetails(courseId);
              const remainingExams = getRemainingExams(courseId);
              return (
                <div key={courseId} className="p-4 bg-gray-700 rounded-lg shadow mb-4">
                  <h3 className="text-xl font-semibold">{course.name}</h3>
                  <p className="text-gray-400">Remaining exams: {remainingExams.map(e => e.name).join(', ')}</p>
                </div>
              );
            })}
          </div>

          <div>
            <h2 className="text-2xl font-bold mt-8 mb-4">Completed Courses</h2>
            {completedCourses.map(courseId => {
              const course = getCourseDetails(courseId);
              return (
                <div key={courseId} className="p-4 bg-gray-600 rounded-lg shadow mb-4">
                  <h3 className="text-xl font-semibold">{course.name}</h3>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
