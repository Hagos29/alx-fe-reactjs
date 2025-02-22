// UserDetails.jsx
import React, { useContext } from 'react';
import UserContext from './UserContext'; // Import UserContext

function UserDetails() {
  // Consume the user data from UserContext using the useContext hook
  const userData = useContext(UserContext);

  if (!userData) {
    return <div>No user data available.</div>;
  }

  return (
    <div>
      <h1>User Details</h1>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
      <p>Age: {userData.age}</p>
    </div>
  );
}

export default UserDetails;
