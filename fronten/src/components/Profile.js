import React, { useState } from 'react';
import './Profile.css';
import { FaUserCircle, FaEdit, FaEnvelope, FaPhone, FaMapMarkerAlt, FaShoppingCart } from 'react-icons/fa';

const Profile = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const user = {
    recentActivity: [
      { activity: "Viewed Product: Nike Air Max", date: "2024-10-20" },
      { activity: "Updated Address", date: "2024-10-18" },
      { activity: "Placed Order #12345", date: "2024-10-15" },
    ],
    cart: [
      { product: "Nike Air Max", quantity: 2 },
      { product: "Adidas UltraBoost", quantity: 1 },
      { product: "Puma RS-X", quantity: 1 },
    ],
  };

  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
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

        <h3>
          <button className="cart-btn" onClick={toggleCartVisibility}>
            <FaShoppingCart className="cart-icon" /> My Cart
          </button>
        </h3>

        {isCartVisible && (
          <div className="cart-items">
            <h4>Cart Items</h4>
            {user.cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <ul>
                {user.cart.map((item, index) => (
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
