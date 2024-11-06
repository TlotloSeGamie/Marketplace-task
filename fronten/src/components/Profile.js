import React from 'react';
import './Profile.css';
import { FaUserCircle, FaEdit, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Profile = () => {
  const user = {
    recentActivity: [
      { activity: "Viewed Product: Nike Air Max", date: "2024-10-20" },
      { activity: "Updated Address", date: "2024-10-18" },
      { activity: "Placed Order #12345", date: "2024-10-15" },
    ],
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <FaUserCircle className="profile-icon" />
        <h2 className="profile-name">Tlotlo Se-Gamie</h2>
        <button className="edit-btn"><FaEdit /> Edit Profile</button>
      </div>
      
      <div className="profile-content">
        <h3>Personal Information</h3>
        <div className="profile-info">
          <div className="info-item">
            <FaEnvelope className="info-icon" />
            <span>Email:</span> t88segamie@gmail.com
          </div>
          <div className="info-item">
            <FaPhone className="info-icon" />
            <span>Phone:</span> 0640832625
          </div>
          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <span>Address:</span> 123 Shoe Lane, Fashion City
          </div>
        </div>

        <h3>Recent Orders</h3>
        <div className="order-list">
          <div className="order-item">
            <span>Order #12345</span>
            <span>Status: Delivered</span>
          </div>
          <div className="order-item">
            <span>Order #12344</span>
            <span>Status: Shipped</span>
          </div>
        </div>

        <h3>Recent Activity</h3>
        <div className="profile-activity">
          <ul>
            {user.recentActivity.map((activity, index) => (
              <li key={index}>
                <span>{activity.activity}</span>
                <span className="activity-date">{activity.date}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
