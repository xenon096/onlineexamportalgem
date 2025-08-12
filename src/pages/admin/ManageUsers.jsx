import React, { useState } from 'react';
import AdminLayout from './AdminLayout';
import { users } from '../../data/mockData';
import { Link } from 'react-router-dom';

const ManageUsers = () => {
  const [userList, setUserList] = useState(users);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredUsers = userList.filter(user =>
    (user.name || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (userId) => {
    // Here you would typically make an API call to delete the user
    setUserList(userList.filter(user => user.id !== userId));
    console.log('Deleted user with id:', userId);
  };

  return (
    <AdminLayout>
      <h1 className="text-4xl font-bold mb-10">Manage Users</h1>
      <div className="mb-6 flex justify-between">
        <input
          type="text"
          placeholder="Search by name or email"
          value={searchTerm}
          onChange={handleSearch}
          className="bg-gray-700 text-white p-2 rounded w-1/3"
        />
        <Link to="/admin/add-user" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
          Add New User
        </Link>
      </div>
      <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
        <table className="min-w-full bg-gray-800 rounded-2xl">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-600 text-left">UserID</th>
              <th className="py-2 px-4 border-b border-gray-600 text-left">Name</th>
              <th className="py-2 px-4 border-b border-gray-600 text-left">Email</th>
              <th className="py-2 px-4 border-b border-gray-600 text-left">Role</th>
              <th className="py-2 px-4 border-b border-gray-600 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map(user => (
              <tr key={user.email}>
                <td className="py-2 px-4 border-b border-gray-600">{user.email}</td>
                <td className="py-2 px-4 border-b border-gray-600">{user.name || 'N/A'}</td>
                <td className="py-2 px-4 border-b border-gray-600">{user.email}</td>
                <td className="py-2 px-4 border-b border-gray-600">{user.role}</td>
                <td className="py-2 px-4 border-b border-gray-600">
                  <Link to={`/admin/edit-user/${user.email}`} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-3 rounded mr-2">Edit</Link>
                  <button onClick={() => handleDelete(user.id)} className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
};

export default ManageUsers;
