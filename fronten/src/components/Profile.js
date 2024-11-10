import React, { useState, } from 'react';
import { useSelector } from 'react-redux';
import './Profile.css';
import { FaUserCircle, FaEdit, FaEnvelope, FaPhone, FaMapMarkerAlt, FaShoppingCart } from 'react-icons/fa';

const Profile = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  
  const user = useSelector((state) => state.user.user);

  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <FaUserCircle className="profile-icon" />
        <h2 className="profile-name">{user?.userName || "Guest"}</h2>
        <button className="edit-btn"><FaEdit /> Edit Profile</button>
      </div>
      
      <div className="profile-content">
        <h3>Personal Information</h3>
        <div className="profile-info">
          <div className="info-item">
            <FaEnvelope className="info-icon" />
            <span>Email:</span> {user?.email || "Not available"}
          </div>
          <div className="info-item">
            <FaPhone className="info-icon" />
            <span>Phone:</span> {user?.contact || "Not available"}
          </div>
          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <span>Address:</span> {user?.address || "Not provided"}
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
            {user?.recentActivity?.map((activity, index) => (
              <li key={index}>
                <span>{activity.activity}</span>
                <span className="activity-date">{activity.date}</span>
              </li>
            )) || <li>No recent activity</li>}
          </ul>
        </div>

        <h3>
          <button className="cart-btn" onClick={toggleCartVisibility}>
            <FaShoppingCart className="cart-icon" /> My Cart
          </button>
        </h3>

        {isCartVisible && (
          <div className="cart-items">
            <h4>Cart Items</h4>
            {user?.cart?.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <ul>
                {user?.cart?.map((item, index) => (
                  <li key={index}>
                    <span>{item.product}</span> - <span>Quantity: {item.quantity}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
