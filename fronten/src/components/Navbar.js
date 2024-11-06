import React, { useState, useEffect } from 'react';
import { FaSearch, FaMapMarkerAlt, FaUser } from 'react-icons/fa';
import './Navbar.css';
import Profile from './Profile';

const Navbar = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false); 
    const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

    useEffect(() => {
        const userData = localStorage.getItem("user");
        if (userData) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    }, []); 

    const handleUserIconClick = () => {
        setIsProfileModalOpen(true); 
    };

    const handleCloseModal = () => {
        setIsProfileModalOpen(false); 
    };

    const handleLogout = () => {
        localStorage.removeItem("user");
        setIsAuthenticated(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h1>BigSteppa</h1>
            </div>
            
            <div className="navbar-links">
                <a href='/'>HOME</a>
                <a href="/new-release">NEW RELEASE</a>
                <div className="brands-container">
                    <a href="/brands">BRANDS</a>
                    <div className="brands-dropdown">
                        <a href="/brands/nike">Nike</a>
                        <a href="/brands/adidas">Adidas</a>
                        <a href="/brands/puma">Puma</a>
                        <a href="/brands/reebok">Reebok</a>
                        <a href="/brands/new-balance">New Balance</a>
                        <a href="/brands/asics">ASICS</a>
                        <a href="/brands/vans">Vans</a>
                        <a href="/brands/converse">Converse</a>
                        <a href="/brands/fila">Fila</a>
                        <a href="/brands/jordan">Jordan</a>
                        <a href="/brands/balenciaga">Balenciaga</a>
                    </div>
                </div>
                <a href="/men">MEN</a>
                <a href="/women">WOMEN</a>
                <a href="/kids">KIDS</a>
                <a href="/about-us">ABOUT US</a>
                <a href="#">CONTACT</a>
            </div>
            
            <div className="navbar-icons">
                <FaSearch className="icon" />
                <FaMapMarkerAlt className="icon" />
                {isAuthenticated ? (
                    <>
                        <div className="user-icon" onClick={handleUserIconClick}>
                            <FaUser className="icon" />
                        </div>
                        <button onClick={handleLogout}>Logout</button> 
                    </>
                ) : (
                    <div className="auth-links">
                        <a href="/login">Login</a>
                        <a href="/signup">Sign Up</a>
                    </div>
                )}
            </div>

            {isProfileModalOpen && (
                <div className="profile-modal">
                    <div className="profile-modal-content">
                        <button onClick={handleCloseModal}>Close</button>
                        <Profile />
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
