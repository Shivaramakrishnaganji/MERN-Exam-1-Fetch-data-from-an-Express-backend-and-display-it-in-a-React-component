import React from 'react';
import './UserList.css';

const UserList = ({ users }) => {
  if (!users || users.length === 0) {
    return <p>No users found.</p>;
  }

  return (
    <ul className="user-list">
      {users.map((user) => (
        <li key={user.id} className="user-item">
          <h2 className="user-name">{user.name}</h2>
          <div className="user-details">
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Company:</strong> {user.company?.name}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
