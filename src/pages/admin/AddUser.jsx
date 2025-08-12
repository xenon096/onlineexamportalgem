import React, { useState } from 'react';
import AdminLayout from './AdminLayout';

const AddUser = () => {
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    password: '',
    role: 'student',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically make an API call to save the user data
    console.log('User details submitted:', userDetails);
  };

  return (
    <AdminLayout>
      <h1 className="text-4xl font-bold mb-10">Add New User</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-lg font-semibold mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={userDetails.name}
            onChange={handleInputChange}
            className="w-full p-2 rounded bg-gray-700"
            required
          />
        </div>
        <div>
          <label className="block text-lg font-semibold mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={userDetails.email}
            onChange={handleInputChange}
            className="w-full p-2 rounded bg-gray-700"
            required
          />
        </div>
        <div>
          <label className="block text-lg font-semibold mb-2">Password</label>
          <input
            type="password"
            name="password"
            value={userDetails.password}
            onChange={handleInputChange}
            className="w-full p-2 rounded bg-gray-700"
            required
          />
        </div>
        <div>
          <label className="block text-lg font-semibold mb-2">Role</label>
          <select
            name="role"
            value={userDetails.role}
            onChange={handleInputChange}
            className="w-full p-2 rounded bg-gray-700"
          >
            <option value="student">Student</option>
            <option value="instructor">Instructor</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          Add User
        </button>
      </form>
    </AdminLayout>
  );
};

export default AddUser;
