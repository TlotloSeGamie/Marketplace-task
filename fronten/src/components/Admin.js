import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Admin.css';
import { FaUsers, FaBoxOpen, FaChartLine, FaCog, FaPlus } from 'react-icons/fa';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [newProduct, setNewProduct] = useState({
    brand: '',
    name: '',
    size: '',
    color: '',
    price: '',
    image: null,
  });
  const navigate = useNavigate();

  const brands = [
    "Nike", "Adidas", "Puma", "Reebok", "New Balance",
    "ASICS", "Vans", "Converse", "Fila", "Jordan", "Balenciaga"
  ];

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSelectedCategory(null); 
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setNewProduct((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleProductSubmit = (e) => {
    e.preventDefault();
    console.log('New Product Added:', newProduct);
  };

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
            <li onClick={() => handleTabChange('addProduct')} className={activeTab === 'addProduct' ? 'active' : ''}>
              <FaPlus /> Add Product
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
            {!selectedCategory ? (
              <div className="categories">
                <h3>Select a Category</h3>
                <button onClick={() => setSelectedCategory('Men')}>Men</button>
                <button onClick={() => setSelectedCategory('Women')}>Women</button>
                <button onClick={() => setSelectedCategory('Kids')}>Kids</button>
              </div>
            ) : (
              <div className="brands">
                <h3>{selectedCategory} Brands</h3>
                <button onClick={() => setSelectedCategory(null)} className="back-button">Back to Categories</button>
                <table className="brand-table">
                  <thead>
                    <tr>
                      <th>Brand Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {brands.map((brand, index) => (
                      <tr key={index}>
                        <td>
                          <button className="brand-button">{brand}</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {activeTab === 'addProduct' && (
          <div className="add-product">
            <h2>Add New Product</h2>
            <form onSubmit={handleProductSubmit}>
              <input
                type="text"
                name="brand"
                placeholder="Brand"
                value={newProduct.brand}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="name"
                placeholder="Product Name"
                value={newProduct.name}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="size"
                placeholder="Size"
                value={newProduct.size}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="color"
                placeholder="Color"
                value={newProduct.color}
                onChange={handleChange}
                required
              />
              <input
                type="number"
                name="price"
                placeholder="Price"
                value={newProduct.price}
                onChange={handleChange}
                required
              />
              <input
                type="file"
                name="image"
                onChange={handleChange}
                required
              />
              <button type="submit" className="btn add-product-btn">
                Add Product
              </button>
            </form>
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
