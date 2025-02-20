import React from 'react';
import './usercard.css'; // You can add your styles here


function Usercard() {
  // Static data for the user details
  const profilePhoto = 'https://randomuser.me/api/portraits/men/1.jpg'; // Dummy profile image URL
  const name = 'John Doe';
  const email = 'john.doe@example.com';
  const phoneNumber = '+1234567890';
  const address = '123 Main St, Springfield, IL';

  return (
    <div className="user-card">
      <img src={profilePhoto} alt="User profile" className="user-photo" />
      <div className="user-info">
        <h2>{name}</h2>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone:</strong> {phoneNumber}</p>
        <p><strong>Address:</strong> {address}</p>
      </div>
    </div>
  );
}

export default Usercard;