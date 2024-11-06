import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Admin.css';
import { FaUsers, FaBoxOpen, FaChartLine, FaCog } from 'react-icons/fa';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview'); 

  const handleTabChange = (tab) => setActiveTab(tab);

  return (
    <div className="admin-dashboard">
      <div className="sidebar">
        <div className="logo">
          <h2>BigSteppa</h2>
        </div>
        <nav className="nav-links">
          <ul>
            <li onClick={() => handleTabChange('overview')} className={activeTab === 'overview' ? 'active' : ''}>
              <FaChartLine /> Overview
            </li>
            <li onClick={() => handleTabChange('users')} className={activeTab === 'users' ? 'active' : ''}>
              <FaUsers /> Users
            </li>
            <li onClick={() => handleTabChange('products')} className={activeTab === 'products' ? 'active' : ''}>
              <FaBoxOpen /> Products
            </li>
            <li onClick={() => handleTabChange('settings')} className={activeTab === 'settings' ? 'active' : ''}>
              <FaCog /> Settings
            </li>
          </ul>
        </nav>
      </div>

      <div className="main-content">
        {activeTab === 'overview' && (
          <div className="overview">
            <h2>Dashboard Overview</h2>
            <div className="metrics">
              <div className="metric-item">
                <h3>Total Sales</h3>
                <p>$50,000</p>
              </div>
              <div className="metric-item">
                <h3>Total Orders</h3>
                <p>1,200</p>
              </div>
              <div className="metric-item">
                <h3>Active Users</h3>
                <p>850</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'users' && (
          <div className="users">
            <h2>User Management</h2>
            <button className="btn add-user">Add New User</button>
            <table className="user-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>John Doe</td>
                  <td>johndoe@example.com</td>
                  <td>Admin</td>
                  <td><button>Edit</button></td>
                </tr>
                <tr>
                  <td>Jane Smith</td>
                  <td>janesmith@example.com</td>
                  <td>User</td>
                  <td><button>Edit</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'products' && (
          <div className="products">
            <h2>Product Management</h2>
            <button className="btn add-product">Add New Product</button>
            <table className="product-table">
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Category</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Nike Air Max</td>
                  <td>$120</td>
                  <td>Men's Shoes</td>
                  <td><button>Edit</button></td>
                </tr>
                <tr>
                  <td>Adidas Ultraboost</td>
                  <td>$150</td>
                  <td>Women's Shoes</td>
                  <td><button>Edit</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="settings">
            <h2>Settings</h2>
            <p>Change application settings and manage configurations here.</p>
            <button className="btn save-settings">Save Changes</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
