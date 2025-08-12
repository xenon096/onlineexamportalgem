import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import { users } from '../../data/mockData';

const EditUser = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const userToEdit = users.find(user => user.email === userId);
    if (userToEdit) {
      setUserDetails(userToEdit);
    }
  }, [userId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically make an API call to update the user data
    console.log('User details updated:', userDetails);
    navigate('/admin/manage-users');
  };

  if (!userDetails) {
    return <div>Loading...</div>;
  }

  return (
    <AdminLayout>
      <h1 className="text-4xl font-bold mb-10">Edit User</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-lg font-semibold mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={userDetails.name || ''}
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
            disabled
            className="w-full p-2 rounded bg-gray-600 cursor-not-allowed"
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
          Update User
        </button>
      </form>
    </AdminLayout>
  );
};

export default EditUser;
